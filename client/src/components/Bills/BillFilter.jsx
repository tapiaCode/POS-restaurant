import useBill from "../../hooks/useBill";

const BillFilter = ({isvisible ,setIsvisible}) =>{
  const bills = useBill();
  const { filterBill, filterDelete ,filterAll ,filterActive ,filterDesiable,filterLocal,filterDelivery } = bills;

  return (
  <section className={`filterArea ${isvisible?'isvisible':""}`}>
  <h2>Filtros</h2> 
  <div>
  <div onClick={()=>(filterAll(),setIsvisible(false))} className={`filterBoton ${filterBill == 'All' && 'used'}`}>Todo</div>
  <div onClick={()=>(filterActive(),setIsvisible(false))} className={`filterBoton ${filterBill == 'Active' && 'used'}`}>Activo</div>
  <div onClick={()=>(filterDesiable(),setIsvisible(false))} className={`filterBoton ${filterBill == 'Desiable' && 'used'}`} >Deseable</div>
  <div onClick={()=>(filterLocal(),setIsvisible(false))} className={`filterBoton ${filterBill == 'Local' && 'used'}`} >Local</div>
  <div onClick={()=>(filterDelivery(),setIsvisible(false))} className={`filterBoton ${filterBill == 'Delivery' && 'used'}`} >Delivery</div>
  <div onClick={()=>(filterDelete(),setIsvisible(false))} className={`filterBoton ${filterBill == 'Delete' && 'used'}`} >Quitar</div>
  </div>
  

</section>
)}

export default BillFilter