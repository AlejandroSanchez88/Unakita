import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCakeCandles } from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faCakeCandles} size="2x" color="rgb(248, 60, 141)" />
      <div className="qty-display">0</div>
    </div>
  );
};

export default CartWidget;