export function isLeap(año: number): boolean {
  let divisiblePor4 : boolean
  let divisiblePor400 : boolean
  if (año % 4 === 0) { divisiblePor4 = true; }
   else { divisiblePor4 = false }

  if (año % 400 === 0) { divisiblePor400 = true; }
   else { divisiblePor400 = false }

   if (año % 100 === 0) {
    if (divisiblePor4 && divisiblePor400) {
      return true
    }
    else { return false }
   }

   else if (año % 100 != 0 && divisiblePor4) {
    return true 
   }
    else { return false }

}
