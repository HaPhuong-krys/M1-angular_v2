import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LigneDeCommande } from '../Model/LigneDeCommande';
import { LigneDeCmdService } from '../ligne-de-cmd.service';

@Component({
  selector: 'app-ligne-de-commande',
  templateUrl: './ligne-de-commande.component.html',
  styleUrls: ['./ligne-de-commande.component.css'],
})
export class LigneDeCommandeComponent {
  @Input() ligne: LigneDeCommande = new LigneDeCommande(0, '', 0, 0);
  @Output() quantiteChange = new EventEmitter<number>();

  constructor(private ligneDeCommandeService: LigneDeCmdService) {}

  incrementQuantity(): void {
    this.ligneDeCommandeService.incrementQuantities(this.ligne);
    this.quantiteChange.emit(this.ligne.quantite);
  }

  decrementQuantity(): void {
    this.ligneDeCommandeService.decrementQuantities(this.ligne);
    this.quantiteChange.emit(this.ligne.quantite);
  }
}
