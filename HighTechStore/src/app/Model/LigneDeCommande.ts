export class LigneDeCommande {
    public commandId: number = 0;
    public articleId: number = 0;
    public articleName: string = '';
    public prix: number = 0;
    public quantite: number = 0;
    public userId: number = 0;
  
    constructor(commandId: number, articleName: string, prix: number, quantite: number) {
      this.commandId = commandId;
      this.articleName = articleName;
      this.prix = prix;
      this.quantite = quantite;
    }
  }