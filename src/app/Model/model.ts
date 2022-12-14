export class VehiclesData {

        vehicleId ?: number;
        vehicleBrand ?: string;
        vehicleModel ?: string;
        vehicleVariant ?: string;
        vehicleColor ?: string;
        manufactureYear ?: number;
        price ?: number;
        emailOfAdmin ?: string;
        passwordOfAdmin ?: string;


        constructor() {

            this.vehicleId = 0;
            this.vehicleBrand = "";
            this.vehicleModel = "";
            this.vehicleVariant = "";
            this.vehicleColor = "";
            this.manufactureYear = 0;
            this.price = 0;
            this.emailOfAdmin = "";
            this.passwordOfAdmin = "";
            
        }
    }