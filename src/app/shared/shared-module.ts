import { AsyncPipe, CommonModule, KeyValuePipe, NgForOf, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TuiCurrencyPipe } from '@taiga-ui/addon-commerce';
import { TuiLet, TuiRepeatTimes } from '@taiga-ui/cdk';
import {
  TuiAppearance,
  TuiButton,
  TuiDataList,
  TuiDropdown,
  TuiError,
  TuiGroup,
  TuiIcon,
  TuiLabel,
  TuiLink,
  TuiLoader,
  TuiNumberFormat,
  TuiTextfield,
  TuiTitle,
} from '@taiga-ui/core';
import {
  TuiAvatar,
  TuiBadge,
  TuiBadgeNotification,
  TuiBlock,
  TuiBreadcrumbs,
  TuiCheckbox,
  TuiChevron,
  TuiDataListDropdownManager,
  TuiDataListWrapper,
  TuiFade,
  TuiFieldErrorPipe,
  TuiInputDate,
  TuiInputNumber,
  TuiPassword,
  TuiRadio,
  TuiSelect,
  TuiSwitch,
  TuiTabs,
  TuiTooltip,
} from '@taiga-ui/kit';
import { TuiCardLarge, TuiForm, TuiHeader, TuiNavigation } from '@taiga-ui/layout';
import {
  TuiInputDateModule,
  TuiInputModule,
  TuiInputPhoneModule,
  TuiInputSliderModule,
  TuiInputTimeModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';
	import {TuiReorder, TuiTable, TuiTablePagination} from '@taiga-ui/addon-table';

export const tui_imports = [
  AsyncPipe,
  ReactiveFormsModule,
  TuiBlock,
  TuiButton,
  TuiCheckbox,
  TuiChevron,
  TuiCurrencyPipe,
  TuiDataListWrapper,
  TuiError,
  TuiFieldErrorPipe,
  TuiForm,
  TuiGroup,
  TuiHeader,
  TuiIcon,
  TuiInputDateModule,
  TuiInputModule,
  TuiInputNumber,
  TuiInputPhoneModule,
  TuiInputSliderModule,
  TuiInputTimeModule,
  TuiLabel,
  TuiPassword,
  TuiRadio,
  TuiSelect,
  TuiTextfield,
  TuiTextfieldControllerModule,
  TuiTitle,
  TuiTooltip,
  FormsModule,
  KeyValuePipe,
  NgForOf,
  NgIf,
  RouterLink,
  RouterLinkActive,
  TuiAppearance,
  TuiAvatar,
  TuiBadge,
  TuiBadgeNotification,
  TuiBreadcrumbs,
  TuiButton,
  TuiCardLarge,
  TuiChevron,
  TuiDataList,
  TuiDataListDropdownManager,
  TuiDropdown,
  TuiFade,
  TuiForm,
  TuiHeader,
  TuiIcon,
  TuiLink,
  TuiNavigation,
  TuiRepeatTimes,
  TuiSwitch,
  TuiTabs,
  TuiTextfield,
  TuiTitle,
  FormsModule, TuiInputDate, TuiTextfield,
  TuiButton, TuiLet, TuiTable,
   TuiTablePagination,TuiReorder, TuiLoader, TuiNumberFormat,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

  ]


})
export class SharedModule { }
