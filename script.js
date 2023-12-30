//№1
// let pet = {
//   type: 'Cat',
//   name: 'Stepan',
//   sound: 'Myau',
//   say: function (props = this.sound) {
//     return console.log(`${this.type} ${this.name} говорит ${props}`)
//   },
// }

// pet.say('мяяяу')
// pet.say()

//№2
// let products = {
//   potato: 'овощи',
//   carrot: 'овощи',
//   banana: 'фрукты',
//   orange: 'фрукты',
//   apple: 'фрукты',
//   strawberry: 'ягоды',
//   tomato: 'овощи',
//   melon: 'фрукты',
//   lemon: 'фрукты',
// }

// function countUniqueValues(obj) {
//   let counts = {}

//   for (let key in obj) {
//     let value = obj[key]

//     if (counts[value]) {
//       counts[value]++
//     } else {
//       counts[value] = 1
//     }
//   }

//   return counts
// }

// let uniqueCounts = countUniqueValues(products)

// console.log(uniqueCounts)

//№3
let cars = {
  Tayota: { color: 'black', country: 'China', year: 1920 },
  BMW: { color: 'red', country: 'Russia', year: 1900 },
  Lada: { color: 'blue', country: 'Brazilia', year: 1980 },
  Mercedes: { color: 'yellow', country: 'Belarus', year: 1960 },
  Kia: { color: 'gray', country: 'Ukraina', year: 1940 },
  Ferrari: { color: 'green', country: 'Mongolia', year: 2000 },
  Peugeot: { color: 'orange', country: 'Kanada', year: 2040 },
  Infinity: { color: 'white', country: 'Austria', year: 2020 },
  Lamborgini: { color: 'pink', country: 'America', year: 2080 },
  Jeep: { color: 'golden', country: 'Germania', year: 2060 },
}

let carsArray = Object.entries(cars)

carsArray.sort((a, b) => a[1].year - b[1].year)

for (let i = 0; i < 3; i++) {
  console.log(
    `${carsArray[i][0]} - ${carsArray[i][1].year} year, color: ${carsArray[i][1].color}, country: ${carsArray[i][1].country}`
  )
}

carsArray.sort((a, b) => b[1].year - a[1].year)

for (let i = 0; i < 3; i++) {
  console.log(
    `${carsArray[i][0]} - ${carsArray[i][1].year} year, color: ${carsArray[i][1].color}, country: ${carsArray[i][1].country}`
  )
}
