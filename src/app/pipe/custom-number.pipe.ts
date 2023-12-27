import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customNumber'
})
export class CustomNumberPipe implements PipeTransform {
  transform(value: number, decimalPlaces: number = 2): string {
    // Verifica se o valor é nulo ou indefinido
    if (value == null) {
      return "";
    }

    // Converte o número para string e formata com a quantidade desejada de casas decimais
    const stringValue = value.toFixed(decimalPlaces);

    // Substitui ponto por vírgula
    const formattedValue = stringValue.replace('.', ',');

    return formattedValue;
  }
}
