function calcularImc() {
    
    let peso = parseFloat(document.getElementById("pesoInput").value);
    let altura = parseFloat(document.getElementById("alturaInput").value);

    while (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    alert("Por favor ingresa números válidos para peso y altura.");
    return;
    }

    const IMC = peso / (altura / 100)**2;

    if (IMC < 18.5) {
        alert("Tu Índice de Masa Corporal (IMC) es " + IMC.toFixed(2) + ". Tienes un peso bajo.");
    } else if (IMC <= 25) {
        alert("Tu Índice de Masa Corporal (IMC) es " + IMC.toFixed(2) + ". Tienes un peso normal.");
    } else if (IMC <= 30) {
        alert("Tu Índice de Masa Corporal (IMC) es " + IMC.toFixed(2) + ". Tienes un peso normal.");   
    }
    else {
        alert("Tu Índice de Masa Corporal (IMC) es " + IMC.toFixed(2) + ". Tienes obesidad.");
    }
}
    
