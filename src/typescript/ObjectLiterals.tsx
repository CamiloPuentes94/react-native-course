interface Person {
  first_name: string
  last_name: string
  age: number
  isAlive?: boolean
  address: Address
}

interface Address {
  city: string
  country: string
  houseNo: number
}

export const ObjectLiterals = () => {



  const person: Person = {
    first_name: 'Alan',
    last_name: 'Brito Delgado',
    age: 38,
    address: {
      city: 'Lima',
      country: 'Peru',
      houseNo: 123,
    },
  }

  return (
    <>
      <h3>Objetos literales</h3>

      {JSON.stringify(person, null, 2)}
    </>
  )
}
