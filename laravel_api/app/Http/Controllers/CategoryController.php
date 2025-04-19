<?php

namespace App\Http\Controllers;
use App\Models\Category;
use Throwable;

use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index($id = null){
        if($id == null){
            return Category::orderBy('CatName', 'asc')->get();
        } else {
            return Category::find($id);
        }
    }
    public function create(Request $req){
        try{
            $category= new Category();
            $category->CatName=$req->input('CatName');
            $category->CatStatus=$req->input('CatStatus');

            
            $category->save();
            return $category;

        }catch(Throwable $err){
            return $err->getMessage();
        }
    }
    public function update(Request $req, $id){
        try{
            $category= Category::find($id);
            if($category){
                $category->CatName=$req->input('CatName');
                $category->CatStatus=$req->input('CatStatus');

                

                $category->save();
                return $category;
            } else{
                return 'not fould';
            }
            

        }catch(Throwable $err){
            return $err->getMessage();
        }
    }
    public function delete($id){
        try{
            $category= Category::find($id);
            if($category){
                $category->delete();
                

                return $category;
            } else{
                return 'not fould';
            }
            

        }catch(Throwable $err){
            return $err->getMessage();
        }
    }
}
