import { OnInit, OnDestroy, Component } from "@angular/core";
import {loginService} from "../services/login.service";
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy{

    usuario: string;
    password: string;

    constructor(private _login: loginService, private router: Router){
    }
    ngOnInit(){
    }
    ngOnDestroy(){
    }
    sesionInicio(usuario: string){
        let sesion=this._login.validarUsuario(this.usuario, this.password);
        if(sesion ){
            this.router.navigate(['home']);
        }else{
    alert('Incorrecto');
        }
    }

}