import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit, DoCheck {

  public identity;
  public title;
  constructor(private _UserService: UserService) {
    this.title = 'Welcome to ZARXA!  ';
   }

  ngOnInit() {
    this.identity = this._UserService.getIdentity();
  }
  ngDoCheck() {
    this.identity = this._UserService.getIdentity();
  }

}
