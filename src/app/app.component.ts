import { Component, Inject } from '@angular/core';
import {navItem} from './model/nav'

import { Item } from './model/item';
import { Header } from './model/header';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  navItems:navItem[]=[{item:'store'},{item:'product & services'},{item:'help & support'}]
  headerData:Header={logoUrl:'https://seeklogo.com/images/M/MTN-logo-459AAF9482-seeklogo.com.png'}
}
