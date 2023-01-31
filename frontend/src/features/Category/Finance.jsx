import React from "react";
import Card from "../../components/Card";
import { useGetCategoryQuery } from "../categoryApiSlice";

function Finance() {
  const { data } = useGetCategoryQuery("Finance");
  return (
    <>
      {data?.map((blog) => {
        return <Card blog={blog} key={blog?._id} />;
      })}
    </>
  );
}

export default Finance;
