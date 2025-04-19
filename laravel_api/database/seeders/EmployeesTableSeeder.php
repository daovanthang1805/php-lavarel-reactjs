<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EmployeesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $employees=[
            ['Name'=>'đỗ Tú Tài', 'Email'=>'daovanthang@gmail.com', 'Phone'=>'0369434406'],
            ['Name'=>'đỗ Tú Tài', 'Email'=>'daovanthang@gmail.com', 'Phone'=>'0369434406']
        ];
        foreach ($employees as $employee) {
            DB::table('employees')->insert($employee);
        }
    }
}
