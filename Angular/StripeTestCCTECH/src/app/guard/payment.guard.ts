// auth-guard.service.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PaymentGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    // Check your condition here, e.g., if payment is successful or cancelled
    const paymentSuccessful = true; // Set it to true or false based on your condition

    if (!paymentSuccessful) {
      // If payment is not successful, navigate to another route
      this.router.navigate(['/home']); // Navigate to home or any other route
      return false;
    }

    // If payment is successful, allow navigation to the success route
    return true;
  }
}
