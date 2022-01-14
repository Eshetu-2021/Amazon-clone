import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./Stateprovider";
import { useHistory } from 'react-router-dom';
        // ********CurrencyFormat is 
// If you want to display numbers as monetary values, you must format those numbers as currency. To do this, you apply either the Currency or Accounting number format to the cells that you want to format. The number formatting options are available on the Home tab, in the Number group.

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const history = useHistory();
  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      /> <button onClick={(e) => history.push('/payment')}>
      Proceed to Checkout
    </button>
    </div>
  );
}

export default Subtotal;
