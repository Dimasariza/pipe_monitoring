<?php

namespace App\Http\Controllers;

use App\Http\Resources\DataCMLResource;
use App\Models\Assets;
use App\Models\Circuits;
use App\Models\DamageMechanism;
use App\Models\Datacmls;
use App\Models\Proposals;
use App\Models\VisualConditions;
use Illuminate\Http\Request;

use function PHPUnit\Framework\returnSelf;

class ReportControllers extends Controller
{
    public function get_collection_data(string $id)
    {
        $asset = Assets::find($id);
        if(empty($asset)) return false;
        $asset['images'] = json_decode($asset['images']);
        $cml = Datacmls::where('piping_id', $id)->get();
        $damage_mechanism = DamageMechanism::where('piping_id', $id)->first();
        $damage_mechanism = json_decode($damage_mechanism['damage_mechanism']);
        $visual_condition = VisualConditions::where('piping_id', $id)->first();
        $proposal = Proposals::find($asset['proposal_id']);
        if($proposal) $proposal['inspection_method'] = json_decode($proposal['inspection_method']);
        return [
            "asset" => $asset,
            "cml" => DataCMLResource::collection($cml),
            "damage_mechanism" => $damage_mechanism,
            "visual_condition" => $visual_condition,
            "proposal" => $proposal 
        ];
    }

    public function report_assets(string $id)
    {
        $data = $this->get_collection_data($id);
        if(!$data)
        return response()->json([
            "status" => false,
            "message" => "Data tidak ditemukan.",
        ], 404);

        $circuit = Circuits::find($data['asset']['piping_circuit']);
        $data["circuit"] = $circuit;

        return response()->json([
            "status" => true,
            "message" => "Data ditemukan.",
            "data" => $data
        ], 200);
    }

    public function report_circuit($id)
    {
        $circuit = Circuits::find($id);
        if(empty($circuit))
        return response()->json([
            "status" => false,
            "message" => "Data tidak ditemukan.",
        ], 404);

        $assets = json_decode($circuit->piping_id);
        $array_assets = array_map(function($a){
            return $this->get_collection_data($a);
        }, $assets);

        return response()->json([
            "status" => true,
            "message" => "Data report ditemukan.",
            "data" => [
                "circuit" => $circuit,
                "assets" => $array_assets,
            ]
        ], 200);
    }

    public function publish_assets(Request $request, string $id)
    {
        $asset = Assets::find($id);
        $asset->qr_code = $request->qr_code;
        $status = $asset->save();

        if($status)
        return response()->json([
            "status" => $status,
            "message" => "Asset berhasil di publish"
        ], 200);

        if(!$status)
        return response()->json([
            "status" => $status,
            "message" => "Asset gagal di publish"
        ], 400);
    }

    public function publish_circuits(Request $request, string $id)
    {
        $circuit = Circuits::find($id);
        if(!empty($circuit)) {
            return response()->json([
                "status" => true,
                "message" => "Data ditemukan."
            ], 200);
        }
        if(empty($circuit)) {
            return response()->json([
                "status" => false,
                "message" => "Data tidak di temukan."
            ], 404);
        }
    }
}
