import { Component,OnInit } from '@angular/core';

import AOS from "aos";

@Component({
    selector: 'timeline',
    templateUrl: './timeline.component.html',
    styleUrls: [ './timeline.component.css' ]
})
export class TimelineComponent implements OnInit {
    ngOnInit():void{
        AOS.init({
            duration: 1200,
          })
    }
}