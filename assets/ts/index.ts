/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { length } from './RuleValidators/LengthValidator';
import { minLength } from './RuleValidators/MinLengthValidator';
import { maxLength } from './RuleValidators/MaxLengthValidator';
import { pattern } from './RuleValidators/PatternValidator';

// eslint-disable-next-line func-names
const simpleValidator = function (input: string, rules: any[]): boolean {
  return rules.every(rule => rule.validate(input));
}

export { length, minLength, maxLength, pattern };
export default simpleValidator;