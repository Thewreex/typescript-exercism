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

export const colorCode = (color: string): number => {
  return COLORS.indexOf(color); //retorna el indice del color que se recibe como parametro
}



