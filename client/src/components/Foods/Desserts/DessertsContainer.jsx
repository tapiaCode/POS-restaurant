import FoodCard from "../FoodCard"
import {dataDessertsFoods} from "../mockdata.js"
import defectImgFood from "../../../assets/img/rio/locro.png"

const DessertsContainer = () => {
    return (
        <section className="md:px-10">
            <header>
                <h2 className="font-GilroyBold text-4xl text-black mb-3">Locros</h2>
            </header>
            <div className="grid md:grid-cols-4 gap-8">
                {
                    dataDessertsFoods.map((food) => (
                        <FoodCard key={food.id} food={food} defectImgFood={defectImgFood}  />
                    ))
                }
            </div>
        </section>
    )
}

export default DessertsContainer