import { Component, OnInit } from '@angular/core';
import { AccountsService } from './shared/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AccountsService]
})
export class AppComponent {
  title = 'angular-services-selfproject';

  constructor(private accountsService:AccountsService){}

  accounts:{'name':string,'status':string}[] = [];

  ngOnInit() : void{
    this.accounts = this.accountsService.accounts;
  }
  
}
