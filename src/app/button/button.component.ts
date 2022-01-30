import { Component, OnInit, Input } from '@angular/core';
import { MDCRipple } from '@material/ripple';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text = '';
  count = 0;
  buttonRipple: any;

  constructor() { }

  ngOnChanges(): void {
    this.count++;
    console.log(`on changes running: ${this.count}`)
    console.log(`input value: ${this.text}`);
  }

  ngOnInit(): void {
    console.log(`on init running`);
    this.trySelectingDom();
  }

  buttonClick(): void {
    console.log('button click');
  }

  trySelectingDom(): void {
    try {
      const buttonSelected = document.querySelector('.mdc-button') as HTMLElement;
      console.log(buttonSelected);
      this.buttonRipple = new MDCRipple(buttonSelected);

    } catch (error) {
      console.error(error);

    }
  }

}
