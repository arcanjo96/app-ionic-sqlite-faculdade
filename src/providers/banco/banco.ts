import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the BancoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export abstract class BancoProvider {

  constructor(private sqlite: SQLite) {
    console.log('Hello BancoProvider Provider');
    this.createDB();
  }

  protected getDB(): Promise<SQLiteObject> {
    return this.sqlite.create({
      name: 'data.db',
      location: 'default'
    });
  }

  private createDB() {
    this.getDB().then((db:SQLiteObject) => {
      //Cria Tabela de Usuários
      db.executeSql(`CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT,
        senha TEXT
      )`);

      //Cria Tabela de Tarefas
      db.executeSql(`CREATE TABLE IF NOT EXISTS tarefas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      descricao TEXT,
      prazo DATE
      )`);
    });
  }
}
