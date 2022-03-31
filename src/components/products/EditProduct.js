import React, {useEffect,useState} from "react";
import axios from "axios";
import { useNavigate,useParams} from "react-router-dom";

const EditProduct = () => {
    const history = useNavigate()
    const {id} = useParams(); // the useparams() hook help us to access parameter from current url
    console.log('id', id)
    const [user, setUser] = useState(
        {
            product_name:'',
            product_price:'',
            product_description:''
        }
    );
    const {product_name,product_price,product_description} = user;
    const onInputChange = e =>{
        setUser( {...user, [e.target.name] : [e.target.value] } );
    }    

    useEffect( ()=>{
        loadUser();
    },[]);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:890/codeigniter/update-product/update/${id}`, user);
        history.push('/');
    }

    const loadUser = async () => {
      const result =  await axios.get(`http://localhost:890/codeigniter/get_product/${id}`);
      console.log("edit=result", result);
      setUser(result.data);  
    }

    return (
        <div className="container">
         <div className="row"> 
          <div className="col-sm-5 col-offset-3 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Edit A Product</h2>
            <form onSubmit={e => onSubmit(e)}>
            <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Id"
                  name=""
                  value={id}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Product Name"
                  name="product_name"
                  value={product_name}
                  onChange={e => onInputChange(e)}
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
              <button className="btn btn-secondary btn-block">Update User</button>
            </form>
           </div>
          </div> 
        </div>
      );
    };
    
    export default EditProduct;
    