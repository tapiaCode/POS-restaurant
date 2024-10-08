/* eslint-disable react/prop-types */

import { useEffect } from "react"

const FoodCard = ({
    food,
    defectImgFood,
}) => {


  return (
    <div className="rounded-[2rem] bg-white p-6 flex flex-col gap-1 items-center">
      <img 
          className="w-full h-60 object-contain rounded-md p-8"
          src={food.imgUrl || defectImgFood} 
          alt="Foto de comida" 
      />
      <h2 className="font-bold text-black text-xl md:text-2xl">{food.name}</h2>
      <p className="italic text-gray-500">{food.size}</p>
      <p className="text-primary text-2xl font-bold">Bs. {food.price}</p>
    </div>
    )
}

export default FoodCard