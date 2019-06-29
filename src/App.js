import React, { Fragment } from "react";

import Globalstyle from "./styles/Global";

import WebFont from "webfontloader";

import Main from "./pages/main/index";

const App = () => (
  <Fragment>
    <Globalstyle />
    <Main />
  </Fragment>
);

WebFont.load({
  google: {
    families: ["Pacifico:400", "cursive"]
  }
});

export default App;
