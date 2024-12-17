let temperatura = prompt("Inserisci la temperatura:");

switch (true) {
    case (temperatura < -10):
        console.log("Copriti...ancora ti raffreddi");
        break;
    case (temperatura < 0):
        console.log("Non è tanto il freddo quanto l'umidità");
        break;
    case (temperatura < 20):
        console.log("Non ci sono più le mezze stagioni");
        break;
    case (temperatura < 30):
        console.log("Mi dia una Peroni sudata");
        break;
    default:
        console.log("Lu mare, lu sole, lu ientu");
        break;
}
