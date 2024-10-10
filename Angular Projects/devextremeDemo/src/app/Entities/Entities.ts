export class College {
  constructor(
    public cid: number,
    public cname: string,
    public caddress: string,
    public email: string,
    public phonenumber: string,
    //public uid:number,
    public editMode: boolean = false,
    public rating: String
  ) { }
}

export class University {
  constructor(
    public uid: number,
    public uname: string,
    public uaddress: string,
    public email: string,
    public phonenumber: string,
    public editMode: boolean = false,
    public lastUpdatedOn:string
    //public originalData:University

  ) { }
}

export class RequestUniversity {
  constructor(
    public uid: number,
    public uaddress: String,
    public cid: number,
    public caddress: String,
    public startTime:string,
    public endTime:string 
  ) { }
}

export class RequestNewUniversity{
  constructor(
    public uid: number,
    public uname:string,
    public uaddress: String,
    public cid: number,
    public caddress: String,
    public startTime:string,
    public endTime:string ,
    public nameFilter:string,
    public addressfilter:string,
    public emailFilter:string,
    public phoneFilter:string,
    public lastUpdatedFilter:string

  ){}
}

export interface Page<T> {
  content: T[];
  pageable: {
    pageNumber: number,
    pageSize: number
  };
  totalElements: number;

  totalPages: number


}