import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

const NUMBER_REGEXP = /^\d+$/;
const EMAIL_REGEXP = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

export function isEmpty(value: any): boolean {
  return (typeof value === 'string' && value === '');
}

@Injectable()
export class CustomValidators {

  static cuilSinGuiones(control: AbstractControl): ValidationErrors | null {
    if (isEmpty(control.value)) {
      return null;
    }
    const esNumero = NUMBER_REGEXP.test(control.value);
    const largoCorrecto = control.value.length === 11;
    return esNumero && largoCorrecto ? null : { cuil: true };
  }

  static number(control: AbstractControl): ValidationErrors | null {
    if (isEmpty(control.value)) {
      return null;
    }
    return NUMBER_REGEXP.test(control.value) ? null : { number: true };
  }

  static email(control: AbstractControl) {
    if (isEmpty(control.value)) {
      return null;
    }
    return EMAIL_REGEXP.test(control.value) ? null : { email: true };
  }

  static minValue(minValue: number): ValidatorFn {

    const aux = (control) => {
      // tslint:disable-next-line: variable-name
      const number = CustomValidators.number(control);

      if ((number)) {
        return number;
      }

      if (isEmpty(control.value)) {
        return null;
      }

      const value = Number(control.value);

      return isNaN(value) || (value < minValue) ?
        { minvalue: { requiredValue: minValue, actualValue: control.value } } :
        null;
    };
    return aux;
  }

  static pattern(regExp: any): ValidatorFn {

    const aux = (control) => {

      if (isEmpty(control.value)) {
        return null;
      }
      const reg = new RegExp(regExp);

      return reg.test(control.value) ? null : { pattern: true };
    };
    return aux;
  }

  static maxValue(maxValue: number) {
    const aux = (control) => {

      // tslint:disable-next-line: variable-name
      const number = CustomValidators.number(control);

      if ((number)) {
        return number;
      }

      if (isEmpty(control.value)) {
        return null;
      }

      const value = Number(control.value);

      return isNaN(value) || (value > maxValue) ?
        { maxvalue: { requiredValue: maxValue, actualValue: control.value } } :
        null;
    };
    return aux;
  }

  static maxlength(maxLength: number) {
    const aux = (control) => {

      if (isEmpty(control.value)) {
        return null;
      }

      const length = control.value.length;

      return length > maxLength ?
        { maxlength: { requiredLength: maxLength, actualValue: length } } :
        null;

    };
    return aux;
  }

  static minlength(minLength: number) {
    const aux = (control) => {

      if (isEmpty(control.value)) {
        return null;
      }

      const length = control.value.length;

      return length < minLength ?
        { minlength: { requiredLength: minLength, actualValue: length } } :
        null;

    };
    return aux;
  }
}

export class ErrorMessages {
  static messageOf(validatorName: string, validatorValue?: any) {
    const config = {
      required: 'El campo es requerido',
      alphanumber: 'Ingresar sólo letras y/o números',
      number: 'Ingresar sólo números',
      email: 'El email es inválido',
      ...(validatorValue && validatorValue.requiredLength) ? {
        maxlength: `No superar los ${validatorValue.requiredLength} caracteres`,
        minlength: `Ingresar al menos ${validatorValue.requiredLength} caracteres`,
        minvalue: `El valor mínimo es ${validatorValue.requiredValue}`,
        maxvalue: `El valor máximo es ${validatorValue.requiredValue}`
      } : {}
    };
    return config[validatorName];
  }
}
