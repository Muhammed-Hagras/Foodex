import Layout from "@/components/Layout";
import { client, urlFor } from "@/lib/client";
import React, { useState } from "react";
import css from "../../styles/Pizza.module.css";
import Image from "next/image";
import LeftArrow from "../../assets/arrowLeft.png";
import RightArrow from "../../assets/arrowRight.png";
import { useStore } from "@/store/store";
import toast, { Toaster } from "react-hot-toast";

const Pizza = ({ pizza }) => {
  const [quantity, setquantity] = useState(1);
  const [size, setsize] = useState(1);

  //Quantity handler
  const handleQuantity = (type) => {
    type === "inc"
      ? setquantity((prev) => prev + 1)
      : quantity === 1
      ? null
      : setquantity((prev) => prev - 1);
  };
  const src = urlFor(pizza.image).url();

  // Add to cart Fun
  const addPizza = useStore((state) => state.addPizza);
  const addToCart = () => {
    addPizza({
      ...pizza,
      price: pizza.price[size],
      quantity: quantity,
      size: size,
    });
    toast.success("Added to cart");
  };

  return (
    <Layout>
      <div className={css.container}>
        <div className={css.imageWrapper}>
          <Image
            loader={() => src}
            alt=""
            src={src}
            layout="fill"
            unoptimized
            objectFit="cover"
          />
        </div>

        {/* right side */}
        <div className={css.right}>
          <span>{pizza.name}</span>
          <span>{pizza.details}</span>
          <span>
            <span style={{ color: "var(--themeRed)" }}>$</span>
            {pizza.price[size]}
          </span>
          <div className={css.size}>
            <span>Size</span>
            <div className={css.sizeVariants}>
              <div
                onClick={() => setsize(0)}
                className={size === 0 ? css.selected : ""}
              >
                Small
              </div>
              <div
                onClick={() => setsize(1)}
                className={size === 1 ? css.selected : ""}
              >
                Medium
              </div>
              <div
                onClick={() => setsize(2)}
                className={size === 2 ? css.selected : ""}
              >
                Large
              </div>
            </div>
          </div>
          {/* Quantity Counter */}
          <div className={css.quantity}>
            <span>Quantity</span>
            <div className={css.counter}>
              <Image
                src={LeftArrow}
                height={20}
                width={20}
                alt=""
                objectFit="contain"
                onClick={() => handleQuantity("dec")}
              />
              <span>{quantity}</span>
              <Image
                src={RightArrow}
                height={20}
                width={20}
                alt=""
                objectFit="contain"
                onClick={() => handleQuantity("inc")}
              />
            </div>
          </div>
          {/* button */}
          <div className={`btn ${css.btn}`} onClick={addToCart}>
            Add to cart
          </div>
        </div>
        <Toaster />
      </div>
    </Layout>
  );
};

export default Pizza;

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type=="pizza" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const pizza = await client.fetch(
    `*[_type=="pizza" && slug.current == "${slug}"][0]`
  );

  return {
    props: {
      pizza,
    },
  };
}
