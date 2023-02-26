import useContent from "../../hooks/useContent";

function Finance() {
  const content = useContent("Car");
  return <>{content}</>;
}

export default Finance;
