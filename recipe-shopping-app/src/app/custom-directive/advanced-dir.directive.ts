import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAdvancedDir]',
})
export class AdvancedDirDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'green';
  
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // By using renderer instead of directly accessing dom element is a better approach as Angular might not run always in Browser.
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'green'
    // );
  }

  @HostListener('mouseenter')
  onMouseEnter(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'yellow'
    // );
    this.backgroundColor = 'yellow';
  }

  // Using Mouse Leave instead of Mouse Out Event
  @HostListener('mouseleave')
  onMouseExit(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );
    this.backgroundColor = 'blue';
  }
}