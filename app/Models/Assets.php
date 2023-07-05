<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Assets extends Model
{
    use HasFactory;

    public function AllCml()
    {
        return $this->hasMany(Datacmls::class, 'piping_id', 'id');
    }
}
