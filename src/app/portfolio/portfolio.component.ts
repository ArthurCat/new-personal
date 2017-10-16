import { Component, OnInit } from '@angular/core';

import AOS from "aos";

declare var $:any;

@Component({
    selector: 'portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls : ['portfolio.component.css']
})
export class PortfolioComponent implements OnInit{
    ngOnInit():void{
        AOS.init({
            duration: 1200,
          })
    }
}