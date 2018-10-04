import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  formulario: FormGroup

  constructor(public navCtrl: NavController, public navParams: NavParams, formBuilder: FormBuilder, private usuarioProvider: UsuariosProvider) {

    this.formulario = formBuilder.group({
      email: [""],
      senha: [""]
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
