import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WalletComponent } from './components/wallet/wallet.component';

const routes: Routes = [
  { path: 'wallet', component: WalletComponent},
  { path: '', redirectTo: 'wallet', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
