import {useState} from 'react';

function useForm(callback){
const [item,setItem] = useState({});

const handelSubmit = (e) =>{
    e.preventDefault();
    item.complete = false;
    callback(item);
}
const handelChange = (e) =>{
    e.persist();
    setItem({...item,[e.target.name]: e.target.value});
}

return [handelSubmit,handelChange,item];
}

export default useForm;