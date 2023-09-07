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
        Schema::create('proposal_circuits', function (Blueprint $table) {
            // $table->unsignedBigInteger("id_proposal");
            $table->foreignId('id_proposal')->constrained("proposals")->onDelete('cascade');
            // $table->unsignedBigInteger('id_circuit');
            $table->foreignId('id_circuit')->constrained("circuits")->onDelete('cascade');
            // $table->primary(['id_proposal', 'id_circuit']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('proposal_circuits');
    }
};
