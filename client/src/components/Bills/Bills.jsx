import { useEffect, useState } from 'react'
import './bills.scss'
import BillDectail from './BillDectails'

import OrderViews from './OrderViews'
import NewOrder from './NewOrder'
import useBill from '../../hooks/useBill'
import BillFilter from './BillFilter'
import TogleeButton from '../Settings/TogleeButton'
import BillMap from './Billmap'
import { takeAll } from '../../const/apiConst'

const Bills = () => {
  const bills = useBill();
  const { curretOrders, orderToShow, setOrderToShow, filterBill, setTableFromMap, forDeliverys } = bills;

  const [currectTable, setCurrentTable] = useState('');
  const [isvisible, setIsvisible] = useState(false);
  const [OrDectail, setOrDectail] = useState(false);
  const [newOrder, setNewOrder] = useState(false);
  const [showTable, setShowTable] = useState(false);


  const selectOrder = (id, index) => {
    if (curretOrders[index].id != currectTable) {
      setCurrentTable(id)
      if (!OrDectail) {
        setOrDectail(true)
        setOrderToShow(curretOrders[index]);
      } else {
        setOrDectail(false)
        setTimeout(() => {
          setOrDectail(true)
          setOrderToShow(curretOrders[index])
        }, 500)
      }
    } else {
      setOrDectail(false);
      setCurrentTable('');
    }
  }
  const addNewOrder = (table) => {
    if (typeof table == "string") {

      setTableFromMap(table)
    }
    setShowTable(true);
    setNewOrder(true);
    setOrDectail(false);
    setCurrentTable("");
  }

  useEffect(() => {
    console.log('hola');

    (async () => {


      const data2 = await takeAll()
      console.log('hola desde add', data2);

    })();


  }, [])

  return (
    <div className='billBigBox'>
      <section className="billContainer">
        <div className="menu-logo bill-logo">
          <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M4 12L8 8M4 12L8 16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          <p className="userInfo-subTitle">Ventas</p>
          <div >
            <svg className="billContainer-svg" width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#808080"></path> </g></svg>
          </div>
          <p className="userInfo-name"> {currectTable && 'Order #'} {currectTable}</p>
        </div>
        <header className="billContainer-header" >
          <p className="billContainer-title">Ventas</p>
          <TogleeButton active={showTable} setShowTable={setShowTable} />
          <div>Delivery : {forDeliverys}</div>
          <div className="billContainer-svgContainer">
            <svg onClick={() => addNewOrder()} className="billContainer-svg" width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          </div>
        </header>
        {showTable ? <> <section className="billContainer-header">
          <div className="billContainer-filter forCategory">
            <p className="userInfo-subTitle">{filterBill}</p>
            <BillFilter isvisible={isvisible} setIsvisible={setIsvisible} />
            <svg onClick={() => setIsvisible(!isvisible)} className="billContainer-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#808080"></path> </g></svg>
          </div>
          <div className="billContainer-filter">
            <p className="userInfo-subTitle">2024</p>
            <svg className="billContainer-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#808080"></path> </g></svg>
          </div>
        </section>
          <section className="billCards">
            {/* all orders  */}
            {curretOrders.map((items, index) => (
              <div className={curretOrders == index ? `orderContainerMap` : ""} key={index}>
                <OrderViews order={items} id={index} selectOrder={selectOrder} currectTable={currectTable} setCurrentTable={setCurrentTable} setOrDectail={setOrDectail} />
              </div>
            ))}
          </section> </> : <BillMap newOrder={newOrder} addNewOrder={addNewOrder} setNewOrder={setNewOrder} selectOrder={selectOrder} />}

        <section className="billSearchContainer">

          <div className="billSearchBar">
            <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            <input type="text" placeholder="Search for Order" />
          </div>

        </section>

      </section>
      {<BillDectail OrDectail={OrDectail} order={orderToShow} />}
      {newOrder && <NewOrder setNewOrder={setNewOrder} />}
    </div>
  )
}

export default Bills