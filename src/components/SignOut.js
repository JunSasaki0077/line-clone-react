import React from "react";
import { Button } from "@mui/material";
import { auth } from "../firebase.js";
import CallIcon from "@mui/icons-material/Call";

function SignOut() {
  return (
    <div className="header">
      <Button onClick={() => auth.signOut()}>サインアウト</Button>
    </div>
  );
}

export default SignOut;
