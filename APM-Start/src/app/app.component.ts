import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = "Phillip's Angular Demo";
  toastText = '';
  toastType = 'info';
  toastVisible = false;

  displayToast(message: string, type: string = 'info') {
    this.toastVisible = true;
    this.toastType = type;
    this.toastText = message;
    setTimeout(() => (this.toastVisible = false), 4990);
  }
}
