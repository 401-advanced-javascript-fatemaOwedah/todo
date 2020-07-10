  
import React, { useState,useEffect } from 'react';

import useAjax from '../../src/components/hooks/useAjax';


export const SettingsContext = React.createContext();

function SettingsProvider(props) {

    const [list, setList] = useState([]);
  
    const [addItem, updateItem,  deleteItem, getItems] = useAjax(adds);
  
    function adds(lists) {
      setList(lists);
    }

  useEffect(()=>{
    getItems();
  },[list]);

    let data ={
        list,
        addItem,
        updateItem,
        deleteItem,
    }
    return (
        <SettingsContext.Provider value={data}>
          {props.children}
        </SettingsContext.Provider>
      );
}

export default SettingsProvider;