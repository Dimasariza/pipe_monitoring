<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('circuits', function (Blueprint $table) {
            $table->id();
            $table->date("date_in_service");
            $table->string("class");
            $table->string("piping_circuit_name");
            $table->string("piping_circuit_id");
            $table->text("notes")->nullable();
            $table->string("attachment")->nullable();
            $table->text("recomendation")->nullable();
            $table->string("image")-> nullable();
            $table->unsignedBigInteger('piping_id');
            $table->foreign('piping_id')->references('id')->on('assets');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('circuits');
    }
};
