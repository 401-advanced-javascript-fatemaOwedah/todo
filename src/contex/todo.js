  
import React, { useState,useEffect } from 'react';

import useAjax from '../../src/components/hooks/useAjax';


export const FilterContext = React.createContext();

function FilterProvider(props) {

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
        add: addItem,
        update: updateItem,
        delete: deleteItem,
    }
    return (
        <FilterContext.Provider value={data}>
          {props.children}
        </FilterContext.Provider>
      );
}

export default FilterProvider;