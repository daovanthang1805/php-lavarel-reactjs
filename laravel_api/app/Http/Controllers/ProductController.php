<?php

namespace App\Http\Controllers;
use App\Models\Product;
use Throwable;


use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index($id = null){
        if($id == null){
            return Product::orderBy('ProName', 'asc')->get();
        } else {
            return Product::find($id);
        }
    }
    public function create(Request $req){
        try{
            $product= new Product();
            $product->ProName=$req->input('ProName');
            $product->ProPrice=$req->input('ProPrice');
            $product->CAT_ID=$req->input('CAT_ID');
            $product->ProStatus=$req->input('ProStatus');
            $product->ProDesc=$req->input('ProDesc');
            $product->ProSl = $req->input('ProSl');
            $product->SUB_ID = $req->input('SUB_ID');
            $product->T_ID = $req->input('T_ID');

            if($req->hasFile('ProImage')){
                $completefilename=$req->file('ProImage')->getClientOriginalName();
                $filenameonly=pathinfo($completefilename, PATHINFO_FILENAME);
                $extenshion=$req->file('ProImage')->getClientOriginalExtension();
                $comppic = str_replace(' ', '_', $filenameonly).'-'.rand() . '_'.time(). '.'.$extenshion;
                $path = $req->file('ProImage')->storeas('public/img', $comppic);
                $product->ProImage= $comppic;

            }
            
            

            $product->save();
            return $product;
            

        }catch(Throwable $err){
            return $err->getMessage();
        }
    }
    /**
     * 
     * @param  \Illuminate\Http\Request  $req
     * @return \Illuminate\Http\Response
     */
    public function update(Request $req, $id){
        try{
                $product= Product::find($id);


            
                if($product){
                    $product->ProName=$req->input('ProName');
                    $product->ProPrice=$req->input('ProPrice');
                    $product->CAT_ID=$req->input('CAT_ID');
                    $product->ProStatus=$req->input('ProStatus');
                    $product->ProDesc=$req->input('ProDesc');
                    $product->ProSl = $req->input('ProSl');
                    $product->SUB_ID = $req->input('SUB_ID');
                    $product->T_ID = $req->input('T_ID');
                    $product->ProImage=$req->input('ProImage');

                    // if($req->hasFile('ProImage')){
                    //     $completefilename=$req->file('ProImage')->getClientOriginalName();
                    //     $filenameonly=pathinfo($completefilename, PATHINFO_FILENAME);
                    //     $extenshion=$req->file('ProImage')->getClientOriginalExtension();
                    //     $comppic = str_replace(' ', '_', $filenameonly).'-'.rand() . '_'.time(). '.'.$extenshion;
                    //     $path = $req->file('ProImage')->storeas('public/img', $comppic);
                    //     $product->ProImage= $comppic;
        
                    // }

                

                    $product->save();
                    return $product;
                }else{
                    return 'not fould';
                }
        

        }catch(Throwable $err){
            return $err->getMessage();
        }
    }
    public function delete($id){
        try{
            $product= Product::find($id);
            if($product){
                $product->delete();
                

                return $product;
            } else{
                return 'not fould';
            }
            

        }catch(Throwable $err){
            return $err->getMessage();
        }
    }
    public function search($name){
        return product::where('ProName', 'like', '%'.$name.'%')->get();
    }
    public function productbycat($id){
        return product::where('CAT_ID', '=', $id)->get();
    }
    public function producthot(){
        return product::where('ProStatus', '=', 'hót')->get();
    }
}
