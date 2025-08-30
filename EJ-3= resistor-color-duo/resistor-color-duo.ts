export const COLORS = [ //array de colores 
      'black',
      'brown',
      'red',
      'orange',
      'yellow', 
      'green',
      'blue',
      'violet',
      'grey',
      'white',
    ]

export function decodedValue(colores: Array<string>): number { //recibimos la variable de colores como un array de strings
  return COLORS.indexOf(colores[0]) * 10 + COLORS.indexOf(colores[1]); //retornamos el valor decodificado
}
