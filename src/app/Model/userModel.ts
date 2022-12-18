export class UserModel{

firstName?:string
lastName?:string
mobileNo?:number
emailId?:string
password?:string
confirmPassword?:string
vehicleBrand?:string
vehicleModel?:string
vehicleVariant?:string
vehicleColor?:string
manufactureYear?:number
price?:number


constructor(){
    this.firstName = "";
    this.lastName = "";
    this.mobileNo = 0;
    this.emailId = "";
    this.password = "";
    this.confirmPassword = "";
    this.vehicleBrand = "";
    this.vehicleModel = "";
    this.vehicleVariant = "";
    this.vehicleColor = "";
    this.manufactureYear = 0;
    this.price=0;
}

}  