<?php

namespace App\Http\Controllers;

use App\Models\DamageMechanism;
use App\Models\VisualConditions;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ImportExcelController extends Controller
{
    public function import_assets(Request $request)
    {
        $assetsData = $request->toArray();
        foreach($assetsData as $asset) {
            $assetId = DB::table('assets')->insertGetId($asset);
            if($assetId) {
                $visual_conditions = new VisualConditions;
                $visual_conditions->piping_id = $assetId;
                $visual_conditions->save();
    
                $damage_mechanism = new DamageMechanism;
                $damage_mechanism->piping_id = $assetId;
                $damage_mechanism->save();
            }

            if(!$assetId)
            return response()->json([
                "status" => false,
                "message" => "Data gagal di tambahkan."
            ], 400);
        }

        return response()->json([
            "status" => true,
            "message" => "Data berhasil di tambahkan."
        ], 200);
    }

    public function import_circuits(Request $request)
    {
        $status = DB::table('circuits')->insert($request->toArray());

        if($status)
        return response()->json([
            "status" => $status,
            "message" => "Data berhasil di tambahkan."
        ], 200);

        if($status)
        return response()->json([
            "status" => $status,
            "message" => "Data gagal di tambahkan."
        ], 400);
    }

    public function import_cmls(Request $request)
    {
        $status = DB::table('datacmls')->insert($request->toArray());

        if($status)
        return response()->json([
            "status" => $status,
            "message" => "Data berhasil di tambahkan."
        ], 200);

        if($status)
        return response()->json([
            "status" => $status,
            "message" => "Data gagal di tambahkan."
        ], 400);
    }
}
