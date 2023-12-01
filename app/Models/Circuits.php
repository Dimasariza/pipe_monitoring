<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Circuits extends Model
{
    use HasFactory;

    public function circuit()
    {
        return $this->belongsToMany(Assets::class, 'assets_circuit',  
        'id_circuit', 'id_asset');
    }

    public function circuitS()
    {
        return $this->belongsToMany(Proposals::class, 'proposal_circuits', 'id_cicruit');
    }

    public function proposals()
    {
        return $this->belongsToMany(
            Proposals::class, 
            'proposal_circuits', 
            'id_circuit' ,
            'id_proposal'
        );
    }

}
