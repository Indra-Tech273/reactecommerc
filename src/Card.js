import React from 'react'

function Card(props) {
    return (
        <div className='row' style={{margin:"2%"}}>
            {props.data.map((product) => {
                return (
                    <div className='col-sm-4'>
                    <div className="card" style={{ width: "18rem", margin:"1%" }}>
                    <img src={product.img} className="card-img-top" alt="..." style={{height:"300px"}}/>
                    <hr/>
                    <div className="card-body">
                        <h5 className="card-title">{product.name} </h5>
                        <p className="card-desc"> {product.desc}  </p>

                        <p className="card-text">Price :<b>₹{product.price}</b>   </p>


                        <button className="btn btn-primary" onClick={()=>props.handleCartData(product)}>Add to Cart</button>


                    </div>
                    </div>
                    </div>
                )
                

        })}

                

    </div>
    )
}

export default Card