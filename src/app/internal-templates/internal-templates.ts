import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualForOf,
  CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling';
import { Component } from '@angular/core';
import { TuiComparator, TuiTable } from '@taiga-ui/addon-table';
import { TuiDay, tuiToInt } from '@taiga-ui/cdk';
import { TuiAppearance, TuiButton, TuiIcon, TuiScrollable, TuiScrollbar, TuiTitle } from '@taiga-ui/core';
import { TuiBadge, TuiBadgeNotification, TuiButtonGroup, TuiIconBadge } from '@taiga-ui/kit';
import { TuiHeader } from '@taiga-ui/layout';

interface User {
  readonly dob: TuiDay;
  readonly name: string;
}

const TODAY = TuiDay.currentLocal();
const FIRST = [
  'John',
  'Jane',
  'Jack',
  'Jill',
  'James',
  'Joan',
  'Jim',
  'Julia',
  'Joe',
  'Julia',
];

const LAST = [
  'Smith',
  'West',
  'Brown',
  'Jones',
  'Davis',
  'Miller',
  'Johnson',
  'Jackson',
  'Williams',
  'Wilson',
];

const DATA: readonly User[] = Array.from({ length: 300 }, () => ({
  name: `${LAST[Math.floor(Math.random() * 10)]}, ${FIRST[Math.floor(Math.random() * 10)]
    }`,
  dob: TODAY.append({ day: -Math.floor(Math.random() * 4000) - 7500 }),
}));

function getAge({ dob }: User): number {
  const years = TODAY.year - dob.year;
  const months = TODAY.month - dob.month;
  const days = TODAY.day - dob.day;
  const offset = tuiToInt(months > 0 || (!months && days > 9));

  return years + offset;
}


@Component({
  selector: 'app-internal-templates',
  imports: [TuiBadgeNotification,
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf,
    CdkVirtualScrollViewport,
    TuiScrollable,
    TuiScrollbar,
    TuiTable, TuiButton, TuiBadge, TuiHeader, TuiTitle, TuiAppearance, TuiButtonGroup, TuiIcon, TuiIconBadge, TuiScrollbar],
  templateUrl: './internal-templates.html',
  styleUrl: './internal-templates.scss'
})
export class InternalTemplates {
  protected readonly data = DATA;

  protected readonly columns = ['name', 'dob', 'age'];

  protected readonly getAge = getAge;

  protected readonly ageSorter: TuiComparator<User> = (a: User, b: User) =>
    getAge(a) - getAge(b);
}
