<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DamageMechanism extends Model
{
    use HasFactory;

    public function damage_mechanism()
    {
        return $this->belongsTo(Assets::class, 'piping_id');
    }
}
