import { useLoaderData } from "react-router-dom";

const MoreInfo = () => {
  const moreInfo = useLoaderData();
  const { category, title, price, image, description } = moreInfo;
  console.log(moreInfo);

  return (
    <div className="w-96 m-auto text-center">
      {" "}
      <h1 className="text-white"> {title} </h1>
      <h1 className=" mt-4 mb-4 font-bold text-3xl"> {category} </h1>
      <img
        className="w-52 h-52 m-auto mt-4 mb-4"
        src={image}
        alt="image not found"
      />
      <p className=" mt-4 mb-4 font-bold text-3xl"> {price} </p>
      <p> {description} </p>
    </div>
  );
};

export default MoreInfo;
