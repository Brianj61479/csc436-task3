import products from './products'

const ArrayFilter = ()  => {

    return ( 

   <div>
    <h3>The following Phones are currently on Sale: </h3>

     <ol><b>
         {products.filter(({ onSale }) => onSale == true).map(({ id, name }) => <li key={id}>{name}</li>)}
     </b></ol>
   </div>
    );
}

export default ArrayFilter;