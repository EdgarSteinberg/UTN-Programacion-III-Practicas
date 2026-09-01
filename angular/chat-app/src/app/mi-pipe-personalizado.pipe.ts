import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miPipePersonalizado',
  standalone: false
})
export class MiPipePersonalizadoPipe implements PipeTransform {

  transform(valor : string | undefined) : string{
    return valor?.toUpperCase() || '';
  }

}
