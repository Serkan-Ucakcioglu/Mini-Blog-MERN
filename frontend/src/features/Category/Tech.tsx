import useContent from "../../hooks/useContent";

function Tech() {
  const content = useContent("Car");
  return <>{content}</>;
}

export default Tech;
