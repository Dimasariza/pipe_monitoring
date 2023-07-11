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
            $table->string("piping_circuit_id")->unique();
            $table->text("notes")->nullable();
            $table->string("attachment")->nullable();
            $table->text("recomendation")->nullable();
            $table->text("images")-> nullable();
            $table->text('piping_id')->nullable();
            $table->text('circuit_id')->nullable();
            $table->unsignedBigInteger('proposal_id')->nullable();
            $table->string('qr_code')->nullable();
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
