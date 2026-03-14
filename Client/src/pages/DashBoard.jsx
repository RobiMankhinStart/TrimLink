import React, { useEffect, useState } from "react";
import { authServices } from "../api";
import { useNavigate } from "react-router";
import Loading from "../components/commonUi/Loading";
import DashContent from "../components/DashBoard/DashContent";

const DashBoard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        const res = await authServices.getProfile();
        console.log(res);
      } catch (error) {
        console.log(error.response?.data?.message);

        setUser(null);
        navigate("/");
      }
    })().finally(() => {
      setLoading(false);
    });
  }, [navigate]);
  // if (!user) navigate("/");
  if (loading) return <Loading />;
  return (
    <>
      <DashContent />
    </>
  );
};

export default DashBoard;
