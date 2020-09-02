import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../data/employee'
import { EmployeeService } from '../data/employee.service'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[];
  getEmployeesSub: any;
  loadingError: boolean = false;
  filteredEmployees: Employee[];

  constructor(private es: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.getEmployeesSub = this.es.getEmployees().subscribe(
      employees => {
        this.employees = employees;
        this.filteredEmployees = employees;
      },
      (e) => this.loadingError = true
    );
  }

  routeEmployee(id: string) {
    this.router.navigate(['/employee', id]);
  }

  onEmployeeSearchKeyUP(event: any) {
    let userStr = event.target.value.toLowerCase();
    this.filteredEmployees = this.employees.filter(employee => {
      return (
        employee.FirstName.toLowerCase().match(userStr) ||
        employee.LastName.toLowerCase().match(userStr) ||
        employee.Position.PositionName.toLowerCase().match(userStr)
      )
    })
  }

  ngOnDestroy() {
    if (this.getEmployeesSub) { this.getEmployeesSub.unsubscribe(); }
  }
}
