import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { from } from 'rxjs';
import { AddPageCategoryDialogComponent } from '../dialog/add-page-category-dialog/add-page-category-dialog.component';
import { CategoryDialogComponent } from '../dialog/category-dialog/category-dialog.component';
import { PageDialogComponent } from '../dialog/page-dialog/page-dialog.component';
import { CategoryService } from '../services/category.service';
import { PageService } from '../services/page.service';
import { DeleteConfirmationDialogComponent } from '../dialog/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { EditConfirmationDialogComponent } from '../dialog/edit-confirmation-dialog/edit-confirmation-dialog.component';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private CategoryService: CategoryService,
    private PageService: PageService,
    public dialog: MatDialog,
  ) { }

  subcategories: any;
  categories: any;
  pages: any;
  type: any;
  menus = {};


  ngOnInit(): void {
    this.getCategories();
  }

  clickmenus(id) {
    /*if (!this.menus[id]) {
      this.menus[id] = true;
      console.log(this.menus);
    }*/
    this.menus[id] = !this.menus[id];
    console.log(this.menus);
  }

  getCategories() {
    this.CategoryService.get().subscribe((res: string[]) => {
      this.categories = res;
        for (let categorie of this.categories) {
          this.menus[categorie.id] = false;
          for (let subcategorie of categorie.subcategories) {
            this.menus[subcategorie.id] = false;
            for (let page of categorie.pages) {
              this.menus[page.id] = false;
            }

          }
        }
    })
  }

  //Dialog to add a new page
  openDialogAddPages(): void {
    const dialogRef = this.dialog.open(AddPageCategoryDialogComponent, {
      data: {
        categories: this.categories,
        pages: this.pages
      },
      width: '700px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
      }
    });

  }

  //dialog to delete category
  categoryDeleteDialog(categorie) {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      data: categorie,
      width: '700px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.deleteCategory(categorie);
      }        


    });
  }

  deleteCategory(categorie) {
    this.CategoryService.delete(categorie.id).subscribe(res =>
      this.getCategories())
    }


  //dialog to delete page
  pageDeleteDialog(page) {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      data: page,
      width: '700px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.deletePage(page);
      }
    });
  }

  deletePage(page) {
    this.PageService.delete(page.id).subscribe(res =>
      this.getCategories())
    }

  //dialog to edit Category
  categoryEditDialog(categorie) {
    console.log("catttttt", categorie)
    const dialogRef = this.dialog.open(EditConfirmationDialogComponent
      , {
        data: categorie,
        width: '700px',
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.editCategory(result);
      }
    });
  }


  editCategory(categorie) {
    this.CategoryService.update(categorie).subscribe(res =>
    this.getCategories())
  }

  //dialog to edit Category
  pageEditDialog(page) {
    const dialogRef = this.dialog.open(EditConfirmationDialogComponent
      , {
        data: page,
        width: '700px',
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.editPage(result);
      }
    });
  }


  editPage(page) {
    this.PageService.update(page).subscribe(res =>
      this.getCategories())
    }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.categories, event.previousIndex, event.currentIndex);
    for (let i = 0; i < this.categories.length; i++) {
      this.categories[i].position = i;

      this.CategoryService.update({
        ...this.categories[i], position: i,
      }).subscribe(res => {
      })
    }
   
  }
}