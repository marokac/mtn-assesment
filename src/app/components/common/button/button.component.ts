import { Component, OnInit, Input } from '@angular/core';
import {Button} from '../../../model/button'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent implements OnInit {
  @Input() data:Button;
  constructor() { }

  ngOnInit(): void {
  }

}
