import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../service/employee-data.service';
import { Router } from '@angular/router';

export class RequestEmployee{
  constructor(
  public id:number,
	public  name:String ,
	public  department:String[] ,
	public  minSal:number ,
	public  maxSal:number,
  
  )
  {

  }
}

export class Employee{
  constructor(
    public id:number,
    public name:String,
    public department:String,
    public address:String,
    public salary:number,
    public isEditMode:boolean,
    

  ){

  }
}


@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent implements OnInit {
  //department:string[]=['Select','Hardware','Software','Finance']
  employees:Employee[]=[]
  employees1:Employee[]=[]
  id:number=1
  salary:number=0
  sname:String='select'
  sdepartment='select'
  department:String[]=[]
  bname:String[]=[]
  
  req!:RequestEmployee
  


  constructor(
    
    private employeedataservice:EmployeeDataService,
    private router:Router
  ) { }

  ngOnInit(): void 
  {
    this.retriveAll()
    //this.retriveDepartment()
    // this.retriveById(),
    // this.retriveByName('Rushikesh')
    // this.retriveByDept('Software')
    this.retriveDepartment()

    this.retriveAllname()


  }
  


  retriveAllname(){
    this.employeedataservice.retriveAllName().subscribe(
      (data)=>{
        this.bname=data;
        
        
        console.log(data);
        
      }
    )
  }
  retirveByNameAndDept(name:String,department:String)
  {
    if(this.sname=='select')
    {
      name="null"

    }
    if(this.sdepartment=='select')
      {
        department="null"
  
      }
    this.employeedataservice.retriveBynameAndDept(name,department).subscribe(
      (data)=>{
        this.employees1=data;
        console.log(data);
        console.log("i think successfully return all the data");
        
      }
    )
  }
  retriveByName(name:String){
    this.employeedataservice.retriveByname(name).subscribe(
      data=>{
        this.employees1=data;
        console.log('name');
        console.log(data);
        
      }
    )
    
   }
  
  retriveDepartment(){
    this.employeedataservice.retriveAllDepartments().subscribe(
      (data)=>{
        console.log('retriving all departments......');
        
        this.department=data;
        console.log(data)
        
      }
    )
  }
  retriveAll(){
    this.employeedataservice.retriveAll().subscribe(
      (data)=>{
        this.employees=data;
        console.log('all');
        
        console.log(data);
        
      }
    )
  }
   retriveById()
   {
    this.employeedataservice.retriveById(this.id).subscribe(
      data=>{
       // this.employees=data;
        console.log('id');
        console.log(data);
        

      }
    )

   }
   
   retriveByDept(department:String){
    this.employeedataservice.retriveBydept(department).subscribe(
      data=>{
       // this.employees=data;
        console.log('dept');
        console.log(data);
        
      }
    )
    
   }


}
