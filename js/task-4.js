function getShippingCost(country) {
    let price;

    // Switch yapısı ile ülke kontrolü sağlıyoruz
    switch (country) {
        case "China":
            price = 100;
            break;
        case "Chile":
            price = 250;
            break;
        case "Australia":
            price = 170;
            break;
        case "Jamaica":
            price = 120;
            break;
        default:
            // Liste dışındaki tüm ülkeler buraya düşer
            return "Sorry, there is no delivery to your country";
    }

    // okeyse
    return `Shipping to ${country} will cost ${price} credits`;
}

// ekrana bas
function teslimatKontrol() {
    const ulke = document.getElementById("countryInput").value;
    const sonuc = getShippingCost(ulke);
    document.getElementById("shippingResult").innerText = sonuc;
}