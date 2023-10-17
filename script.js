document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.getElementById("wallet-scan").style.display = "none";
    
    const cryptoList = document.getElementById("crypto-list");
    cryptoList.style.display = "block";
    
    const cryptos = [
      {name: "BTC", value: 10},
      {name: "ETH", value: 20},
      {name: "LINK", value: 5}
    ];
    
    cryptos.forEach(crypto => {
      const cryptoItem = document.createElement("div");
      cryptoItem.innerHTML = `<input type="checkbox" id="${crypto.name}" name="${crypto.name}">
                              <label for="${crypto.name}">${crypto.name} for $${crypto.value}</label>`;
      cryptoList.appendChild(cryptoItem);
    });
    
    document.getElementById("swap-button").style.display = "block";
  }, 3000);
  
  document.getElementById("swap-button").addEventListener("click", function() {
    alert("Swap confired !");
 
document.getElementById("swap-button").addEventListener("click", function() {
  // Afficher l'écran de chargement
  document.getElementById("loading-screen").style.display = "block";
  
  // Simuler le calcul de la route
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    
    // Afficher la confirmation
    document.getElementById("confirmation-modal").style.display = "block";
  }, 2000);
});

document.getElementById("confirm-button").addEventListener("click", function() {
  // Cacher la confirmation
  document.getElementById("confirmation-modal").style.display = "none";
  
  // Afficher l'écran de chargement
  document.getElementById("loading-screen").style.display = "block";
  
  // Simuler la conversion
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    alert("Conversion confirmed!");
  }, 2000);
});

document.getElementById("cancel-button").addEventListener("click", function() {
  document.getElementById("confirmation-modal").style.display = "none";
  alert("Conversion cancelled.");
});
  
  
  });
});
