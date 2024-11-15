import { IVehiclesResponse } from "@/app/core/application/dto/vehicles/get-vehicles-response.dto";
import { HttpClient } from "../utils/client-http";
import { IVehiclesPost } from "@/app/core/application/dto/vehicles/post-vehicles.dto";
import { errorAlert, successAlert } from "../utils/alerts";

export class VehiclesService {
    private httpClient: HttpClient;

    constructor(baseUrl?: string){
        this.httpClient = new HttpClient(baseUrl);
    }

    async findAllVehicles(url:string, searchParams?: { order: string }){
        try{
            console.log("entrando")
            const response = await this.httpClient.get<IVehiclesResponse>(url,searchParams);
            return response
        }catch(error){
            console.log(error);
            throw error;
        }
    }

    async postVehicle(url:string, body:FormData){
        try{
            const newVehicle = await this.httpClient.postBinary<IVehiclesPost>(url,body);
            successAlert('Vehiculo agregado exitosamente')
            return newVehicle;
        }catch(error){
            errorAlert('No se pudo agregar el vehiculo')
            console.log(error);
            throw error
        }
    }

    async deleteVehicle(url:string,id:string){
        try{
            const vehicleToDelete = await this.httpClient.delete(`${url}/${id}`);
            successAlert('Eliminado exitosamente');
            return vehicleToDelete;
        } catch(error){
            console.log(error);
            errorAlert('No se pudo eleminar')
            throw error;
        }
    }

    // async findServiceById (url:string, id:string){
    //     try{
    //         const serviceById = await this.httpClient.get<IServicesResponse>(`${url}/${id}`);
    //         return serviceById
    //     } catch (error){
    //         console.log(error);
    //         throw error
    //     }
    // }

    async editVehicle(url:string, id:string, body:FormData){
        try{
            const serviceEdited =  await this.httpClient.put<any,FormData>(`${url}/${id}`, body);
            successAlert('Editado exitosamente');
            return serviceEdited;

        } catch(error){
            console.log(error);
            throw error;

        }
    }
}