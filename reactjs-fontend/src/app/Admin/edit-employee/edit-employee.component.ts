import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  EMP_ID: any;
  employee:any;

  constructor(private route: ActivatedRoute, private router: Router, private EmployeeService:EmployeeService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.EMP_ID = Number(routeParams.get('EMP_ID'));
    console.log(this.EMP_ID);
    this.EmployeeService.find(this.EMP_ID).subscribe((data:any)=>{
      this.employee = data;
      console.log(this.employee);
    })
  }
  update(employeename:string, employeeemail:string, employeephone:string, employeedate:string, employeegioitinh:string){
    this.EmployeeService.update(this.EMP_ID, this.employee).subscribe((res)=>{
      this.router.navigateByUrl('/employadmin');
    })
  }

}
