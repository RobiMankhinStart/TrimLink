import React, { useEffect, useState } from "react";
import { authServices } from "../api";
import { useNavigate } from "react-router";

const DashBoard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        const res = await authServices.getProfile();
        console.log(res);
      } catch (error) {
        console.log(error);

        setUser(null);
        navigate("/");
      }
    })();
  }, [navigate]);
  // if (!user) navigate("/");
  return <div>DashBoard</div>;
};

export default DashBoard;
