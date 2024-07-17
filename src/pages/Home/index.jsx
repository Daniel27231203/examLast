import React, { useEffect } from "react";
import bg1 from "../../assets/images/bg1.jpg";
import banana from "../../assets/images/banana.svg";
import banana2 from "../../assets/images/homeSection2.svg";
import section3 from "../../assets/images/section3.jpg";
import listHome from "../../assets/images/listHome.jpg";
import pochtaHome from "../../assets/images/pochtaHome.jpg";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard/ProductCard";
import { getProduct } from "../../redux/actionCreators/actionCreator";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const dispatch = useDispatch();
  let nav = useNavigate();
  const { product } = useSelector((s) => s.pro);
  let vagetables = product.filter((el) => el.type == "Vegetable");

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  console.log(product);
  return (
    <div className="py-[40px]" id="home">
      <section
        style={{
          backgroundImage: `url(${bg1})`,
          height: "80vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className=""
      >
        <div className="container">
          <div className="py-[20%]">
            <p
              style={{
                fontFamily: "Yellowtail",
              }}
              className="text-green-400 text-3xl"
            >
              100% Natural Food
            </p>
            <h1 className="re">
              Choose the best <br />
              healthier way <br />
              of life
            </h1>
            <button className="py-[15px] px-[40px] bg-yellow-400 rounded-[15px] text-cyan-700">
              Explore Now
            </button>
          </div>
        </div>
      </section>
      <section className="py-[40px]">
        <div className="container">
          <div className="flex items-center justify-center gap-5">
            <div
              style={{
                backgroundImage: `url(${banana})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left",
                padding: "100px 50px",
              }}
              className="h-[350px] w-[600px] rounded-[15px]"
            >
              <p
                style={{
                  fontFamily: "Yellowtail",
                }}
                className="text-white text-2xl"
              >
                Natural!!
              </p>
              <h1 className="text-3xl font-extrabold text-white">
                Get Garden <br /> Fresh Fruits{" "}
              </h1>
            </div>
            <div
              style={{
                backgroundImage: `url(${banana2})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left",
                padding: "100px 50px",
              }}
              className="h-[350px] w-[600px] rounded-[15px]"
            >
              <p
                style={{
                  fontFamily: "Yellowtail",
                }}
                className="text-green-400 text-2xl"
              >
                Offer!!
              </p>
              <h1 className="text-3xl font-extrabold text-black">
                Get Garden <br /> Fresh Fruits{" "}
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[40px]">
        <div className="container">
          <div className="">
            <p
              style={{
                fontFamily: "Yellowtail",
              }}
              className="text-green-400 text-3xl text-center"
            >
              Categories
            </p>
            <h1
              style={{
                textAlign: "center",
              }}
              className="re"
            >
              Our Products
            </h1>
            <div className="flex items-center gap-[40px] flex-wrap">
              {product.map((el) => (
                <ProductCard el={el} key={el._id} />
              ))}
            </div>
            <center>
              {" "}
              <button
                onClick={() => nav("/shop")}
                style={{
                  background: "#274C5B",
                }}
                className="py-[15px] px-[30px] text-center text-white rounded-[15px] my-[20px]"
              >
                load more
              </button>
            </center>
          </div>
        </div>
      </section>
      <section className="py-[40px]">
        <div className="container">
          <div className="flex items-center justify-between">
            <img src={section3} className="w-[911px]" alt="" />
            <div className="">
              <span
                style={{
                  fontFamily: "Yellowtail",
                }}
                className="text-green-400 text-3xl"
              >
                About Us
              </span>
              <h1 className="re">We Believe in Working Accredited Farmers </h1>
              <p className="text-gray-700">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </p>
              <div className="flex flex-col gap-10 my-[20px]">
                <div className="flex items-center gap-8">
                  <img src={listHome} alt="" />
                  <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-bold">Organic Foods Only</h2>
                    <p className="text-gray-700">
                      Simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <img src={pochtaHome} alt="" />
                  <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-bold">Quality Standards</h2>
                    <p className="text-gray-700">
                      Simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum
                    </p>
                  </div>
                </div>
              </div>
              <button className="py-[15px] px-[40px] bg-blue-950 rounded-[15px] text-white">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{
          background: "#274C5B",
        }}
      >
        <div className="container">
          <div className=" py-[150px]">
            <div className="flex items-center justify-between">
              <div className="">
                <p
                  style={{
                    fontFamily: "Yellowtail",
                  }}
                  className="text-green-400 text-3xl"
                >
                  Offer
                </p>
                <h1 className="text-white text-4xl font-extrabold">
                  We Offer Organic For You
                </h1>
              </div>
              <button
                onClick={() => nav("/shop")}
                className=" bg-yellow-600 py-[15px] px-[35px] text-white rounded-[15px]"
              >
                View All Product
              </button>
            </div>
            <div className="my-[40px] flex items-center gap-[40px] flex-wrap">
              {vagetables.map((el) => (
                <ProductCard el={el} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
