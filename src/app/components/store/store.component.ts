import { Component, OnInit } from '@angular/core';
import { Item } from '../../model/item';
import { navItem } from '../../model/nav';
import { Header } from '../../model/header';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  corouselItems:Item[]=[
    {title:'Mobile internet',icon:'',url:'/#'},
    {title:'Home internet',icon:'',url:'/#'},
    {title:'Get a device',icon:'',url:'/#'},
    {title:'Add a phone-line',icon:'',url:'/#'},
    {title:'Upgrade',icon:'',url:'/#'},
    {title:'Mobile internet',icon:'',url:'/#'},
    {title:'Home internet',icon:'',url:'/#'},
    {title:'Get a device',icon:'',url:'/#'},
    {title:'Add a phone-line',icon:'',url:'/#'},
 


  ];

  navItems:navItem[]=[{item:'store'},{item:'product & services'},{item:'help & support'}]
  action:navItem[]=[{item:'Personal'}]
  headerData:Header={logoUrl:'https://seeklogo.com/images/M/MTN-logo-459AAF9482-seeklogo.com.png'}
}
