import { Component } from '@angular/core';
import { TuiButton } from '@taiga-ui/core';
import { TuiNavigation } from '@taiga-ui/layout';

@Component({
  selector: 'app-header',
  imports: [TuiButton,TuiNavigation],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
