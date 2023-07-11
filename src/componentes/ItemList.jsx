import React from "react";
import Item from "./Item";

export const ItemList = ({ productos }) => {
  return (
    <>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '5px 50px', 
          maxWidth: '1200px',
          justifyContent: 'center'
        }}
      >
        {productos.map((producto) => (
          <Item key={producto.id} productos={producto} />
        ))}
      </div>
    </>
  );
};

