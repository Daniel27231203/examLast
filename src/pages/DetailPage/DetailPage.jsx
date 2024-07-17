import React from "react";
import { useSelector } from "react-redux";

function DetailPage(props) {
  const { detail } = useSelector((s) => s.pro);
  console.log(detail);
  return (
    <div>
      <section className="bg-green-600">
        <div className="container">
          <div className="text-center py-[100px]">
            <h1 className="re">Shop Single</h1>
          </div>
        </div>
      </section>
      <section className="py-[40px]">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="w-[591px] h-[563px] rdetailative flex items-center justify-center bg-zinc-50 rounded-[15px]">
              <img
                className=" max-h-[400px] w-[500px]"
                src={detail.image}
                alt=""
              />

              <h4
                style={{
                  background: "#274C5B",
                }}
                className="py-[7px] absolute rounded-[15px] top-[10px] left-[10px] w-[70px] text-center text-white"
              >
                {detail.type}
              </h4>
            </div>
            <div className="w-[658px] flex justify-center flex-col gap-[2rem]">
              <h1
                style={{
                  fontSize: "35px",
                }}
                className="re"
              >
                {detail.title}
              </h1>
              <div className="flex items-center gap-1">
                <div
                  style={{
                    background: detail?.raiting >= 1 ? "gold" : "grey",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    background: detail?.raiting >= 2 ? "gold" : "grey",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    background: detail?.raiting >= 3 ? "gold" : "grey",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    background: detail?.raiting >= 4 ? "gold" : "grey",
                  }}
                  className="star"
                ></div>
                <div
                  style={{
                    background: detail?.raiting >= 5 ? "gold" : "grey",
                  }}
                  className="star"
                ></div>
              </div>
              <span
                style={{
                  fontSize: "20px",
                }}
                className="re"
              >
                ${detail.price}
              </span>
              <p className=" text-gray-5  00">{detail.desc}</p>
              <div className=""></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DetailPage;
