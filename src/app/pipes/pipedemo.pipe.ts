import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipedemo'
})
export class PipedemoPipe implements PipeTransform {

  transform(input:string): string {
    return input.split("").reverse().join("");
  }

}
