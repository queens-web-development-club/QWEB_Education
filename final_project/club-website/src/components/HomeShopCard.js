import "../css/Homepage.css"

function HomeShopCard(props){
    return(
        <div className="shop-card">
            <img src={props.info.img} ></img>
            <div className="item-info">
                <p>
                    ${props.info.price}{ }
                    {props.info.name}
                </p>
                <p>
                    {props.info.description}
                </p>
                <a href="/shop" >
                    View item in Shop &rarr;
                </a>
            </div>
        </div>
    )
}

export default HomeShopCard