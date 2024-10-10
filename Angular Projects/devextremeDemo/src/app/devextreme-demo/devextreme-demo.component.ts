import { Component, OnInit } from '@angular/core';
export const EMPLOYEES = [
  { id: 1, name: 'John Doe', department: 'HR', salary: 50000, joiningDate: new Date('2022-01-15') },
  { id: 2, name: 'Jane Smith', department: 'Finance', salary: 60000, joiningDate: new Date('2022-02-20') },
  { id: 3, name: 'Mike Johnson', department: 'IT', salary: 55000, joiningDate: new Date('2022-03-10') },
  { id: 4, name: 'Emily Davis', department: 'Marketing', salary: 45000, joiningDate: new Date('2022-04-05') },
  { id: 5, name: 'William Brown', department: 'Sales', salary: 70000, joiningDate: new Date('2022-05-25') },
  { id: 6, name: 'Ava Martinez', department: 'IT', salary: 52000, joiningDate: new Date('2022-06-15') },
  { id: 7, name: 'Mia Wilson', department: 'HR', salary: 48000, joiningDate: new Date('2022-07-10') },
  { id: 8, name: 'Sophia Anderson', department: 'Finance', salary: 62000, joiningDate: new Date('2022-08-18') },
  { id: 9, name: 'James Thomas', department: 'Marketing', salary: 53000, joiningDate: new Date('2022-09-22') },
  { id: 10, name: 'Oliver Taylor', department: 'Sales', salary: 68000, joiningDate: new Date('2022-10-30') },
  { id: 11, name: 'Lucas White', department: 'IT', salary: 56000, joiningDate: new Date('2022-11-12') },
  { id: 12, name: 'Mason Harris', department: 'HR', salary: 47000, joiningDate: new Date('2022-12-05') },
  { id: 13, name: 'Liam Clark', department: 'Finance', salary: 65000, joiningDate: new Date('2023-01-17') },
  { id: 14, name: 'Benjamin Lewis', department: 'Marketing', salary: 51000, joiningDate: new Date('2023-02-24') },
  { id: 15, name: 'Noah Walker', department: 'Sales', salary: 69000, joiningDate: new Date('2023-03-15') },
  { id: 16, name: 'Ethan Hall', department: 'IT', salary: 54000, joiningDate: new Date('2023-04-10') },
  { id: 17, name: 'Alexander Allen', department: 'HR', salary: 49000, joiningDate: new Date('2023-05-02') },
  { id: 18, name: 'Henry Young', department: 'Finance', salary: 63000, joiningDate: new Date('2023-06-18') },
  { id: 19, name: 'Daniel King', department: 'Marketing', salary: 50000, joiningDate: new Date('2023-07-20') },
  { id: 20, name: 'Matthew Scott', department: 'Sales', salary: 71000, joiningDate: new Date('2023-08-25') },
  { id: 21, name: 'Joseph Green', department: 'IT', salary: 57000, joiningDate: new Date('2023-09-05') },
  { id: 22, name: 'Sebastian Baker', department: 'HR', salary: 46000, joiningDate: new Date('2023-10-10') },
  { id: 23, name: 'Jackson Adams', department: 'Finance', salary: 64000, joiningDate: new Date('2023-11-15') },
  { id: 24, name: 'David Nelson', department: 'Marketing', salary: 52000, joiningDate: new Date('2023-12-18') },
  { id: 25, name: 'Samuel Carter', department: 'Sales', salary: 70000, joiningDate: new Date('2024-01-20') },
  { id: 26, name: 'Gabriel Mitchell', department: 'IT', salary: 58000, joiningDate: new Date('2024-02-25') },
  { id: 27, name: 'Elijah Perez', department: 'HR', salary: 48000, joiningDate: new Date('2024-03-05') },
  { id: 28, name: 'Logan Roberts', department: 'Finance', salary: 66000, joiningDate: new Date('2024-04-10') },
  { id: 29, name: 'Jayden Turner', department: 'Marketing', salary: 53000, joiningDate: new Date('2024-05-15') },
  { id: 30, name: 'Michael Phillips', department: 'Sales', salary: 72000, joiningDate: new Date('2024-06-20') },
  { id: 31, name: 'Carter Campbell', department: 'IT', salary: 55000, joiningDate: new Date('2024-07-22') },
  { id: 32, name: 'Wyatt Parker', department: 'HR', salary: 47000, joiningDate: new Date('2024-08-25') },
  { id: 33, name: 'Luke Evans', department: 'Finance', salary: 62000, joiningDate: new Date('2024-09-10') },
  { id: 34, name: 'Jack Edwards', department: 'Marketing', salary: 51000, joiningDate: new Date('2024-10-15') },
  { id: 35, name: 'Aiden Collins', department: 'Sales', salary: 69000, joiningDate: new Date('2024-11-20') },
  { id: 36, name: 'Matthew Stewart', department: 'IT', salary: 57000, joiningDate: new Date('2024-12-22') },
  { id: 37, name: 'Dylan Sanchez', department: 'HR', salary: 46000, joiningDate: new Date('2025-01-15') },
  { id: 38, name: 'Isaac Morris', department: 'Finance', salary: 63000, joiningDate: new Date('2025-02-10') },
  { id: 39, name: 'Anthony Rogers', department: 'Marketing', salary: 54000, joiningDate: new Date('2025-03-20') },
  { id: 40, name: 'Thomas Reed', department: 'Sales', salary: 71000, joiningDate: new Date('2025-04-25') },
  { id: 41, name: 'Hudson Cook', department: 'IT', salary: 56000, joiningDate: new Date('2025-05-10') },
  { id: 42, name: 'Owen Morgan', department: 'HR', salary: 47000, joiningDate: new Date('2025-06-15') },
  { id: 43, name: 'Jackson Bell', department: 'Finance', salary: 64000, joiningDate: new Date('2025-07-20') },
  { id: 44, name: 'Levi Murphy', department: 'Marketing', salary: 52000, joiningDate: new Date('2025-08-25') },
  { id: 45, name: 'Nathan Bailey', department: 'Sales', salary: 70000, joiningDate: new Date('2025-09-30') },
  { id: 46, name: 'Leo Rivera', department: 'IT', salary: 59000, joiningDate: new Date('2025-10-15') },
  { id: 47, name: 'Caleb Cooper', department: 'HR', salary: 46000, joiningDate: new Date('2025-11-20') },
  { id: 48, name: 'Christian Richardson', department: 'Finance', salary: 65000, joiningDate: new Date('2025-12-25') },
  { id: 49, name: 'Aaron Howard', department: 'Marketing', salary: 53000, joiningDate: new Date('2026-01-20') },
  { id: 50, name: 'Eli Ward', department: 'Sales', salary: 72000, joiningDate: new Date('2026-02-25') }
];



@Component({
  selector: 'app-devextreme-demo',
  templateUrl: './devextreme-demo.component.html',
  styleUrls: ['./devextreme-demo.component.css']
})
export class DevextremeDemoComponent implements OnInit {

  constructor() { }
  columns: any[] = [
    { dataField: 'id', caption: 'ID' },
    { dataField: 'name', caption: 'Name' },
    { dataField: 'department', caption: 'Department' },
    { dataField: 'salary', caption: 'Salary' },
    { dataField: 'joiningDate', caption: 'Joining Date' }
  ];

  allEmployee:any[] = []

  ngOnInit(): void {
    this.allEmployee=EMPLOYEES
    console.log(this.allEmployee);
    
  }




}
