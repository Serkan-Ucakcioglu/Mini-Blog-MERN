import App from "../App";
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Tech from "../features/Category/Tech";
import Car from "../features/Category/Car";
import Finance from "../features/Category/Finance";

export const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Tech />} />
      <Route path="/car" element={<Car />} />
      <Route path="/finance" element={<Finance />} />
    </Route>
  )
);
