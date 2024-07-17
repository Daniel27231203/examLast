import React from "react";
import { useDispatch } from "react-redux";
import { getDetail } from "../../redux/Slices/productSlice";
import { useNavigate } from "react-router-dom";

function ProductCard({ el }) {
  const dispatch = useDispatch();
  const nav = useNavigate();
  return (
    <div
      onClick={() => {
        nav("/detail");
        dispatch(getDetail(el));
      }}
      style={{
        padding: "20px",
        background: "#F9F8F8",
      }}
      className="w-[270px] rounded-[15px] cursor-pointer"
    >
      <h4
        style={{
          background: "#274C5B",
        }}
        className="py-[7px] rounded-[15px] w-[70px] text-center text-white"
      >
        {el.type}
      </h4>
      <center>
        <img className=" max-h-[200px]" src={el.image} alt="" />
      </center>
      <h1
        style={{
          fontSize: "25px",
        }}
        className="re"
      >
        {el.title}
      </h1>
      <div className="w-full bg-gray-200 h-[2px] my-[10px]"></div>
      <div className="flex items-center justify-between">
        <span
          style={{
            fontSize: "20px",
          }}
          className="re"
        >
          ${el.price}
        </span>
        <div className="flex items-center gap-1">
          <div
            style={{
              background: el?.raiting >= 1 ? "gold" : "grey",
            }}
            className="star"
          ></div>
          <div
            style={{
              background: el?.raiting >= 2 ? "gold" : "grey",
            }}
            className="star"
          ></div>
          <div
            style={{
              background: el?.raiting >= 3 ? "gold" : "grey",
            }}
            className="star"
          ></div>
          <div
            style={{
              background: el?.raiting >= 4 ? "gold" : "grey",
            }}
            className="star"
          ></div>
          <div
            style={{
              background: el?.raiting >= 5 ? "gold" : "grey",
            }}
            className="star"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
