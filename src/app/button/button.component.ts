import { Component, OnInit, Input } from '@angular/core';
import { MDCRipple } from '@material/ripple';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text = 'placeholder';
  count = 0;
  buttonRipple: any;

  constructor(private logger: LoggerService) { }

  ngOnChanges(): void {
    this.count++;
    this.logger.log(`on changes running: ${this.count}`)
    this.logger.log(`input value: ${this.text}`);
  }

  ngOnInit(): void {
    this.logger.log(`on init running`);
    this.trySelectingDom();
  }

  buttonClick(): void {
    this.logger.log('button click');
  }

  trySelectingDom(): void {
    try {
      const buttonSelected = document.querySelector('.mdc-button') as HTMLElement;
      this.logger.log(buttonSelected);
      this.buttonRipple = new MDCRipple(buttonSelected);

    } catch (error) {
      this.logger.error(error);

    }
  }

}
