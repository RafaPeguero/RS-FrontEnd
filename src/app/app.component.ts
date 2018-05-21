import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from './services/user.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  public title: string;
  public identity;
  constructor(private _UserService: UserService,
              private _route: ActivatedRoute,
              private _router: Router) {
    this.title = 'ZARXA';
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.identity = this._UserService.getIdentity();
    console.log(this.identity);
  }
  ngDoCheck() {
    this.identity = this._UserService.getIdentity();
  }

  logout() {
    localStorage.clear();
    this.identity = null;
    this._router.navigate(['/']);
  }
}
