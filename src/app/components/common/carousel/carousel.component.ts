import { Component, OnInit, Inject, AfterViewInit, Input, ViewChildren, ElementRef, QueryList, ContentChildren, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Item } from '../../../model/item';
import { gsap, TweenMax } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { EllmentDirective } from 'src/app/diractives/ellment.directive';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
})
export class CarouselComponent implements OnInit, AfterViewInit {
  @Input() items: Item[];
  @ViewChildren(EllmentDirective, { read: ElementRef }) private itemsElements: QueryList<ElementRef>;
  @ViewChild('container') container: ElementRef;
  @ViewChild('slider') slider: ElementRef;


  slides: any;
  carouselContainer: any;
  elSlider: any
  scrubber: any;
  handle: any;
  slideCount: any;

  boxWidth: any;

  sliderWidth: any;

  targetX = 0;

  lastTarget = 0;

  draggable: any;

  ratio: any;

  ratioX: any;

  current: any = 2;

  step:number;
  constructor(@Inject(DOCUMENT) private _document) { }
  
  ngOnInit(): void {
    gsap.registerPlugin(Draggable);

  }

  ngAfterViewInit() {
  
    this.slides = this.itemsElements.toArray();
    this.carouselContainer = this.container.nativeElement;
    this.elSlider = this.slider.nativeElement;
    this.slideCount = this.slides.length;
    this.slides[2].nativeElement.style.transform = "scaleY(1.4)";
    this.boxWidth = this.carouselContainer.offsetWidth || 790;
    this.sliderWidth = this.boxWidth * this.slideCount;


    for (var i = 0; i < this.slides.length; i++) {
      this.slides[i].nativeElement.style.width = this.boxWidth / 5 + "px";
    }

    this.elSlider.style.width = this.sliderWidth - this.boxWidth;

    Draggable.create(this.elSlider, {
      type: "x",
      edgeResistance: 0.6,
      bounds: "#container",
      throwProps: true,
      onDrag: this.setProgess,
      onThrowUpdate: this.updateSlides
    });

  

  }

  setProgess() {
    var x = gsap.getProperty("#slider", "x");
    this.targetX = (x as number) 
    console.log(this.boxWidth);
    this.targetX =
    this.targetX < -1 * (this.slideCount - 1) ? -1 * (this.slideCount - 1) : this.targetX;
    this.lastTarget = this.targetX;
  }

  prevElement() {
    if (this.targetX < 2) {
      this.slides[this.current].nativeElement.style.transform = "none";
      this.targetX++;
      this.current--;
      this.slides[this.current].nativeElement.style.transform = "scaleY(1.4)";
      TweenMax.to(this.elSlider, 1, {
        x: (this.boxWidth * this.targetX) /5 ,
        onUpdate: this.setProgess
      });
    }

  }

  nextElement() {
    if (this.targetX > -1 * (this.slideCount -3)) {
      this.slides[this.current].nativeElement.style.transform = "none";
      this.targetX--;
      this.current++;
      this.slides[this.current].nativeElement.style.transform = "scaleY(1.4)";
      TweenMax.to(this.elSlider, 1, {
        x: (this.boxWidth * this.targetX)/5,
        onUpdate: this.setProgess
      });
    }
  }


  updateSlides() {
    gsap.set(this.elSlider, { x: -this.ratioX / this.ratio });
  }
}

