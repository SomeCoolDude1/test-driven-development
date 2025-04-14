export function play(player1: string, player2: string): number {
  var victor = 0

  switch (player1.trim().toUpperCase()) {
    case "ROCK":
      switch ( player2.trim().toUpperCase() ) {
        case "ROCK":
            victor = 0
            break;
        case "PAPER":
            victor = 2
            break;
        case "SCISSORS":
           victor = 1
            break;
        default: 
            throw new Error("Error Unknown Play");
            break;
     }
      break;
    case "PAPER":
      switch ( player2.trim().toUpperCase() ) {
        case "ROCK":
            victor = 1
            break;
        case "PAPER":
            victor = 0
            break;
        case "SCISSORS":
           victor = 2
            break;
        default: 
            throw new Error("Error Unknown Play");
            break;
     }
      break;
    case "SCISSORS":
      switch ( player2.trim().toUpperCase() ) {
        case "ROCK":
            victor = 2
            break;
        case "PAPER":
            victor = 1
            break;
        case "SCISSORS":
           victor = 0
            break;
        default: 
            throw new Error("Error Unknown Play");
            break;
     }
      break;
  
    default:
      throw new Error("Error Unknown Play");
      break;
  }
  
  return victor
}
