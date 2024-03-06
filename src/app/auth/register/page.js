"use client"
import {useForm} from "react-hook-form";

export default function RegisterPage() {

  const{register,handleSubmit,formState:{errors}} = useForm()

  const onSubmit = handleSubmit(data => {
    console.log(data)
  })

  console.log(errors)

  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <form  onSubmit={onSubmit} className="w-1/4">
        <h1 className="text-slate-200 font-bold text-xl mb-4 text-center">
          Registrame
        </h1>
        <label htmlFor={"username"} className="text-slate-500 mb-2 block">
          Username:
        </label>
        <input
          type="text"
          {...register("username",{
            required:{
            value:true,
            message:"Nombre de usuario requerido"
          },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="Youruser 123"/>
        {errors.username && (
          <span className="text-red-500">{errors.username.message}</span>
        )}
        <label htmlFor={"email"} className="text-slate-500 mb-2 block">
          Email:
        </label>
        <input
          type="email"
          {...register("email",{
            required: {
              value: true,
              message:"Es necesario agregar un email"
          }})}
               className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        placeholder="abcdef@gmail.com"/>
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
        <label htmlFor={"password"} className="text-slate-500 mb-2 block">
          Contraseña:
        </label>
        <input
          type="password"
          {...register("password",{
            required: {
              value: true,
              message:"Ingresa tu contraseña"
            }})}
               className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        placeholder="Añade #$%&"/>
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
        <label htmlFor={"confirmPassword"} className="text-slate-500 mb-2 block">
          Confirmar contraseña:
        </label>
        <input
          type="confirmPassword"
          {...register("confirmPassword",{
            required:{
              value:true,
              message:"Se require confirmación"
            }})}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"/>
        {errors.confirmPassword && (
          <span className="text-red-500">{errors.confirmPassword.message}</span>
        )}
        <button className="w-full bg-blue-500 text-white p-3 rounded-lg mt-2">
          Registrarme
        </button>
      </form>
    </div>
  );
}