<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\KhachhangController;
use App\Http\Controllers\TrademarkController;
use App\Http\Controllers\SupplierController;
use App\Http\Controllers\OrderController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
//public route
Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

//employee
Route::get('employees/{id?}', [EmployeeController::class, 'index']);
Route::post('employees', [EmployeeController::class, 'create']);
Route::put('employees/{id}', [EmployeeController::class, 'update']);
Route::delete('employees/{id}', [EmployeeController::class, 'delete']);
//product
Route::post('products', [ProductController::class, 'create']);
Route::get('producthot', [ProductController::class, 'producthot']);
Route::get('products/{id?}', [ProductController::class, 'index']);
Route::get('productbycat/{id}', [ProductController::class, 'productbycat']);
Route::get('products/search/{name}', [ProductController::class, 'search']);
Route::delete('products/{id}', [ProductController::class, 'delete']);
Route::put('products/{id}', [ProductController::class, 'update']);
//user
Route::get('users/{id?}', [AuthController::class, 'index']);
Route::delete('users/{id}', [AuthController::class, 'delete']);
Route::get('user', [AuthController::class, 'index']);

//category
Route::get('categorys/{id?}', [CategoryController::class, 'index']);
Route::post('categorys', [CategoryController::class, 'create']);
Route::put('categorys/{id}', [CategoryController::class, 'update']);
Route::delete('categorys/{id}', [CategoryController::class, 'delete']);
//trademark
Route::get('trademarks/{id?}', [TrademarkController::class, 'index']);
Route::post('trademarks', [TrademarkController::class, 'create']);
Route::put('trademarks/{id}', [TrademarkController::class, 'update']);
Route::delete('trademarks/{id}', [TrademarkController::class, 'delete']);
//suppliers
Route::get('suppliers/{id?}', [SupplierController::class, 'index']);
Route::post('suppliers', [SupplierController::class, 'create']);
Route::put('suppliers/{id?}', [SupplierController::class, 'update']);
Route::delete('suppliers/{id}', [SupplierController::class, 'delete']);
//order
Route::post('orders', [OrderController::class, 'create']);
Route::get('order', [OrderController::class, 'index']);
Route::get('orderdetail/{id}', [OrderController::class, 'indexdetail']);
Route::get('khachhang/{id}', [OrderController::class, 'indexkhachhang']);


//protected route
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('logout', [AuthController::class, 'logout']);
});



