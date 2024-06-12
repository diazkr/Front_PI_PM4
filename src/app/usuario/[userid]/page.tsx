"use client";
import { useEffect, useState } from "react";
import UserLayout from "./UserLayout";
import { UserInterface } from "@/interfaces/UserInterface";
import fetchUserData from "@/fetch/usuario/fetchUserData";
import { CircularProgress } from "@mui/material";

interface UserDashboardProps {
  params: {
    userid: string;
  };
}

const UserDashboard: React.FC<UserDashboardProps> = ({ params }) => {
  const [userData, setUserData] = useState<UserInterface | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getUserData = async () => {
      setLoading(true);
      const data = await fetchUserData(params.userid);
      if (data) {
        setUserData(data);
      } else {
        setError("Fallo a usuario en userDsboard");
      }
      setLoading(false);
    };

    getUserData();
  }, [params.userid]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <CircularProgress color="secondary" />
      </div>
    );
  if (error) return <div>{error}</div>;

  return (
    <div className="mt-12">{userData && <UserLayout {...userData} />}</div>
  );
};

export default UserDashboard;
