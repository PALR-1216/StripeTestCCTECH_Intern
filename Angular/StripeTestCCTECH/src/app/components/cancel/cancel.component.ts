import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancel',
  standalone: true,
  imports: [],
  templateUrl: './cancel.component.html',
  styleUrl: './cancel.component.css'
})
export class CancelComponent {
  private _route = inject(Router);


  Retry() {
    // this._route.navigate(['/home'])
    // window.history.back();
    window.location.href ="/home"

  }
}
