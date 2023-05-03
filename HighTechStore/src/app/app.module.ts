import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PcPortableComponent } from './pc-portable/pc-portable.component';
import { PcBureauComponent } from './pc-bureau/pc-bureau.component';
import { PhonesModule } from './modules/phones/phones.module';
import { StockageModule } from './modules/stockage/stockage.module';
import { AjouterArticleFormComponent } from './ajouter-article-form/ajouter-article-form.component';
import {HttpClientModule} from '@angular/common/http';
import { PcPortableServiceService } from './pc-portable-service.service';
import { FormCreationArticleService } from './form-creation-article.service';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HomeService } from './home.service';
import { PcBureauServiceService } from './pc-bureau-service.service';
import { AccesOrdiServiceService } from './acces-ordi-service.service';
import { AccessoireOrdiComponent } from './accessoire-ordi/accessoire-ordi.component';
import { SmartPhoneComponent } from './smart-phone/smart-phone.component';
import { SmartPhoneServiceService } from './smart-phone-service.service';
import { TelephoneFixComponent } from './telephone-fix/telephone-fix.component';
import { TelephoneFixServiceService } from './telephone-fix-service.service';
import { AccessoireTelfixComponent } from './accessoire-telfix/accessoire-telfix.component';
import { AccesTelfixServiceService } from './acces-telfix-service.service';
import { DisqueDurComponent } from './disque-dur/disque-dur.component';
import { UsbComponent } from './usb/usb.component';
import { AccessoireStockageComponent } from './accessoire-stockage/accessoire-stockage.component';
import { DisqueDurServiceService } from './disque-dur-service.service';
import { AccueilComponent } from './accueil/accueil.component';
import { ArticleIdComponent } from './article-id/article-id.component';
import { ArticleIdServiceService } from './article-id-service.service';
import { UsersComponent } from './users/users.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DeconnexionComponent } from './deconnexion/deconnexion.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LigneDeCommandeComponent } from './ligne-de-commande/ligne-de-commande.component';
import { PanierComponent } from './panier/panier.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PcPortableComponent,
    PcBureauComponent,
    AjouterArticleFormComponent,
    FooterComponent,
    AccessoireOrdiComponent,
    SmartPhoneComponent,
    TelephoneFixComponent,
    AccessoireTelfixComponent,
    DisqueDurComponent,
    UsbComponent,
    AccessoireStockageComponent,
    AccueilComponent,
    ArticleIdComponent,
    UsersComponent,
    ConnexionComponent,
    DeconnexionComponent,
    NavbarComponent,
    LigneDeCommandeComponent,
    PanierComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhonesModule,
    StockageModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PcPortableServiceService,
    FormCreationArticleService,
    HomeService,
    PcBureauServiceService,
    AccesOrdiServiceService,
    SmartPhoneServiceService,
    TelephoneFixServiceService,
    AccesTelfixServiceService,
    DisqueDurServiceService,
    ArticleIdServiceService
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
