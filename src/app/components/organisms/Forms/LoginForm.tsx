"use client";

import { yupResolver } from '@hookform/resolvers/yup'
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import FormFiled from '../../molecules/common/FormField/FormField';
import Button from '../../atoms/Button/Button';
import Form from '../../atoms/Form/Form';
import { CiLock } from 'react-icons/ci';
import { ILoginRequest } from '@/app/core/application/dto/auth/login-request.dto';


const LoginSchema = yup.object()
    .shape({
        email: yup
            .string().email()
            .required("El email es obligatorio"),
        password: yup
            .string()
            .required('La contreseña es obligatoria'),
    })


const LoginForm = () => {

  const {
    control,
    handleSubmit,
    // setError,
    formState: {errors}
  } = useForm<ILoginRequest>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(LoginSchema),
  })

  const router = useRouter();

  const handleLogin = async (data:ILoginRequest)=>{
    console.log(data);
    
    // try{
    //   const result = await signIn("credentials", {
    //     redirect: false,
    //     email: data.email,
    //     password: data.password
    //   })
    //   if(result?.status === 401){
    //     alert('Credenciales invalidas')
    //     return
    //   }
    //   router.push('/dashboard/projects')
    // }catch(error){
    //   console.log(error)
    // }
  }
  

  return (
    <Form onSubmit={handleSubmit(handleLogin)}>
        <FormFiled<ILoginRequest>
            type='text'
            label='Correo electronico'
            name = 'email'
            placeholder='juan@example.com'
            error={errors.email}
            control={control}              
        />
       <FormFiled<ILoginRequest>
            type='password'
            label='Contraseña'
            name = 'password'
            placeholder='*************'
            error={errors.password}
            control={control}              
        />

        <Button className='purple-button' type='submit'><CiLock /> Iniciar sesión</Button>
    </Form>
    
  )
}

export default LoginForm