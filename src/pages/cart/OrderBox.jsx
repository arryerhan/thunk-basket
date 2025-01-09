import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';


const OrderBox = ({ cart }) => {
    // sepetteki toplam ürün adedi
    const totalAmount = cart.reduce((total, i) => total + i.amount, 0);
  
    // sepetteki toplam fiyat
    const totalPrice = cart.reduce((total, i) => total + i.amount * i.price, 0);
  
    const handleCheckout = () => {

      dispatch(clearCart());

  };
    return (
      <div className="p-5 rounded-md border h-fit border-black">
        <h2 className="font-semibold text-xl">Order Details</h2>
  
        <p className="flex items-center gap-2 my-4">
          <span className="text-gray-600">Order Count:</span>
          <span className="text-lg font-bold text-red-500"> {totalAmount}</span>
        </p>
  
        <p className="flex items-center gap-2 my-4">
          <span className="text-gray-600">Total:</span>
          <span className="text-lg font-bold text-red-500">
            ${totalPrice.toFixed(2)}
          </span>
        </p>
      
        <Link to="/">
        <button className="w-full mt-16 bg-red-500 text-white font-semibold py-2 px-4 rounded-md transition hover:bg-red-600">
          Close
        </button>
          </Link>
      </div>
    );
  };
  
  export default OrderBox;






