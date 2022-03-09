import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss'],
})
export class DynamicComponent implements OnInit, OnChanges {
  @Input() public description: string = '';
  @Output() public clicked = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {
    console.log('inside dynamic init');
  }
  ngOnChanges(): void {
    console.log('inside dynamic changes');
  }

  handleClick() {
    this.clicked.emit();
  }
}
