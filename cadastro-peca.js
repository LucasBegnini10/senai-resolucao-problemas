let pesoPecas = 109;
let listaPecas = ['Memória Ram', 'Ssd', " Memória", "Disco Rígido", "Hd"]
let qntdPecas = listaPecas.length



for(indice = 0; indice < qntdPecas; indice++){
    let x = listaPecas[indice];
    let qntdLetras = x.length;
    
    
    if (pesoPecas < 100){
        console.log("Cadastro inválido pois a peça pesa " + pesoPecas + " gramas.")
        break
    } else if(qntdPecas > 10){
        console.log("Cadastro inválido por não ter capacidade sucifiente.")
        break
    } else if(qntdLetras < 3){
        console.log("Erro! A peça " + (indice + 1) + " deve ter no mínimo 3 letras!")
}else{
    console.log("Sucesso ao cadastrar a " + (indice + 1) + "ª peça.")
}
}