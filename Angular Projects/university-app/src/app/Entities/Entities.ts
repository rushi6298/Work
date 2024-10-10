export class College {
    constructor(
      public cid: number,
      public cname: string,
      public caddress: string,
      public email: string,
      public phonenumber: string,
      public uid:number,
      public editMode:boolean=false
    ) {}
  }

  export class University{
    constructor(
        public uid:number,
        public uname:String,
        public uaddress:String,
        public email:String,
        public phonenumber:String,
        public editMode:boolean=false,
        //public originalData:University
        
    ){}
  }

  export class RequestUniversity{
    constructor(
      public uid:number,
      public uaddress:String,
      public cid:number,
      public caddress:String
    ){}
  }

  