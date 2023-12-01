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
            $table->string('piping_id')->unique();
            $table->string('piping_name');
            $table->double('nominal_pipe_size');
            $table->string('pipe_design_code');
            $table->string('schedule');
            $table->double('outside_diameter');
            $table->double('longtd_quality_factor');
            $table->double('weld_joint_factor');
            $table->double('allowable_unit_stress');
            $table->double('coefficient');
            $table->double('min_design_pressure');
            $table->double('max_design_pressure');
            $table->double('min_design_temperature');
            $table->double('max_design_temperature');
            $table->double('corrosion_allowance');
            $table->double('mechanical_allowance');
            $table->double('min_structural_thickness');
            $table->double('min_alert_thickness');
            $table->double('nominal_thickness');
            $table->string('class');
            $table->text('date_in_service');
            $table->text('notes')->nullable();
            $table->text('attachment')->nullable();
            $table->text('images')->nullable();
            $table->text('recomendation')->nullable();
            $table->string('qr_code')->nullable();
            // $table->unsignedInteger('piping_circuit')->nullable();
            // $table->unsignedInteger('proposal_id')->nullable();
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
