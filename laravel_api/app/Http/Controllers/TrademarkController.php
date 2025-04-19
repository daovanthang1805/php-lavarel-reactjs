<?php

namespace App\Http\Controllers;
use App\Models\Trademark;
use Throwable;

use Illuminate\Http\Request;

class TrademarkController extends Controller
{
    public function index($id = null){
        if($id == null){
            return Trademark::orderBy('T_Name', 'asc')->get();
        } else {
            return Trademark::find($id);
        }
    }
    public function create(Request $req){
        try{
            $trademask= new Trademark();
            $trademask->T_Name=$req->input('T_Name');
            $trademask->T_desc=$req->input('T_desc');

            
            $trademask->save();
            return $trademask;

        }catch(Throwable $err){
            return $err->getMessage();
        }
    }
    public function update(Request $req, $id){
        try{
            $trademask= Trademark::find($id);
            if($trademask){
                $trademask->T_Name=$req->input('T_Name');
                $trademask->T_desc=$req->input('T_desc');


                $trademask->save();
                return $trademask;
            } else{
                return 'not fould';
            }
            

        }catch(Throwable $err){
            return $err->getMessage();
        }
    }
    public function delete($id){
        try{
            $trademask= Trademark::find($id);
            if($trademask){
                $trademask->delete();

                return $trademask;
            } else{
                return 'not fould';
            }
            

        }catch(Throwable $err){
            return $err->getMessage();
        }
    }
}
