function salario(){
    var sa,ns

    sa = Number(prompt("Seu salário"))

    if(sa<500){
        ns = sa
        ns = ns+(sa*0.15)
        alert("Novo salário com reajuste de 15% : R$"+ns)
    }
    else{
        if(sa<1000){
        ns = sa
        ns = ns+(sa*0.10)
        alert("Novo salário com reajuste de 10% : R$"+ns)
        }
    }
    if
        (sa>1000)
        ns = sa
        ns = ns+(sa*0.05)
        alert("Novo salário com reajuste de 5% : R$"+ns)
}

function operadorLogicoPortao(){
    var idade

    idade = Number(prompt("Qual sua idade?"))

    while(idade<0){
        idade = Number(prompt("Idade inválida! Tente novamente"))
    }

    if(idade>12&idade<60){
        alert("Entrada paga! O Reino ainda aguarda por sua magia!")
    }
    else{
        alert("Bem-vindo ao Reino Encantado! Entrada gratuita concedida")
    }
}

function valor(){
    var valor = Number(prompt("Valor :"))

    if(valor<20||valor>90){
        alert("Valor está fora da faixa permitida")
    }
    else{
        alert("Valor está na faixa permitida")
    }
}

function meses(){
    let mes = Number(prompt("mês"))
    let nomeMes

    switch(mes){
        case 1:
            nomeMes = "janeiro";
        break;
        case 2:
            nomeMes = "fevereiro";
        break;
        case 3:
            nomeMes = "março";
        break;
        case 4:
            nomeMes = "abril";
        break;
        case 5:
            nomeMes = "maio";
        break;
        case 6:
            nomeMes = "junho";
        break;
        case 7:
            nomeMes = "julho";
        break;
        case 8:
            nomeMes = "agosto";
        break;
        case 9:
            nomeMes = "setembro"
        case 10:
            nomeMes = "outubro";
        break;
        case 11:
            nomeMes = "novembro";
        break;
        case 12:
            nomeMes = "dezembro";
        break;
        default:
            nomeMes = "inválido";
    }
    alert(nomeMes)
}