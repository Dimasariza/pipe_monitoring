<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Circuits extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function circuit()
    {
        return $this->hasMany(Assets::class, 'piping_circuit', 'id');
    }

}
