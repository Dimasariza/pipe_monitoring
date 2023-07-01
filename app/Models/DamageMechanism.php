<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DamageMechanism extends Model
{
    use HasFactory;

    public function damage_mechanisms()
    {
        return $this->hasOne(Assets::class, 'id', 'piping_id');
    }
}
