<?php

namespace App\Http\Controllers;
use App\Models\supplier;
use Throwable;

use Illuminate\Http\Request;

class SupplierController extends Controller
{
    public function index($id = null){
        if($id == null){
            return supplier::orderBy('SUB_Name', 'asc')->get();
        } else {
            return supplier::find($id);
        }
    }
    public function create(Request $req){
        try{
            $Supplier= new supplier();
            $Supplier->SUB_Name=$req->input('SUB_Name');
            $Supplier->SUB_Phone=$req->input('SUB_Phone');
            $Supplier->SUB_Email=$req->input('SUB_Email');
            $Supplier->SUB_desc=$req->input('SUB_desc');

            
            $Supplier->save();
            return $Supplier;

        }catch(Throwable $err){
            return $err->getMessage();
        }
    }
    public function update(Request $req, $id){
        try{
            $Supplier= supplier::find($id);
            if($Supplier){

                $Supplier->SUB_Name=$req->input('SUB_Name');
                $Supplier->SUB_Phone=$req->input('SUB_Phone');
                $Supplier->SUB_Email=$req->input('SUB_Email');
                $Supplier->SUB_desc=$req->input('SUB_desc');


                $Supplier->save();
                return $Supplier;
            } else{
                return 'not fould';
            }
            

        }catch(Throwable $err){
            return $err->getMessage();
        }
    }
    public function delete($id){
        try{
            $Supplier= supplier::find($id);
            if($Supplier){
                $Supplier->delete();

                return $Supplier;
            } else{
                return 'not fould';
            }
            

        }catch(Throwable $err){
            return $err->getMessage();
        }
    }
}
