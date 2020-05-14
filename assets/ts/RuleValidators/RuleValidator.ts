export default abstract class RuleValidator {
  protected value: any;

  abstract setValue(value: any): this;

  abstract validate(input: any): boolean;
}
