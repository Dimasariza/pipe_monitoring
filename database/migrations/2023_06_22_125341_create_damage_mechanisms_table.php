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
        Schema::create('damage_mechanisms', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('piping_id');
            $table->text("damage_mechanism");
            $table->foreign('piping_id')->references('id')->on('assets')->onUpdate('cascade');
            $table->timestamps();
        });
    }
    
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('damage_mechanisms');
    }
};
