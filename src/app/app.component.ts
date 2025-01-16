import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar'; // Імпортуємо MatToolbarModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Імпортуємо BrowserAnimationsModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, BrowserAnimationsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'User Management System';
}
