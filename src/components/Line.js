import React, { useState, useEffect } from "react";
import { db } from "../firebase.js";
import SignOut from "./SignOut";

function Line() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <div>
      {console.log(messages)}
      <SignOut />
      <div className="msgs">
        {messages.map(({ id, text, photoURL, uid }) => (
          <div>
            <div key={id}>
              <img src={photoURL} />
              <p> {text} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Line;
