import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

// altura do menu fixo + folga, para as âncoras (#exp, #edu…) não ficarem escondidas atrás dele
const NAV_OFFSET = 96;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: false
})
export class AppComponent {
  year = new Date().getFullYear();

  constructor(viewportScroller: ViewportScroller){
    viewportScroller.setOffset([0, NAV_OFFSET]);
  }
}
