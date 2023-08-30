import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  accounts:[{'name':string,'status':string}] = [{'name':'First element','status':'active'}];
}
