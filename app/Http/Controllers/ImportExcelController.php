<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ImportExcelController extends Controller
{
    public function import_assets(Request $request)
    {
        $status = DB::table('assets')->insert($request->toArray());

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
