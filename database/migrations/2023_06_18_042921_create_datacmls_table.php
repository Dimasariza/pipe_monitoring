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
        Schema::create('datacmls', function (Blueprint $table) {
            $table->id();
            $table->string("cml_id");
            $table->string("gauge_point");
            $table->string("point_location");
            $table->float("nominal_thickness");
            $table->float("min_required_thickness");
            $table->float("last_thickness_reading");
            $table->date("last_thickness_reading_date");
            $table->date("calculated_cr");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('datacmls');
    }
};
