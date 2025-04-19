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
        Schema::create('khachhangs', function (Blueprint $table) {
            $table->bigIncrements('KHID');
            $table->string('KHNAME', 100);
            $table->string('KHTUOI', 30)->nullable();
            $table->string('KHGT', 10)->nullable();
            $table->string('KHEMAIL', 100)->nullable();
            $table->string('KHDC', 255)->nullable();
            $table->string('KHPHONE', 12)->nullable();
            $table->integer('ORDERID');
            $table->integer('IDUSER');
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
        Schema::dropIfExists('khachhangs');
    }
};
