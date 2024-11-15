export interface IVehiclesResponse {
    statusCode: number;
    message:    string;
    data:       IVehicleData[];
    metadata:   Metadata;
}

export interface IVehicleData {
    id:           number;
    make:         string;
    model:        string;
    year:         number;
    licensePlate: string;
    photo:        null | string;
}

export interface Metadata {
    totalItems:   number;
    itemCount:    number;
    itemsPerPage: number;
    totalPages:   number;
    currentPage:  number;
}
