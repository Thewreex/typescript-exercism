

export function toRna(ADN: string): string {
  let rna = ""
  for (const letra of ADN) {
    if (letra === "G") {
      rna = rna + "C"
    }
    else if (letra === "C") {
      rna = rna + "G"
    }
    else if (letra === "T") {
      rna = rna + "A"
    }
    else if (letra === "A") {
      rna = rna + "U"
    }
    else { 
      throw new Error('Invalid input DNA.')
     }
  }
      return rna 
}
