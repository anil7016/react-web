import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
    const [users, setUser] = useState([]);  
    useEffect( () => {
        loadUsers();
    },[] );

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:890/codeigniter/show_product");
        console.log('result', result)
        setUser(result.data);
    }

    return (
        <div className="container">
            <div className="py-4">
                <h3 className="mb-3 text-center">Product Details</h3>
                <table className="table border shadow">
                    <thead className="thead-primary">
                        <tr>
                            <th className="col">#</th>
                            <th className="col">Name</th>
                            <th className="col">Price</th>
                            <th className="col">Description</th>
                            <th className="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr>
                                <td>{index +1}</td>
                                <td>{user.product_name}</td>
                                <td>{user.product_price}</td>
                                <td>{user.product_description}</td>
                                <td>
                                    <Link className=" mr-2" to={`/products/edit/${user.id}`}>
                                    <i className="fa fa-edit" aria-hidden="true"></i> Edit
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>    
        </div>
    );
};

export default Home;