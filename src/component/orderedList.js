import React, { useState } from "react";
import OrderedTable from "./orderedTable";
import { ReceiveOrder } from "./receiveorder";
import { useEffect } from "react";

export default function OrderedList(){
    const[drinklist, setlist] = useState([])
    useEffect(()=>{
        ReceiveOrder().then(list=>{
          setlist(list)
          console.log(list)
        })
    },[])

    return(
        <React.Fragment>
          <h1>注文リスト</h1>
          <OrderedTable list={drinklist}/>
        </React.Fragment>
    );
}