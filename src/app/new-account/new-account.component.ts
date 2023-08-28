import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

  	@Output() account = new EventEmitter<{'accountName':string,'accountStatus':string}>

  onCreateAccount(accountName:string,accountStatus:string){
    let account:any = {'nome':accountName,'status':accountStatus} 
    console.log(account);
    this.account.emit(account);
  }
}
