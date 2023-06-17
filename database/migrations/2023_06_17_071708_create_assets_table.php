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
        Schema::create('assets', function (Blueprint $table) {
            $table->id();
            $table->string('piping_id');
            $table->string('piping_name');
            $table->float('nominal_pipe_size');
            $table->float('pipe_design_code');
            $table->float('schedule');
            $table->float('outside_diameter');
            $table->float('longtd_quality_factor');
            $table->float('weld_joint_factor');
            $table->float('allowable_unit_stress');
            $table->float('coefficient');
            $table->float('min_design_pressure');
            $table->float('max_design_pressure');
            $table->float('min_design_temperature');
            $table->float('max_design_temperature');
            $table->float('corrosion_allowance');
            $table->float('mechanical_allowance');
            $table->float('min_structural_thickness');
            $table->float('min_alert_thickness');
            $table->float('nominal_thickness');
            $table->string('class');
            $table->text('date_in_service');
            $table->text('notes')->nullable();
            $table->text('attachment')->nullable();
            $table->text('images')->nullable();
            $table->text('recomendation')->nullable();
            $table->text('qr_code')->nullable();
            $table->timestamp('update');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('assets');
    }
};
