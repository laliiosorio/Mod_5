import {
  Component,
  AfterContentInit,
  Input,
  HostListener,
} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent {
  @Input() pokemonList: any[] = []; // Ajusta el tipo según tus necesidades
  cols: number = 4; // Valor predeterminado

  constructor() {
    this.adjustCols();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.adjustCols();
  }

  private adjustCols(): void {
    const screenWidth = window.innerWidth;

    switch (true) {
      case screenWidth >= 1200:
        this.cols = 4;
        break;
      case screenWidth >= 600:
        this.cols = 2;
        break;
      default:
        this.cols = 1;
    }
  }
}
