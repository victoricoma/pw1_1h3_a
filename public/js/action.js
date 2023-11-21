import userLogin from './moduloDados.js'

const login = document.getElementById("login")

login.addEventListener("click", (e) => {
    let user = document.getElementById("usuario").value
    let senha = document.getElementById("senha").value
    console.table(user, senha)
    console.table(userLogin)
})