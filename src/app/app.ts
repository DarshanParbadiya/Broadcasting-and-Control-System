import { TuiRoot } from "@taiga-ui/core";
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
	import {TuiNavigation} from '@taiga-ui/layout';
import { Dashboard } from "./dashboard/dashboard";
import { Navigation } from "./navigation/navigation";
import { Header } from "./header/header";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TuiRoot, TuiNavigation, Navigation, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('taiga-app');
  protected readonly expanded =true;
}
