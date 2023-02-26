import useContent from "../../hooks/useContent";

function Tech() {
  const content: JSX.Element = useContent("Car");
  return <>{content}</>;
}

export default Tech;
