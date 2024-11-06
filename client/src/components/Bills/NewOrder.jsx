import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useBill from "../../hooks/useBill";


const NewOrder = ({setNewOrder}) =>{
  const bills = useBill();
  const {  selectOnetable  ,addNewOrder,tableFromMap, setTableFromMap  } = bills;
  let varTable = bills.TABLEVARIABLE;
  const [infoNewOrder, setInfoNewOrder] = useState({});
  const [ isLocal , setIsLocal] = useState(true);
  const [isFull , setIsFull] = useState(false);
  const [hasTable , setHasTable] = useState(false);
  const { auth }= useAuth()

  const showNotification = ()=>{
    setHasTable(true);
    setTimeout(()=>{
      setHasTable(false)
    },4000);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setTableFromMap(null)
    infoNewOrder.asociate = auth.customname;
   
    if (!isLocal){
      infoNewOrder.table = "delivery";
     
    }
    if (infoNewOrder.table){
    setNewOrder(false)
    addNewOrder(infoNewOrder);
  }else showNotification()
  };
  const handleInputChange = (event) => {
    infoNewOrder.local = isLocal;
    const { name, value } = event.target;
    setInfoNewOrder((prevProps) => ({
      ...prevProps,
      [name]: value,
     
    }));
    
    
  };
  const orderLocal = ()=>{
    if(!isFull){
    setIsLocal(!isLocal);}
  }
  
  useEffect(()=>{
    const tableOptions = selectOnetable();
    const tablesList = tableOptions.props.children[1];
    const moreLocal = tablesList.length < 1
    if (moreLocal){
      setIsFull(true)
      setIsLocal(false);
    }else setIsFull(false)
  
    
  },[])
  return (
<section className="NewOrderContainer">
  <div className="newOrderNotification">
  <div onClick={()=>setNewOrder(false)} className="NewOrderButon">x</div>
  <div>

  <form className='newOrdersForm' onSubmit={handleSubmit}>
    <p> {auth.customname}</p>
    <section className="newOrderNotificationArea">
    <div className='newOrdersBotonContainer'>
      <div onClick={()=>orderLocal()} className={`newOrdersBoton ${isLocal?'Local':'Delivery'}`}>
        <p>{isLocal?'Local':'Delivery'}</p>
      </div>
      
    </div>
    {isFull && <div className="newOrderNotification"><p>El Salon esta full</p></div>}
    {hasTable && <div className="newOrderNotification"><p>Seleccione una mesa</p></div>}
    </section>
          {isLocal?
          <div>
      
         
          
           <div>
              <select onChange={handleInputChange} className='inputForm' name="table" id="">
                
                {selectOnetable()}

              </select>
            </div>
        
          <div>
            <input
            className='inputForm'
              type="text"
              name="cliente"
              placeholder='cliente'
              required
              onChange={handleInputChange}
            />
          
          </div>
          
          <CreateButton/>
          </div>
          
          :<div>
            <div>
            <div onChange={handleInputChange} className='inputForm' name="table" id="">
            </div>
          
          </div>
          <input
            className='inputForm'
              type="text"
              name="customers"
              placeholder='Deliver Custumers'
              required
              onChange={handleInputChange}
            /> 
              <CreateButton/>
          </div>}
        
          {/* <div onClick={()=>setHasAccount(true)} className='inputButton '> <p className='mainHome-title'>Back</p></div> */}
        
        </form>
  </div>
  </div>
 


</section>
)}

const CreateButton = () =>{

  return (

<button className='inputButton'> <p className='mainHome-title'>Añadir Orden</p></button>
          

)}



export default NewOrder