import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit, OnChanges {
  @Input() public description: string = '';
  @Output() public clicked!: EventEmitter<void>;
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    console.log('inside dynamic init');
    this.description = this.sharedService.description;
    this.clicked = this.sharedService.clicked;
  }
  ngOnChanges(): void {
    console.log('inside dynamic changes');
  }

  handleClick() {
    this.clicked.emit();
  }
}
