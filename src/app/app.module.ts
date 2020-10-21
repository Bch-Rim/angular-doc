import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { MainTemplateComponent } from './main-template/main-template.component';
import {  HttpClientModule } from '@angular/common/http';
import { PageComponent } from './page/page.component';
import { TextSectionComponent } from './components-section/text-section/text-section.component';
import { TextareaSectionComponent } from './components-section/textarea-section/textarea-section.component';
import { CodeSectionComponent } from './components-section/code-section/code-section.component';
import { ImageSectionComponent } from './components-section/image-section/image-section.component';
import { DoubleimageSectionComponent } from './components-section/doubleimage-section/doubleimage-section.component';
import { SuccessalertSectionComponent } from './components-section/successalert-section/successalert-section.component';
import { DangeralertSectionComponent } from './components-section/dangeralert-section/dangeralert-section.component';
import { WarningalertSectionComponent } from './components-section/warningalert-section/warningalert-section.component';
import { InfoalertSectionComponent } from './components-section/infoalert-section/infoalert-section.component';
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
import { CodeEditorModule } from '@ngstack/code-editor';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule,} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { TextFormSectionComponent } from './components-form/text-form-section/text-form-section.component';
import { CodeFormSectionComponent } from './components-form/code-form-section/code-form-section.component';
import { RichtextFormSectionComponent } from './components-form/richtext-form-section/richtext-form-section.component';
import { SuccessAlertFormSectionComponent } from './components-form/success-alert-form-section/success-alert-form-section.component';
import { InfoAlertFormSectionComponent } from './components-form/info-alert-form-section/info-alert-form-section.component';
import { WarningAlertFormSectionComponent } from './components-form/warning-alert-form-section/warning-alert-form-section.component';
import { DangerAlertFormSectionComponent } from './components-form/danger-alert-form-section/danger-alert-form-section.component';
import { TextareaFormSectionComponent } from './components-form/textarea-form-section/textarea-form-section.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import { LoginDialogComponent } from './login/login-dialog/login-dialog.component';
import { AddSectionDialogComponent } from './dialog/add-section-dialog/add-section-dialog.component';
import { AddPageCategoryDialogComponent } from './dialog/add-page-category-dialog/add-page-category-dialog.component';
import { RichtextSectionComponent } from './components-section/richtext-section/richtext-section.component';
import { CategoryDialogComponent } from './dialog/category-dialog/category-dialog.component';
import { PageDialogComponent } from './dialog/page-dialog/page-dialog.component';
import { DeleteConfirmationDialogComponent } from './dialog/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { EditConfirmationDialogComponent } from './dialog/edit-confirmation-dialog/edit-confirmation-dialog.component';
import { HasRoleDirective } from './directive/has-role.directive';



@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    MainTemplateComponent,
    PageComponent,
    TextSectionComponent,
    TextareaSectionComponent,
    CodeSectionComponent,
    ImageSectionComponent,
    DoubleimageSectionComponent,
    SuccessalertSectionComponent,
    DangeralertSectionComponent,
    WarningalertSectionComponent,
    InfoalertSectionComponent,
    TextFormSectionComponent,
    CodeFormSectionComponent,
    RichtextFormSectionComponent,
    SuccessAlertFormSectionComponent,
    InfoAlertFormSectionComponent,
    WarningAlertFormSectionComponent,
    DangerAlertFormSectionComponent,
    TextareaFormSectionComponent,
    LoginDialogComponent,
    AddSectionDialogComponent,
    AddPageCategoryDialogComponent,
    RichtextSectionComponent,
    CategoryDialogComponent,
    PageDialogComponent,
    DeleteConfirmationDialogComponent,
    EditConfirmationDialogComponent,
    HasRoleDirective,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RichTextEditorModule,
    CodeEditorModule.forRoot(),
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatDialogModule,
    DragDropModule,
    MatIconModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
