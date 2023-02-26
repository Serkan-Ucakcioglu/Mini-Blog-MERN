import useContent from "../../hooks/useContent";

function Finance() {
  const content: JSX.Element = useContent("Car");
  return <>{content}</>;
}

export default Finance;
