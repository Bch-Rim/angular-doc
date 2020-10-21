import { Component, OnInit } from '@angular/core';
import { PageService } from '../services/page.service';
import { SectionService } from '../services/section.service';
import { ActivatedRoute } from "@angular/router";
import { MatDialog } from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AddSectionDialogComponent } from '../dialog/add-section-dialog/add-section-dialog.component';
import { DeleteConfirmationDialogComponent } from '../dialog/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})


export class PageComponent implements OnInit {

  constructor(
    private UserService: UserService,
    private PageService: PageService,
    public route: ActivatedRoute,
    public dialog: MatDialog,
    private SectionService: SectionService) { }

  page: any;
  page_id: any;

  section = {
    json_content: {},
    page: 10,
    component: '',
    langugage: "",
    position: 0,
    content: ""
  }

  typeSections = [
    { nameSection: 'text', name: "Text" },
    { nameSection: 'textarea' },
    { nameSection: 'table' },
    { nameSection: 'success-alert' },
    { nameSection: 'info-alert' },
    { nameSection: 'danger-alert' },
    { nameSection: 'warning-alert' },
    { nameSection: 'code' }
  ];


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.page_id = params.id;
      this.section.page = this.page_id;
      this.PageService.get(this.page_id).subscribe(res => {
        this.page = res;
        for (let section of this.page.sections) {
          section.json_content = JSON.parse(section.json_content);
        }

      })
    });
  }


  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.page.sections, event.previousIndex, event.currentIndex);
    for (let i = 0; i < this.page.sections.length; i++) {
      this.page.sections[i].position = i;
      //put methode
      this.SectionService.update({
        ...this.page.sections[i], position: i,
        json_content: JSON.stringify(this.page.sections[i].json_content)
      })
        .subscribe(res => {
        })

      /* patch methode
      for (let i = 0; i < this.page.sections.length; i++) {
      this.SectionService.update({id : this.page.section[i].id , position :i}})
      .subscribe( res => {
      })       
       */

    }
  }

  //add or edit section 
  openDialog(section = { ...this.section, position: this.page.sections.length + 1 }): void {
    const dialogRef = this.dialog.open(AddSectionDialogComponent, {
      width: '1000px',
      data: { section }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result)
        if (!section['id']) {
          this.aadSection();
        } else {
          this.editSection(section)
        }
      }
    });
  }

  aadSection() {
    this.SectionService.post({ ...this.section, json_content: JSON.stringify(this.section.json_content) }).subscribe(res => {
      this.section = {
        json_content: {},
        page: this.page_id,
        component: '',
        langugage: "",
        position: 0,
        content: ""
      }
      this.page.sections.push({ ...res, json_content: JSON.parse(res.json_content) })
    })
  }

  editSection(section) {
    this.SectionService.edit({ ...section, json_content: JSON.stringify(section.json_content) }).subscribe(res => {
      section = section.json_content;
    })
  }

  openDeleteDialog(section, i): void {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      width: '500px',
      data: { section }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        this.deleteSection(section, i);
      }
    });
  }

  deleteSection(section, i) {
    this.page.sections.splice(i, 1)
    this.SectionService.delete(section).subscribe(res =>
      console.log(JSON.stringify(res)));
  }



  switchTo(role) {
    this.UserService.switchTo(role);
  }
}




