export function GetPlayer(number) {
  return GetAllPlayers.find((element) => {
    return element.number === number
  })
}

export const GetAllPlayers = [
  {
    number: 1,
    name: 'liran',
    position: 'programmer'
  },
  {
    number: 2,
    name: 'lital',
    position: 'programmer'
  },
  {
    number: 3,
    name: 'garry',
    position: 'programmer'
  },
  {
    number: 4,
    name: 'lee',
    position: 'head'
  },
]