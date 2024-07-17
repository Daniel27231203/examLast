import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/actionCreators/actionCreator";

function Admin(props) {
  const dispatch = useDispatch();
  const { product } = useSelector((s) => s.pro);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("");

  function createProduct() {
    let newPro = {
      image: image,
      title: title,
      price: price,
      desc: desc,
      type,
      raiting: Math.floor(Math.random() * 5),
    };

    if (
      image.trim() &&
      title.trim() &&
      price.trim() &&
      desc.trim &&
      type.trim() !== ""
    ) {
      dispatch(addProduct(newPro));
      setImage("");
      setTitle("");
      setPrice("");
      setDesc("");
      setType("");
    } else {
      alert("err");
    }
  }

  console.log(product);

  return (
    <section className="py-[50px]">
      <div className="container">
        <div className="flex items-center justify-center flex-col gap-10">
          <div className="relative z-0 mb-5 group w-[40%] mx-auto">
            <input
              type="text"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
              onChange={(e) => setImage(e.target.value)}
              value={image}
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Add Image
            </label>
          </div>
          <div className="relative z-0 mb-5 group w-[40%] mx-auto">
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Add Title
            </label>
          </div>
          <div className="relative z-0 mb-5 group w-[40%] mx-auto">
            <input
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              type="text"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Add price
            </label>
          </div>
          <div className="relative z-0 mb-5 group w-[40%] mx-auto">
            <input
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
              type="text"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Add description
            </label>
          </div>

          <form class="max-w-sm mx-auto">
            <select
              onChange={(e) => setType(e.target.value)}
              id="underline_select"
              class="block py-2.5 px-0 w-full mx-auto text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              value={type}
            >
              <option selected>Choose a type</option>
              <option value="Vegetable">Vegetable</option>
              <option value="Fresh">Fresh</option>
              <option value="Millets">Millets</option>
              <option value="Nuts">Nuts</option>
              <option value="Health">Health</option>
            </select>
          </form>

          <button
            onClick={createProduct}
            type="button"
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            add product
          </button>
        </div>
      </div>
    </section>
  );
}

export default Admin;
