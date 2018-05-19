import { Component } from '@angular/core';

/**
 * Generated class for the EmergencyComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'emergency',
  templateUrl: 'emergency.html'
})
export class EmergencyComponent {

  text: string;

  constructor() {
    console.log('Hello EmergencyComponent Component');
    this.text = 'Hello World';
  }

}
