<?php

namespace App\Http\Controllers;
use App\Models\Employee;
use Throwable;

use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function index($id = null){
        if($id == null){
            return Employee::orderBy('Name', 'asc')->get();
        } else {
            return Employee::find($id);
        }
    }
    public function create(Request $req){
        try{
            $employee= new Employee();
            $employee->Name=$req->input('Name');
            $employee->Email=$req->input('Email');
            $employee->Phone=$req->input('Phone');
            $employee->date=$req->input('date');
            $employee->gioitinh=$req->input('gioitinh');
            
            $employee->save();
            return $employee;

        }catch(Throwable $err){
            return $err->getMessage();
        }
    }
    public function update(Request $req, $id){
        try{
            $employee= Employee::find($id);
            if($employee){
                $employee->Name=$req->input('Name');
                $employee->Email=$req->input('Email');
                $employee->Phone=$req->input('Phone');
                $employee->date=$req->input('date');
                $employee->gioitinh=$req->input('gioitinh');

                $employee->save();
                return $employee;
            } else{
                return 'not fould';
            }
            

        }catch(Throwable $err){
            return $err->getMessage();
        }
    }
    public function delete($id){
        try{
            $employee= Employee::find($id);
            if($employee){
                $employee->delete();

                return $employee;
            } else{
                return 'not fould';
            }
            

        }catch(Throwable $err){
            return $err->getMessage();
        }
    }
}
