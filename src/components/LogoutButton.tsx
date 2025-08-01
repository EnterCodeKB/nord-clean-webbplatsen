import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase"; // justera om du har en annan sökväg
import { Button } from "@/components/ui/button";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/"); // eller till "/login" om du föredrar
    } catch (error) {
      console.error("Fel vid utloggning:", error);
    }
  };

  return (
    <Button
      onClick={handleLogout}
      className="bg-red-500 hover:bg-red-600 text-white"
    >
      Logga ut
    </Button>
  );
};

export default LogoutButton;
