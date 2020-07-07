import {useState, useEffect} from 'react';
import axios from 'axios';

function useAjax(callback){
    const [items,setItems] = useState([]);
    const addItem = async (item) =>{
        let config = {
            headers: { 'Content-Type': 'application/json' },
            mode: 'cors', 
        };
        let url = 'https://api401-todo.herokuapp.com/todo';
        let body = {
            item: item.item,
            difficulty: item.difficulty,
            complete: item.complete,
            assignee: item.assignee
        };
        await axios.post(url, body, config);
        let final = await getItems();
        setItems([final]);
        
    }
    const updateItem = async (item , _id) =>{
        let config = {
            headers: { 'Content-Type': 'application/json' },
            mode: 'cors', 
        };
        let url = `https://api401-todo.herokuapp.com/todo/${_id}`;
        let body = {
            item: item.item,
            difficulty: item.difficulty,
            complete: item.complete,
            assignee: item.assignee
        };
        await axios.put(url, body, config);
        let final = await getItems();
        setItems([final]);
    }
    const deleteItem = async (_id) =>{
        let config = {
            headers: { 'Content-Type': 'application/json' },
            mode: 'cors', 
        };
        let url = `https://api401-todo.herokuapp.com/todo/${_id}`;
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
        let res = await axios.get(url,config);
        callback(res.data)

    }

    useEffect(()=>{
        getItems();
    });
    return [addItem, updateItem,  deleteItem,items];
}
export default useAjax;