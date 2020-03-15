export module RegisterModel {
  export interface RootObject {
    _id: string;
    fullName: string;
    dob: Date;
    mobileNo: number;
    email: string;
    password: string;
    __v: number;
    success: number;
  }
}
