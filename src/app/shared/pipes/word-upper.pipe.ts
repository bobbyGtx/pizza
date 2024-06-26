import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordUpper'
})
export class WordUpperPipe implements PipeTransform {

  transform(value: string,wordParts:string[]): string {
    let result:string=value;
    wordParts.forEach(item => {
       result=result.replace(new RegExp('[А-Яа-я]*'+item+'[а-я]*','g'), (match:string)=>match.toUpperCase());
    })

    return result;

  }

}
