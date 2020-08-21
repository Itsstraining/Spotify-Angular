import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    files: any = [
  // tslint:disable-next-line: max-line-length
      { url: '../assets/img-D/Alan_Walker.mp3', 
        namesong: 'Perfect',
        singer: ' Ed Sheeran',
        album:'Title',
        type:'Pop'
      },
      {
        url: '../assets/img-D/shape_of_you.mp3',
        namesong: 'Shape Of You',
        singer: 'Ed Sheeran',
        album:'title',
        type:'Pop'
      },
      { url: '../assets/img-D/sugar.mp3',
        namesong: 'Sugar',
        singer: 'The Beatles',
        album:'Title',
        type:'Rock'
      },
      { url: '../assets/img-D/sakura.mp3',
        namesong: 'Sakura 5cm/s',
        singer: 'Ikimono Gakari',
        album:'Title',
        type:'Classic'
      } ,
      { url: '../assets/img-D/havana.mp3',
        namesong: 'Havana',
        singer: 'Camila Cabello',
        album:'Camila',
        type:'Pop'
      }
    ];
  
    getFiles() {
     return of(this.files)};
  constructor() { }
}
