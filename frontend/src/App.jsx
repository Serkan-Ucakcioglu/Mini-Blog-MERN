import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App flex flex-col">
      <Header />
      <div class="container mx-auto flex flex-wrap py-6">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
