<?php

namespace App\Http\Controllers;

use App\Http\Resources\ThicknessResources;
use App\Models\Assets;

class ThicknessController extends Controller
{
    public function getThickness()
    {
        $assets = Assets::all();

        return response()->json([
            "data" => ThicknessResources::collection($assets),
        ]);
    }
}
