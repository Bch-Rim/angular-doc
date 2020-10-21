import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuccessAlertFormSectionComponent } from './components-form/success-alert-form-section/success-alert-form-section.component';
import { HeaderComponent } from './header/header.component';
import { MainTemplateComponent } from './main-template/main-template.component';
import { PageComponent } from './page/page.component';
import { SidenavComponent } from './sidenav/sidenav.component';


const routes: Routes = [
  {
    'path': '', component: MainTemplateComponent,
    children: [

      {
        path: "header", component: HeaderComponent

      },
      {
        path: "sidenav", component: SidenavComponent

      },
      {
        path: "content/:id", component:PageComponent
      }
    ]
  },
  {
    path: "alert", component:SuccessAlertFormSectionComponent
  }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
