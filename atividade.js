let dataAtual = [12, 09, 2021];
let dataEvento = [22, 09, 2021];
let idade = 19;
let qntdParticipantes = 102;

if((dataEvento[2] - dataAtual[2]) < 0){
    console.log("Cadastro não será permitido pois já passou o ano do evento!")
} else if ((dataEvento[1] - dataAtual[1]) < 0){
    console.log("Cadastro não será permitido pois já passou o mês do evento!")
} else if ((dataEvento[0] - dataAtual[0]) < 0){
    console.log("Cadastro inválido pois já passou o dia do evento!")
} else if (idade < 18){
    console.log ("Cadastro não será permitido por ser de menor.")
} else if(qntdParticipantes >= 100){
    console.log("Cadastro não será permitido pois excedeu o limite de participantes.")
} else{
    console.log("Cadastro realizado com sucesso! Bom evento! :)")
}


