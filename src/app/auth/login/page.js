"use client"
import { useForm } from "react-hook-form";
import {signIn} from "next-auth/react";
import {useRouter} from "next/navigation";


function LoginPage() {

  const { register, handleSubmit,formState:{errors}} = useForm()

  const router = useRouter()
  const onSubmit = handleSubmit(async data => {
   const res =  await signIn("credentials",{
      email: data.email,
      password: data.password,
     redirect: false
    })

    if (res.error){
      alert(res.error);
    } else {
      router.push("/dashboard ")
    }
  })

  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <form onSubmit={onSubmit} className="w-1/4">
        <h1 className="text-slate-200 font-bold text-xl mb-4 text-center">Login</h1>
        <label htmlFor={"email"} className="text-slate-500 mb-2 block">
          Email:
        </label>
        {errors.email && (
          <span className="text-red-500 text-xs">
            {errors.email.message}
          </span>
        )}
        <input
          type="text"
          {...register("email",{
            required:{
              value:true,
              message:"Email de usuario requerido"
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="email@email.com"/>
        <label htmlFor={"password"} className="text-slate-500 mb-2 block">
          Contraseña:
        </label>
        {errors.password && (
          <span className="text-red-500 text-xs">
            {errors.password.message}
          </span>
        )}
        <input
          type="password"
          {...register("password",{
            required:{
              value:true,
              message:"Contraseña de usuario requerido"
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="******"/>

        <button className="w-full bg-blue-500 text-white p-3 rounded-lg mt-2">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage