import Container from "../UI/Container";
import { store } from "../lib/store";
import FavoriteProduct from "../UI/FavoriteProduct";
import { Link } from "react-router-dom";

const Favorite = () => {
  const { favoriteProduct } = store();
  return (
    <Container>
      {favoriteProduct?.length > 0 ? (
        <div>
          <div className="border-b border-b-gray-300 pb-6">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Favorite Products
            </h2>
            <p className="mt-2 text-sm text-gray-500 max-w-[500px] tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              neque ipsa quam, non, libero fugit minima enim quod in voluptas
              ipsam nam, perferendis iste aut consectetur atque ad sapiente
              distinctio?
            </p>
          </div>
          <div className="mt-6 flow-root px-4 sm:mt-10 sm:px-0">
            <div className="-my-6 divide-y divide-gray-200 sm:-my-10">
              {favoriteProduct?.map((product) => (
                <FavoriteProduct key={product?._id} product={product} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="mx-auto flex max-w-3xl flex-col gap-3 items-center text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Nothing added to favorite
          </h2>
          <p className="text-lg tracking-wide leading-6 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            molestias mollitia praesentium consequatur placeat, eum delectus ea
            perferendis eos autem ex rerum, officiis aperiam iure? Ipsam
            deleniti placeat in. Doloribus.
          </p>
          <Link
            to={"/product"}
            className="w-full mt-2 rounded-md border border-transparent px-8 py-3 text-base 
            font-medium text-amber-900 bg-gray-100 sm:w-auto hover:bg-black hover:text-white duration-200"
          >
            Add Products
          </Link>
        </div>
      )}
    </Container>
  );
};

export default Favorite;
