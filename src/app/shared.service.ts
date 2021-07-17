import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class SharedService {
  public description!: string;
  public clicked = new EventEmitter();
  constructor() {}
}
