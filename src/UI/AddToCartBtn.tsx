import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { ProductProps } from "../../type";
import { store } from "../lib/store";
import toast from "react-hot-toast";
import { FaMinus, FaPlus } from "react-icons/fa";
import PriceTag from "./PriceTag";

const AddToCartBtn = ({
  className,
  title,
  product,
  showPrice = true
}: {
  className?: string;
  title?: string;
  product?: ProductProps;
  showPrice?: boolean
}) => {
  const [exisitingProduct, setExisitngProduct] = useState<ProductProps | null>(
    null
  );

  const { addToCart, cartProduct, decreaseQuantity } = store();

  useEffect(() => {
    const availableItem = cartProduct.find(
      (item) => item?._id === product?._id
    );

    setExisitngProduct(availableItem || null);
  }, [product, cartProduct]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      toast.success(`${product?.name.substring(0, 10)} added successfully!`);
    } else {
      toast.error("Product is undefined!");
    }
  };

  const handleDeleteProduct = () => {
    if (exisitingProduct) {
      if (exisitingProduct?.quantity > 1) {
        decreaseQuantity(exisitingProduct?._id);
        toast.success(
          `${product?.name.substring(0, 10)} decreased successfully`
        );
      } else {
        toast.error('You can not decrease less than 1')
      }
    } else {
      
    }
  };

  const newClassName = twMerge(
    "bg-[#f7f7f7] uppercase text-xs py-3 text-center rounded-full font-semibold hover:bg-black hover:text-white hover:scale-105 duration-200 cursor-pointer",
    className
  );

  const getRegularPrice = () => {
    if(exisitingProduct){
      if(product){
        return product?.regularPrice * exisitingProduct?.quantity
      }
    } else {
      return product?.regularPrice;
    }
  };

  const getDiscountedPrice = () => {
    if(exisitingProduct){
      if(product){
        return product?.discountedPrice * exisitingProduct?.quantity
      }
    } else {
      return product?.discountedPrice;
    }
  }

  return (
    <>
    {showPrice && (
      <div>
        <PriceTag regularPrice={getRegularPrice()} discountedPrice={getDiscountedPrice()} />
      </div>
    )}
      {exisitingProduct ? (
        <div className="flex self-center items-center justify-center gap-2">
          <button
            onClick={handleDeleteProduct}
            className="bg-[#f7f7f7] text-black p-2 border-[1px]
           border-gray-200 hover:border-skyText rounded-full text-sm hover:bg-white duration-200 cursor-pointer"
          >
            <FaMinus />
          </button>
          <p className="text-base font-semibold w-10 text-center">
            {exisitingProduct?.quantity}
          </p>
          <button
            onClick={handleAddToCart}
            className="bg-[#f7f7f7] text-black p-2 border-[1px]
           border-gray-200 hover:border-skyText rounded-full text-sm hover:bg-white duration-200 cursor-pointer"
          >
            <FaPlus />
          </button>
        </div>
      ) : (
        <button onClick={handleAddToCart} className={newClassName}>
          {title ? title : "Add To Cart"}
        </button>
      )}
    </>
  );
};

export default AddToCartBtn;
