import { Component } from '@angular/core';
import { TuiButton, TuiIcon, TuiIconPipe } from '@taiga-ui/core';
import { TuiNavigation } from '@taiga-ui/layout';

@Component({
  selector: 'app-header',
  imports: [TuiButton,TuiNavigation,TuiIcon, TuiIconPipe],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
