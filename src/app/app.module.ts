import { AboutComponent } from './component/about/about.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './component/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ProductFormsComponent } from './component/product-forms/product-forms.component';
import { ProductsComponent } from './component/products/products.component';
import { RouterModule } from '@angular/router';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { LayoutWebsiteComponent } from './layouts/layout-website/layout-website.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule } from './ng-zorro-antd.module';
import { IconsProviderModule } from './icons-provider.module';
import { SigninComponent } from './page/signin/signin.component';
import { SignupComponent } from './page/signup/signup.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AboutComponent,
    ProductDetailComponent,
    HeaderComponent,
    ProductFormsComponent,
    LoginComponent,
    LayoutAdminComponent,
    LayoutWebsiteComponent,
    SigninComponent,
    SignupComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    IconsProviderModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
