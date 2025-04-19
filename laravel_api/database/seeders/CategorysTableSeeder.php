<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorysTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categorys=[
            ['CatName'=>'Lạnh', 'CatStatus'=>'hót'],
            ['CatName'=>'Nóng', 'CatStatus'=>'hót'],
            ['CatName'=>'Ấm', 'CatStatus'=>'Bình Thường'],
        ];
        foreach ($categorys as $category) {
            DB::table('categorys')->insert($category);
        }
    }
}
