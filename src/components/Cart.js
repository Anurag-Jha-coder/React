import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClick = () =>{
    dispatch(clearCart());
  }

  return (
    <div className="text-center">
      <h1 className="font-bold text-xl m-2 p-2">Cart</h1>
      <div className="m-2">
        <button className=" bg-green-600 text-white rounded-lg m-2 p-2" onClick={handleClick}>Clear Cart</button>
      </div>
      {cartItem.map((item) => {
        return (
          <div className="w-1/2 m-auto">
            <ItemList menuInfo={item} />
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
