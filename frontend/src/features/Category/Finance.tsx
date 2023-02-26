import useContent from "../../hooks/useContent";

function Finance() {
  const content: any = useContent("Finance");
  return <>{content}</>;
}

export default Finance;
