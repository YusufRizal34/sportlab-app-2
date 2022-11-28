import axios from "axios";

const addToCart = async (page, product) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/${page}`,
    product
  );
  return data;
};

const buyProduct = async (page, product) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/${page}`,
    product
  );
  return data;
};

const deleteProduct = async (page) => {
  const { data } = await axios.delete(
    `${process.env.REACT_APP_BACKEND_URL}/${page}`
  );
  return data;
};

const productService = {
  addToCart,
  deleteProduct,
  buyProduct,
};

export default productService;
