export module UpdateModel {
  export interface Datum {
    _id: string;
    title: string;
    startDate: Date;
    endDate: Date;
    shortDesc: string;
    desc: string;
    __v: number;
  }

  export interface RootObject {
    success: number;
    data: Datum[];
    msg: string;
  }
}
