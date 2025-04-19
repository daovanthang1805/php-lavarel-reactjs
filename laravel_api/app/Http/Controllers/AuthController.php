<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Validator;


class AuthController extends Controller
{
    // public function register(Request $request)
    // {
    //     // Validate request data
    //     $validator = Validator::make($request->all(), [
    //         'name' => 'required|string|max:255',
    //         'email' => 'required|email|unique:users|max:255',
    //         'password' => 'required|min:10',
    //     ]);
    //     // Return errors if validation error occur.
    //     if ($validator->fails()) {
    //         $errors = $validator->errors();
    //         return response()->json([
    //             'error' => $errors
    //         ], 400);
    //     }
    //     // Check if validation pass then create user and auth token. Return the auth token
    //     if ($validator->passes()) {
    //         $user = User::create([
    //             'name' => $request->name,
    //             'email' => $request->email,
    //             'password' => Hash::make($request->password)
    //         ]);
    //         $token = $user->createToken('auth_token')->plainTextToken;
        
    //         return response()->json([
    //             'access_token' => $token,
    //             'token_type' => 'Bearer',
    //         ]);
    //     }
    // }
    // public function login(Request $request)
    // {
    //     if (!Auth::attempt($request->only('email', 'password'))) {
    //         return response()->json([
    //             'message' => 'Invalid login details'
    //         ], 401);
    //     }
    //     $user = User::where('email', $request['email'])->firstOrFail();
    //     $token = $user->createToken('auth_token')->plainTextToken;
    //     return response()->json([
    //         'access_token' => $token,
    //         'token_type' => 'Bearer',
    //     ]);
    // }
    public function user(Request $request)
    {
        return $request->user();
    }

    public function index($id = null){
        if($id == null){
            return User::orderBy('Name', 'asc')->get();
        } else {
            return User::find($id);
        }
    }
    public function register(Request $req){
        $fields=$req->validate([
            'name'=>'required|string',
            'email'=>'required|string|unique:users,email',
            'password'=>'required|string|confirmed',

        ]);

        $user = User::create([
            'name' => $fields['name'],
            'email' => $fields['email'],
            'password' => bcrypt($fields['password']),

        ]);

        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'user'=> $user,
            'token'=> $token
        ];

        return response($response, 201);
    }
    public function login(Request $req){
        $fields=$req->validate([
            'email'=>'required|string',
            'password'=>'required|string',
        ]);

        //check email
        $user = User::where('email', $fields['email'])->first();


        // check pasword
        if(!$user||!Hash::check($fields['password'], $user->password)){
            return response([
                'message'=>'sai'

            ], 401);
        }

        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'user'=> $user,
            'token'=> $token
        ];
        

        return response($response, 201);
        // return response()->json([
        //     'token' => $token,
        //     'user' => $user,
        // ]);
    }



    public function logout(Request $req){
        auth()->user()->tokens()->delete();

        return[
            'message'=>'Logged out'
        ];
    }

    
    public function delete($id){
        try{
            $user= User::find($id);
            if($user){
                $user->delete();
                

                return $user;
            } else{
                return 'not fould';
            }
            

        }catch(Throwable $err){
            return $err->getMessage();
        }
    }
}
