import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.scss'],
})
export class InnerComponent implements OnInit {
  @Input() text = '';
  @Output() clicked = new EventEmitter();

  ngOnInit(): void {}

  handleClick(evt: Event) {
    evt.stopPropagation();
    this.clicked.emit('clicked output fired');
  }
}
