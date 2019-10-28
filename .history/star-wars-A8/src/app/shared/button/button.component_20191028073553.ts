import { Component, OnInit, Input } from '@angular/core';

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
        this.backgroundRipple = 'rgba(255, 255, 255, 0.32)';
        break;
      }
      case ButtonComponentType.SECONDARY: {
        this.isBackground = false;
        this.typeButtonClass = ButtonTypeStyleMapping.get(ButtonComponentType.SECONDARY);
        this.typeLoadingClass = LoadingType.SECONDARY;
        this.backgroundRipple = 'rgba(255, 102, 0, 0.32)';
        break;
      }
      case ButtonComponentType.STICKY: {
        this.isBackground = true;
        this.typeButtonClass = ButtonTypeStyleMapping.get(ButtonComponentType.STICKY);
        this.backgroundRipple = 'rgba(255, 255, 255, 0.32)';
        break;
      }
      case ButtonComponentType.LINK: {
        this.isBackground = false;
        this.typeButtonClass = ButtonTypeStyleMapping.get(ButtonComponentType.LINK);
        this.backgroundRipple = 'rgba(255, 102, 0, 0.32)';
        break;
      }
      default: {
        this.typeButtonClass = ButtonTypeStyleMapping.get(ButtonComponentType.PRIMARY);
        this.typeLoadingClass = LoadingType.PRIMARY;
        this.backgroundRipple = 'rgba(255, 255, 255, 0.32)';
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
