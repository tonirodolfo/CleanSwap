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
                              <label for="${crypto.name}">${crypto.name} pour $${crypto.value}</label>`;
      cryptoList.appendChild(cryptoItem);
    });
    
    document.getElementById("swap-button").style.display = "block";
  }, 3000);
  
  document.getElementById("swap-button").addEventListener("click", function() {
    alert("Swap confired !");
  });
});
