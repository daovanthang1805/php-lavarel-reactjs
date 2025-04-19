<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->bigIncrements('PRO_ID');
            $table->string('ProName', 100);
            $table->string('ProImage', 255)->nullable();
            $table->integer('ProPrice')->nullable();
            $table->integer('CAT_ID');
            $table->text('ProStatus')->nullable();
            $table->text('ProDesc')->nullable();
            $table->timestamps();
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};
