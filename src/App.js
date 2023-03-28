import React from "react";

import InfoPage from "./Components/InfoPage";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Subscribe from "./Components/Subscribe";
import FooterBlock from "./Components/FooterBlock";

function App() {
  const [burger, setBurger] = React.useState(false);
  return (
    <>
      <Header setBurger={setBurger} burger={burger} />
      <Main />
      <InfoPage />
      <Subscribe />
      <FooterBlock />
    </>
  );
}

export default App;
