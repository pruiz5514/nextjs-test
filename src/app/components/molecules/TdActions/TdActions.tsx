'use client';

import './TdActions.scss';
import { GoPencil } from 'react-icons/go'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { IVehicleData } from '@/app/core/application/dto/vehicles/get-vehicles-response.dto';
import Button from '../../atoms/Button/Button';
import Modal from '../../atoms/Modal/Modal';
import { Icon } from '@iconify/react/dist/iconify.js';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import { VehiclesService } from '@/app/infrastructure/services/vehicles.service';


interface ITdActions{
  data: IVehicleData;
}

const useVehiclesService = new VehiclesService(`${process.env.NEXT_PUBLIC_FRONT_HOST}/api`);

const TdActions: React.FC<ITdActions> = ({data}) => {

  const [modal, setModal] = useState(false);
  const [featureSelected, setFeatureSelected] = useState<IVehicleData>();

  const handleCloseModal = ()=> setModal(false);

  const router = useRouter();

  const handleDelete = async(id:number)=> {
    const projectToDelete = await useVehiclesService.deleteVehicle('vehicles',String(id));
    router.refresh();
    return projectToDelete
  }

  // const handleEdit = () => {
  //   setModal(true)
  //   const selectedProject = {
  //     title: data.title,
  //     description: data.description,
  //     startDate: data.startDate,
  //     endDate : data.endDate
  //   }
  //   setFeatureSelected(selectedProject)
  //  }

  return (
    <div className='td_action-container'>
        <ButtonIcon className='button-td'><Icon icon="weui:pencil-outlined" /></ButtonIcon>
        <ButtonIcon className='button-td'><Icon icon="ic:baseline-update" /></ButtonIcon>
        <ButtonIcon className='button-td' onClick={()=>handleDelete(data.id)}><Icon icon="ri:delete-bin-line" /></ButtonIcon>

        {modal && 
          <Modal propFunction={handleCloseModal}> 
              Edit
              {/* <ProjectsForm action='edit' idProject={data.id} projectSelected={featureSelected as IProjectsData} propFunction={handleCloseModal}/> */}
          </Modal>
        }
    </div>
  )
}

export default TdActions