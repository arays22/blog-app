import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { User } from '../models/user.model'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls:['./login.component.css'],
    providers: [ LoginService ]
})

export class LoginComponent {

    public user: User;

    constructor(private loginService: LoginService) {
        this.user = new User();

    }
}