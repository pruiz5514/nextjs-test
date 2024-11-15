import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import VehiclesTemplate from '@/app/components/template/dashboard/VehiclesTemplate/VehiclesTemplate';
import { VehiclesService } from '@/app/infrastructure/services/vehicles.service';
import { getServerSession } from 'next-auth';
import React from 'react'

const useVehiclesService = new VehiclesService();

export default async function Vehiclepage() {
  // const session = await getServerSession(authOptions);
  
  const vehicles = await useVehiclesService.findAllVehicles('vehicles');
  console.log(vehicles);
  
  return (
    <div>
      <VehiclesTemplate data={vehicles}/>
    </div>
  )
}
