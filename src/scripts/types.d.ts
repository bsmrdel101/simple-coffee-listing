interface ButtonHTML extends React.HTMLProps<HTMLButtonElement> {}


type Product = {
  id: number
  name: string
  image: string
  price: string
  rating: number
  votes: number
  popular: boolean
  available: boolean
};
