import { Component, OnInit } from '@angular/core';
import { Employee, RequestEmployee } from '../employee-search/employee-search.component';
import { EmployeeDataService } from '../service/employee-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frontend-pagination',
  templateUrl: './frontend-pagination.component.html',
  styleUrls: ['./frontend-pagination.component.css']
})
export class FrontendPaginationComponent implements OnInit {

  employees: Employee[] = [];
  employees1: Employee[] = [];
  id!: number;
  ssalary: number = 0;
  sname!: String;
  sdepartment = '';
  department: String[] = [];
  bname: String[] = [];
  selecteddepartment: String[] = [];
  minSalary!: number;
  maxSalary!: number;
  req!: RequestEmployee;
  newEmployee: Employee | null = null;
  updateEmployee!: Employee;
  editMode: boolean = false;
  originalData: any;
  listOfAddresses: String[] = [];
  saddress: String = '';
  validation: boolean = true;
  toggle: boolean = false



  // pgination properties we required 

  // page no must be atleast 1 or grater than 1
  pageSize:number=5
  currentPage:number=1;
  pageSizes:number[]=[5,10,15,20];
  totalItems:number=0;
  totalPages:number=1
  pageNumber:number=0
  pageSizeOptions:number[]=[5, 10,15,20]

  createNewEmployee: Employee = {
    id: -1,
    name: '',
    department: '',
    address: '',
    salary: 0,
    isEditMode: false
    
  };

  constructor(
    private employeedataservice: EmployeeDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.retriveDepartment();
    this.retriveAllname();
    this.retriveAllAddresses();
    this.getAllDepartmentsByCustomeQuery();
  }

  getAllDepartmentsByCustomeQuery() {
    this.employeedataservice.getAllDepartmentsByCustomeQuery().subscribe(
      (data) => {
        console.log('data from custome query');
        this.department = data;
        console.log(data);
      }
    );
  }

  retriveDepartment() {
    this.employeedataservice.retriveAllDepartments().subscribe(
      (data) => {
        console.log('retriving all departments......');
        this.department = data;
        console.log(data);
      }
    );
  }

  // Search() {
  //   this.req = {
  //     id: this.id,
  //     name: this.sname,
  //     department: this.selecteddepartment,
  //     minSal: this.minSalary,
  //     maxSal: this.maxSalary
  //   };

  //   this.employeedataservice.getCustomEmployee(this.req).subscribe(
  //     data => {
  //       this.employees = data;
  //       //this.sortByName();
  //       //this.sortEmployeeBySalary();
  //       console.log(data);
  //     }
  //   );
  // }



  retriveAll() {
    this.employeedataservice.retriveAll().subscribe(
      (data) => {
        this.employees = data;
        //this.sortByName();
        console.log(data);
      }
    );
  }

  retriveByName(name: String) {
    this.employeedataservice.retriveByname(name).subscribe(
      data => {
        this.employees = data;
        this.sortByName();
        console.log(data);
      }
    );
  }

  retriveAllname() {
    this.employeedataservice.retriveAllName().subscribe(
      (data) => {
        // this.sortByName()
        this.bname = data;
        console.log(data);
      }
    );
  }

  retriveByDept(department: String) {
    this.employeedataservice.retriveBydept(department).subscribe(
      data => {
        this.employees = data;
        this.sortByName();
        console.log(data);
      }
    );
  }

  retriveBySalaryRange(minSalary: number, maxSalary: number) {
    this.employeedataservice.getEmployeeBySalaryRange(minSalary, maxSalary).subscribe(
      data => {
        this.employees = data;
        this.sortEmployeeBySalary();
        console.log(data);
      }
    );
  }

  retriveAllAddresses() {
    this.employeedataservice.getAllAddresses().subscribe(
      data => {
        this.listOfAddresses = data;
        console.log(data);
      }
    );
  }

  onDepartmentChange(event: any) {
    const dep = event.target.value;
    if (event.target.checked) {
      this.selecteddepartment.push(dep);
    } else {
      const index = this.selecteddepartment.indexOf(dep);
      this.selecteddepartment.splice(index, 1);
    }
    console.log(this.selecteddepartment);
  }

  refresh() {
    this.retriveAll();
  }

  deleteEmployee(id: number) {
    this.employeedataservice.deleteEmp(id).subscribe(
      data => {
        console.log(`Deleted employee with id: ${id}`);
        this.refresh();
      }
    );
  }

  updateChange(empid: number) {
    this.router.navigate(['update', empid]);
  }

  createEmployee() {

    this.currentPage=this.totalPages-1;
    this.loadpaginationEmployee();
    setTimeout(()=>{
      this.newEmployee={id:0,name:'',department:'',address:'',salary:0,isEditMode:false};
      this.employees.push(this.newEmployee);
    },0)
  
  }

  saveEmployee(employee: Employee) {
    this.employeedataservice.createEmployee(employee).subscribe(
      data => {
        console.log("Employee created successfully.");
        this.newEmployee = null;
        this.refresh();
      }
    );
  }

  cancelRow() {
    this.newEmployee = null;
    this.employees.pop();
  }

  editEmployee(employee: any) {
    if (!employee.originalData) {
      employee.originalData = { ...employee };
    }
    employee.isEditMode = true;
    this.checkEditMode();
  }

  checkEditMode() {
    this.editMode = this.employees.some(e => e.isEditMode);
  }

  updateAll() {
    const updateEmps = this.employees.filter(e => e.isEditMode);
    if (this.isValidMultipleEmployee(updateEmps)) {
      updateEmps.forEach(e => {
        this.employeedataservice.updateEmployee(e.id, e).subscribe(
          data => {
            e.isEditMode = false;
          }
        );
      });
    }
  }

  updateSingle(emp: Employee) {
    if (this.isValidEmployee(emp)) {
      this.employeedataservice.updateEmployee(emp.id, emp).subscribe(
        data => {
          console.log("Employee updated successfully.");
        }
      );
      emp.isEditMode = false;
    }
  }

  cancelEdit(emp: any) {
    emp.id = emp.originalData.id;
    emp.name = emp.originalData.name;
    emp.address = emp.originalData.address;
    emp.department = emp.originalData.department;
    emp.salary = emp.originalData.salary;
    emp.isEditMode = false;
    this.checkEditMode();
  }

  isValidEmployee(emp: Employee): boolean {
    return !!emp.name && !!emp.department && !!emp.address && !!emp.salary;
  }

  isValidMultipleEmployee(emp: Employee[]): boolean {
    return emp.every(employee => this.isValidEmployee(employee));
  }

  areAllEmployeesValid(): boolean {
    const employeesInEditMode = this.employees.filter(e => e.isEditMode);
    return employeesInEditMode.length > 0 && this.isValidMultipleEmployee(employeesInEditMode);
  }

  sortEmployeeBySalary() {
    this.employees.sort((e1, e2) => e1.salary - e2.salary);

  }
  sortBysalaryAsce() {
    this.employees.sort((a, b) => b.salary - a.salary)
  }

  sortByName() {

    this.employees.sort((a, b) => a.name.toString().localeCompare(b.name.toString()));

  }
  sortByNameAsc() {
    this.employees.sort((a, b) => b.name.toString().localeCompare(a.name.toString()))
  }

  sortById() {
    this.employees.sort((a, b) => a.id - b.id)

  }
  sortByIdAsc() {
    this.employees.sort((a, b) => b.id - a.id)
  }


  sortBydeparment() {
    this.employees.sort((a, b) => b.department.toString().localeCompare(a.department.toString()))
  }
  sortBydeparmentAsc() {
    this.employees.sort((a, b) => a.department.toString().localeCompare(b.department.toString()))
  }
  toggleSalary() {
    if (this.toggle) {
      this.sortBysalaryAsce();
    } else {
      this.sortEmployeeBySalary();
    }
    this.toggle = !this.toggle;
  }

  toggleId() {
    if (this.toggle) {
      this.sortById()
    }
    else {
      this.sortByIdAsc()
    }
    this.toggle = !this.toggle
  }

  toggleName() {
    if (this.toggle) {
      this.sortByName()
    }
    else {
      this.sortByIdAsc()
    }
    this.toggle = !this.toggle
  }

  toggleDepartment() {
    if (this.toggle) {
      this.sortBydeparment()
    }
    else {
      this.sortBydeparmentAsc()
    }
    this.toggle = !this.toggle

  }


  // loading pagination details 
  loadpaginationEmployee(){
    this.employeedataservice.getAllEmployeeByPagination(this.currentPage,this.pageSize).subscribe(
      data=>{
        this.employees=data;
        console.log("pagination is worked");
        
      }
    )
  }


  //lets handlle pagination 

  onPageChange(event:any)
  {

    this.currentPage=event.pageIndex;
    this.pageSize=event.pageSize;
    this.loadpaginationEmployee();
  }


  // paging search method
  SearchByPaging() {
    console.log("search by paging");
    
    this.req = {
      id: this.id,
      name: this.sname,
      department: this.selecteddepartment,
      minSal: this.minSalary,
      maxSal: this.maxSalary
    };

    console.log(this.req);
    

    this.employeedataservice.GetAllEmployeesByPaging(this.req,this.currentPage,this.pageSize).subscribe(
      data => {
        this.employees = data.content;
        this.pageNumber=data.number;
        this.totalPages=data.totalPages;
        
        //this.sortByName();
        //this.sortEmployeeBySalary();
        console.log(data);
      }
    );
  }
  goToPage(page:number)
{
  this.currentPage=page
  this.SearchByPaging()
}
changePageSize(){
  this.currentPage=0
}





}

export interface Page<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}


