import defectImgFood from "../../../assets/img/dishes/default-img-wok.png"
import FoodCard from "../FoodCard"
import {dataWokFoods} from "../mockdata.js"

const WokContainer = () => {
    return (
        <section className="md:px-10">
            <header>
                <h2 className="font-GilroyBold text-4xl text-black mb-3">Sopas y Caldos</h2>
            </header>
            <div className="grid md:grid-cols-4 gap-8">
                {
                    dataWokFoods.map((food) => (
                        <FoodCard key={food.id} food={food} defectImgFood={defectImgFood}  />
                    ))
                }
            </div>
        </section>
    )
}

export default WokContainer