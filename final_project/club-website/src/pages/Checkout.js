import "../css/cart.css"

function Checkout(props) {
  return(
    <div className="checkout">
      <div className="checkout-center">
        <div className="title-area">
          <span>Checkout</span>
          <a className="back-button" href="/shop/cart">&#8592; Back</a>
        </div>
        <div className="details">
          <div className="details-left">
            <form>
              <div className="shipping-billing">
                <span>Shipping & Billing Address</span>
                <div className="name">
                  <input type="text" placeholder="First Name" />
                  <input type="text" placeholder="Last Name" />
                </div>
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Address" />
                <input type="text" placeholder="Apartment, Suit, etc. (optional)" />
                <div className="city-state">
                  <input type="text" placeholder="City" />
                  <input type="text" placeholder="State/Province" />
                </div>
                <div className="country-postal">
                  <input type="text" placeholder="Country"/>
                  <input type="text" placeholder="Postal Code"/>
                </div>
              </div>
              <div className="payment-details">
                <span>Payment Details</span>
                <p className="disclaimer">*only only accept credit</p>
                <div className="row1">
                  <input type="text" placeholder="First Name"/>
                  <input type="text" placeholder="Last Name"/>
                </div>
                <div className="row2">
                  <input className="column1" type="text" placeholder="Credit Card Number"/>
                  <input className="column2" type="text" placeholder="CVV"/>
                </div>
                <div className="row3">
                  <input type="text" placeholder="Expiration Date"/>
                  <input type="text" placeholder="Zip Code"/>
                </div>
              </div>
              <a className="order-button" href="/shop/confirmation">
                <button>Place Order</button>
              </a>
            </form>
          </div>
          <div className="details-right">
            <div className="checkout-summary">
              <h4>Cart Summary</h4>
              <div className="checkout-items">
                <div className="checkout-item">
                  <span>1 x Premium Binoculars</span>
                  <span>${24.99}</span>  
                </div>
                <div className="checkout-item">
                  <span>1 x Zooming Binoculars</span>
                  <span>${29.99}</span>  
                </div>
                <div className="checkout-item">
                  <span>1 x Waiters Watch</span>
                  <span>${34.99}</span>  
                </div>
                <div className="checkout-item">
                  <span>1 x Polar Shades</span>
                  <span>${39.95}</span>  
                </div>
              </div>
              <div className="checkout-total">
                <div></div>
                <div>Total: &#8205; &#8205; &#8205; &#8205; &#8205; &#8205;${146.81}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Checkout;
