import useContent from "../../hooks/useContent";

function Tech() {
  const content = useContent("Technology");
  return <>{content}</>;
}

export default Tech;
