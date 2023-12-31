import { Component, EventEmitter, Output } from '@angular/core';

import { AccountsService } from '../shared/accounts.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

  constructor(private accountsService:AccountsService) {
   this.accountsService.statusUpdated.subscribe((status:string) =>(alert('New status: '+status)));

  }

  onCreateAccount(accountName:string,accountStatus:string){
   this.accountsService.pushToAccount({name:accountName,status:accountStatus})
   console.log('New account added:'+ JSON.stringify({name:accountName,status:accountStatus}));
  }
}
