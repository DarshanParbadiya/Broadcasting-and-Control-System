import {ChangeDetectionStrategy, Component} from '@angular/core';
import { RouterModule } from '@angular/router';
import {tuiAsPortal, TuiPortals, TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiAppearance, TuiButton, TuiDropdownService, TuiTitle} from '@taiga-ui/core';
import {TuiChevron, TuiFade} from '@taiga-ui/kit';
import {
    TuiCardLarge,
    TuiHeader,
    tuiLayoutIconsProvider,
    TuiNavigation,
} from '@taiga-ui/layout';
 

@Component({
  selector: 'app-navigation',
  imports: [
    TuiAppearance,
    TuiButton,
    TuiCardLarge,
    TuiChevron,
    TuiFade,
    TuiHeader,
    TuiNavigation,
    TuiRepeatTimes,
    TuiTitle,
    RouterModule,
    
],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss'
})
export class Navigation {
 protected open = true;
 isAsideOpen = true;
  

    

 toggleSidebar() {
    this.isAsideOpen = !this.isAsideOpen;
 }
}
