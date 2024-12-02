function main() {
    console.clear(); // Limpa o console
    console.log("Digite nome do herói");
  
    const nome = prompt("Nome do herói:");
    const xpInput = prompt("Quantidade de XP:");
  
    const xpHeroi = parseInt(xpInput);
  
    // Valida a entrada de XP
    if (isNaN(xpHeroi)) {
      console.log("XP deve ser um número válido.");
      return;
    }
  
    // Define a classificação do herói de acordo com sua quantidade de XP
    let classificacao = "";
    if (xpHeroi <= 1000) {
      classificacao = "Ferro";
    } else if (xpHeroi <= 2000) {
      classificacao = "Bronze";
    } else if (xpHeroi <= 5000) {
      classificacao = "Prata";
    } else if (xpHeroi <= 7000) {
      classificacao = "Ouro";
    } else if (xpHeroi <= 8000) {
      classificacao = "Platina";
    } else if (xpHeroi <= 9000) {
      classificacao = "Ascendente";
    } else if (xpHeroi <= 10000) {
      classificacao = "Imortal";
    } else {
      classificacao = "Radiante";
    }
  
    // Exibe o nome, quantidade de XP e classificação do personagem
    console.clear();
    console.log("------ Status do Herói ------");
    console.log("Nome: " + nome);
    console.log("Experiência: " + xpHeroi + " XP");
    console.log("Classificação: " + classificacao);
    console.log("----------------------------");
  
    // Pergunta se o usuário deseja continuar
    const continuar = prompt("Deseja continuar? (S/N):").toUpperCase();
    if (continuar === "S") {
      main(); // Chama a função principal novamente
    } else {
      console.log("Até a próxima!");
    }
  }
  
  // Inicia o programa
  main();
  