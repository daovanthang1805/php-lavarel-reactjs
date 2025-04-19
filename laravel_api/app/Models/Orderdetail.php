<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orderdetail extends Model
{
    use HasFactory;
    protected $table = 'orderdetails';
    protected $primaryKey = 'ORDERDID';
    protected $fillable = [
        'ORDERID',
        'image',
        'PRO_Name',
        'ORDERSL',
        'ORDERPRICE',
    ];
}
