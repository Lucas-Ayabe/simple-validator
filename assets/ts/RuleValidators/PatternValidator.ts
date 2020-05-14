/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import RuleValidator from './RuleValidator';

export default class PatternValidator extends RuleValidator {
    value: RegExp;
  
    constructor(value: RegExp) {
      super();
      this.setValue(value);
    }
  
    setValue(value: RegExp) {
      this.value = value;
  
      return this;
    }
  
    validate(input: string) {
      return this.value.test(input);  
    }
}

export const pattern = (value: RegExp) => {
    return new PatternValidator(value);
};