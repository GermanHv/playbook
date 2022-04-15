//Por otro lado con ecmascript tienes que agregar el package.json porque sino no te va a reconocer el modo de exportar, yo te recomendaría hacerlo en carpetas separadas para que no te de errores al momento de ejecutar node main.js de ecmascript o commonjs
// Gracias a https://github.com/LaunchX-InnovaccionVirtual/MissionNodeJS/discussions/50
//Con ecmascript:


import MyPokemon from './pokemon.js'

const pikachu = new MyPokemon('Pikachu')
pikachu.sayHello("PIKAAA PIKAA?")

