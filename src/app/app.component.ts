import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recess';

  onClick() {
    var popup = document.getElementById('popup')
    popup.style.display = "none";
  };
}
