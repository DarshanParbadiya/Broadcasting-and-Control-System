import {NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import {TUI_FALSE_HANDLER, TuiAnimated} from '@taiga-ui/cdk';
import {TuiButton, TuiLoader} from '@taiga-ui/core';
import {TuiAvatar, TuiNotificationMiddle} from '@taiga-ui/kit';
import {filter, map, startWith, switchMap, take, tap, timer} from 'rxjs';
import { Header } from '../header/header';

@Component({
  selector: 'app-home',
  imports: [TuiButton,NgIf, TuiAnimated, TuiAvatar, TuiButton, TuiLoader, TuiNotificationMiddle,Header],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  protected readonly open = signal(false);
    protected readonly loading = toSignal(
        toObservable(this.open).pipe(
            filter(Boolean),
            switchMap(() =>
                timer(3000, 2000).pipe(
                    take(2),
                    map(TUI_FALSE_HANDLER),
                    startWith(true),
                    tap({complete: () => this.open.set(false)}),
                ),
            ),
        ),
    );
 
    protected onClick(): void {
        this.open.set(true);
    }
}
