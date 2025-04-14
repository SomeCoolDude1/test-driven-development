export function isValid(isbn13: string): boolean {
  var odds = 0
  var evens = 0
  var lastNum = 0
  for (let index = 0; index < 17; index++) {
    const element = Number(isbn13[index]);
    if (index == 3 || index == 5 || index == 10 || index == 15) {
      continue
    }
    if (Number.isNaN(element)) {
      throw new Error("Error Not an ISBN number");
      
    }
    if (index == 16) {
      lastNum = element
      break
    }
    if (element % 2 == 0) {
      evens += element
    } else {
      odds += element
    }

  }
  return (lastNum == (((3 * evens) + odds) % 10) % 10)

}