import FoodCard from "../FoodCard"
import {dataPizzaFoods} from "../mockdata.js"
import defectImgFood from "../../../assets/img/rio/broaster.png"

const PizzasContainer = () => {
    return (
        <section className="md:px-10">
            <header>
                <h2 className="font-GilroyBold text-4xl text-black mb-3">Pollo a la Broaster</h2>
            </header>
            <div className="grid md:grid-cols-4 gap-8">
                {
                    dataPizzaFoods.map((food) => (
                        <FoodCard key={food.id} food={food} defectImgFood={defectImgFood}  />
                    ))
                }
            </div>
        </section>
    )
}

export default PizzasContainer