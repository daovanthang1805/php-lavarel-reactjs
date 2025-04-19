<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $products=[
            ['ProName'=>'cà phê', 'ProPrice'=>'30000', 'CAT_ID'=>'1', 'ProStatus'=>'tốt', 'ProDesc'=>'lạnh'],
            ['ProName'=>'cà phê', 'ProPrice'=>'30000', 'CAT_ID'=>'1', 'ProStatus'=>'tốt', 'ProDesc'=>'lạnh'],
        ];
        foreach ($products as $product) {
            DB::table('products')->insert($product);
        }
    }
}
