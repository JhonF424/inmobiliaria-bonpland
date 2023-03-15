import React, { useState, useEffect } from "react";
import style from "./Home.module.css";

const baseURL = "https://fakestoreapi.com/products"; // API DE PRUEBA

export default function Home() {
  const [products, setProducts] = useState([]);

  const axiosApi = async () => {
    const data = await fetch(baseURL);
    const products = await data.json();
    setProducts(products)
  };

  useEffect(() => {
    axiosApi(); // FUNCION PARA RENDERIZAR LA INFORMACION APENAS SE MONTE EL COMPONENTE
  }, []);

  if (!products) return "Products is empty";

  return (
    <>
      <div className={style.containerProducts}>
        {products.map((product) => {
          return (
            <div className={style.cardProduct}>
            <figure className={style.containerImg}>
              <img src={ product.image } alt="img" />
            </figure>
            <div className={style.infoProduct}>
              <h1> { product.title } </h1>
              <p className={style.price}> { product.price } </p>
            </div>
          </div>
          )
        })}
      </div>
    </>
  );
}
