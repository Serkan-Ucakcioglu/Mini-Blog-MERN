import App from "../App";
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Tech from "../features/Category/Tech";

export const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Tech />} />
    </Route>
  )
);
