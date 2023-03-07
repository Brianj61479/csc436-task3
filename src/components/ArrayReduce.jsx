 import products from './products'
 
 const ArrayReduce = () => {

    const productTotalValues = products.reduce((accumulator, product, i, products) => {
        return `
            ${accumulator}
            ${i === 0 ? '' : ', '}
            ${i === products.price ? 'and ' : ''}
            ${products.price}`;
    }, '');   
    
    const productTotals = products.reduce((accumulator, products) => {
        return accumulator + products.price;

    }, 0);
  
   return  (
        <div>
             
            <p className="text-center">Total Value of the Phones are ${productTotals}.00</p>
                
        </div>
)}
export default ArrayReduce;