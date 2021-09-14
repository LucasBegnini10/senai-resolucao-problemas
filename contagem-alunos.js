let alunos = ['Pedro','Maria','José','Carlos','Julia','Lucas','Luana','Jorge','Giovana','Marco','Yngrid','Kaiky']
let qntdAlunos = alunos.length;

if(qntdAlunos == 0){
    console.log('Zero = '+ qntdAlunos)
}else if(qntdAlunos % 2 == 0){
    console.log("Par = " + qntdAlunos)
}else{
    console.log("Ímpar = " + qntdAlunos)
}
