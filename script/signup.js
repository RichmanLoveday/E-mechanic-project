const inputs = document.querySelectorAll('input[type="text"')
// console.log(inputs)
const checkbox = document.querySelector('input[type ="checkbox"')
// console.log(checkbox)
const submit = document.querySelector('input[type ="submit"');
// console.log(submit);
submit.addEventListener('click', submitFunc)
const regEx = {
    fullname: /^[a-z A-Z \s]{1,}$/,
    phone:/^((\+234)|0)[\d]{10}$/,
    mail: /^([\w\.]{1,})\@[a-z]{3,10}(\.com)$/,
    password: /[\w.]{6,20}/
}
inputs.forEach((input) => input.addEventListener('keyup', check))
function check(e){
    // console.log(e)
    // console.log(this)
    let test = regEx[this.id].test(this.value);
    // console.log(test)
    if(test == false){
        this.classList.add("alert")
        this.classList.remove("valid")
        this.previousElementSibling.textContent = 'Please, fill this field properly'

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
    }else if(inputs[2].classList.contains('valid') == false){
        // console.log(this)
        e.preventDefault()
        // alert("Kindly fill in the Form following the suggestions")
    }else if(inputs[3].classList.contains('valid') == false){
        // console.log(this)
        e.preventDefault()
        // alert("Kindly fill in the Form following the suggestions")
    }else if(checkbox.checked === false ){
        e.preventDefault()
        // alert("Kindly tick the box")
    }
    
}

