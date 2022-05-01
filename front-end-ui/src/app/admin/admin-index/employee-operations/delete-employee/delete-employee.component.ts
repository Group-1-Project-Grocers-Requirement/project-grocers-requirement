import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import { ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
  deleteMsg?: string;
  data: any 
  constructor(public router: Router, public emp: EmployeeService,public activatedRouter:ActivatedRoute) { }

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

  deleteEmp(empRef: any): void {
    console.log(empRef);
    this.emp.deleteEmpById(empRef.id).subscribe((result: string) => {
      this.deleteMsg = result;
    });
  }
  back(): void {
    this.router.navigate(['admin-index']);
  }

}
