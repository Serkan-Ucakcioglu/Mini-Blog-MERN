import useContent from "../../hooks/useContent";

function Tech() {
  const content: any = useContent("Technology");
  return <>{content}</>;
}

export default Tech;
