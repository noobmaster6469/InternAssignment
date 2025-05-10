import React, { useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios";

const Home = () => {
  const [res, setRes] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.post("/give");
        setRes(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return <div>{res?.data?.name}</div>;
};

export default Home;
