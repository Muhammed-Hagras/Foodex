import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Hero from "../components/Hero.jsx";
import css from "../styles/Home.module.css";
import Services from "@/components/Services.jsx";
import { client } from "@/lib/client.js";
import Menu from "@/components/Menu.jsx";
import pizza from "@/sanity/schemas/pizza.js";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ pizzas }) {
  console.log(pizzas);
  return (
    <Layout>
      <div className={css.container}>
        <Head>
          <title>FOODEX</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/FoodexLogo.png" />
        </Head>
        {/* body */}
        <main>
          <Hero />
          <Services />
          <Menu pizzas={pizzas} />
        </main>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type=="pizza"]';
  const pizzas = await client.fetch(query);
  return {
    props: {
      pizzas,
    },
  };
};
