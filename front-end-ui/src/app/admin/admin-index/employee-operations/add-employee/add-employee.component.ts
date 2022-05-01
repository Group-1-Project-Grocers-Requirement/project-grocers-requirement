import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import { ActivatedRoute,Params } from '@angular/router';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  resultMsg?:string;
  data:any
  constructor(public router: Router, public emp: EmployeeService,public activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.parent?.params.subscribe({
      next: (params:Params) => {
        this.emp.getemp().subscribe({
          next: (data) => {
           this.data = data
          }
        })
      }
    })
  }

  addEmp(empRef: any): void {
    console.log(empRef);
    this.emp.storeEmpDetailsInfo(empRef);
    this.resultMsg = "Employee Added"
    //displays the result message for 10 seconds and then 'removes' it
    setTimeout(()=> this.resultMsg = '',5000);  }
  back(): void {
    this.router.navigate(['admin-index']);
  }
}
