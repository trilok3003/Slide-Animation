import { animate, style, transition, trigger } from '@angular/animations';
import { Component, VERSION } from '@angular/core';
const animationDuration = 500;
const slideLeft = transition('* => *', [
  style({ transform: 'translateX(0)' }),
  animate(animationDuration, style({ transform: 'translateX(-100%)' })),
  style({ transform: 'translateX(0)' }),
]);
const slideRight = transition('* => *', [
  style({ transform: 'translateX(0)' }),
  animate(animationDuration, style({ transform: 'translateX(100%)' })),
  style({ transform: 'translateX(0)' }),
]);
const slideInLeft = transition('* => *', [
  style({ transform: 'translateX(100%)', right: 0 }),
  animate(animationDuration, style({ transform: 'translateX(0)' })),
  style({ right: 'initial' }),
]);
const slideInRight = transition('* => *', [
  style({ transform: 'translateX(-100%)', left: 0 }),
  animate(animationDuration, style({ transform: 'translateX(0)' })),
  style({ left: 'initial' }),
]);

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideLeft', [slideLeft]),
    trigger('slideRight', [slideRight]),
    trigger('slideInLeft', [slideInLeft]),
    trigger('slideInRight', [slideInRight]),
  ],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
