import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Button, Carousel } from "react-bootstrap";
import CarouselComponent from "@/components/Carousel/Carousel";
import Services from "@/components/Services/Services";
import OurClient from "@/components/OurClient/OurClient";
import Testimony from "@/components/Testimony/Testimony";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CarouselComponent />
        <div
          style={{
            width: "100%",
            margin: "auto",
            marginTop: "3rem",
            backgroundImage:`url("https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
            backgroundSize:"cover",
            objectFit:"cover",
            backgroundPosition:"center",
            backgroundAttachment:"fixed"
          }}
        >
          <h3 style={{ textAlign: "center", padding: "2vmax",color:"white"}}>
            Welcome To{" "}
            <span style={{ color: "red", fontWeight: "bold" }}>Global</span>{" "}
            Security Service
          </h3>

          <div
            style={{
              width: "80%",
              margin: "auto",
              color: "white",
              textAlign: "center",
              padding: "0.5vmax",
              fontSize: "1vmax",
            }}
          >
            <p>
              Kalinchok Security Services (P) Ltd , KSS has been working towards
              introducing itself as one of the largest private security
              organization that offers a wide range of services and equipment
              for all kind of premises and operations. With the purpose of
              providing high-quality professional security services under the
              supervision and guidance of Ex-Army officers of the Nepalese Army,
              Kalinchok Security was formed in the year 1999 in Kathmandu.
            </p>
          </div>
          <div
            style={{ display: "grid", placeItems: "center", padding: "2vmax" }}
          >
            <Button variant="danger">AboutUs</Button>
          </div>
        </div>

        <Services />
        <OurClient />
        <Testimony/>
      </main>
    </>
  );
}
