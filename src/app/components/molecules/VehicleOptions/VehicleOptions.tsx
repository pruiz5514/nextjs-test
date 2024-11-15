'use client';

import './VehicleOptions.scss'
import Button from '../../atoms/Button/Button'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useState } from 'react';
import Modal from '../../atoms/Modal/Modal';

const VehicleOptions = () => {
  const [modal, setModal] = useState(false);
  const closeModal = () => setModal(false);

  return (
    <div className='vehicles_template_options_buttons-container'>
        <div className='vehicles_template_options_button-container'>
            <Button className='purple-button' onClick={()=>setModal(true)}> <Icon icon="formkit:add" /> Agregar vehiculo </Button>
        </div>
        <div className='vehicles_template_options_button-container'>
            <Button className='green-button'> <Icon icon="uiw:file-excel" /> Descargar reporte </Button>
        </div>

        {modal && 
            <Modal propFunction={closeModal}>
                oee
              {/* <ProjectsForm action='add' propFunction={closeModal}/> */}
            </Modal>
          }
    </div>
  )
}

export default VehicleOptions