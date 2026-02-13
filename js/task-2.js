

function formatMessage(message, maxLength) {


if (message.length <= maxLength){
 return message; // sorun yokken
} else {
    
// karakter kadar kesme
    return message.slice(0, maxLength) + " ...";
}

}

 function ekrandaGoster() {
    // HTML'deki inputlardan değerleri alıyoruz
    const inputVal = document.getElementById("userInput").value;
    const limitVal = parseInt(document.getElementById("maxLen").value);
    
    // Fonksiyonu çalıştırıp sonucu alıyoruz
    const formatted = formatMessage(inputVal, limitVal);
    
    // Sonucu ekrandaki p etiketine yazdırıyoruz
    document.getElementById("resultText").innerText = formatted;
}

