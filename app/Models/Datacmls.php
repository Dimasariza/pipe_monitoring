<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Datacmls extends Model
{
    use HasFactory;

    public function data_cml()
    {
        return $this->hasMany(Datacmls::class, 'piping_id', 'id');
    }
}
