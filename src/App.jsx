import { useState } from "react";
import Root from "./root/Root";
import Header from "./components/Header";
import Services from "./components/Services";

function App() {
  return <Root>
    {/* All Section displaid Here */}
    <Header/>
    <Services/>
  
  </Root>;
}

export default App;
