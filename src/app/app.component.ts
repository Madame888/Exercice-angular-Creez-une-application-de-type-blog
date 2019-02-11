import {Component, Input, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
  {
    title: 'Le masque de visage',
    content: 'Bonjour. Le sujet du jour vous me le demandez tout le temps',
    createdAt: new Date()
  },
  {
    title: 'Le gommage',
    content: 'Bienvenue. Nous parlerons aujourdhui de soin de visage',
    createdAt: new Date()
  },

  {
    title: 'La crème de visage',
    content: 'Quel beau sujet! Il me tardait. Abonnez-vous!',
    createdAt: new Date()
  }
];


}
