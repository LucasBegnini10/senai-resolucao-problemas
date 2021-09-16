let peca1 = [99, 'Memória Ram'];
let peca2 = [100, 'Processador'];
let peca3 = [110, 'Placa de Vídeo'];
let peca4 = [110, 'Hd'];
let peca5 = [120, 'Memória Ram'];
let peca6 = [100, 'Processador'];
let peca7 = [110, 'Placa de Vídeo'];
let peca8 = [100, 'Hd'];
let peca9 = [1120, 'Ssd'];


let listaPecas = [peca1, peca2, peca3, peca4, peca5, peca6, peca7, peca8, peca9];
let listaPesos = [peca1[0], peca2[0], peca3[0], peca4[0], peca5[0], peca6[0], peca7[0], peca8[0], peca9[0]];
let listaNomes = [peca1[1], peca2[1], peca3[1], peca4[1], peca5[1], peca6[1], peca7[1], peca8[1], peca9[1]];

for(indice = 0; indice < listaPecas.length; indice++){
    let peso = listaPesos[indice];
    let x = listaNomes[indice];
    let qntdLetras = x.length;

if(listaPecas.length > 10){
    console.log('Cadastro inválido pois excedeu o limite que é 10 peças.')
    break
}else{
    if(peso < 100){
        console.log('Cadastro inválido da peça ' + (indice + 1) + ' por pesar menos que 100 gramas.')
    }else{
        if(qntdLetras < 3){
            console.log('Cadastro inválido da peça ' + (indice + 1) + ' por ter menos que 3 letras.')
        }else{
            console.log('Cadastro da peça ' + (indice + 1) + ' realizado com sucesso.')
        }
    }
}



}