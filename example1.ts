// boolean
let flag: boolean = false

// number
let decimal: number = 256
let hex: number = 0xfff
let binary: number = 0b0000
let octal: number = 0o123

// string
let color: string = "white"
color = 'black'
let myColor: string = `my color is ${color}`

// array
let list1: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3]

// tuple
let x: [string, number, string | number]
x = ["hello", 10, "world"]

// any
let whatever: any = 0
whatever = "something"
whatever = false

// unknown
const n: unknown = 1
const n2: number = 1
n2.toFixed(1)

// void
let unusable: void = undefined
let u2: void = null

// null, undefined
let u: undefined
let nu: null

// never
function error(message: string): void {
  throw new Error(message)
}

// object
let obj1: {}
let obj2: object

obj1 = 1

