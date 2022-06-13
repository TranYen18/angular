import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductManagerComponent } from './page/admin/products/product-manager/product-manager.component';
import { ProductFormsComponent } from './page/admin/products/product-forms/product-forms.component';
import { UserManagerComponent } from './page/admin/user/user-manager/user-manager.component';
import { AdminLayoutComponent } from './page/layouts/admin/admin-layout/admin-layout.component';
import { AdminContentComponent } from './page/layouts/admin/admin-content/admin-content.component';
import { WebsiteLayoutComponent } from './page/layouts/website/website-layout/website-layout.component';
import { WebsiteContentComponent } from './page/layouts/website/website-content/website-content.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule } from './ng-zorro-antd.module';
import { IconsProviderModule } from './icons-provider.module';
import { SignInComponent } from './page/sign-in/sign-in.component';
import { SignUpComponent } from './page/sign-up/sign-up.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { BlogComponent } from './page/blog/blog.component';
import { WorkComponent } from './page/work/work.component';
import { UserFormsComponent } from './page/admin/user/user-forms/user-forms.component';
import { CategoryPostComponent } from './page/admin/categories/Post/category-post/category-post.component';
import { CategoryPostFormComponent } from './page/admin/categories/Post/category-post-form/category-post-form.component';
import { PostManagerComponent } from './page/admin/post/post-manager/post-manager.component';
import { PostFormComponent } from './page/admin/post/post-form/post-form.component';
import { ProjectManagerComponent } from './page/admin/project/project-manager/project-manager.component';
import { CategoryProjectComponent } from './page/admin/categories/Project/category-project/category-project.component';
import { CategoryProjectFormComponent } from './page/admin/categories/Project/category-project-form/category-project-form.component';
import { ProjectFormComponent } from './page/admin/project/project-form/project-form.component';

registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AdminContentComponent,
    WebsiteLayoutComponent,
    WebsiteContentComponent,
    ProductManagerComponent,
    ProductFormsComponent,
    PostManagerComponent,
    PostFormComponent,
    UserManagerComponent,
    UserFormsComponent,
    ProjectManagerComponent,
    ProjectFormComponent,
    CategoryPostComponent,
    CategoryPostFormComponent,
    CategoryProjectComponent,
    CategoryProjectFormComponent,
    SignInComponent,
    SignUpComponent,
    HomePageComponent,
    BlogComponent,
    WorkComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    IconsProviderModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
