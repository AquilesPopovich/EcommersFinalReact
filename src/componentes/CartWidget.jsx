import { Link } from "react-router-dom";
import cart from "../assets/cart.png";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const styles = {
  img: {
    height: "35px",
    width: "35px",
  },
  span: {
    color: "white",
    paddingLeft: 8,
  },
};

export const CartWidget = () => {
  const { contadorCarrito } = useContext(CartContext);


  return (
    <>
      <Link to="/carrito">
        <img style={styles.img} src={cart} alt="changuito" />
      </Link>
      <span style={styles.span}>{contadorCarrito()}</span>
    </>
  );
};
