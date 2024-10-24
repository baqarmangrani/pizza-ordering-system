import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OrderEntryComponent } from './components/order-entry/order-entry.component'; // Adjust the path as necessary

@Component({
  selector: 'app-root',
  standalone: true, // Mark as standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [OrderEntryComponent], // Import OrderEntryComponent here
})
export class AppComponent {
  title = 'pizza-ordering-system';
}
