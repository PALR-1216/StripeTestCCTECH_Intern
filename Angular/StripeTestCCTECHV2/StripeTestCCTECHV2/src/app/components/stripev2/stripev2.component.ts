import { Component, ViewChild, inject } from '@angular/core';
import {
  injectStripe,
  StripeElementsDirective,
  StripeCardComponent,
  StripeService
} from 'ngx-stripe';

import {
  StripeElementsOptions,
  StripeCardElementOptions
} from '@stripe/stripe-js';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';




@Component({
  selector: 'app-stripev2',
  templateUrl: './stripev2.component.html',
  styleUrl: './stripev2.component.css'
})
export class Stripev2Component {

  constructor() { }
  handler:any = null;
  ngOnInit() {
 
    this.loadStripe();
  }
 
  pay(amount: any) {    
 
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51OrLO8Rq3xShrsxlqS4kGIHM74kriKhkwnjlCkQWkADtb2m7n8o6G97Vi9IEKNT1BogW8riA87YWHWw3jXXmVLw6007HLPjsOJ',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        alert('Token Created!!');
      }
    });
 
    handler.open({
      name: 'CCTECH',
      description: 'Stripe Test by Pedro',
      amount: amount * 100
    });
 
  }
 
  loadStripe() {
     
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51OrLO8Rq3xShrsxlqS4kGIHM74kriKhkwnjlCkQWkADtb2m7n8o6G97Vi9IEKNT1BogW8riA87YWHWw3jXXmVLw6007HLPjsOJ',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!');
          }
        });
      }
       
      window.document.body.appendChild(s);
    }
  }
}