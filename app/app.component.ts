import { Component } from '@angular/core';
import {CalculatorModel} from 'app/model';

@Component({
  selector: 'calculator',
  template: `
    <h1>
     {{appTitle}}
    </h1>
      
    <div class="container">
      <div class="box">
        {{calculatorModel.InputValue}}
      </div>
        
      <div class="action-button">
        <div *ngFor="let value of [9,8,7,6,5,4,3,2,1,0]" style="float:left">
          <button class="number" (click)="onNumberClick(value)">{{value}}</button>
        </div>
        <div *ngFor="let value of ['+', '-', '/', '*', '=']" style="float:left">
          <button class="number" (click)="onOperatorClick(value)">{{value}}</button>
        </div>      
      </div>
    </div>    
  `,
  styles: [`
    .container {
      width: 300px;
    }
    
    .box {
      background-color:#e6e8e3;
      width:300px;
      border:1px solid #000;
      text-align:right;
      padding-top:8px;
      padding-bottom:10px;
      padding-top:10px;
      padding-left:2px;
      padding-right:2px;
      height: 20px;
      font-size: 20px;
    }
    
    .number {
      width:75px;
      height: 65px;
      margin: 12px;
      font-size: 20px;
    }
    
    .action-button {
      border-left: 1px solid #000;
      border-right: 1px solid #000;
      border-bottom: 1px solid #000;
      height: 445px;
      width: 304px;
      text-align: center;
    }    
  `],
  host: {
    '(document:keyup)': 'onDocumentKeyUp($event)'
  }  
})

export class AppComponent { 
  appTitle:string = 'Calculator';
  
  calculatorModel: CalculatorModel;
  
  constructor() {
    this.calculatorModel = new CalculatorModel();
  }

  /**
   * This event handler is used to build native event binding for keyup event
   * This will make this calculator working with keyboard directly.
   * @method {onNumberClick}
   * @param {value} Number any value between 0-9
   * @return void
   */  
  public onDocumentKeyUp(e:KeyboardEvent) {
    let key = e.key;
    
    if(Number(key)) {
      this.onNumberClick(Number(key));
    }
    else {
      this.onOperatorClick(key === 'Enter'? '=' : key);
    }
  }
  
  /**
   * There are buttons which are placed in UI having value 0-9
   * This callback handler is responsible for handling the number keys.
   * This can additionally be triggered when user presses a key from the
   * keyboard.
   * @method {onNumberClick}
   * @param {value} Number any value between 0-9
   * @return void
   */
  public onNumberClick(value:number): void {
    switch(value) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9: {
        this.calculatorModel.InputValue = 
          this.calculatorModel.InputValue + value;
        break;
      }
    }
  }
  
  /**
   * There are buttons which are placed in UI having values + - * / =
   * This callback handler is responsible for handling these operators.
   * This can additionally be triggered when user presses a key from the
   * keyboard.
   * @method {onNumberClick}
   * @param {value} Number operator key like + - * / =
   * @return void
   */  
  public onOperatorClick(op:string): void {
    switch(op) {
      case '+':
      case '-':
      case '/':
      case '*':  {
        this.calculatorModel.OldValue = this.calculatorModel.InputValue;
        this.calculatorModel.InputValue = '';
        this.calculatorModel.Operator = op;
        break;
      }
      
      case '=': {
        this.calculatorModel.NewValue = this.calculatorModel.InputValue;
        this.calculatorModel.InputValue = 
          eval(this.calculatorModel.OldValue + this.calculatorModel.Operator + 
            this.calculatorModel.NewValue);
        this.calculatorModel.OldValue = 0;
        this.calculatorModel.NewValue = 0;
      }
    }
  }  
}
