import cart from "../assets/cart.png"

const styles = {
    img: {
        height: "30px",
        width: "30px",
    },
    span: {
        color: "white",
        paddingLeft: 8,
    }
}

export const CartWidget = () =>( 
    <> 
     <img style={styles.img} src={cart} alt="changuito"/>
      <span style={styles.span}>0</span>
     </>
    )