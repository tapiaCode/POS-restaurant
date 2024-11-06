
import { useState } from "react";
import useBill from "../../hooks/useBill";
import AddItemsView from "./addItems";

const BillDectail = ({OrDectail,order}) =>{
  const bills = useBill();
  const { completedOrder ,allItems , setAllItems} = bills;
  const [isVisible, setIsVisible] = useState(false)
  let totalPrice = 0;
 
  
  const payBill =()=>{

    order.id && completedOrder(order.id)
  }
  return (
<>
<section  className={`billDetails ${!OrDectail &&'moveOut'}`}>
                <section className="billContainer-header">
                <AddItemsView isVisible={isVisible} setIsVisible={setIsVisible} order={order}/>
                <div className="billContainer-filter">
                <svg className="billContainer-svg" width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 7V12L14.5 13.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#1d1b1b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                <p className="userInfo-subTitle lg">Historial de Pago</p>
                <svg className="billContainer-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#808080"></path> </g></svg>
                </div>
                    <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" fill="#222325"></path> <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="#222325"></path> <path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="#222325"></path> </g></svg>
                </section>
                <header className="billContainer-header" >
                <p className="billContainer-title">Orden # {order.id}</p>
                {order.status == "Ereased"? '': <div className={`userInfo-img-button ${order.status? 'detalle': 'apagado'} `}>
            
                    <p className="userInfo-name md"> {order.status? 'Activo':'Desactivable'}</p>
                
                </div>}
                </header>
            <section className="bill-data">
              <div>

                <p className="userInfo-name ">Detalles</p>
                <p className="userInfo-name " >{order.local ? '':' Para Delivery'}</p>
              </div>
                <div className="billDetails-info">
                <p className="userInfo-name md">Mesa</p>
                <p className="userInfo-name md">Cliente</p>
                <p className="userInfo-name md">Cantidad</p>
                <p className="userInfo-name md ">Mesero</p>
                <p className="userInfo-name textDectail">{order.table}</p>
                <p className="userInfo-name textDectail">{order.guests}</p>
                <p className="userInfo-name ">{order.local ? <p className="userInfo-name textDectail">--</p>:order.customers}</p>
                <p className="userInfo-name ">{order.asociate}</p>
                </div>
                {/* boton para agregar iten ala orden */}
                {(order.status && (order.status != 'Ereased') )&& <div onClick={()=>(setIsVisible(true) 
                )} className=" userInfo-name boton-add">Añadir  </div>}
                <div className="bill-list mainlist">
                <div className="bill-list">
                <p className="userInfo-name md">Items</p>
                <p className="userInfo-name md">Precio</p>
                </div>
                {/* donde iran donde los items agregados */}
                <div className="items-containers" >
                 
                  {
                    // console.log('order----',order.dectail)
                    
                    order?.dectail?.map((items , index)=>{
                      totalPrice += items.price;
                      return(
                      <DetailItem key={index} items={items}/>
                    )})
                  }
                 

                </div>
             
                </div>
                <div className="bill-list mainlist row">
                <p className="userInfo-name ">Total</p>
                <p className="userInfo-name ">Bs. {totalPrice}.00</p>
                </div>

            </section>
            <div>
               {order.status == "Ereased"? '': 
               <div onClick={()=>payBill()} className={`userInfo-img-button ${order.status?'detail':''} buttonDectail`}>
            
                <p  className="userInfo-name md">{order.status?"Pagar":"Completo"}</p>
                
                </div>}
            </div>

            </section>
</>
)}

const DetailItem = ({items}) =>{

  return (
<>
<div className="bill-list">
                    <div className="bill-list listdectail">
                    {/* <img className="bill-img"  src="https://s7d1.scene7.com/is/image/mcdonalds/Header_BigMac_832x472:1-4-product-tile-desktop" alt=""/> */}
                    
                      <div className="items-details">
                        
                      <p className="userInfo-name md">1</p>
                      <p className="userInfo-name md">x</p>
                      <p className="userInfo-name item-name md ">{items.name}</p>
                      </div>
                    </div>
                    
                    <p className="userInfo-name md">Bs. {items.price}.00</p>
                </div>
                
</>
)}

 

export default BillDectail