let userName = 'John'

function greet(name) {
  return `Hello ${  name}` // Concatenació manual
}

console.log(greet(userName))

// eslint-disable-next-line no-unused-vars
function unusedFunction() {
  // No és una arrow function
  // eslint-disable-next-line no-unused-vars
  let unusedVar = 'This is never used'
}

if (userName == 'John') {
  console.log('Hello John')
}

