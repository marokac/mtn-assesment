import { Component, OnInit, Input } from '@angular/core';
import { navItem } from 'src/app/model/nav';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent implements OnInit {
  @Input() navItems:navItem[];
  constructor() { }

  ngOnInit(): void {
  }

}
