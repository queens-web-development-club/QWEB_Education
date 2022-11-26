import "../css/cart.css"
import BinocularsMan from "../img/binocularsMan.webp"

function Confirmation() {
  return (
    <div className="confirmation-screen">
      <h1>Thank you for your order!</h1>
      <p>We will be watching you.</p>
      <img className="confirmation-main-image" src={BinocularsMan} />
      <div>
        <br/>
        <a className="continue-shopping-button" href="/shop">Back to Shop</a>
        <br/>
      </div>
    </div>
  );
}

export default Confirmation;