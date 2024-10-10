import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee-search/employee-search.component';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDataService } from '../service/employee-data.service';

@Component({
  selector: 'app-emp-update',
  templateUrl: './emp-update.component.html',
  styleUrls: ['./emp-update.component.css']
})
export class EmpUpdateComponent implements OnInit {
  
  eid!:number
  employee:Employee={

     id:-1,
     name:'',
     department:'',
     address:'',
     salary:0,
     isEditMode:false
    
  }

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private employeedataservice:EmployeeDataService

    
     
  ) { }

  ngOnInit(): void {
    this.getCurrentEmployee()

   
  
  }

  getCurrentEmployee(){
    this.eid=this.route.snapshot.params['id']
    if(this.eid!=-1)
    {
      this.employeedataservice.retriveById(this.eid).subscribe(
        (data)=>{
          this.employee=data;
        }
      )
    }
    
  }

  updateEmployee()
  {
    if(this.eid!=-1)
    {
      this.employeedataservice.updateEmployee(this.eid,this.employee).subscribe(
        data=>{
          console.log('Employee Updataed Successfully...')
          console.log(data);
          this.router.navigate(['emp'])
        }
      )

    }
    else{
      this.employeedataservice.createEmployee(this.employee).subscribe(
        data=>{
          console.log(data);
          this.router.navigate(['emp'])
          

        }
      )
    }
    

  }

}
