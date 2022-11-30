console.log(`S for snake🐍\nW for water💦\nG for gun🔫`)
let user = prompt("Enter S,W or G:");
user=user.toUpperCase();
let BotI = Math.floor(Math.random() * 3);
let Bot = ['S', 'W', 'G'][BotI];

console.log(Bot);


const match = (user, Bot) => {
  if (user === Bot) {
    return 'Nobody Wins....Match Tied!'
  }
  else if (user === 'S' && Bot === 'W') {
    return "Congratulations !!! You Won!!!!"
  }
  else if (user === 'S' && Bot === 'G') {
    return "You lost ....Bot wins!"
  }
  else if (user === 'W' && Bot === 'S') {
    return "You lost ....Bot wins!"
  }
  else if (user === 'W' && Bot === 'G') {
    return "Congratulations !!! You Won!!!!"
  }
  else if (user === 'G' && Bot === 'S') {
    return "Congratulations !!! You Won!!!!"
  }
  else if (user === 'G' && Bot === 'W') {
    return "You lost ....Bot wins!"
  }
}

let result=match(user, Bot);
console.log(`Your choice: ${user}\nBots choice: ${Bot}`)
console.log(`Result: ${result.toUpperCase()}`);