import {
  Directive,
  HostBinding,
  HostListener,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.open') isOpen:boolean = false;

  @HostListener('onComboClick')
  toggleCombo() {
    this.isOpen = !this.isOpen;
  }
  
  constructor() {}

  ngOnInit(): void {

  }
}