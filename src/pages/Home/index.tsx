import React, { useEffect } from "react";
import { fetchColors } from "../../redux/colors/asyncActions";
import { useAppDispatch } from "../../redux/store";

const Home: React.FC = () => {
  const dispatch = useAppDispatch;
  const search = "0";

  React.useEffect(() => {
    const getColors = (async function () {
      dispatch(
        fetchColors({
          search,
        })
      );
    })();

    window.scrollTo(0, 0);
  }, []);

  return <div>Home</div>;
};

export default Home;
