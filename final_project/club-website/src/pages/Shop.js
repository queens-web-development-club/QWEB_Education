// import "../css/shop.css"
// import ShopItem from "../components/ShopItem";
// import useLocalStorage from "../hooks/useLocalStorage";

const ITEMS = [
    {
        image: "https://cdni.llbean.net/is/image/wim/517903_1_42?wid=262&hei=302&defaultImage=llbprod/A0211793_2&",
        name: "Premium Binoculars",
        price: "24.95",
        id: 0,
    },
    {
        image: "https://cdni.llbean.net/is/image/wim/517903_1_42?wid=262&hei=302&defaultImage=llbprod/A0211793_2&",
        name: "Premium Pro Binoculars [Gucci Edition]",
        price: "999.95",
        id: 1
    },
    {
        image: "https://cdni.llbean.net/is/image/wim/517903_1_42?wid=262&hei=302&defaultImage=llbprod/A0211793_2&",
        name: "Basic Binoculars",
        price: "9.95",
        id: 2
    },
]

function Shop() {
  // [ {id: int, count: int} ]
  // const [cartItems, setCartItems] = useLocalStorage("cart-items", []);

  // function addItemToCart(id) {
  //   let found = cartItems.find((i) => i.id === id)
  //   let currentCount = 0;
  //   if (found) {
  //       currentCount = found.count
  //   }

  //   const newCart = cartItems.filter((i) => i.id !== id)
  //   newCart.push({id: id, count: currentCount + 1})
  //   setCartItems(newCart);
  // }

  return (
    <>
      <div className="shop-page">
        <h2 className={"shop-page-header"}>Welcome to the QPWC shop!</h2>

        <div className="shop-page-container">
            {/* {ITEMS.map((i) => (
                <ShopItem
                    image={i.image}
                    name={i.name}
                    price={i.price}
                    onClick={() => addItemToCart(i.id)}
                />
            ))} */}
        </div>
      </div>
    </>
  );
}

export default Shop;
