import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BancoProvider } from '../banco/banco';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the UsuariosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuariosProvider extends BancoProvider{

  cadastrar(email, senha) {
    return this.getDB().then((db:SQLiteObject) => {
      return db.executeSql(`INSERT INTO usuarios (email, senha) VALUES (?,?)`, [email, senha]);
    });
  }

  logar(email, senha) {
    this.getDB().then((db:SQLiteObject) => {
      db.executeSql(`SELECT email FROM usuarios WHERE email = ? AND senha = ?`, [email, senha])
      .then((resultado) => {
        if(resultado.rows.length > 0) {
          return resultado.rows.item(0).email;
        } else {
          return false;
        }
      });
    });
  }
}
