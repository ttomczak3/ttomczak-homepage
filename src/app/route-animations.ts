import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
} from '@angular/animations';

export const fader =
  trigger('routeAnimations', [
  transition('* <=> *', [
    // Set a default  style for enter and leave
    query(':enter, :leave', [
      style({
        position: 'absolute',
        left: 0,
        width: '100%',
        opacity: 0,
        transform: 'translateY(0)',
      }),
    ], { optional: true }),
    // Animate the old page out and the new page in
    group([
      query(':leave', [
        style({
          opacity: 1,
        }),
        animate('500ms ease', style({ opacity: 0, transform: 'translateY(5%)' })),
      ], { optional: true }),
      query(':enter', [
        style({
          transform: 'translateY(5%)',
        }),
        animate('500ms ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ], { delay: 500, optional: true })
    ])
  ]),
]);
