interface iobj {
  a: number
}

const i: iobj = {a: 1}
console.log(i)


interface obj {
  name: string
  hello: () => void
}

type obj2 = {
  name: string
  hello: () => void
}

interface Foo {
  value: string
}

const foo: Foo = {
  value: "foo",
}

type Bar = {
  value: string
}
const bar : Bar = {
  value: "bar",
}
