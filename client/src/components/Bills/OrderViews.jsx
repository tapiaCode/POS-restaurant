import useBill from '../../hooks/useBill';
import './bills.scss'

const OrderViews = ({selectOrder,order,setCurrentTable  ,currectTable, id,setOrDectail}) =>{

  const isLocal = order.table != "delivery";
  
  
  return (
    <>
<section className='OrderViewsMainContainer' >
    <div 
    className={`OrderViewsContainer ${order.status?'OrderViewsActitve':'OrderViewsDesiable'} ${order.id == currectTable && 'orderContainerMap'}`}
    onClick={()=>selectOrder(order.id,id)}> 
    <div>
      <div className='OrderViewsDectails'> 
        <p className='OrderViewsTitle'>Orden #{order.id}</p>
        <div className='statusDectails'  ><span className={`led ${order.status == "Ereased"? "deleted":(order.status?"Active":"Desiable")}`}></span> <p>{order.status == "Ereased"? "Eliminado":(order.status?"Activo":"Inactivo")}</p> </div>
        
        
      </div>
      <div className='OrderViewsDectails'>
        <p>{isLocal? `Mesa ${order.table}`:"Delivery"} </p>
        <p>{isLocal?`Cliente ${order.guests}`:`para ${order.customers}`} </p>
      </div>

    </div>
    <div>
      <p className='OrderViewsTotalPrice'>Bs. 42</p>
      <p>{order.date}</p>
    </div>
    </div>
    {!order.status &&<div>{<EreaseButton setOrDectail={setOrDectail} setCurrentTable={setCurrentTable} idBill={order.id}/>}</div>}
  
</section>
  </>
)}

const EreaseButton = ({idBill,setCurrentTable,setOrDectail})=>{
  const bills = useBill();
  const {deleteToBill} = bills;
  const deleteBill =()=>{
    setCurrentTable('')
    setOrDectail(false)
    
    deleteToBill(idBill)
  }
  return(
    <div onClick={()=>deleteBill()} className='ereaseButton'>
    <svg className='ereaseButtonSvg' fill="#26aafd" width="64px" height="64px" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M 27.9999 51.9062 C 41.0546 51.9062 51.9063 41.0547 51.9063 28.0000 C 51.9063 14.9219 41.0312 4.0938 27.9765 4.0938 C 14.8983 4.0938 4.0937 14.9219 4.0937 28.0000 C 4.0937 41.0547 14.9218 51.9062 27.9999 51.9062 Z M 22.2109 41.9219 C 20.5468 41.9219 19.5858 41.0078 19.5155 39.3438 L 18.6483 20.2187 L 17.2421 20.2187 C 16.6093 20.2187 16.0702 19.6797 16.0702 19.0469 C 16.0702 18.3906 16.6093 17.875 17.2421 17.875 L 22.5624 17.875 L 22.5624 15.9766 C 22.5624 14.1484 23.7577 13.0000 25.4921 13.0000 L 30.3905 13.0000 C 32.1249 13.0000 33.3202 14.1484 33.3202 15.9766 L 33.3202 17.875 L 38.6405 17.875 C 39.2733 17.875 39.7890 18.3906 39.7890 19.0469 C 39.7890 19.6797 39.2733 20.2187 38.6405 20.2187 L 37.2812 20.2187 L 36.4140 39.3438 C 36.3202 41.0078 35.3593 41.9219 33.6952 41.9219 Z M 24.9296 17.875 L 30.9530 17.875 L 30.9530 16.4219 C 30.9530 15.7891 30.5077 15.3672 29.8514 15.3672 L 26.0077 15.3672 C 25.3749 15.3672 24.9296 15.7891 24.9296 16.4219 Z M 23.6405 39.3438 C 24.2265 39.3438 24.5780 38.9453 24.5546 38.3828 L 23.9921 22.6797 C 23.9452 22.1172 23.5936 21.7422 23.0546 21.7422 C 22.4687 21.7422 22.0936 22.1406 22.1171 22.6797 L 22.7499 38.4062 C 22.7733 38.9687 23.1249 39.3438 23.6405 39.3438 Z M 27.9530 39.3203 C 28.5390 39.3203 28.9140 38.9453 28.9140 38.3828 L 28.9140 22.6797 C 28.9140 22.1406 28.5390 21.7422 27.9530 21.7422 C 27.3671 21.7422 26.9921 22.1406 26.9921 22.6797 L 26.9921 38.3828 C 26.9921 38.9453 27.3905 39.3203 27.9530 39.3203 Z M 32.2890 39.3438 C 32.8046 39.3438 33.1562 38.9687 33.1796 38.4062 L 33.8124 22.6797 C 33.8358 22.1406 33.4374 21.7422 32.8514 21.7422 C 32.3358 21.7422 31.9609 22.1172 31.9374 22.6797 L 31.3749 38.3828 C 31.3514 38.9453 31.7030 39.3438 32.2890 39.3438 Z"></path></g></svg>
    </div>
  )
}

export default OrderViews