function somaNumero(n1, n2, op){
    let resultado=0;
    if(op==="c"){
        resultado=(n1+n2)
        console.table(resultado)
        return
    }

    if(op==="a"){
        resultado=(n1 - n2)
        alert(resultado)
        return
    }
}