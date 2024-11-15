import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import VehiclesTemplate from '@/app/components/template/dashboard/VehiclesTemplate/VehiclesTemplate';
import { VehiclesService } from '@/app/infrastructure/services/vehicles.service';
import { getServerSession } from 'next-auth';
import React from 'react'

const useVehiclesService = new VehiclesService();

interface IProps {
  searchParams:{
    page: string;
    size: string;
    order?: string
    title:string;
  }
}

export default async function Vehiclepage({searchParams}:IProps) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const size = searchParams.size ? parseInt(searchParams.size) : 8;

  // const session = await getServerSession(authOptions);
  
  const vehicles = await useVehiclesService.findAllVehicles(`vehicles?page=${page}&size=${size}`);
  console.log(vehicles);
  
  return (
    <div>
      <VehiclesTemplate data={vehicles}/>
    </div>
  )
}
