import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAdvancedDir]',
})
export class AdvancedDirDirective implements OnInit {
  @Input() defaultColor: string = 'blue';
  @Input() highlightColor: string = 'yellow';
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
  
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // By using renderer instead of directly accessing dom element is a better approach as Angular might not run always in Browser.
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );
  }

  @HostListener('mouseenter')
  onMouseEnter(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'yellow'
    // );
    this.backgroundColor = this.highlightColor;
  }

  // Using Mouse Leave instead of Mouse Out Event
  @HostListener('mouseleave')
  onMouseExit(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );
    this.backgroundColor = this.defaultColor;
  }
}