import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './component/about/about.component';
import { LoginComponent } from './component/login/login.component';
import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ProductFormsComponent } from './component/product-forms/product-forms.component';
import { ProductsComponent } from './component/products/products.component';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';

const routes: Routes = [
  {path:"about", component: AboutComponent},
  {path:"login", component:LoginComponent},
  {path:"test", component:LayoutAdminComponent},
  // {path:"product", component:ProductsComponent},
  // {path:"product/add", component:ProductAddComponent},
  // {path:"product/:id", component:ProductDetailComponent}

  {
    path:"product",
    children: [
      { 
        path: '', component: ProductsComponent
      },
      { 
        path: 'add', component: ProductFormsComponent
      },
      { 
        path: ':id/edit', component: ProductFormsComponent
      },
      { 
        path: ':id', component: ProductDetailComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
