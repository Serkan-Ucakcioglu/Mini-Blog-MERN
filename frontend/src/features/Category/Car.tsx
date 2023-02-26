import React from "react";
import useContent from "../../hooks/useContent";

function Car() {
  const content: JSX.Element = useContent("Car");
  return <>{content}</>;
}

export default Car;
