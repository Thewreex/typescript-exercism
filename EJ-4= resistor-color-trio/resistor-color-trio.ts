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

export function decodedResistorValue(colores: Array<string>): string { //recibimos la variable de colores como un array de strings
  const ohms = (COLORS.indexOf(colores[0]) * 10 + COLORS.indexOf(colores[1])) * 10 ** COLORS.indexOf(colores[2]); //retornamos el valor decodificado

  if (ohms >= 0 && ohms <= 900) { //cadena de condiciones para retornar el valor en diferentes unidades
    return `${ohms} ohms`
  }
  else if (ohms >= 1000 && ohms <= 900000) {
    return `${ohms / 1000} kiloohms`
  }
  else if (ohms >= 1000000 && ohms <= 900000000) {
    return `${ohms / 1000000} megaohms`
  }
  else if (ohms >= 1000000000) {
    return `${ohms / 1000000000} gigaohms`
  }
  else {
    throw new Error('Invalid color')
  }
}
