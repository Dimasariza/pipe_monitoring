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
            $table->foreign('piping_id')
            ->references('id')
            ->on('assets')
            ->onDelete('cascade');
            $table->string("general_condition")->nullable();    
            $table->text("general_finding")->nullable()->default("");
            $table->text("general_recomendation")->nullable()->default("");
            $table->string("leaks_condition")->nullable();
            $table->text("leaks_comment")->nullable()->default("");
            $table->boolean("leaks_process")->default(false);
            $table->boolean("leaks_steam_tracing")->default(false);
            $table->boolean("leaks_existing_clamps")->default(false);
            $table->string("misalignment_condition")->nullable();
            $table->text("misalignment_comment")->nullable()->default("");
            $table->boolean("misalignment_piping_misalignment")->default(false);
            $table->boolean("misalignment_expainsion_joint")->default(false);
            $table->string("vibration_condition")->nullable();
            $table->text("vibration_comment")->nullable();
            $table->boolean("vibration_excessive_overhung")->default(false);
            $table->boolean("vibration_inadequate_support")->default(false);
            $table->boolean("vibration_thin_small")->default(false);
            $table->boolean("vibration_threaded_connections")->default(false);
            $table->boolean("vibration_loose_support")->default(false);
            $table->string("corrosion_condition")->nullable();
            $table->text("corrosion_comment")->nullable()->default("");
            $table->boolean("corrosion_bolting_support")->default(false);
            $table->boolean("corrosion_coating_painting")->default(false);
            $table->boolean("corrosion_soil_to_air")->default(false);
            $table->boolean("corrosion_insulation_interface")->default(false);
            $table->boolean("corrosion_biological_growth")->default(false);
            $table->string("supports_condition")->nullable();
            $table->text("supports_comment")->nullable()->default("");
            $table->boolean("supports_shoes_supports")->default(false);
            $table->boolean("supports_hanger_distortion")->default(false);
            $table->boolean("supports_bottomed_out")->default(false);
            $table->boolean("supports_brace_distortion")->default(false);
            $table->boolean("supports_loose_brackets")->default(false);
            $table->boolean("supports_slides_plates")->default(false);
            $table->boolean("supports_counter_balance")->default(false);
            $table->boolean("supports_support_corrosion")->default(false);
            $table->string("insulation_condition")->nullable();
            $table->text("insulation_comment")->nullable()->default("");
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