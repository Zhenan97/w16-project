const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
loginButton.addEventListener("click",(e)=>{
    e.preventDefault();
    const username=loginForm.username.value;
    const password=loginForm.password.value;

    if(username==="user"&&password==="123")
    {
        alert("You havr successfully logged in.");
        location.assign("file:///C:/Users/92090/OneDrive/%E6%A1%8C%E9%9D%A2/411770737%E9%8D%BE%E9%8E%AE%E5%AE%89%E6%9C%9F%E4%B8%AD%E5%A0%B1%E5%91%8A/project3/an.html");
        
    }else{
        loginErrorMsg.style.opacity=1;
    }
})