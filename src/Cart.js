import React from 'react'

function Cart(props) {
    var total = 0;
    props.data.map((product)=> {
        return(
            total = total+product.data.price
        )
    })
    return (
        <div className="row">
            {props.data.map((cartItem) => {
                return (
                    <div className='col-sm-3'>
                        <div className="card" style={{ width: "18rem", margin: "2%" }}>
                            <img src={cartItem.data.img} className="card-img-top" alt="..." style={{ height: "300px" }} />
                            <hr />
                            <div className="card-body">
                                <h5 className="card-title">{cartItem.data.name} </h5>
                                <p className="card-desc"> {cartItem.data.desc}  </p>

                                <p className="card-text">Price :<b>₹{cartItem.data.price}</b>   </p>




                            </div>
                        </div>
                    </div>
                )
            })}
            <p>Total cost of your items is :{total}</p>
        </div>
    )
}

export default Cart