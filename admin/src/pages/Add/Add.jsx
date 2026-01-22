import React from "react";

const Add = () => {
    return (
        <div className="add">
            <form action="" className="flex-col">
                <div className="add-img-upload flex-col">
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        <img src={assets.upload_area} alt="" />
                    </label>
                        <input type="file" id="image" hidden required />
                </div>

                <div className="add-product-name flex-col">
                    <p>Product Name</p>
                    <input type="text" name="name" required />
                </div>

                <div className="add-product-description flex-col">
                    <p>Product description</p>
                    <input type="text" name="description" rows='6' placeholder="Write content here" required />
                </div>

                <div className="add-category-price">
                    <div className="add-category flex-col">
                        <p>Product category</p>

                        <select name="category" id="">
                            
                        </select>

                    </div>
                </div>



            </form>
        </div>
    );
};

export default Add;