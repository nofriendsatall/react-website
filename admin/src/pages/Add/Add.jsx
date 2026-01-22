import React, { useEffect } from "react";
import "./Add.css";
import { assets } from "../../../admin_assets/assets";
import axios from "axios";
import { url } from "../../../admin_assets/assets";
import { toast } from "react-toastify";

const Add = ({url}) => {

    const [image, setImage] = React.useState(false);
    const [data, setData] = React.useState({
        name: "",
        description: "",
        category: "Salad",
        price: "",
    });

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(prevData => ({...prevData,[name]:value}));
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image);
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("category", data.category);
        formData.append("price", Number(data.price));

        console.log(formData);

        const response = await axios.post(`${url}/api/food/add`, formData);

        if(response.data.success) {
            setData({ name: "", description: "", category: "Salad", price: "" });
            setImage(false);
            toast.success(response.data.message);
        }
        else {
            toast.error(response.data.message);
        }


    };


    return (
        <div className="add">
            <form  className="flex-col" onSubmit={onSubmitHandler}>
                <div className="add-img-upload flex-col">
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        <img src={ image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
                    </label>
                        <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden required />
                </div>

                <div className="add-product-name flex-col">
                    <p>Product Name</p>
                    <input onChange={onChangeHandler} value={data.name} type="text" name="name" required />
                </div>

                <div className="add-product-description flex-col">
                    <p>Product description</p>
                    <textarea onChange={onChangeHandler} value={data.description} type="text" name="description" rows='6' placeholder="Write content here" required />
                </div>

                <div className="add-category-price">
                    <div className="add-category flex-col">
                        <p>Product category</p>

                        <select onChange={onChangeHandler} name="category">
                            <option value="Salad">Salad</option>
                            <option value="Rolls">Rolls</option>
                            <option value="Deserts">Deserts</option>
                            <option value="Sandwich">Sandwich</option>
                            <option value="Cake">Cake</option>
                            <option value="Pure Veg">Pure Veg</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Noodles">Noodles</option>
                        </select>

                    </div>

                    <div className="add-price flex-col">
                        <p>Product price</p>
                        <input onChange={onChangeHandler} value={data.price} type="number" name="price" id="" placeholder="$20" />
                    </div>

                    <button type="submit" className="add-btn">Add</button>

                </div>



            </form>
        </div>
    );
};

export default Add;