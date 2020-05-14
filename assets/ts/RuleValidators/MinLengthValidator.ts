/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import RuleValidator from './RuleValidator';

export default class MinLengthValidator extends RuleValidator {
    value: number;
  
    constructor(value: number) {
      super();
      this.setValue(value);
    }
  
    setValue(value: number) {
      this.value = value;
  
      return this;
    }
  
    validate(input: string) {
      return input.length >= this.value;  
    }
}

export const minLength = (value: number) => {
    return new MinLengthValidator(value);
};