<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Proposals extends Model
{
    use HasFactory;

    public function proposal()
    {
        return $this->hasMany(Assets::class, 'proposal_id', 'id');
    }

    public function circuit()
    {
        return $this->hasMany(Circuits::class, 'proposal_id', 'id');
    }

    public function manyAssets() 
    {
        return $this->belongsToMany(Assets::class, 'proposal_assets',  
        'id_proposal', 'id_asset');
    }

    public function manyCircuits() 
    {
        return $this->belongsToMany(Circuits::class, 'proposal_circuits',  
        'id_proposal', 'id_circuit');
    }
}
