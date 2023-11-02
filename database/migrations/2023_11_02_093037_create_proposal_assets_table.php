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
        Schema::create('proposal_assets', function (Blueprint $table) {
            $table->foreignId('id_proposal')->constrained("proposals")->onDelete('cascade');
            $table->foreignId('id_asset')->constrained("assets")->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('proposal_assets');
    }
};
