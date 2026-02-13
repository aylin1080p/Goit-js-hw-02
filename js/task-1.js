// quantity: siparis miktari kac tane alinacak
//pricePerDroid: urun fiyati float olabilir
// customerCredits: musteri cuzdani float olabliir.

function makeTransaction(quantity, pricePerDroid, customerCredits){

// verilen degerler int ya da floata cevrilsin
let quantityInt = parseInt(quantity);
let pricePerDroidFloat = parseFloat(pricePerDroid);
let customerCreditsFloat = parseFloat(customerCredits);

 const totalPrice = (quantityInt*pricePerDroidFloat);


if(totalPrice >customerCreditsFloat){ 
    // cuzdandan fazlasini aldiginda;
    return `Insufficient funds!`;
} else {
return `You ordered ${quantityInt} droids worth ${totalPrice} credits!`;
}
}

// inputlari al 
function hesapla() {
    const q = document.getElementById('quantity').value;
    const p = document.getElementById('price').value;
    const c = document.getElementById('credits').value;
    // sonucu ekrana bas
    const mesaj = makeTransaction(q, p, c);
    document.getElementById('display-result').innerText = mesaj;



}


