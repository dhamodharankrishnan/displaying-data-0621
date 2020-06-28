import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  itemImageUrl = '../assets/phone.png';
  isUnchanged = true;
  classes = 'special';
  parentItem = 'Switch';

  currentItems = [
    {
    id: 21,
    name: 'phone'
  },
  {
    id: 22,
    name: 'computer'
  }
];

  interpolationTitle = 'Interpolation';
  propertyTitle = 'Property binding';

  evilTitle = 'Template <script>alert("evil never sleeps")</script> Syntax';
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/