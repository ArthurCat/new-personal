import { Component, OnInit } from '@angular/core';


import AOS from "aos";

declare var $:any;

@Component({
    selector: 'contact',
    templateUrl: './contact.component.html',
    styleUrls : ['contact.component.css']
})
export class ContactComponent implements OnInit{
    ngOnInit():void{
        AOS.init({
            duration: 1200,
          })
    }
  
}