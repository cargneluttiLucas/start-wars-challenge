
import {
  forwardRef, Input, OnInit, Output,
  EventEmitter, ChangeDetectorRef, ChangeDetectionStrategy, Component
} from '@angular/core';
import { FormControl, Validators, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable, Subject, Subscription } from 'rxjs';

export const TextfieldComponentType = {
  TEXT: 'text',
  PASSWORD: 'password'
};

export const MomentValidateTexfield = {
  ONFOCUS: 'onFocus',
  OUTFOCUS: 'outFocus',
  SUBMIT: 'submit'
};

@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextfieldComponent),
    multi: true
  }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextfieldComponent implements OnInit {

  @Output() handlerError = new EventEmitter<any>();
  @Input() submit$: Observable<boolean> = new Observable();
  @Input() id = '';
  @Input() text = '';
  @Input() required = true;
  @Input() disabled = false;
  @Input() messagesSuccess: string;
  @Input() messagesHint: string;
  @Input() messagesError: string;
  @Input() notControlMessage = false;

  @Input() public formControl: FormControl;

  private statusChangesSubscription: Subscription;
  private data: any;

  @Input()
  set type(type: string) {
    switch (type) {
      case TextfieldComponentType.TEXT: {
        this.typeInput = TextfieldComponentType.TEXT;
        break;
      }
      case TextfieldComponentType.PASSWORD: {
        this.typeInput = TextfieldComponentType.PASSWORD;
        break;
      }
      default: {
        this.typeInput = TextfieldComponentType.TEXT;
      }
    }
  }
  public typeInput = TextfieldComponentType.TEXT;

  @Input()
  set momentOfValidate(momentOfValidate: string) {
    switch (momentOfValidate) {
      case MomentValidateTexfield.ONFOCUS: {
        this.moment = MomentValidateTexfield.ONFOCUS;
        break;
      }
      case MomentValidateTexfield.OUTFOCUS: {
        this.moment = MomentValidateTexfield.OUTFOCUS;
        break;
      }
      case MomentValidateTexfield.SUBMIT: {
        this.moment = MomentValidateTexfield.SUBMIT;
        break;
      }
      default: {
        this.moment = MomentValidateTexfield.OUTFOCUS;
      }
    }
  }
  public moment = MomentValidateTexfield.OUTFOCUS;

  public typeValidators = [];
  public isFocusLine = false;
  public isErrorLine = false;
  public isSuccessLine = false;
  public showCustomValidation = true;
  private validationMoment: Subject<any> = new Subject();
  public validationMoment$ = this.validationMoment.asObservable();
  public errors: any;

  public value: any;

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.createForm();

    this.submit$.subscribe((result) => {
      if (result) {
        this.moment = MomentValidateTexfield.OUTFOCUS;
        const event = { type: 'outfocus' };
        this.focusOutFunction(event);
      }
      if (!result && result !== null) {
        this.moment = MomentValidateTexfield.SUBMIT;
      }
    });

    this.formControl.statusChanges.subscribe(() => {
      if (this.formControl.dirty) {
        this.isFocusLine = true;
        this.isErrorLine = false;
        this.isSuccessLine = false;
      }

      if (this.moment === MomentValidateTexfield.ONFOCUS) {
        this.validationMoment.next(true);
        this.statusLinesErrorSuccess();
        this.isRequired();
      }
    });
  }

  focusFunction() {
    this.isFocusLine = true;
    this.isRequired();
  }

  focusOutFunction(event) {
    if (event.type === 'focusout') {
      this.isFocusLine = false;
    }

    if (this.moment === MomentValidateTexfield.OUTFOCUS || this.moment === MomentValidateTexfield.ONFOCUS) {
      this.validationMoment.next(true);
      this.statusLinesErrorSuccess();
    }
  }

  statusLinesErrorSuccess() {
    this.isSuccessLine = false;
    if (this.errors && this.errors[0] !== 'success') {
      this.isErrorLine = true;
    }
  }

  handleControl(event) {
    this.errors = Object.keys(event);
    this.handlerError.emit(this.errors);
    this.isErrorLine = false;
    if (this.errors[0] === 'success' && this.messagesSuccess) {
      this.isSuccessLine = true;
    }
  }

  isRequired() {
    if (this.errors && this.errors[0] === 'required') {
      this.validationMoment.next(false);
      this.isErrorLine = false;
    }
  }

  createForm() {
    if (this.formControl === undefined) {
      this.formControl = new FormControl('');
    }
    if (this.required) {
      this.formControl.validator ?
        this.formControl.setValidators([this.formControl.validator, Validators.required]) :
        this.formControl.setValidators(Validators.required);
    } else {
      this.formControl.validator ?
        this.formControl.setValidators([this.formControl.validator]) :
        this.formControl.setValidators(Validators.nullValidator);
    }
  }

  private propagateChange = (_: any) => {
  }

  writeValue(obj: any): void {
    if (obj) {
      this.data = obj;
      this.cdRef.detectChanges();
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
  }

}
