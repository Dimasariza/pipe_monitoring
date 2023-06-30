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
            $table->text('piping_id');
            $table->text("damage_mechanism")->nullable();

            /*
            $table->text("General and localized metal loss")->nullable();
            $table->text("Sulfidation and High Temp. H2S/H2 Corrosion")->nullable();
            $table->text("Oxidation")->nullable();
            $table->text("Microbiologically Induced Corrosion (MIC)")->nullable();
            $table->text("Naphthenic Acid Corrosion")->nullable();
            $table->text("Erosion/Erosison-Corrosion")->nullable();
            $table->text("Galvanic Corrosion")->nullable();
            $table->text("Atmospheric Corrosion")->nullable();
            $table->text("Corrosion Under Insulation (CUI)")->nullable();
            $table->text("Cooling Water Corrosion")->nullable();
            $table->text("Boiler Water Condensate Corrosion")->nullable();
            $table->text("Soil Corrosion")->nullable();
            $table->text("Ammonium Bisulfide and Chloride Corrosion")->nullable();
            $table->text("Carbon Dioxide Corrosion")->nullable();
            $table->text("Surface Connected Cracking")->nullable();
            $table->text("Mechanical Fatigue Cracking")->nullable();
            $table->text("Caustic Stress Corrosion Cracking")->nullable();
            $table->text("Polythionic Stress Corrosion Cracking")->nullable();
            $table->text("Sulfide Stress Cracking")->nullable();
            $table->text("Chloride Stress Corrosion Cracking")->nullable();
            $table->text("Subsurface Cracking")->nullable();
            $table->text("Hydrogen Induced Cracking")->nullable();
            $table->text("Wet Hydrogen Sulfide Cracking")->nullable();
            $table->text("High-Temperature Micro-fissuring/Micro-void Fromation and Eventual Macro Cracking")->nullable();
            $table->text("High-temperature Hydrogen Attack")->nullable();
            $table->text("Creep/Stress Rupture")->nullable();
            $table->text("Metallurgical Changes")->nullable();
            $table->text("Graphitization")->nullable();
            $table->text("Temper Embrittlement")->nullable();
            $table->text("Hydrogen Embrittlement")->nullable();

            */
            // $table->foreign('piping_id')->references('id')->on('assets');
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
