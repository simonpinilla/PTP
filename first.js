
playGame()

function playGame(){
  let humanScore = 0;
  let computerScore = 0;
  
  
  


function getRamdonInt(max){
  return Math.floor(Math.random()* max)
}


function getComputerChoice(){

  let valor = getRamdonInt(3)
  if (valor == 0 ){
    
  return computerChoice = 'piedra'; //piedra
    

  }else if (valor == 1){
    
    return computerChoice = 'papel'; //papel

  }else if(valor == 2){

    return computerChoice = 'tijera'; //tijera



  }else{
    console.log('xd')
  }  
}

function getHumanChoice(){
  getValor= prompt('ingrese su eleccion: ')
  
  let newValor = getValor.toLowerCase();

  
  

  if (newValor == 'piedra' ){
    
    return humanChoice = 'piedra'; //piedra

  }else if (newValor == 'papel'){
    return humanChoice = 'papel';//papel
  }else if(newValor == 'tijera'){
    return humanChoice = 'tijera'; //tijera


  }else{
    console.log('Valor Inválido')
  }
}
  for (let i = 0; i<5;i++ ){
  console.log(`--- Ronda ${i+1} ---`)

  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection) 
      
  }
    
  
  
    
  function playRound(humanChoice, computerChoice){
  
  if (humanChoice === computerChoice){
    console.log(`¡${humanChoice} con ${computerChoice} es empate!` )
  
  }else if( humanChoice != computerChoice){
    if(humanChoice == 'piedra' && computerChoice == 'tijera'){
      console.log(`¡Ganas! la ${humanChoice} le gana a la ${computerChoice}`)
      return humanScore += 1
    }else if(humanChoice == 'piedra' && computerChoice == 'papel'){
      console.log(`¡Pierdes! el ${computerChoice} le gana a la ${humanChoice}`)
      return computerScore += 1
    }else if(humanChoice == 'papel' && computerChoice == 'piedra'){
      console.log(`¡Ganas! el ${humanChoice} le gana a la ${computerChoice}`)
      return humanScore += 1
    }else if(humanChoice == 'papel' && computerChoice == 'tijera'){
      console.log(`¡Pierdes! la ${computerChoice} le gana al ${humanChoice}`)
      return computerScore += 1
    }else if(humanChoice == 'tijera' && computerChoice == 'papel'){
      console.log(`¡Ganas! el ${humanChoice} le gana a la ${computerChoice}`)
      return humanScore += 1
    }else if(humanChoice == 'tijera' && computerChoice == 'piedra'){
      console.log(`¡Pierdes! la ${computerChoice} le gana a la ${humanChoice}`)
      return computerScore += 1
    }

  }
}
console.log(`--- Puntajes ---`)

console.log(`puntaje Maquina: ${computerScore}`)
console.log(`puntaje Jugador: ${humanScore}`)

if (humanScore>computerScore){
  console.log(`--- Ganadorrr ---`)

  console.log(`¡Ganasteeee!`)
}else if (computerScore>humanScore){
  console.log(`--- Ganadorrr ---`)
  console.log(`¡Ganó la maquina! `)


}else {
  console.log(`---*******---`)
  
  console.log('ES UN EMPATE')
}


}


