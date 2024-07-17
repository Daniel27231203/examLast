import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard/ProductCard";

function Shop(props) {
  const { product } = useSelector((s) => s.pro);
  return (
    <div id="shop">
      <section className="bg-green-600">
        <div className="container">
          <div className="text-center py-[100px]">
            <h1 className="re">Shop</h1>
          </div>
        </div>
      </section>
      <section className="py-[4rem]">
        <div className="container">
          <div className="flex items-center gap-[40px] flex-wrap">
            {product.map((el) => (
              <ProductCard el={el} key={el._id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Shop;
