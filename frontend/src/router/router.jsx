import App from "../App";
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

export const router = createHashRouter(
  createRoutesFromElements(<Route path="/" element={<App />}></Route>)
);
