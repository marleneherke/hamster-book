import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  postTexts = [
   'Hallo, mein Name ist Freddi. Ich bin hier, um neue Freunde zu finden.',
   'Hallo zusammen. Freut mich, dass ihr hier seid!!',
   'Hey Freunde der Sonne',
   'Tschö mit Ö'
  ]
  ;

  postImages = [
      'assets/img/hamster/1.jpg',
      'assets/img/hamster/2.jpg',
      'assets/img/hamster/3.jpg',
      'assets/img/hamster/5.jpg'

  ]
  ;

  buttonClicked(){
    alert('Hallo, wie geht es dir?')
  }
}
