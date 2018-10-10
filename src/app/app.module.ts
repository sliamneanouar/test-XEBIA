import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable, Component, OnInit, ModuleWithProviders } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {Router, Routes, RouterModule} from '@angular/router';
import { NevbarLeftComponent } from './Navbar/nevbar-left/nevbar-left.component';
import { NavbarRightComponent } from './Navbar/navbar-right/navbar-right.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
// import ngx-translate and the http loader
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { UserInfoComponent } from './user-info/user-info.component';
import { LanguageComponent } from './language/language.component';
import { CartShoppingComponent } from './cart-shopping/cart-shopping.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

const appRoutes: Routes = [
    // {path: 'navbar', component: NavbarComponent},
    // {path: '', component: AppComponent}
];
const appRoutingProviders: any[] = [];
const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NevbarLeftComponent,
    NavbarRightComponent,
    ModalComponent,
    UserInfoComponent,
    LanguageComponent,
    CartShoppingComponent,
    CarouselComponent,
    BookComponent,
    BookListComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    CommonModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes, { useHash: true }),
    NgbModule.forRoot(),
    HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
