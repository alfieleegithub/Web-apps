import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeRaw } from '../data/employeeRaw';
import { Position } from '../data/position';
import { EmployeeService } from '../data/employee.service';
import { PositionService } from '../data/position.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  paramSubscription: any;
  employeeSubscription: any;
  getPositionsSubcription: any;
  saveEmployeeSubscription: any;
  employee: EmployeeRaw;
  positions: Position[];
  successMessage: boolean = false;
  failMessage: boolean = false;

  constructor(private es: EmployeeService, private route: ActivatedRoute, private ps: PositionService) { }

  ngOnInit() {
    this.employee = new EmployeeRaw();
    this.paramSubscription = this.route.params.subscribe(params => {
      this.employeeSubscription = this.es.getEmployee(params['_id']).subscribe(data =>
        this.employee = data[0])
      this.getPositionsSubcription = this.ps.getPositions().subscribe(data =>
        this.positions = data)
    })
  }

  onSubmit() {
    this.saveEmployeeSubscription = this.es.saveEmployee(this.employee).subscribe(
      // first callback
      () => {
        this.successMessage = true;
        setTimeout(() => this.successMessage = false, 2500);
      },
      // second callback
      () => {
        this.failMessage = true;
        setTimeout(() => this.failMessage = false, 2500);
      }
    )
  }

  ngOnDestroy() {
    if (this.paramSubscription) this.paramSubscription.unsubscribe();
    if (this.employeeSubscription) this.employeeSubscription.unsubscribe();
    if (this.getPositionsSubcription) this.getPositionsSubcription.unsubscribe();
    if (this.saveEmployeeSubscription) this.saveEmployeeSubscription.unsubscribe();
  }
}
