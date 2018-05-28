import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UploadService } from '../../services/upload.service';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styles: []
})
export class UserEditComponent implements OnInit {

  public title: string;
  public user: User;
  public identiy;
  public token;
  public status: string;
  constructor( private _route: ActivatedRoute,
    private _router: Router,
    private _UsuarioService: UserService,
    private _UploadService: UploadService) {
      this.title = ' Mis datos';
      this.user = this._UsuarioService.getIdentity();
      this.identiy = this.user;
      this.token = this._UsuarioService.getToken();
    }


  ngOnInit() {
  }

  onSubmit() {
    this._UsuarioService.updateUser(this.user).subscribe(
      res => {
        if (!res.user) {
          this.status = 'error';
        } else {
          this.status = 'success';
          localStorage.setItem('identity', JSON.stringify(this.user));
          this.identiy = this.user;

          // Subir imagen de usuario
        }
      }, err => {
        let errorMessage = <any>err;
        console.log(errorMessage);

        if (errorMessage != null) {
          this.status = 'error';
        }
      });
  }
  // tslint:disable-next-line:member-ordering
  public filesToUpload: Array<File>;
  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array <File>>fileInput.target.files;
  }
}
