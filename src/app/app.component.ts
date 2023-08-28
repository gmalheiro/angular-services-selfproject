import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-services-selfproject';

  account:[{'name':string,'status':string}] = [{'name':'First element','status':'active'}];

  pushToAccount(obj:any){
    this.account.push(obj);
  }

  logAccount(){
    console.log('From app');
    this.account.forEach( (element) => console.log(element) );
  }

}
