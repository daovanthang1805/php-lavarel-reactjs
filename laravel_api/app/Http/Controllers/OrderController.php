<?php

namespace App\Http\Controllers;
use App\Models\order;
use App\Models\Khachhang;
use App\Models\Orderdetail;
use Throwable;

use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index(){

        return order::orderBy('ORDERID', 'asc')->get();

    }
    public function indexdetail($id){
        return Orderdetail::where('ORDERID', '=', $id)->get();
    }
    public function indexkhachhang($id){
        return Khachhang::where('ORDERID', '=', $id)->get();
    }
    public function create(Request $req){
        try{
            $order=new order();
            $order->order_price= (!empty($req->order_price))? $req->order_price: null;
            $order->save();

            $customer = new Khachhang();
            $customer->ORDERID = $order->ORDERID;
            $customer->KHNAME=$req->KHNAME;
            $customer->IDUSER=(!empty($req->IDUSER)) ? $req->IDUSER:null;
            $customer->KHTUOI=(!empty($req->KHTUOI)) ? $req->KHTUOI:null;
            $customer->KHGT=(!empty($req->KHGT)) ? $req->KHGT:null;
            $customer->KHEMAIL=(!empty($req->KHEMAIL)) ? $req->KHEMAIL:null;
            $customer->KHDC=(!empty($req->KHDC)) ? $req->KHDC:null;
            $customer->KHPHONE=(!empty($req->KHPHONE)) ? $req->KHPHONE:null;
            $customer->save();

            foreach($req->order_product_list as $order_product){
                Orderdetail::create([
                    'ORDERID' => $order->ORDERID,
                    'image' => $order_product['image'],
                    'PRO_Name' => $order_product['name'],
                    'ORDERSL' => $order_product['quantity'],
                    'ORDERPRICE' => $order_product['price'],
                ]);
            }

            return response()->json([
                'message' => 'thành công rồi',
                'order' => $order,
            ], 200);


        }catch(Throwable $err){
            return $err->getMessage();
        }
    }

}
