
<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Product_detail extends CI_Controller {

  public function __construct()
  {
    parent::__construct();
    $this->load->model('Product_action');
    $this->load->helper('url_helper');
  }
  
  public function products()
  { 
    header("Access-Control-Allow-Origin: *");
    $products = $this->Product_action->get_products();
    $this->output->set_content_type('application/json')->set_output(json_encode($products));
  
  }

  public function getProduct($id)
  { 
    
//    header('Access-Control-Allow-Origin: *');

    header("Content-type:application/json");
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
    header('Access-Control-Allow-Headers: token, Content-Type');
   
    $product = $this->Product_action->get_product($id);

    $productData = array(
      'id' => $product->id,
      'product_name' => $product->product_name,
      'product_price' => $product->product_price,
      'product_description' => $product->product_description,
    );

    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode($productData));
   }

  public function createProduct()
  { 
    header("Content-type:application/json");
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
    header('Access-Control-Allow-Headers: token, Content-Type');

    $requestData = json_decode(file_get_contents('php://input'), true);

    if( ! empty($requestData)) {
      //print_r($requestData);
      $productName = $requestData['product_name'][0];
      $productPrice = $requestData['product_price'][0];
      $productDescription = $requestData['product_description'][0];
      //$productImage = $requestData['product_image'];
      
      $productData = array(
        'product_name' => $productName,
        'product_price' => $productPrice,
        'product_description' => $productDescription,
//        'product_image' =>$productImage
      );

      $id = $this->Product_action->insert_product($productData);

      $response = array(
        'status' => 'success',
        'message' => 'Product added successfully'
      );
    }
    else {
      $response = array(
        'status' => 'error'
      );
    }

    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode($response));
  }

  public function updateProduct($id)
  { 
    header("Content-type:application/json");
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
    header('Access-Control-Allow-Headers: token, Content-Type');

    $requestData = json_decode(file_get_contents('php://input'), true);

    if(!empty($requestData)) {

      $productName = $requestData['product_name'][0];
      $productPrice = $requestData['product_price'][0];
      $productDescription = $requestData['product_description'][0];
      
      $productData = array(
        'product_name' => $productName,
        'product_price' => $productPrice,
        'product_description' => $productDescription,
      );

      $id = $this->Product_action->update_product($id, $productData);

      $response = array(
        'status' => 'success',
        'message' => 'Product updated successfully.'
      );
    }
    else {
      $response = array(
        'status' => 'error'
      );
    }

    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode($response));
  }

  public function deleteProduct($id)
  {
    header("Content-type:application/json");
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
    header('Access-Control-Allow-Headers: token, Content-Type');
    
    $product = $this->Product_action->delete_product($id);
    $response = array(
      'message' => 'Product deleted successfully.'
    );

    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode($response));
  }
}
?>