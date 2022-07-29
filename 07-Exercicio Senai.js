//-- Listas--
const Idade_minima =Number(18)
const Data_atual = new Date()
let Lista = []
TotalPessoas = Lista.length;

//--- CADASTRO--
if(Lista.length<3 )
while(continuar = "sim"){
    let nome = window.prompt("Nome")
   
    let Idade =(window.prompt("Idade"))
    while(Idade - Idade !=0   || Idade< Idade_minima ){ Idade = window.prompt("Insira uma idadade valida")}
    
    
    let Dia_evento = window.prompt("Ano/mês/dia")
    while(Dia_evento<=Data_atual){Dia_evento = window.prompt("Insira uma data valida")}



    Lista.push(nome)
    console.log(Lista)
    console.log(TotalPessoas)
    continuar = prompt("Deseja continuar")
    if (continuar =="não")
    break
    if (Lista.length ==3)
    break
    
}

console.log("numero de pesoas cadastradas",TotalPessoas)
console.log("Segue lista",Lista)