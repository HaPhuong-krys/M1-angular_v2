import { Injectable } from '@angular/core';
import { LigneDeCommande } from './Model/LigneDeCommande';
import { PanierService } from './panier.service';

@Injectable({
  providedIn: 'root'
})

export class LigneDeCmdService {
  constructor() {}

  incrementQuantities(ligne: LigneDeCommande): void {
    ligne.quantite++;
  }

  decrementQuantities(ligne: LigneDeCommande): void {
    if (ligne.quantite > 1) {
      ligne.quantite--;
    }
  }
}
