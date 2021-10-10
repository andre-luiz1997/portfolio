import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { LangService } from './services/lang.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loaded: any = false;

  title = 'portfolio';
  

  constructor(
    private langService: LangService,
    @Inject(DOCUMENT) private document: Document
  ){
  }

  @HostListener('window:scroll',[])
  onWindowScroll() {
    var highlights = document.querySelectorAll('.highlight');
    var timeline = document.querySelectorAll('.timeline');
    var timelineSteps = document.getElementsByClassName('timelineStep');
    highlights.forEach((elem) => {
      let rect = elem.getBoundingClientRect();
      if(rect.top >= 0 && rect.bottom <= window.innerHeight){
        elem.classList.add('highlighted');
      }else{
        elem.classList.remove('highlighted');
      }
    });

    timeline.forEach((elem) => {
      let rect = elem.getBoundingClientRect();
      if(rect.top >= 0 && rect.bottom <= window.innerHeight){
        elem.classList.add('animate');
        let delay = 0;
        for(let i = 0; i <= timelineSteps.length; i++){
          let element = timelineSteps[i] as HTMLElement;
          if(element != undefined){
            element.style.setProperty('animation-delay',`${delay}s`);
            element.classList.add('animate');
            delay += 2.5;
          }
          
        }
        
      }
    });

    
  }

  ngAfterViewInit(){
    setTimeout(() => {
      this.loaded = true;
    }, 5000);
  }
}
