import heroBg from "../assets/images/hero-bg.jpeg";
import hero2Bg from "../assets/images/bg-01.jpeg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

const HomePage = () => {
  const { products } = useSelector((state) => state.store);
  const fetchStoreProducts = [];
  for (let i = 0; i < 3; i++) {
    fetchStoreProducts.push(products[i]);
  }
  return (
    <>
      <section
        className=" h-screen mt-[-50px]  bg-no-repeat bg-cover bg-center lg:bg-fixed text-white flex flex-col justify-center md:pl-40 pl-4"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <span className="font-marcellus">NEW IN TOWN</span>
        <h2 className="font-bold text-4xl sm:text-7xl font-marcellus my-3 ">
          The New Beauty <br /> Collection
        </h2>
        <p className="my-6">
          This new collection brings with it the most <br /> exciting lorem
          ipsum dolor sit amet.
        </p>
        <Link
          to="/shop"
          className="bg-white text-black w-40 text-center py-3 px-6 cursor-pointer"
        >
          Shop Now
        </Link>
      </section>

      <section
        className=" h-[90vh] mt-[-50px]  bg-no-repeat bg-cover  bg-center lg:bg-fixed text-white flex flex-col justify-center md:pl-40 pl-4"
        style={{ backgroundImage: `url(${hero2Bg})` }}
      >
        <span className="font-marcellus">NEW COLLECTION</span>
        <h2 className="font-bold text-4xl sm:text-7xl font-marcellus my-3 ">
          The beauty <br /> collection that <br /> makes all <br /> the
          difference!
        </h2>
        <p className="my-6">
          This new collection brings with it the most <br /> exciting lorem
          ipsum dolor sit amet.
        </p>
        <Link
          to="/shop"
          className="bg-white text-black w-40 text-center py-3 px-6 cursor-pointer"
        >
          Shop Now
        </Link>
      </section>
      <section
        className=" h-[90vh] mt-[-50px]  bg-no-repeat bg-cover  bg-center lg:bg-fixed text-white flex flex-col justify-center md:pl-40 pl-4"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <span className="font-marcellus">NEW IN TOWN</span>
        <h2 className="font-bold text-4xl sm:text-7xl font-marcellus my-3 ">
          The New Beauty <br /> Collection
        </h2>
        <p className="my-6">
          This new collection brings with it the most <br /> exciting lorem
          ipsum dolor sit amet.
        </p>
        <Link
          to="/shop"
          className="bg-white text-black w-40 text-center py-3 px-6 cursor-pointer"
        >
          Shop Now
        </Link>
      </section>
    </>
  );
};

export default HomePage;
