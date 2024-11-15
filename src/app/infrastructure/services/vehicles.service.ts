import { IVehiclesResponse } from "@/app/core/application/dto/vehicles/get-vehicles-response.dto";
import { HttpClient } from "../utils/client-http";

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

    // async postSevice(url:string, body:IServicesPost){
    //     try{
    //         const newService = await this.httpClient.post<IServicesPostResponse, IServicesPost>(url,body);
    //         return newService;
    //     }catch(error){
    //         console.log(error);
    //         errorAlert("No se pudo crear el servicio, intente luego")
    //         throw error
    //     }
    // }

    // async deleteService(url:string,id:string){
    //     try{
    //         const serviceToDelete = await this.httpClient.delete(`${url}/${id}`);
    //         successAlert('Eliminado exitosamente');
    //         return serviceToDelete;
    //     } catch(error){
    //         console.log(error);
    //         errorAlert('No se pudo eleminar')
    //         throw error;
    //     }
    // }

    // async findServiceById (url:string, id:string){
    //     try{
    //         const serviceById = await this.httpClient.get<IServicesResponse>(`${url}/${id}`);
    //         return serviceById
    //     } catch (error){
    //         console.log(error);
    //         throw error
    //     }
    // }

    // async editService (url:string, id:string, body:IServicesPost){
    //     try{
    //         const serviceEdited =  await this.httpClient.put<IServicesPostResponse,IServicesPost>(`${url}/${id}`, body);
    //         successAlert('Editado exitosamente');
    //         return serviceEdited;

    //     } catch(error){
    //         console.log(error);
    //         throw error;

    //     }
    // }
}