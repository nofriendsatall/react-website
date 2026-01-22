import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({url}) => {

    const [list, setList] = React.useState([]);

    

    const fetchList = async () => {
            const response = await axios.get("http://localhost:4000/api/food/list");
            
            if(response.data.success) {
                setList(response.data.list);
            }
            else {
                toast.error(response.data.message);
            }


    };

    React.useEffect(() => {
        fetchList();
    }, []);

    const removeFood = async (foodId) => {
        const response = await axios.post(`${url}/api/food/remove`,{id:foodId});

        await fetchList(); 
        
        if(response.data.success) {
            toast.success(response.data.message);
        }
        else {
            toast.error(response.data.message);
        }
        
    }

    return (
        <div className="list add flex-col">
            <p>All Foods List</p>
            <div className="list-table">
                <b>Image</b>
                <b>Name</b>
                <b>Description</b>
                <b>Category</b>
                <b>Price</b>
            </div>
            {list.map((item) => {
                return (
                    <div key={index} className="list-table-format">
                        <img src={`@{url}`+item.image} alt="" />
                        <p>{item.name}</p>
                        <p>{item.category}</p>
                        <p>${item.price}</p>
                        <p className="cursor" onClick={() => removeFood(item.id)} >X</p>
                    </div>
                );
            })}
        </div>
    );
};

export default List;