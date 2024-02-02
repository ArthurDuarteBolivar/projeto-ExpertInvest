import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customNumberFormat'
})
export class CustomNumberFormatPipe implements PipeTransform {
  transform(value: number | string): string {

    if(typeof(value) == 'string'){
      value = parseFloat(value)
    }
    // Verifica se o valor é nulo ou indefinido
    if (value == null) {
      return '';
    }

    // Converte o número para string e formata com separadores de milhares e vírgula como separador decimal
    var formattedValue = value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    return formattedValue;
  }
}
