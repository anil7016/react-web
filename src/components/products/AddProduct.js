import React, {useState, UseEffect} from "react";
import axios from "axios";

const AddProduct = () => {
    const [user, setUser] = useState({
        product_name:'',
        product_price:'',
        product_description:''
    });

    const { product_name, product_price, product_description } = user;

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]:[e.target.value] });
    };
    const onSubmit = async e => {

        console.log('user',user )
        e.preventDefault();
        await axios.post("http://localhost:890/codeigniter/create_product",user);
        alert('data Saved');
    };

    return(
        <div className="container bg-light">
            <div className="row">
                <div className="col-sm-4 mx-auto shadow p-5">
                    <h3 className="text-center mb-4">Add Product</h3>
                    <form onSubmit={e => onSubmit(e)}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Product Name"
                                name="product_name"
                                value={product_name}
                                onChange= { e => onInputChange(e) }
                            />
                        </div>
                        <div className="form-group">
                            <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Product Price"
                            name="product_price"
                            value={product_price}
                            onChange={e => onInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Product Description"
                            name="product_description"
                            value={product_description}
                            onChange={e => onInputChange(e)}
                            />
                        </div>
                        <button className="btn btn-primary btn-block">Add Product</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddProduct;