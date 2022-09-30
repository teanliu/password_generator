// generate random charactor
function getChr(collection) {
  let randomIndex = Math.floor(Math.random() * Number(collection.length))
  return collection[randomIndex]
}

function generatePassword (option) {
  // define user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'
  // create collection to store that user wanted

  // const option = {
  //   length: '12',
  //   lowercase: 'on',
  //   uppercase: 'on',
  //   numbers: 'on',
  //   excludeCharacters: '12345'
  // }
  
  let collection = []

  if (option.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''))
  } 
  if (option.uppercase=== 'on') {
    collection = collection.concat(upperCaseLetters.split(''))
  }
  if (option.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }
  if (option.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }


  // remove things that user do not want
  collection = collection.filter(character => !option.excludeCharacters.includes(character))
  // prevent error message
  if (collection.length === 0) {
    return 'There is no valid characters in your selection.'
  }
  // start generating password
  let password = ''
  for (let i = 0; i < Number(option.length); i++) {
    password += getChr(collection)
  }
  return password
  // function getpassword (wordlength) {
  //   let password = ''
  //   for (let i = 0; i < Number(wordlength); i++) {
  //     password += getChr(collection)
  //   }
  //   return password
  // }
  // const randomPassword = getpassword(option.length)
  // console.log(randomPassword )

}
module.exports = generatePassword
