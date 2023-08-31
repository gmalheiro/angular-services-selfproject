import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  accounts:[{'name':string,'status':string}] = [{'name':'First element','status':'active'}];

  statusUpdated = new EventEmitter<string>();


  pushToAccount(obj:any){
    this.accounts.push(obj);
  }

  updatedStatus(id:number,newStatus:string){
    this.accounts[id].status = newStatus;
  }
  
}
