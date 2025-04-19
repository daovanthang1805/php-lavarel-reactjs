import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employeeadmin',
  templateUrl: './employeeadmin.component.html',
  styleUrls: ['./employeeadmin.component.css']
})
export class EmployeeadminComponent implements OnInit {


  constructor(private employee:EmployeeService,private router: Router) { }


  employees: any;
  ngOnInit(): void {
    
    this.showEmployee();

  }
  showEmployee(){
    this.employees= this.employee.listemployee().subscribe(employee=>{
      this.employees=employee;
      console.log(this.employees);
    });
  }

  deleteEmployee(id:any){
    if(confirm("Bạn có chắc muốn xóa không ?")){
      this.employee.deleteEmployee(id).subscribe(
        res=>{
          this.employees= this.employees.filter((a:any) => a.EMP_ID==id);
          this.showEmployee();
        }
      );
      this.router.navigateByUrl("/employadmin");
    }
  }
  

}
