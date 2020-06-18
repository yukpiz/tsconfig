// Intersection Types
type Dog = {
  tail: string
  bark: () => void
}

type Bird = {
  wing: string
  fly: () => void
}

type Kimera = Dog & Bird

