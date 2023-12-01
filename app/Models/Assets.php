<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Assets extends Model
{
    use HasFactory;

    public function AllCml()
    {
        return $this->hasMany(Datacmls::class, 'piping_id', 'id');
    }

    public function circuit()
    {
        return $this->belongsToMany(Circuits::class, 'assets_circuit',  
        'id_asset', 'id_circuit');
    }
}
