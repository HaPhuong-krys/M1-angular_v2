import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ligne-de-commande',
  templateUrl: './ligne-de-commande.component.html',
  styleUrls: ['./ligne-de-commande.component.css']
})
export class LigneDeCommandeComponent {
  public commandId: number = 0;
  @Input() articleId: number = 0;
  @Input() articleName: string = '';
  @Input() prix: number = 0;
  @Input() quantite: number = 0;
  @Input() userId: number = 0;  
  @Output() quantiteChange = new EventEmitter<number>();

  constructor() {}

  incrementQuantity(): void {
    this.quantite++;
    this.quantiteChange.emit(this.quantite);
  }
  
  decrementQuantity(): void {
    if (this.quantite > 1) {
      this.quantite--;
      this.quantiteChange.emit(this.quantite);
    }
  }
  
}
