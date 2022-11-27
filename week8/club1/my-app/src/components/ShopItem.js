import "../css/shop-item.css"

function ShopItem({image, price, name, description, onClick}) {
    return (
        <div className="shop-item">
            <div className="shop-item-img-container">
                <img src={image}/>
                <button onClick={onClick}>+</button>
            </div>
            <div className="shop-item-info">
                <p>${price} {name}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ShopItem;