import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { SucessComponent } from './components/sucess/sucess.component';
import { PaymentGuard } from './guard/payment.guard';
import { CancelComponent } from './components/cancel/cancel.component';

export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'productView/:productID', component:ViewProductComponent},
    {path:'success', component:SucessComponent},
    {path:'cancel', component:CancelComponent},
    {path:'**', redirectTo:'/home'}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]

})

export class AppRoutingModule{}