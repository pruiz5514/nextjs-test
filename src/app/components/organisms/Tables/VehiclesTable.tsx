import { IVehicleData } from "@/app/core/application/dto/vehicles/get-vehicles-response.dto"
import Table from "../../atoms/Table/Table"
import TableContaier from "../../atoms/Table/TableContainer"
import Tbody from "../../atoms/Table/Tbody"
import Td from "../../atoms/Table/Td"
import Th from "../../atoms/Table/Th"
import Thead from "../../atoms/Table/Thead"
import Tr from "../../atoms/Table/Tr"



interface IVehcilesTable{
    vehicles: IVehicleData[]
}

const VehciclesTable:React.FC<IVehcilesTable> = ({vehicles}) => { 
    
  return (
    <TableContaier>
        <Table>
            <Thead>
                <Tr>
                    <Th>Foto</Th>
                    <Th>Marca</Th>
                    <Th>Modelo</Th>
                    <Th>Año</Th>
                    <Th>Placa</Th>
                    <Th>Acciones</Th>
            </Tr>
            </Thead>
            <Tbody>
                {vehicles?.map((vehcile:IVehicleData)=>(
                    <Tr key={vehcile.id}>
                        <Td><img className="img-table" src={vehcile.photo!} alt={vehcile.id.toString()} /> </Td>
                        <Td>{vehcile.make}</Td>
                        <Td>{String(vehcile.model)}</Td>
                        <Td>{String(vehcile.year)}</Td>
                        <Td>{vehcile.licensePlate}</Td>
                        {/* <Td> <TdActions data={vehcile}/> </Td> */}
                    </Tr>
                ))}
            </Tbody>
        </Table>
    </TableContaier>
  )
}

export default VehciclesTable