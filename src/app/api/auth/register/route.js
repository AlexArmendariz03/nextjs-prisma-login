import {NextResponse} from "next/server";
import db from "@/lib/db"

export async function POST(request){
  const data = await request.json()

  console.log(data)
  const newUser = await db.user.create({
    data
  })

  return NextResponse.json(newUser)
}