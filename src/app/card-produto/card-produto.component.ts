import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css']
})
export class CardProdutoComponent {
  cards: any[] = [];

  constructor(private http: HttpClient) { } // Injete o HttpClient no construtor

  ngOnInit(): void {
    this.http.get<any[]>('./assets/cards.json').subscribe(data => {
      this.cards = data;
    });
  }
}
