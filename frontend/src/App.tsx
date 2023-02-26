import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App flex flex-col">
      <Header />
      <div className="container mx-auto flex justify-center flex-wrap py-6">
        <section className="w-full md:w-2/3 flex flex-col items-center px-3">
          <Outlet />
        </section>
      </div>
    </div>
  );
}

export default App;
