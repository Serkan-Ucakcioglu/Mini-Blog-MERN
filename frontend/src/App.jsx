import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App flex flex-col">
      <Header />
      <div class="container mx-auto flex flex-wrap py-6">
        <section class="w-full md:w-2/3 flex flex-col items-center px-3">
          <Outlet />
        </section>
      </div>
    </div>
  );
}

export default App;
