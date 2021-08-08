import React from "react";
import "./App.scss";
import Header from "./components/generics/header/index";
import Sider from "./components/generics/sider/Sider";
import Home from "./components/generics/home/Home";
import Form from "./components/form/Form";

function App() {
  return (
    <>
      <main>
        <Sider />
        <section>
          <Header />
          <Form />
          <Home />
        </section>
      </main>
    </>
  );
}

export default App;
