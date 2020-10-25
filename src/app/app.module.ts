import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './auth/register/register.component';
import {Router, RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { ContentComponent } from './layout/content/content.component';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cart', component: CartComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'auth/register', component: RegisterComponent},
  { path: 'admin-panel', component: AdminPanelComponent},
  { path: 'category', component: CategoryComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AuthComponent,
    RegisterComponent,
    PageNotFoundComponent,
    LayoutComponent,
    FooterComponent,
    HeaderComponent,
    ContentComponent,
    CategoryComponent,
    CartComponent,
    AdminPanelComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
