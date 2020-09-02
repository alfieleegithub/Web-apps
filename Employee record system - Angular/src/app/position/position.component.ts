import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Position } from '../data/position';
import { PositionService } from '../data/position.service';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {

  paramSubscription: any;
  positionSubscription: any;
  savePositionSubscription: any;
  position: Position;
  successMessage: boolean = false;
  failMessage: boolean = false;

  constructor(private route: ActivatedRoute, private ps: PositionService) { }

  ngOnInit() {
    this.position = new Position();
    this.paramSubscription = this.route.params.subscribe(params => {
      this.positionSubscription = this.ps.getPosition(params['_id']).subscribe(data =>
        this.position = data[0])
    })
  }

  onSubmit() {
    this.savePositionSubscription = this.ps.savePosition(this.position).subscribe(
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
    if (this.positionSubscription) this.positionSubscription.unsubscribe();
    if (this.savePositionSubscription) this.savePositionSubscription.unsubscribe();
  }
}
