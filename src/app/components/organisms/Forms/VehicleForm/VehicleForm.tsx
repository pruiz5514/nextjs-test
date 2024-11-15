"use client";

import './VehicleForm.scss'
import { yupResolver } from '@hookform/resolvers/yup'
import { signIn } from 'next-auth/react';
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import FormFiled from '../../../molecules/common/FormField/FormField';
import Button from '../../../atoms/Button/Button';
import Form from '../../../atoms/Form/Form';
import { CiLock } from 'react-icons/ci';
import { ILoginRequest } from '@/app/core/application/dto/auth/login-request.dto';
import { IVehiclesPost } from '@/app/core/application/dto/vehicles/post-vehicles.dto';
import { VehiclesService } from '@/app/infrastructure/services/vehicles.service';
import { IVehicleData } from '@/app/core/application/dto/vehicles/get-vehicles-response.dto';
import { useRouter } from 'next/navigation';

interface IVehiclesForm{
  action: string;
  VehicleSelected?: IVehicleData;
  idVehicle?: number
  propFunction: ()=>void
}

const useVehicleService = new VehiclesService('/api');

const VehicleSchema = yup.object()
    .shape({
        make: yup
            .string()
            .required("Campo obligatorio"),
        model: yup
            .string()
            .required('Campo obligatorio'),
        year: yup
            .number().max(2025, 'No puede ser superior a 2025')
            .required('Campo obligatorio'),
            
        licensePlate: yup
            .string()
            .required('Campo obligatorio'),
        file: yup
            .mixed<File>()
            .required('Campo obligatorio'),

    })

const VehicleForm:React.FC<IVehiclesForm> = ({propFunction, action, idVehicle}) => {

  const {
    control,
    handleSubmit,
    // setError,
    setValue,
    getValues,
    formState: {errors}
  } = useForm<IVehiclesPost>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(VehicleSchema),
  })

  const router = useRouter()

  const handleCreate = async (data:IVehiclesPost)=>{
    const formData = new FormData();

    formData.append('make', data.make);
    formData.append('model', data.model);
    formData.append('licensePlate', data.licensePlate);
    
    if(data.year){
      formData.append('year', data.year);
    }
    if (getValues('file')) {
      formData.append("file", getValues('file')!) ;
    }
    
    console.log(formData);

    const response = await useVehicleService.postVehicle('vehicles', formData);
    console.log(response);
    propFunction();
    router.refresh();
  }

  // const handleEdit = async (data:IVehiclesPost) =>{
  //   await useVehicleService.editVehicle('projects', idVehicle!, data);
  //   propFunction();
  //   router.refresh();
  // }

  const onChange = (e: any)=> {
    if(e.target.files[0]){
      setValue('file',e.target.files[0])
    }
  } 

  return (
    <Form onSubmit={handleSubmit(handleCreate)}>
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
                type='text'
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

          <input type="file" onChange={onChange}/>
      </div>

      <hr />

      <div className='vehicle_buttons_form-container'>
        <Button className='white-button' onClick={propFunction} > Cancelar </Button>
        <Button className='purple-button' type='submit'> Agregar</Button>
      </div>

        
    </Form>
    
  )
}

export default VehicleForm