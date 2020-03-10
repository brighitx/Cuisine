import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'youtube'
})
export class YoutubePipe implements PipeTransform {

  constructor(private domSatizer: DomSanitizer) {

  }
  transform(value: any, ...args: any[]): any {
    return this.domSatizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + value);
  }

}
