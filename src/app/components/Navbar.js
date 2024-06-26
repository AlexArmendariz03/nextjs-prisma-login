import Link from "next/link";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import {getServerSession} from "next-auth";


async function Navbar(){

  const session = await getServerSession(authOptions)

  return(
    <nav className="flex justify-between items-center bg-gray-950 text-white px-24 py-3">
      <h1 className="text-xl font-bold">
        NextAuth
      </h1>
      <ul className="flex gap-x-2 ">
        {!session?.user ? (
          <>
            <li>
              <Link href={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link href={"/auth/login"}>
                Login
              </Link>
            </li>
            <li>
              <Link href={"/auth/register"}>
                Registrarse
              </Link>
            </li>
          </>
        ) : (
          <>
          <li>
            <Link href="/dashboard">
              Dashboard
            </Link>
          </li>
            <li>
              <Link href="/api/auth/signout">
                Logout
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Navbar