import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  id : string = "1";
  name : string= '1000 Years of Joys and Sorrows';
  author : string= 'Ai Weiwei';
  isbn : string = '0553419463';
  src : string= "https://images-na.ssl-images-amazon.com/images/I/51ttp1m0o7L._SX327_BO1,204,203,200_.jpg"


  id2 : string = "2";
  name2 : string= 'Acts of Desperation ';
  author2 : string= 'Megan Nolan';
  isbn2 : string = '0316429856';
  src2 : string= "https://images-na.ssl-images-amazon.com/images/I/41phwHkJthL._SX329_BO1,204,203,200_.jpg"


  isShowing = false;

  constructor() { }

  ngOnInit(): void {
  }

}
