import { Component, OnInit} from '@angular/core';

import AOS from "aos";


@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: [ './banner.component.css' ]
})
export class BannerComponent implements OnInit {
 
  ngOnInit():void{
    AOS.init({
        duration: 1200,
      })
  }
}
