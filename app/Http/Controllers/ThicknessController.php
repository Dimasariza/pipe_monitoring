<?php

namespace App\Http\Controllers;

use App\Http\Resources\ThicknessResources;
use App\Models\Assets;

class ThicknessController extends Controller
{
    public function get_thickness()
    {
        $assets = Assets::all();
        // return "ok";
        return response()->json([
            "data" => ThicknessResources::collection($assets),
        ], 200);
    }
}
