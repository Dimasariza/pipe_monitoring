<?php

namespace App\Http\Controllers;

use App\Http\Resources\AssetsResource;
use App\Models\Assets;
use App\Models\DamageMechanism;
use App\Models\VisualConditions;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator as FacadesValidator;


class AssetsController extends Controller
{
    public function index()
    {
        $data = Assets::all();
        return response()->json([
            'status' => true,
            'message' => 'Data ditemukan',
            'data' => AssetsResource::collection($data)
        ], 200);
    }

    public function show(string $id) 
    {
        $data = Assets::find($id);
        if($data) {
            return response()->json([
                'status' => true,
                'message' => 'Data ditemukan.',
                'data' => $data
            ], 200);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Data tidak ditemukan.'
            ], 404);
        }
    }

    public function edit($request)
    {
        dd('patch');
    }

    public function reconstruct_data(Request $request, $data)
    {
        $rules = [
            'piping_id'                 => 'required',
            'piping_name'               => 'required',
            'nominal_pipe_size'         => 'required',
            'pipe_design_code'          => 'required',
            'schedule'                  => 'required',
            'outside_diameter'          => 'required',
            'longtd_quality_factor'     => 'required',
            'weld_joint_factor'         => 'required',
            'allowable_unit_stress'     => 'required',
            'coefficient'               => 'required',
            'min_design_pressure'       => 'required',
            'max_design_pressure'       => 'required',
            'min_design_temperature'    => 'required',
            'max_design_temperature'    => 'required',
            'corrosion_allowance'       => 'required',
            'mechanical_allowance'      => 'required',
            'min_structural_thickness'  => 'required',
            'min_alert_thickness'       => 'required',
            'nominal_thickness'         => 'required',
            'class'                     => 'required',
            'date_in_service'           => 'required|date',
        ];

        $validator = FacadesValidator::make($request->all(), $rules);
        if ( $validator->fails() ) {
            return response()->json([
                'status' => false,
                'message' => 'Gagal menambahkan data.',
                'data' => $validator->errors()
            ], 400);
        }

        foreach ($rules as $key => $value) {
            $data->$key = $request->$key;
        }

        $data->notes = $request->notes;
        $data->attachment = $request->attachment;
        $data->images = json_encode($request->images);
        $data->recomendation = $request->recomendation;
        $data->piping_circuit = $request->piping_circuit;

        $status = $data->save();

        return [
            "status" => $status,
            "data" => $data 
        ];
    }

    public function store(Request $request) 
    {
        $data = new Assets;
        $result = $this->reconstruct_data($request, $data);
        
        if($result['status']) {

            $asset_id = $result['data']->getOriginal()['id'];
            $visual_conditions = new VisualConditions;
            $visual_conditions->piping_id = $asset_id;
            $visual_conditions->save();

            $damage_mechanism = new DamageMechanism;
            $damage_mechanism->piping_id = $asset_id;
            $damage_mechanism->save();

            return response()->json([
                'status' => true,
                'message' => 'Sukses menambahkan data.'
            ], 200);
        }

    }

    public function update(Request $request, string $id) 
    {
        $data = Assets::find($id);
        $result = $this->reconstruct_data($request, $data);

        if($result['status'])
        return response()->json([
            'status' => true,
            'message' => 'Sukses melakukan update data.'
        ], 200);

        if(!$result['status'])
        return response()->json([
            'status' => false,
            'message' => 'Gagal melakukan update data.'
        ], 400);
    }

    public function destroy(string $id) 
    {
        $data = Assets::find($id);

        if(empty($data)) {
            return response()->json([
                'status' => false,
                'message' => 'Data tidak ditemukan.'
            ], 404);
        }

        $data->delete();

        return response()->json([
            'status' => true,
            'message' => 'Sukses melakukan menghapus data.'
        ]);
    }
}
