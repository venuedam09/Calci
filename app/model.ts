export class CalculatorModel {
  private inputValue:string;
  private oldValue:string;
  private newValue:string;
  private operator:string;
  
  constructor() {
    this.inputValue = '';
    this.oldValue = '0';
    this.newValue = '0';
  }

  public get InputValue() {
    return this.inputValue;
  }
  
  public set InputValue(value:string) {
    this.inputValue = value;
  }

  public get OldValue() {
    return this.oldValue;
  }
  
  public set OldValue(value:string) {
    this.oldValue = value;
  }
  
  public set NewValue(value:string) {
    this.newValue = value;
  }
  
  public get NewValue() {
    return this.newValue;
  }

  public get Operator() {
    return this.operator;
  }  
  
  public set Operator(value:string) {
    this.operator = value;
  }
}