import {
  Component,
  Input,
  ViewEncapsulation,
  OnChanges,
  OnInit,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked, OnDestroy, ViewChild, ElementRef
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ServerElementComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked, OnDestroy
{
  @Input('srvElement') element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild('heading', {static: true}) header : ElementRef;

  // 1. Runs when a new Instance of this Component Created. (Single Call)
  constructor() {
    console.log('Constructor Called');
  }

  // 2. When a Changes made to the Component. Whether Newly Created or Updated (Info can be found in SimpleChanges)
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges Called');
    //console.log(changes);
  }

  // 3. Runs after the Component Created. (Single Call)
  ngOnInit() {
    console.log('ngOnInit Called');
    //console.log('Text Content:' + this.header.nativeElement.textContent);
  }

  // 4. Run after Init when creating or onChanges when updating to check for any Changes are there in the component
  ngDoCheck(): void {
    console.log('ngDoCheck Called');
  }

  // 5. It will be called After Content Init Finished (Single Call)
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit Called');
  }

  // 6. After Content Init Checking of Content or After Every Do Check
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked Called');
  }

  // 7. It will be called After View Init Finished (Single Call)
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit Called');
    //console.log('Text Content:' + this.header.nativeElement.textContent);
  }

  // 8. After View Init Checking of View Elements or After Every Do Check
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked Called');
  }

  // 9. Call before Destroying the Component
  ngOnDestroy(): void {
    console.log('ngOnDestroy Called');
  }
}
