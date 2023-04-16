import axios from "axios";
import { Navigate, useParams } from "react-router-dom";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContextProvider";
import Product from "../Components/Product";

export default function SingleProduct() {
  let { isAuth, setpage } = useContext(AuthContext);
  const { id } = useParams();
  const [products, setproducts] = React.useState([]);
  
  React.useEffect(() => {
    const FtchData = async () => {
      try {
        let res = await axios({
          method: "get",
          url: `${process.env.REACT_APP_URL}/products/single?id=${id}`,
        });
        setproducts(res.data[0]);
      } catch (error) {
        console.error(error);
      }
    };
    FtchData();

    setpage(id);
  }, []);

  return <Product products={products} />;
}
