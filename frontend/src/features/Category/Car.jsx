import React from "react";
import Card from "../../components/Card";
import { useGetCategoryQuery } from "../categoryApiSlice";

function Car() {
  const { data } = useGetCategoryQuery("Car");
  return (
    <>
      {data?.map((blog) => {
        return <Card blog={blog} key={blog?._id} />;
      })}
    </>
  );
}

export default Car;
