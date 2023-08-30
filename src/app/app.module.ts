import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountComponent } from './account/account.component';
import { AccountsService } from './shared/accounts.service';

@NgModule({
  declarations: [
    AppComponent,
    NewAccountComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AccountsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
