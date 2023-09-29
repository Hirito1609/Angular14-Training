import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';
import { ConceptsComponent } from './concepts/components/concepts/concepts.component';
import { AboutUsComponent } from './about/components/about-us/about-us.component';
import { ContactComponent } from './contact/components/contact/contact.component';

//routes definition
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'concepts', component: ConceptsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'employees',
    loadChildren: () =>
      import('./employees/employees.module').then(m => m.EmployeesModule)
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then(m => m.ProductsModule)
  }
  // { path:'', redirectTo: '', pathMatch: 'full' },  //to handle empty url
  // { path:'**', component:HomeComponent} //to handle random urls
];

//Main Entry Gate
@NgModule({
  imports: [RouterModule.forRoot(routes)], //registering routes
  exports: [RouterModule]
})
export class AppRoutingModule {}
