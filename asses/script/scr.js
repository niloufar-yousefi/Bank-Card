let cardnum1 = document.forms['pay']['cardnum1']
let cardnum = document.querySelectorAll('.cardnum')
let _lab1 = document.getElementById('_lab1')
let flag = true
let flag2 = true
let _value = []
let _date = document.querySelectorAll('.date')
let _lab2 = document.getElementById('_lab2')
let _lab3 = document.getElementById('_lab3')
let _pass = document.getElementById('_pass')
let _icon = document.querySelectorAll('main i')
//loading
cardnum1.focus()
//send to next
cardnum.forEach((val,i) => {
    val.addEventListener('keyup', () => {
        if (val.value.length >= 4) {
            val.value = val.value.substring(0, 4)           
            if(i == 3){
                _date[0].focus()                
            }else{
                val.nextElementSibling.focus()
            }
        }
    })
})

_date.forEach((val,i) => {
    val.addEventListener('keyup', () => {
        if (val.value.length >= 2) {
            val.value = val.value.substring(0, 2)
            if(i == 1){
                _pass.focus()                
            }else{
                val.nextElementSibling.focus()
            }
            
        }
    })
})

function myForm(event) {   
    //part1
    for (let index = 0; index < cardnum.length; index++) {

        const element = cardnum[index];
        _value[index] = element.value
        if (
            (_value[index] == null) ||
            (_value[index] == '') ||
            (_value[index].search(/<script/) >= 0) ||
            (_value[index].search(/&lt;script/) >= 0) ||
            (_value[index].search(/script/) >= 0)
        ) {
            flag = false
            _lab1.innerHTML = 'please fill the  box...'
        } else {
            if (
                (_value[index].length <= 3) ||
                (_value[index].search(/[~!@#$%^&*()_+?]/) >= 0) ||
                (_value[index].search(/[a-z, A-z, ا-ی]/) >= 0)
            ) {
                flag = false
                _lab1.innerHTML = 'please check your card number'
                break
            } else {
                flag = true
                _lab1.innerHTML = ''
            }
        }
    }

    //part2
    for (let index = 0; index < _date.length; index++) {

        const element = _date[index];
        _value[index] = element.value
        if (
            (_value[index] == null) ||
            (_value[index] == '') ||
            (_value[index].search(/<script/) >= 0) ||
            (_value[index].search(/&lt;script/) >= 0) ||
            (_value[index].search(/script/) >= 0)
        ) {
            flag = false
            _lab2.innerHTML = 'please fill the  box...'
        } else {
            if (
                (_value[index].length <= 1) ||
                (_value[index].search(/[~!@#$%^&*()_+?]/) >= 0) ||
                (_value[index].search(/[a-z, A-z, ا-ی]/) >= 0) ||
                (_value[0] >= 13) ||
                (_value[1] >= 32)
            ) {
                flag = false
                _lab2.innerHTML = 'please check your date card'
                
            } else {
                flag = true
                _lab2.innerHTML = ''
            }
        }
    }

//part3
    if(
        (_pass.value == null) ||
        (_pass.value == '') ||
        (_pass.value.search(/<script/) >= 0) ||
        (_pass.value.search(/&lt;script/) >= 0) ||
        (_pass.value.search(/script/) >= 0)
    ){
        flag = false
        _lab3.innerHTML = 'please fill the  box...'
        
    }else{
        if (
             (_pass.value.length <= 9) ||
             (_pass.value.search(/[a-z]/) == -1) ||
             (_pass.value.search(/[A-Z]/) == -1) ||
             (_pass.value.search(/[0-9]/) == -1) ||          
             (_pass.value.search(/[~!@#$%^&*()_+?/<>,.";]/) == -1)
        ) {
            flag = false
            _lab3.innerHTML = 'please check your password to be  stronger'
            
        } else {
            flag = true
            _lab3.innerHTML = ''
        }
    }



    if(!flag){
        event.preventDefault()
    }

}


//show password
for (let index = 0; index < _icon.length; index++) {
    const element = _icon[index];
    element.addEventListener('click',()=>{
        if(index == 0){
            element.style.display = 'none'  
            _icon[1].style.display = 'flex'
            _pass.type = 'text'   
            }
        if(index == 1){
            element.style.display = 'none' 
            _pass.type = 'password' 
            _icon[0].style.display = 'flex'                   
            }        
    })
    
}