import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { category, title, price, image, description } = product;

  console.log(product);

  return (
    <div className="bg-gray-700  border-4 border-green-900 m-3 rounded-2xl text-center">
      <h1 className="text-white"> {title} </h1>

      <h1 className=" mt-4 mb-4 font-bold text-3xl"> {category} </h1>
      <img
        className="w-52 h-52 m-auto mt-4 mb-4"
        src={image}
        alt="image not found"
      />
      <p className=" mt-4 mb-4 font-bold text-3xl"> {price} </p>
      <p> {description} </p>

      <Link to={`/product/${product.id}`}>
        <button className="bg-gray-800 rounded-2xl m-2 px-4 py-2 text-amber-50">
          MoreInformation..
        </button>
      </Link>
    </div>
  );
};

export default Product;
