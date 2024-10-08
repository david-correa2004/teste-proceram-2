const btn = document.querySelector("#submit");

btn.addEventListener("click", e => {
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const assunto = document.querySelector("#assunto").value;
    const message = document.querySelector("#mens").value;
    if(name=== "" || message === "" || assunto === ""){
        alert('Preencha todos os campos')
    }else{
        message.replace(" ", "+")
        window.location.assign(`https://wa.me/556181825700?text=Nome:+${name}%0AAssunto:+${assunto}%0AMensagem:+${message}`)
    }
    
})
