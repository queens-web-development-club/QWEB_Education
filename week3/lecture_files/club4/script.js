const form = document.querySelector('#contact-form')

form.addEventListener('submit', (event) => {
  const name = event.target.name.value
  const email = event.target.email.value
  const message = event.target.message.value
  const experience = event.target.experience.value

  console.log(name, email, message, experience)

  const errorElement = document.querySelector('#error')

  let messages = []

  if (name === '' || name == null) {
    messages.push('Name is required')
  }

  // This will check that the Email input isnt empty, and contains an @ and .
  if (email === '' || email == null) {
    messages.push('Email is required')
  }

  if (email.includes('@') === false || email.includes('.') === false) {
    messages.push('Email is missing "." or "@"')
  }

  // This will check that the Message input isnt empty
  if (message === '' || message == null) {
    messages.push('Message is required')
  }

  // This will check that at leaast one radio input is checked
  if (experience === '') {
    messages.push('Experience rating required')
  }

  // This will push the error strings to the div with id of error
  if (messages.length > 0) {
    event.preventDefault()
    errorElement.style.display = 'inline'
    errorElement.innerText = messages.join(', ')
  }
})
