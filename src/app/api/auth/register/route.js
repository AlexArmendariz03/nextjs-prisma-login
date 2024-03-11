import {NextResponse} from "next/server";
import db from "@/lib/db"

export async function POST(request){
  const data = await request.json()

  const userFound = await db.user.findUnique({
    where :{
      email: data.email
    }
  })

  if(userFound){
    return NextResponse.json({
      message:"El email ya existe"
    },{
      status: 400
    })
  }

  const usernameFound = await db.user.findUnique({
    where :{
      username: data.username
    }
  })

  if(usernameFound){
    return NextResponse.json({
      message:"El usuario ya existe"
    },{
      status: 400
    })
  }

  console.log(data)
  const newUser = await db.user.create({
    data
  })
  return NextResponse.json(newUser)
}