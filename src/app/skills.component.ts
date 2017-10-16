import { Component, OnInit} from '@angular/core';

import AOS from "aos";


@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: [ './skills.component.css' ]
})
export class SkillsComponent implements OnInit {
 
  ngOnInit():void{
    AOS.init({
        duration: 1200,
      })
  }
}
