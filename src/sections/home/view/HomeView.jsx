import HomeBanner from "../banner";
import HomeStory from "../story";
import HomeMagazine from "../magazine";
import HomeBlog from "../blogStory";
import ShowCase from "src/components/ShowCase";
import SectionTitle from "src/components/SectionTitle";
import AllProducts from "src/sections/products/view/allProducts";
import { SwiperProducts } from "src/sections/detailProduct/view/SwiperProducts";
import { PRODUCTS } from "src/mock/itemProduct";
import { useEffect, useState } from "react";
import productAPI from "src/services/API/productAPI";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import LoadingManagerSlice from "src/redux/slices/LoadingManagerSlice";
import { loading } from "src/redux/selectors/LoadingSelector";
import InnerLoading from "src/components/InnerLoading";

const HomeView = () => {
  const dispath = useDispatch();
  const [products, setProducts] = useState([]);
  const isLoading = useSelector(loading);

  useEffect(() => {
    dispath(LoadingManagerSlice.actions.setLoading(true));
    productAPI
      .getAll({
        productId: 0,
        inputRow: 12,
      })
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        toast.error(err);
      })
      .finally(() => dispath(LoadingManagerSlice.actions.setLoading(false)));
  }, []);

  return (
    <>
      <HomeBanner />
      <HomeStory />

      <SectionTitle>FEATURED MUGS</SectionTitle>
      {isLoading ? <InnerLoading /> : <SwiperProducts list={products} />}
      <SectionTitle>MORE PRODUCTS</SectionTitle>
      {isLoading ? <InnerLoading /> : <AllProducts products={products} />}
      <HomeMagazine />

      <ShowCase imageURL={"/static/images/showCase.jpg"} />
      <HomeBlog />
    </>
  );
};

export default HomeView;
