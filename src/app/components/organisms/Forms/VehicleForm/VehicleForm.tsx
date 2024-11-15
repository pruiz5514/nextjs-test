"use client";

import './VehicleForm.scss'
import { yupResolver } from '@hookform/resolvers/yup'
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import FormFiled from '../../../molecules/common/FormField/FormField';
import Button from '../../../atoms/Button/Button';
import Form from '../../../atoms/Form/Form';
import { CiLock } from 'react-icons/ci';
import { ILoginRequest } from '@/app/core/application/dto/auth/login-request.dto';
import { IVehiclesPost } from '@/app/core/application/dto/vehicles/post-vehicles.dto';


const VehicleSchema = yup.object()
    .shape({
        make: yup
            .string()
            .required("Campo obligatorio"),
        model: yup
            .string()
            .required('Campo obligatorio'),
        year: yup
            .number()
            .required('Campo obligatorio'),
        licensePlate: yup
            .number()
            .required('Campo obligatorio'),
        file: yup
            .mixed<File>()
            .required('Campo obligatorio'),

    })

const VehicleForm = () => {

  const {
    control,
    handleSubmit,
    // setError,
    formState: {errors}
  } = useForm<IVehiclesPost>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(VehicleSchema),
  })


  return (
    <Form >
      <h1 className='vehicle_form-h1'>Agregar un nuevo vehiculo </h1>
      <div className='vehicle_inputs_form-container'>

        <div className='vehicle_input_form-container'>
          <FormFiled<IVehiclesPost>
                type='text'
                label='Marca'
                name = 'make'
                placeholder='Ingresa la marca'
                error={errors.make}
                control={control}              
            />
        </div>

        <div className='vehicle_input_form-container'>
          <FormFiled<IVehiclesPost>
                type='texr'
                label='Modelo'
                name = 'model'
                placeholder='Ingresa la marca'
                error={errors.model}
                control={control}              
            />
        </div>

        <div className='vehicle_input_form-container'>
        <FormFiled<IVehiclesPost>
              type='number'
              label='Año'
              name = 'year'
              placeholder='Ingresa el año'
              error={errors.year}
              control={control}              
          />
        </div>

        <div className='vehicle_input_form-container'>
          <FormFiled<IVehiclesPost>
                type='text'
                label='Placa'
                name = 'licensePlate'
                placeholder='Ingresa la placa'
                error={errors.licensePlate}
                control={control}              
            />
        </div>

          <input type="file"  />
      </div>

      <hr />

      <div className='vehicle_buttons_form-container'>
        <Button className='white-button' > Cancelar </Button>
        <Button className='purple-button' type='submit'> Agregar</Button>
      </div>

        
    </Form>
    
  )
}

export default VehicleForm