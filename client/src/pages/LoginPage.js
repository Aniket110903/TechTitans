import { useState } from "react";
import './LoginPage.css'
function LoginPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function registerUser(event) {
        event.preventDefault()
        const response = await fetch('http://localhost:1337/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password
            }),
        })
        const data = await response.json()
        console.log(data)
    }

    function showError(input, message){
        const form_Control = input.parentElement;
        form_Control.className = 'formControl error';
        const small = form_Control.querySelector('small');
        small.innerText = message;
    }
    function showSuccess(input){
        const form_Control = input.parentElement;
        form_Control.className = 'formControl sucess';
    }
    
    
    //CHECK REQUIRED FIELDS
    function checkRequired(inputArr){
        inputArr.forEach(function(input){
            if(input.value.trim() === ''){
                showError(input, `${getFieldName(input)} is required`);
            }
            else{
                showSuccess(input);
            }
        });
    }
    //CHECKING FIELD LENGTH
    function checkLength(input, min, max){
        if(input.value.length < min){
            showError(input, `${getFieldName(input)} is less than ${min} characters`);
        }
        else if(input.value.length > max){
            showError(input, `${getFieldName(input)} is greater than ${max} characters`);
        }
        else{
            showSuccess(input);
        }
    }
    // checking email validity
    function checkEmail(input){
        const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
        if(re.test(input.value)){
            showSuccess(input);
        }
        else{
            showError(input, `${getFieldName(input)} entered is wrong`);
        }
    }
    function getFieldName(input){
        return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    }
    
    form.addEventListener('submit', function(e){
        e.preventDefault();
        checkLength(password, 6, 20);
        checkEmail(email);
    });

    return (
        <div class="containerLogin">
            <form id="form" class="form">
                <h2>Registeration</h2>
            <div class="formControl">
                <label for="email">Email</label>
                <input type="text" id="email" placeholder="Enter your email"/>
                <small>error message</small>
            </div>
            <div class="formControl">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Enter your password"/>
                <small>error message</small>
            </div>
            <button>Submit</button>
        </form>
    </div>
    );
}

export default LoginPage;