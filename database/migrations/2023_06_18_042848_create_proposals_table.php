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
        Schema::create('proposals', function (Blueprint $table) {
            $table->id();
            $table->text("list_of_piping_id");
            $table->boolean("carried_out")->nullable();
            $table->string("proposal_id");
            $table->date("inspection_planned_date");
            $table->date("inspection_date")->nullable();
            // $table->date("recomendation_date")->nullable();
            $table->text("remarks")->nullable();
            $table->text("inspection_method")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('proposals');
    }
};
