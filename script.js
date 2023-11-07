const firstNameElement = document.getElementById('first')
const lastNameElement = document.getElementById('last')
const form = document.getElementById('form1')
const errorElement = document.getElementById('error')
const pwElement = document.getElementById('pw')
const cpwElement = document.getElementById('cpw')


form.addEventListener('submit', (e) => {
    let messages = []
    if(pwElement.value !== cpwElement.value){
        messages.push('You password does not match')
        pwElement.style.backgroundColor = 'rgb(253, 231, 231)'
        // pwElement.style.outline = 'solid 1px  red;'
        cpwElement.style.backgroundColor = 'rgb(253, 231, 231)'
        // cpwElement.style.outline = 'solid 1px  red;'

    }

    if(messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }

})


