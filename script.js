const firstNameElement = document.getElementById('first')
const lastNameElement = document.getElementById('last')
const form = document.getElementById('form1')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if(first.value === '' || first.value === nul){
        messages.push('Name is required')
    }

    if(messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})