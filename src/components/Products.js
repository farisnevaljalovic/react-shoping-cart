

function Products({products}) {
    console.log(products);
    return (
        <div>
            <ul className="products">
                {products.map((product)=>{
        return(
            <li key={product._id}>
                <div className="product">
                    <a href={"#" + product._id}>
                        <img src={product.image} alt={product.title}></img>
                        <p>{product.title}</p>
                    </a>
                    <div className="product-price">
                        <div>{"$ " + product.price}</div>
                        <button className="button primary">Add to cart</button>
                    </div>
                </div>
            </li>
        )
    })}
            </ul> 
        </div>
    )
}

export default Products
