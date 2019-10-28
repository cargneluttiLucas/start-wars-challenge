import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoadingType, LoadingTypeStyleMapping } from '../loading/loading.component';

export const ButtonComponentType = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  STICKY: 'sticky',
  LINK: 'link'
};

const ButtonTypeStyleMapping = new Map<string, string>();
ButtonTypeStyleMapping.set(ButtonComponentType.PRIMARY, 'btn-primary');
ButtonTypeStyleMapping.set(ButtonComponentType.SECONDARY, 'btn-secondary');
ButtonTypeStyleMapping.set(ButtonComponentType.STICKY, 'btn-sticky');
ButtonTypeStyleMapping.set(ButtonComponentType.LINK, 'btn-link');


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() text: string;
  @Input() disabled = false;
  @Input() isLoading = false;
  @Input() widthButton: string;
  backgroundRipple = 'rgba(255, 255, 255, 0.32)';
  @Output() clickButton = new EventEmitter();

  typeButtonClass = ButtonTypeStyleMapping.get(ButtonComponentType.PRIMARY);
  typeLoadingClass = LoadingTypeStyleMapping.get(ButtonComponentType.PRIMARY);

  public isBackground = true;
  @Input()
  set type(type: string) {
    switch (type) {
      case ButtonComponentType.PRIMARY: {
        this.typeButtonClass = ButtonTypeStyleMapping.get(ButtonComponentType.PRIMARY);
        this.typeLoadingClass = LoadingType.PRIMARY;
        break;
      }
      case ButtonComponentType.SECONDARY: {
        this.isBackground = false;
        this.typeButtonClass = ButtonTypeStyleMapping.get(ButtonComponentType.SECONDARY);
        this.typeLoadingClass = LoadingType.SECONDARY;
        break;
      }
      case ButtonComponentType.STICKY: {
        this.isBackground = true;
        this.typeButtonClass = ButtonTypeStyleMapping.get(ButtonComponentType.STICKY);
        break;
      }
      case ButtonComponentType.LINK: {
        this.isBackground = false;
        this.typeButtonClass = ButtonTypeStyleMapping.get(ButtonComponentType.LINK);
        break;
      }
      default: {
        this.typeButtonClass = ButtonTypeStyleMapping.get(ButtonComponentType.PRIMARY);
        this.typeLoadingClass = LoadingType.PRIMARY;
      }
    }
  }
  public isClicked: boolean;

  constructor() {
    this.isClicked = false;
  }

  onButtonClicked() {

    if (!this.disabled) {
      this.clickButton.emit();
    }
  }
}
