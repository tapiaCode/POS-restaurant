import burgerImgCategory from "../../../assets/img/dishes/category-burger.png"
import pizzaImgCategory from "../../../assets/img/dishes/category-pizza.webp"
import drinksImgCategory from "../../../assets/img/dishes/category-drinks.png"
import pastaImgCategory from "../../../assets/img/dishes/category-pasta.png"
import dessertsImgCategory from "../../../assets/img/dishes/category-desserts.png"
import wokImgCategory from "../../../assets/img/dishes/category-wok.png"
import { Link } from "react-router-dom"
const categoriesFoodsLabels = [
    {
        id: 1,
        name: "Hamburguesas",
        img: burgerImgCategory,
        path: "/dashboard/food-drinks/burgers"
    },
    {
        id: 2,
        name: "Pizza",
        img: pizzaImgCategory,
        path: "/dashboard/food-drinks/pizzas"
    },
    {
        id: 3,
        name: "Sopas",
        img: wokImgCategory,
        path: "/dashboard/food-drinks/wok"
    },
    {
        id: 4,
        name: "Tallarines",
        img: pastaImgCategory,
        path: "/dashboard/food-drinks/pasta"
    },
    {
        id: 5,
        name: "Postres",
        img: dessertsImgCategory,
        path: "/dashboard/food-drinks/desserts"
    },
    {
        id: 6,
        name: "Sodas y refrescos",
        img: drinksImgCategory,
        path: "/dashboard/food-drinks/drinks"
    }
]

const CategoriesFoods = () => {
    return (
        <section className="h-full">
            <h2 className="text-black font-GilroyBold text-4xl p-0 mb-10">Categorias</h2>
            <div className=" flex justify-center gap-8 flex-wrap items-center md:max-w-[78%] mx-auto">
                {
                    categoriesFoodsLabels.map((category) => (
                        <Link 
                            key={category.id} 
                            className="flex flex-col items-center min-w-[30%] py-6 rounded-[3rem] bg-white hover:bg-primary"
                            to={category.path}
                        >
                            <div className="flex justify-center">
                                <img src={category.img} alt={category.name} width={60} height={60} className="w-56 h-56 p-8 object-contain" />
                            </div>
                            <div className="flex justify-center">
                                <p className="text-center text-2xl font-bold">{category.name}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </section>
    )
}

export default CategoriesFoods