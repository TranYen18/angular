import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guard/admin.guard';
import { CategoryPostFormComponent } from './page/admin/categories/Post/category-post-form/category-post-form.component';
import { CategoryPostComponent } from './page/admin/categories/Post/category-post/category-post.component';
import { CategoryProjectFormComponent } from './page/admin/categories/Project/category-project-form/category-project-form.component';
import { CategoryProjectComponent } from './page/admin/categories/Project/category-project/category-project.component';
import { PostFormComponent } from './page/admin/post/post-form/post-form.component';
import { PostManagerComponent } from './page/admin/post/post-manager/post-manager.component';
import { ProductFormsComponent } from './page/admin/products/product-forms/product-forms.component';
import { ProductManagerComponent } from './page/admin/products/product-manager/product-manager.component';
import { ProjectFormComponent } from './page/admin/project/project-form/project-form.component';
import { ProjectManagerComponent } from './page/admin/project/project-manager/project-manager.component';
import { UserFormsComponent } from './page/admin/user/user-forms/user-forms.component';
import { UserManagerComponent } from './page/admin/user/user-manager/user-manager.component';
import { BlogComponent } from './page/blog/blog.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { AdminLayoutComponent } from './page/layouts/admin/admin-layout/admin-layout.component';
import { WebsiteLayoutComponent } from './page/layouts/website/website-layout/website-layout.component';
import { SignInComponent } from './page/sign-in/sign-in.component';
import { SignUpComponent } from './page/sign-up/sign-up.component';
import { WorkComponent } from './page/work/work.component';

const routes: Routes = [
  {
    path: '' , component: WebsiteLayoutComponent,
    children: [
        { 
          path: '',
          component: HomePageComponent
        },
        {
          path: 'blog',
          component: BlogComponent
        },
        {
          path: 'work',
          component: WorkComponent
        },
    ]
  },
  {
    path: 'signin',
    component: SignInComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'user', canActivate:[AdminGuard],
        children: [
          {
            path: '',
            component: UserManagerComponent
          },
          {
            path: 'add',
            component: UserFormsComponent
          },
          {
            path: ':id/edit',
            component: UserFormsComponent
          }
        ] 
      },
      
      {
        path: 'product', canActivate:[AdminGuard], 
        children: [
          {
            path: '',
            component: ProductManagerComponent
          },
          {
            path: 'add',
            component: ProductFormsComponent
          },
          {
            path: ':id/edit',
            component: ProductFormsComponent
          }
        ]
      },
      {
        path: 'post', canActivate:[AdminGuard], 
        children: [
          {
            path: '',
            component: PostManagerComponent
          },
          {
            path: 'add',
            component: PostFormComponent
          },
          {
            path: ':id/edit',
            component: PostFormComponent
          }
        ]
      },
      {
        path: 'project', canActivate:[AdminGuard], 
        children: [
          {
            path: '',
            component: ProjectManagerComponent
          },
          {
            path: 'add',
            component: ProjectFormComponent
          },
          {
            path: ':id/edit',
            component: ProjectFormComponent
          }
        ]
      },
      {
        path: 'category', canActivate:[AdminGuard], 
        children: [
          {
            path: 'post',
            children: [
              { 
                path: '',
                component: CategoryPostComponent,
              },
              {
                path: 'add',
                component: CategoryPostFormComponent
              },
              {
                path: ':id/edit',
                component: CategoryPostFormComponent
              }
            ]
          },
          {
            path: 'project',
            children: [
              {
                path: '',
                component: CategoryProjectComponent
              },
              {
                path: 'add',
                component: CategoryProjectFormComponent
              },
              {
                path: ':id/edit',
                component: CategoryProjectFormComponent
              }
            ]
          }
        ]
      },
]
},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
