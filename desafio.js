let nomeHeroi = "Agamenon";
let experiencia = 4200;
let nivel = "";

switch (true) {
    
    case experiencia <= 1000:
        nivel = "Ferro";
        break;
    case experiencia > 1000 && experiencia <= 2000:
        nivel = "Bronze";
        break;
    case experiencia > 2000 && experiencia <= 5000:
        nivel = "Prata";
        break;
    case experiencia > 6000 && experiencia <= 7000:
        nivel = "Ouro";
        break;
    case experiencia > 7000 && experiencia <= 8000:
        nivel = "Platina";
        break;
    case experiencia > 8000 && experiencia <= 9000:
        nivel = "Ascendente";
        break;
    case experiencia > 9000 && experiencia <= 10000:
        nivel = "Imortal";
        break;
    case experiencia > 10001:
        nivel = "Radiante";
}

console.log("O herói de nome " +nomeHeroi+ ", está no nível " +nivel);