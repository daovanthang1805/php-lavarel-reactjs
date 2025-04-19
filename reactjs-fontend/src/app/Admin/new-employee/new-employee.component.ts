import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {

  constructor(private Employeeservice: EmployeeService, private router: Router) { }

  employees: any;

  ngOnInit(): void {
  }

  add(employeename:string, employeeemail:string, employeephone:string, employeedate:string, employeegioitinh:string){
    this.employees = {
      'Name': employeename,
      'Email': employeeemail,
      'Phone': employeephone,
      'date': employeedate,
      'gioitinh': employeegioitinh,
    };
    this.Employeeservice.addEmployee(this.employees as any).subscribe(employee=>{
      this.employees=employee
    });
    console.log(this.employees);
    this.router.navigateByUrl("/employadmin");
  }

}
