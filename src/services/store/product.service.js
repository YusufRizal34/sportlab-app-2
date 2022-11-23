import axios from "axios";

const buyProduct = async (page, product) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/${page}`,
    product
  );
  return data;
};

const productService = {
  buyProduct,
};

export default productService;
