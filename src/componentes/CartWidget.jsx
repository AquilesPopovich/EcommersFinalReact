import { Link } from "react-router-dom"
import cart from "../assets/cart.png"

const styles = {
    img: {
        height: "35px",
        width: "35px",
    },
    span: {
        color: "white",
        paddingLeft: 8,
    }
}

export const CartWidget = () =>( 
    <> 
     <Link to='/carrito'><img style={styles.img} src={cart} alt="changuito"/></Link>
      <span style={styles.span}>0</span>
     </>
    )