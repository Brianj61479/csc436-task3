import products from "./products";

const ArrayMap = () => {

return (
    <div>
        <h2>Names of Products in Array: </h2>
    <ul>
        {products.map(function (phone) {
            
            return (
            <div>
          
            <li key={phone.id}>
            
                {phone.name}

            </li>

            </div>
            
            )
        })}
    </ul>   
    </div>
);}

export default ArrayMap;
