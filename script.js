document.getElementById('Login').addEventListener('click' , ()=>{
    validate()
})
document.getElementById('pwd').addEventListener('input' , () => {
    pwdvalidate()
})
function validate()
{
    var email = document.getElementById('Email').value;
    var pwd = document.getElementById('pwd').value;
    if(email == "")
    {
        console.log('Please Fill the Email Field.');
    }
    else{
        console.log(email);
    }
    if(pwd == "")
    {
        console.log('Please Fill the Password Field.');
    }
    else{
        console.log(pwd);
    }
}
function pwdvalidate()
{
    var pass = document.getElementById('pwd');
    var charup = document.getElementById('charup');
    var charlow = document.getElementById('charlow');
    var spechar = document.getElementById('spechar');
    var num = document.getElementById('num');
    var len = document.getElementById('len');
    if(pass.value.match(/[0-9]/)){
        num.style.color = 'green'
    }else{
        num.style.color = 'red'
    }
    if(pass.value.match(/[A-Z]/)){
        charup.style.color = 'green'
    }else{
        charup.style.color = 'red'
    }
    if(pass.value.match(/[a-z]/)){
        charlow.style.color = 'green'
    }else{
        charlow.style.color = 'red'
    }
    if(pass.value.match(/[!\@\#\$\%\^\&\*\(\)\-\+\=\_\?\<\>\.\,]/)){
        spechar.style.color = 'green'
    }else{
        spechar.style.color = 'red'
    }
    if(pass.value.length < 8){
        len.style.color = 'red'
    }else{
        len.style.color = 'green'
    }
}