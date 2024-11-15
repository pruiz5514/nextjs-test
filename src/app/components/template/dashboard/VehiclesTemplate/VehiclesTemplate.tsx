import H1 from '@/app/components/atoms/H1/H1'
import './VehiclesTemplate.scss'
import FormFiled from '@/app/components/molecules/common/FormField/FormField'
import InputForm from '@/app/components/molecules/common/InputForm/InputForm'
import Button from '@/app/components/atoms/Button/Button'
import { Icon } from '@iconify/react/dist/iconify.js'
import VehciclesTable from '@/app/components/organisms/Tables/VehiclesTable'
import { IVehiclesResponse } from '@/app/core/application/dto/vehicles/get-vehicles-response.dto'
import VehicleOptions from '@/app/components/molecules/VehicleOptions/VehicleOptions'


interface IVehcilesTemplateProps{
    data: IVehiclesResponse
}

const VehiclesTemplate: React.FC<IVehcilesTemplateProps> = ({data}) => {
  return (
    <div className='vehicles_template-container'>
        <H1>Gestión de vehiculos</H1>

        <div className='filter_vehilces-container'>
            <div className='filter_vehilces_inputs-container'>
                <div className='filter_vehilces_input-container'>
                    <InputForm id='plate' label='Placa'/>
                </div>
                <div className='filter_vehilces_input-container'>
                    <InputForm id='year' label='Año'/>
                </div>
                <div className='filter_vehilces_input-container'>
                    <InputForm id='brand' label='Marca'/>
                </div>
                <div className='filter_vehilces_input-container'>
                    <InputForm id='model' label='Modelo'/>
                </div>
            </div>
           

            <div className='filter_vehilces_buttons-container'>
                <Button className='purple-button '><Icon icon="iconoir:filter" /> Filtrar</Button>
                <Button className='white-button'><Icon icon="icon-park-solid:delete-key"/> Limpiar</Button>
            </div>
        </div>

        <VehicleOptions/>

        <div>
            <VehciclesTable vehicles={data.data}/>
        </div>
    </div>
  )
}

export default VehiclesTemplate