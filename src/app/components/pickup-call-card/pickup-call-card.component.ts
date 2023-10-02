import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pickup-call-card',
  templateUrl: './pickup-call-card.component.html',
  styleUrls: ['./pickup-call-card.component.scss'],
})
export class PickupCallCardComponent  implements OnInit {
  @Input() hasHeader: boolean;
  @Input() hasFooter: boolean;

  constructor() {
    this.hasHeader = true;
    this.hasFooter = true;
  }

  ngOnInit() {}

}
