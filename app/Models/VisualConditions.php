<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VisualConditions extends Model
{
    use HasFactory;

    public function visual_condition()
    {
        return $this->hasOne(Assets::class, 'id', 'piping_id');
    }
}
