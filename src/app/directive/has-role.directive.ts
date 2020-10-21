
import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { UserService } from '../services/user.service';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';

@Directive({
  selector: '[appHasRole]'
})
export class HasRoleDirective implements OnInit {
  @Input() appHasRole: string;

  constructor(
    private tpl: TemplateRef<any>,
    private vc: ViewContainerRef,
    private userService: UserService) { }

  ngOnInit(): void {
    this.userService.user$
      .do(() => this.vc.clear())
      .filter(role => role === this.appHasRole)
      .subscribe(() => this.vc.createEmbeddedView(this.tpl));
  }
}