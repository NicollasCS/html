function alertoi(){
    alert("Entrou")
}
function dias(){
    var idadeDias

    var idade = Number(prompt("IDADE"))
    var nome = prompt("NOME")

    idadeDias = idade*365

    alert(nome+" possui "+idade+" anos, e sua idade em dias é "+idadeDias)
}


function comida(){
    var valorComida

    
    var pesoPrato = Number(prompt("PESO (KG)"))
    var valor = Number(prompt("VALOR P/KG"))
    while(pesoPrato<0,valor<0){
        alert("INVÁLIDO")
        var pesoPrato = Number(prompt("DIGITE NOVAMENTE O PESO (KG)"))
        var valor = Number(prompt("DIGITE NOVAMENTE O VALOR P/KG"))
    }
    valorComida = pesoPrato*valor

    alert("O valor a ser pago é de R$"+valorComida)
}

function diaMes(){
    var dia,mes,resultado
    

    dia = Number(prompt("DIA DO MÊS"))
    while(dia>31,dia<1)
    {
        alert("DIA INVÁLIDO")
        dia = Number(prompt("DIGITE NOVAMENTE O DIA"))
    }

    mes = Number(prompt("MÊS"))
    while(mes>12,mes<1)
    {
        alert("MÊS INVÁLIDO")
        mes = Number(prompt("DIGITE NOVAMENTE O MÊS"))
    }

    resultado = (mes-1)*30+dia
    alert("Dia do ano: "+resultado)
}

function salario(){
    var salarioInicial,salarioAumentado,salarioImposto,aumento=0.15

    salarioInicial = Number(prompt("SALÁRIO"))
    while(salarioInicial<0){
        alert("INVÁLIDO")
        salarioInicial = Number(prompt("DIGITE NOVAMENTE O SALÁRIO"))
    }
    salarioAumentado = salarioInicial*aumento+salarioInicial

    var imposto=salarioAumentado*0.08
    salarioImposto = salarioAumentado-imposto

    alert("Seu salário inicial era de R$"+salarioInicial+", com o aumento passou a ser R$"+salarioAumentado+", mas com os impostos fica R$"+salarioImposto)
}