
// Me apoye con https://github.com/LaunchX-InnovaccionVirtual/MissionNodeJS/discussions/50

const Pokemon = require('./pokemon')

const pikachu = new Pokemon("pikachu")
const bulbasaur = new Pokemon("bulbasaur")
const squirtle = new Pokemon("squirtle")
const charmander = new Pokemon("charmander")

pikachu.sayHello()
pikachu.sayMessage("Pika pika!")

bulbasaur.sayHello()
bulbasaur.sayMessage("Bulbasauuurrr!")

charmander.sayHello()
charmander.sayMessage("Chaaaar!")

squirtle.sayHello()
squirtle.sayMessage("Squirrrtleee!")