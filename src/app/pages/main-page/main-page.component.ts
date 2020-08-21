import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

import{DataService} from '../../services/data.service'

import{AudioService} from '../../services/audio.service'
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  files:Array<any>=[];

  currentFile: any = {};
  constructor(public data:DataService, public audioService:AudioService) {
    data.getFiles().subscribe(filess=>{
      this.files= filess;
    })
    
   }

  ngOnInit(): void {
  }
  playStream(url) {
    this.audioService.playStream(url)
    .subscribe(events => {
      // listening for fun here
    });
  }

  openFile(file, index) {
    this.currentFile = { index, file };
    this.audioService.stop();
    this.playStream(file.url);
  }

  pause() {
    this.audioService.pause();
  }

  play() {
    this.audioService.play();
  }
  next() {
    const index = this.currentFile.index + 1;
    const file = this.files[index];
    this.openFile(file, index);
  }

  previous() {
    const index = this.currentFile.index - 1;
    const file = this.files[index];
    this.openFile(file, index);
  }
  customOptions: OwlOptions = {
    lazyLoad:true,
    autoplay:false,
    autoplayTimeout:3000,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
}
