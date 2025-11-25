const product = [{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }];
function processProducts(){
    const productName = product.map(p => p.name);
    product.forEach(p => {
        if (p.price>50){
            console.log(`${p.name} is above $50`)
        }
        else{
            
            console.log(`${p.name} is below $50`)
        }
        

    });
    return productName;
}
processProducts(product)
