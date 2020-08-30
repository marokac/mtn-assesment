import { Component, OnInit, Input } from '@angular/core';
import {Header} from "../../../model/header"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() data:Header;
  constructor() { }

  ngOnInit(): void {
  }

}
