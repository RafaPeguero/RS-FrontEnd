import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  public tittle: string;
  public user: User;
  public status: string;

  // sonIguales( campo1: string, campo2: string) {
  //   return(group: any) => {

  //     let pass1 = group.controls[campo1].value;
  //     let pass2 = group.controls[campo2].value;

  //     if ( pass1 === pass2) {
  //       return null;
  //     }
  //     return{
  //       sonIguales: true
  //     };
  //   };
  // }
  constructor( private _route: ActivatedRoute,
                private _router: Router,
                private _UserService: UserService) {
                  this.tittle = 'SIGN UP';
                  this.user = new User('', '', '', '', '', '', 'ROLE_USER', '');
                }

  ngOnInit() {
  }

  onSubmit(Form) {

    if (this.user.password.length < 5) {
      this.status = 'Form-error';
    } else {
      this._UserService.register(this.user).subscribe(res => {

        if (res.user && res.user._id) {
              this.status = 'success';
              Form.reset();
            } else {
              this.status = 'error';
            }
          },
         err => {
           console.log(<any> err);
         });
    }

  }

}
