import { useState } from "react"
import { categorias ,Hamburger ,Pizza ,Pasta ,Tacos ,Bebidas} from "../../const/eatConst"
import useBill from "../../hooks/useBill";

const AddItemsView = ({isVisible , setIsVisible, order}) =>{
  const bills = useBill();
  const { allItems , setAllItems ,curretOrders,allOrders ,setCurretOrders ,setAllOrders} = bills;
const [seletCategory , setSeletCategory] = useState('')
const [resaltItems , setResaltItems] = useState('')
const [seletItems , setSeletItems] = useState([])
const [itemSelected , setItemSelected] = useState({})

const showCategory = (category)=>{
  setSeletCategory(category)
  if  (category == "Hamburger"){
    setSeletItems(Hamburger)
  } else if  (category == "Pizza"){
    setSeletItems(Pizza)
  }else if  (category == "Pasta"){    
    setSeletItems(Pasta)
  }else if  (category == "Tacos"){    
    setSeletItems(Tacos)
  }else if  (category == "Bebidas"){    
    setSeletItems(Bebidas)
  }else {
    setSeletItems([])
  }
}
const secteOneCategory = (category)=>{
  if (resaltItems == ''){
  showCategory(category);
  setResaltItems('');
  }
}
const selectOneItem = (item) =>{
 
  setResaltItems(item.name)
  setItemSelected(item)
  console.log('item',item);
  
}
const resteOrder =() =>{
  setSeletCategory('');
  setResaltItems('');
  setSeletItems([]);
}
const addToList =()=>{
  const otherBills = allOrders.filter(items => items.id != order.id)
 
  order.dectail=[...order.dectail,itemSelected];  
  const newArray = [...otherBills,order];
  
  setCurretOrders(newArray)
  resteOrder();
}

  return (
<section className={`AddItemsView-containers ${isVisible?'toMostrar':''}`}>
    <div className="AddItemsView-boton" onClick={()=>(setIsVisible(false),resteOrder()
    )}>x </div>
  <main className="AddItemsView-info">

   
   <div className="AddItemsView-selectArea">
    <h2 className="AddItemsView-title">CATEGORIA</h2>
    <div className="AddItemsView-category-container"> 
    
    {categorias.map((category, index)=>(
      <div onClick={()=>secteOneCategory(category)}  className={`AddItemsView-category ${seletCategory == category ? "categorySelected":''}`} key={index} > {category}</div>
    ))}
    </div>
    </div>
    <div className="AddItemsView-selectArea">
    <h2 className="AddItemsView-title">{seletCategory}</h2>
    <div className="AddItemsView-category-container"> 
    {seletItems.map((item, index)=>(
      <div onClick={()=>selectOneItem(item)}  className={`AddItemsView-category AddItemsView-Items ${resaltItems == item.name ? "categorySelected":''}`} key={index} > <p className="AddItemsView-text">{item.name}</p> <p>${item.price}</p>  </div>
    ))}
    </div>
    </div>
    {(resaltItems != '') && <div className="AddItemsView-selectArea">
    <h2 className="AddItemsView-title">{resaltItems}</h2>
    <div className="AddItemsView-category-container"> 
    {(resaltItems != '') && (<div className=" userInfo-name boton-add" onClick={()=>addToList()}><p>Añadir</p></div>)}
    {/* {seletItems.map((item, index)=>(
      <div onClick={()=>(setResaltItems(item.name))}  className={`AddItemsView-category AddItemsView-Items ${resaltItems == item.name ? "categorySelected":''}`} key={index} > <p className="AddItemsView-text">{item.name}</p> <p>${item.price}</p>  </div>
    ))} */}
    </div>
    </div>}
  </main>
  <section className="AddItemsView-Botones-Container">
    {(seletCategory != '') && <div className=" userInfo-name  boton-clear" onClick={()=>resteOrder()}><p>Limpiar Todo</p></div>}
  </section>
</section>
)}

export default AddItemsView