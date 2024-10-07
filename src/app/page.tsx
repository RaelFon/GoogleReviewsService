import React, { useEffect } from "react";
import api from "./api/api";

export default function App() {
//   const [user, setUser] = useState();

  // useEffect(() => {
  //   api
  //     .get("/users/get-all")
  //     .then((response) => response.data)
  //     .catch((err) => {
  //       console.error("ops! ocorreu um erro" + err);
  //     });
  // }, []);

  return (
    <div className="App">
      <h1>Ofrok</h1>
      
      <p>Usuário:</p>
      {/* <p>Biografia: {user?.bio}</p> */}
    </div>
  );
}