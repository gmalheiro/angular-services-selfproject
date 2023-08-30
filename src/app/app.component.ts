import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-services-selfproject';

  accounts:[{'name':string,'status':string}] = [{'name':'First element','status':'active'}];

  pushToAccount(obj:any){
    this.accounts.push(obj);
  }

  logAccount(){
    console.log('From app');
    this.accounts.forEach( (element) => console.log(element) );
  }

}
