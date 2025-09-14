import { Component } from '@angular/core';
import { tui_imports } from '../../shared-module';
import { TuiCurrency } from '@taiga-ui/addon-commerce';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TuiDay, TuiTime } from '@taiga-ui/cdk';
import { TuiTable } from "../tui-table/tui-table";

class User {
  constructor(
    protected readonly firstName: string,
    protected readonly lastName: string,
  ) { }

  protected toString(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Account {
  constructor(
    protected readonly id: string,
    protected readonly name: string,
    protected readonly amount: number,
    protected readonly currency: TuiCurrency,
    protected readonly cardSvg: string,
  ) { }
}



@Component({
  selector: 'app-reports-form',
  imports: [...tui_imports, TuiTable],
  templateUrl: './reports-form.html',
  styleUrl: './reports-form.less'
})
export class ReportsForm {
  protected readonly svgIcons = {
    common: 'https://ng-web-apis.github.io/dist/assets/images/common.svg',
    universal: 'https://ng-web-apis.github.io/dist/assets/images/universal.svg',
    intersection:
      'https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg',
    mutation:
      'https://ng-web-apis.github.io/dist/assets/images/mutation-observer.svg',
  };

  protected persons = [new User('Roman', 'Sedov'), new User('Alex', 'Inkin')];
  protected planStatuses = ['Draft', 'In Review', 'Approved'];

  protected accounts = [
    new Account('1', 'Common', 24876.55, TuiCurrency.Ruble, this.svgIcons.common),
    new Account('2', 'Universal', 335, TuiCurrency.Dollar, this.svgIcons.universal),
    new Account(
      '3',
      'Intersection',
      10000,
      TuiCurrency.Euro,
      this.svgIcons.intersection,
    ),
    new Account('4', 'Mutation', 100, TuiCurrency.Pound, this.svgIcons.mutation),
  ];

  protected testForm = new FormGroup({
    planName: new FormControl('', Validators.required),
    startDate: new FormControl(new TuiDay(2017, 2, 15), Validators.required),
    endDate: new FormControl(new TuiDay(2017, 2, 20), Validators.required),
    planStatus: new FormControl('', Validators.required),
    // textValue: new FormControl('', Validators.required),
    // passwordValue: new FormControl('', Validators.required),
    // phoneValue: new FormControl('', Validators.required),
    // moneyValue: new FormControl('100', Validators.required),
    // periodValue: new FormControl(new TuiDay(2017, 2, 15), Validators.required),
    // timeValue: new FormControl(new TuiTime(12, 30), Validators.required),
    // personValue: new FormControl(this.persons[0]),
    // quantityValue: new FormControl(50_000),
    // radioValue: new FormControl('with-commission'),
    // accountWherefrom: new FormControl<Account | null>(null),
    // accountWhere: new FormControl<Account | null>(null),
    // checkboxValue: new FormControl(false),
    // osnoValue: new FormControl(true),
    // usnValue: new FormControl(false),
    // eshnValue: new FormControl(false),
    // envdValue: new FormControl(false),
  });


  protected data: Array<Record<string, number | string>> = [{ id: 1, name: 'name' }];

  protected get columns(): string[] {
    return Object.keys(this.data[0] ?? {});
  }

  protected addColumn(): void {
    this.data = this.data.map((item) => ({
      ...item,
      [`extra-${this.columns.length + 1}`]: `extra column ${this.columns.length + 1
        }`,
    }));
  }

  protected addRows(): void {
    this.data = [...this.data, { ...this.data[0], id: this.data.length + 1 }];
  }


}
