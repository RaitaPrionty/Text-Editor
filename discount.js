document.getElementById('btn-discount').addEventListener('click',function(){
    // get the input
    const input = document.getElementById('discount-input');
    const inputText = input.value;
    const inputTextFloat = parseFloat(inputText);
    // get real price
    const realPrice = document.getElementById('real-price');
    const realPriceText = realPrice.value;
    const realPriceFloat = parseFloat(realPriceText);
    // calculate the 30% discount
    const discountPrice = realPriceFloat*30/100;
    input.value = discountPrice;
    
    
    
    
})
