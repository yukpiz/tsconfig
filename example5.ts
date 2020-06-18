interface Params1 {
  n: string
}

interface Params2 {
  age: number
}

let p1: Params1 = { n: "yukpiz" }
console.log(p1)
const { n } = p1
