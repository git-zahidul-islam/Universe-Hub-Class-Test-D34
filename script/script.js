// data load
const productLoad = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools')
    const data = await res.json()
    const productData = data.data;
    productShow(productData);
}
// product showing here
const productShow = (items) => {
    console.log(items.tools)
    const itemsDisplay = items.tools;
    // ui showing div 
    const cardContainer = document.getElementById('card-container');
    itemsDisplay.forEach((item => {
        console.log(item);
        
    }))
}


productLoad();