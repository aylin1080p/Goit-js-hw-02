//if(MessageChannel.includes(something))

function checkForSpam (message) {
    const checkedMessage = message.toLowerCase();
// kosullardan herhangi biri false verir

if(checkedMessage.includes("spam") || checkedMessage.includes("sale")) {
    return 1;

} else return 0;

}



 // ekrana basma 
function spamKontrolEt() {
    const input = document.getElementById("spamInput").value;
    const isSpam = checkForSpam(input);
    const resultArea = document.getElementById("spamResult");

    if (isSpam) {
        resultArea.innerText = "🚨 Dikkat: Yasaklı içerik algılandı!";
        resultArea.style.color = "red";
    } else {
        resultArea.innerText = "✅ Mesaj güvenli görünüyor.";
        resultArea.style.color = "green";
    }
}
