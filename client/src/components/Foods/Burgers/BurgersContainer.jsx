import { dataBurgerFoods } from "../mockdata" 
import defectImgFood from "../../../assets/img/dishes/default-img-food.jpg"
import FoodCard from "../FoodCard"

const BurgersContainer = () => {
    return (
        <section className="md:px-10">
            <header>
                <h2 className="font-GilroyBold text-4xl text-black mb-3">Hamburguesas</h2>
            </header>
            <div className="grid md:grid-cols-4 gap-8">
                {
                    dataBurgerFoods.map((food) => (
                        <FoodCard key={food.id} food={food} defectImgFood={defectImgFood}  />
                    ))
                }
            </div>
        </section>
    )
}

export default BurgersContainer