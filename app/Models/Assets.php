<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Assets extends Model
{
    use HasFactory;

    protected $fillable = [
        'nominal_thickness',
        'outside_diameter',
        'min_design_pressure',
        'max_design_pressure',
        'corrosion_allowance',
        'pressure_design',
        'joint_efficiency',
        'longtd_quality_factor',
        'allowable_unit_stress',
        'coefficient',
        'max_design_temperature',
        'max_temperature',
        'class',
        'image',
        'attachment',
        'recomendation',
        'date_in_service'
    ];

    protected $guraded = ['id'];
}
