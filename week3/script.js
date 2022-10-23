const form = document.querySelector('#contact-form')
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const message = document.querySelector('#message')
const ok = document.querySelector('#Ok')
const good = document.querySelector('#Good')
const amazing = document.querySelector('#Amazing')
const errorElement = document.querySelector('#error')

// Using an event listener and arrow function to make things easier
form.addEventListener('submit', (e) => {
  let messages = []

  // This will check that the Name input isnt empty
  if (name.value === '' || name.value == null) {
    messages.push('Name is required')
  }

  // This will check that the Email input isnt empty, and contains an @ and .
  if (email.value === '' || email.value == null) {
    messages.push('Email is required')
  }

  if (
    email.value.includes('@') === false ||
    email.value.includes('.') === false
  ) {
    messages.push('Email is missing "." or "@"')
  }

  // This will check that the Message input isnt empty
  if (message.value === '' || message.value == null) {
    messages.push('Message is required')
  }

  // This will check that at leaast one radio input is checked
  if (
    ok.checked == false &&
    good.checked == false &&
    amazing.checked == false
  ) {
    messages.push('Experience rating required')
  }

  // This will push the error strings to the div with id of error
  if (messages.length > 0) {
    e.preventDefault()
    errorElement.style.display = 'inline'
    errorElement.innerText = messages.join(', ')
  }
})
