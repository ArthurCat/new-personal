import { Component, OnInit} from '@angular/core';

import AOS from "aos";


@Component({
  selector: 'about-me',
  templateUrl: './about.component.html',
  styleUrls: [ './about.component.css' ]
})
export class AboutComponent implements OnInit {
 
  ngOnInit():void{
    AOS.init({
        duration: 1200,
      })
  }
}
