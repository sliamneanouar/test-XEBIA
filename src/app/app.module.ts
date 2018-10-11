import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable, Component, OnInit, ModuleWithProviders } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import {Router, Routes, RouterModule} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/modal/modal.component';
// import ngx-translate and the http loader
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { LanguageComponent } from './components/language/language.component';
import { CartShoppingComponent } from './components/cart-shopping/cart-shopping.component';
import { BookComponent } from './components/book/book.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';

const appRoutes: Routes = [
    // {path: 'navbar', component: NavbarComponent},
    // {path: '', component: AppComponent}
];
const appRoutingProviders: any[] = [];
const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    UserInfoComponent,
    LanguageComponent,
    CartShoppingComponent,
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
