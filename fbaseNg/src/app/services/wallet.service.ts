// Your web app's Firebase configuration
import * as firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB3onqffHb3e4kghPxEM2kQkmwU8az-aXU",
  authDomain: "wallet-b41a4.firebaseapp.com",
  databaseURL: "https://wallet-b41a4.firebaseio.com",
  projectId: "wallet-b41a4",
  storageBucket: "",
  messagingSenderId: "570454647285",
  appId: "1:570454647285:web:d00159e7ebbc1676"
};

export class WalletService {

  public dataset: Array<any> = [];
  // public dataset: Array<{
  //   date: string,
  //   type: string,
  //   value: number
  // }> = [];

  public types: Array<string> = [
    'Paliwo',
    'Zabawa',
    'Monopolowy'
  ];

  public data: string = '';
  public type: string = this.types[0];
  public value: number = 0;

  public firebase;
  public db;

  constructor() {
    this.firebase = firebase.initializeApp(firebaseConfig);
    this.db = firebase.firestore();

    // Pobieranie danych
    this.fetch();
  }

  public fetch(): void {
    this.db.collection('dataset')
    //.where('value', '==', 100)
    .get()
    .then(collection => {
      this.dataset = []; // czyszczenie
      collection.forEach(element => {
        this.dataset.push(element);
      });
    });
  }

  public add() {


    this.db.collection('dataset')
    .add({date: this.data, type: this.type, value: this.value})
    .then(documentReference => this.fetch());


    this.data = '';
    this.type = '';
    this.value = 0;
  }

  delete(document: any): void {
    document.ref.delete().then(() => this.fetch());
  }
}
