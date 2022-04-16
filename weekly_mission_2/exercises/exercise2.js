const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

console.log("1.Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH")
explorers.forEach((Element) => console.log(Element.name))

console.log("2.Imprime el stack de cada explorer, usa FOR EACH")
explorers.forEach((selement)=> console.log(selement.stack))

console.log("3.Crea una nueva lista con las listas de stacks de cada explorer, usa MAP")
newlist = explorers.map((stack2)=> stack2.stack)
console.log(newlist)

console.log("4.Obtén la lista de explorers que tengan en su stack 'js', usa FILTER (para validar un elemento en un lista se usa el método includes)")
const explrscnjs = explorers.filter((stack3)=> stack3.stack.includes('js'))
console.log(explrscnjs)// solo aparecen el explorer 1 y 2 asi que se cumple el filtro


console.log("5.Busca el primer explorer que sea de la CDMX, usa FIND")
const fndcty = explorers.find((srh) => srh.city.includes('CDMX'))   
console.log(fndcty)

console.log("6.Obtén la suma de todos los exercises_completed, usa REDUCE")
const result = explorers.reduce((sum, ok)=> sum + ok.exercises_completed, 0)
console.log(result)

console.log("7.Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME")
const val = explorers.some((t)=> t.exercisesFinished || true)
console.log(val)

console.log("8.Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.")
const finish = explorers.every((ok) => typeof ok.isFinished === true)
console.log (finish)
