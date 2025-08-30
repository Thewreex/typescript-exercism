/**
 * This stub is provided to make it straightforward to get started.
 */

export function twoFer(name?: string): string { // uso del operador ? para permitir que no se reciban datos, y si los recibe seran caracter string
  if (typeof name === 'undefined') { 
    name = 'you'; //si la funcion no recibe parametros, se asigna "you"
  }
  return `One for ${name}, one for me.` // retorna el texto formateado
}
