import {useState, useEffect} from 'react';
import axios from 'axios';

function useAjax(callback){
    const [items,setItems] = useState([]);

    const addItem = async (item) =>{
        item.complete = false;
        let config = {
            headers: { 'Content-Type': 'application/json' },
            mode: 'cors', 
        };
        let url = 'https://api401-todo.herokuapp.com/todo';
        let data = {
            item: item.item,
            difficulty: item.difficulty,
            complete: item.complete,
            assignee: item.assignee
        };
        await axios.post(url, data, config);
        let final = await getItems();
        setItems([final]);
        
    }
    const updateItem = async (item , _id) =>{
        let config = {
            headers: { 'Content-Type': 'application/json' },
            mode: 'cors', 
        };
        let url = `https://api401-todo.herokuapp.com/todo/${_id}`;
        let data = {
            item: item.item,
            difficulty: item.difficulty,
            complete: item.complete,
            assignee: item.assignee
        };
        await axios.put(url, data, config);
        let final = await getItems();
        setItems([final]);
    }
    const deleteItem = async (id) =>{
        let config = {
            headers: { 'Content-Type': 'application/json' },
            mode: 'cors', 
        };
        let url = `https://api401-todo.herokuapp.com/todo/${id}`;
        await axios.delete(url, config);
        let final = await getItems();
        setItems([final]);
    }
    const getItems = async () =>{
        let config = {
            headers: { 'Content-Type': 'application/json' },
            mode: 'cors'
        }
        let url = 'https://api401-todo.herokuapp.com/todo';
        let final = await axios.get(url,config);
        callback(final.data)

    }

    useEffect(()=>{
        getItems();
    });
    return [addItem, updateItem,  deleteItem,items];
}
export default useAjax;