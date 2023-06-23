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
        Schema::create('visual_conditions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('piping_id');
            $table->foreign('piping_id')->references('id')->on('assets');
            $table->string("general_condition");    
            $table->text("general_finding")->nullable();
            $table->text("general_recomendation")->nullable();
            $table->string("leaks_condition");
            $table->text("leaks_comment")->nullable();
            $table->boolean("leaks_process")->default(false);
            $table->boolean("leaks_steam_tracing")->default(false);
            $table->boolean("leaks_existing_clamps")->default(false);
            $table->string("misalignment_condition");
            $table->text("misalignment_comment")->nullable();
            $table->boolean("misalignment_piping_misalignment")->default(false);
            $table->boolean("misalignment_expaint_joint")->default(false);
            $table->boolean("misalignment_existing_clamps")->default(false);
            $table->string("vibration_condition");
            $table->text("vibration_comment")->nullable();
            $table->boolean("vibration_excessive_overhung")->default(false);
            $table->boolean("vibration_inadequate_support")->default(false);
            $table->boolean("vibration_thin_small")->default(false);
            $table->boolean("vibration_threaded_connections")->default(false);
            $table->boolean("vibration_loose_support")->default(false);
            $table->string("corrosion_condition");
            $table->text("corrosion_comment")->nullable();
            $table->boolean("corrosion_bolting_support")->default(false);
            $table->boolean("corrosion_coating_painting")->default(false);
            $table->boolean("corrosion_soil_to_air")->default(false);
            $table->boolean("corrosion_insulation_interface")->default(false);
            $table->boolean("corrosion_biological_growth")->default(false);
            $table->string("supports_condition");
            $table->text("supports_comment")->nullable();
            $table->boolean("supports_shoes_supports")->default(false);
            $table->boolean("supports_hanger_distortion")->default(false);
            $table->boolean("supports_bottomed_out")->default(false);
            $table->boolean("supports_brace_distortion")->default(false);
            $table->boolean("supports_loose_brackets")->default(false);
            $table->boolean("supports_slides_plates")->default(false);
            $table->boolean("supports_counter_balance")->default(false);
            $table->boolean("supports_support_corrosion")->default(false);
            $table->string("insulation_condition");
            $table->text("insulation_comment")->nullable();
            $table->boolean("insulation_damage_penetrations")->default(false);
            $table->boolean("insulation_missing_jacketing")->default(false);
            $table->boolean("insulation_sealing_deterioration")->default(false);
            $table->boolean("insulation_bulging")->default(false);
            $table->boolean("insulation_banding")->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('visual_conditions');
    }
};
