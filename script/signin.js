const inputs = document.querySelectorAll('.input')
// console.log(inputs)
//const submit = document.querySelector('input[type="submit"');
const submit = document.getElementById('submit')
console.log(inputs);
submit.addEventListener('click', submitFunc)
const regEx = {
    mail: /^([\w\.]{1,})\@[a-z]{3,10}(\.com)$/,
    password: /[\w.]{6,20}/
}
inputs.forEach((input) => input.addEventListener('keyup', check))
function check(e){
    console.log(e)
    // console.log(this)
    let test = regEx[this.id].test(this.value);
    // console.log(test)
    if(test == false){
        this.classList.add("alert")
        this.classList.remove("valid")
        this.previousElementSibling.textContent = 'Input correct details'

    }else{
    this.classList.remove('alert')
    this.classList.add('valid')
    this.previousElementSibling.textContent = ''
      }
}


function submitFunc(e){
    if(inputs[0].classList.contains('valid') == false){
        // console.log(this)
        e.preventDefault()
        // alert("Kindly fill in the Form following the suggestions")
    }else if(inputs[1].classList.contains('valid' == false)){
        // console.log(this)
        e.preventDefault()
        // alert("Kindly fill in the Form following the suggestions")
    }
    
}

