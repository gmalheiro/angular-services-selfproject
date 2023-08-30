import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  @Input() account: {name: string, status: string};
  @Input() id: number;

  onSetTo(status:string){
    console.log(status);
  }

}
