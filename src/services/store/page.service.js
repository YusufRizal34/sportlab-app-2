import axios from "axios";

const fetchData = async (page) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/${page}`
  );
  return data;
};

const pageService = {
  fetchData,
};

export default pageService;
