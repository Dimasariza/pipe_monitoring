<?php

namespace App\Http\Controllers;

use App\Http\Resources\VisualConditionResource;
use App\Models\VisualConditions;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator as FacadesValidator;


class VisualConditionsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = VisualConditions::all();
        return response()->json([
            'status' => true,
            'message' => 'Data ditemukan',
            'data' => VisualConditionResource::collection($data)
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = new VisualConditions;
        $rules = [
            "piping_id"                 => "required",
            "general_condition"         => "required",
            "leaks_condition"           => "required",
            "misalignment_condition"    => "required",
            "vibration_condition"       => "required",
            "corrosion_condition"       => "required",
            "supports_condition"        => "required",
            "insulation_condition"      => "required",
        ];

        $validator = FacadesValidator::make($request->all(), $rules);
        if ( $validator->fails() ) {
            return response()->json([
                'status' => false,
                'message' => 'Gagal menambahkan data.',
                'data' => $validator->errors()
            ]);
        }

        $data_value = [
            "piping_id",
            "general_condition",
            "general_finding",
            "general_recomendation",
            "leaks_condition",
            "leaks_comment",
            "leaks_process",
            "leaks_steam_tracing",
            "leaks_existing_clamps",
            "misalignment_condition","misalignment_comment",
            "misalignment_piping_misalignment",
            "misalignment_expaint_joint",
            "misalignment_existing_clamps",
            "vibration_condition","vibration_comment",
            "vibration_excessive_overhung",
            "vibration_inadequate_support",
            "vibration_thin_small",
            "vibration_threaded_connections",
            "vibration_loose_support",
            "corrosion_condition","corrosion_comment",
            "corrosion_bolting_support",
            "corrosion_coating_painting",
            "corrosion_soil_to_air",
            "corrosion_insulation_interface",
            "corrosion_biological_growth",
            "supports_condition","supports_comment",
            "supports_shoes_supports",
            "supports_hanger_distortion",
            "supports_bottomed_out",
            "supports_brace_distortion",
            "supports_loose_brackets",
            "supports_slides_plates",
            "supports_counter_balance",
            "supports_support_corrosion",
            "insulation_condition","insulation_comment",
            "insulation_damage_penetrations",
            "insulation_missing_jacketing",
            "insulation_sealing_deterioration",
            "insulation_bulging",
            "insulation_banding",
        ];

        foreach ($data_value as $key) {
            $data->$key = $request->$key ?? false;
        }

        $data->save();
        return response()->json([
            'status' => true,
            'message' => 'Sukses menambahkan data.'
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = VisualConditions::find($id);
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

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(VisualConditions $visualCondition)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $data = VisualConditions::find($id);

        if(empty($data)) {
            return response()->json([
                'status' => false,
                'message' => 'Data tidak ditemukan.'
            ], 404);
        }

        $rules = [
            "general_condition"         => "required",
            "leaks_condition"           => "required",
            "misalignment_condition"    => "required",
            "vibration_condition"       => "required",
            "corrosion_condition"       => "required",
            "supports_condition"        => "required",
            "insulation_condition"      => "required",
        ];

        $validator = FacadesValidator::make($request->all(), $rules);
        if ( $validator->fails() ) {
            return response()->json([
                'status' => false,
                'message' => 'Gagal menambahkan data.',
                'data' => $validator->errors()
            ]);
        }

        $data_value = [
            "general_condition",
            "general_finding",
            "general_recomendation",
            "leaks_condition",
            "leaks_comment",
            "leaks_process",
            "leaks_steam_tracing",
            "leaks_existing_clamps",
            "misalignment_condition","misalignment_comment",
            "misalignment_piping_misalignment",
            "misalignment_expaint_joint",
            "misalignment_existing_clamps",
            "vibration_condition","vibration_comment",
            "vibration_excessive_overhung",
            "vibration_inadequate_support",
            "vibration_thin_small",
            "vibration_threaded_connections",
            "vibration_loose_support",
            "corrosion_condition","corrosion_comment",
            "corrosion_bolting_support",
            "corrosion_coating_painting",
            "corrosion_soil_to_air",
            "corrosion_insulation_interface",
            "corrosion_biological_growth",
            "supports_condition","supports_comment",
            "supports_shoes_supports",
            "supports_hanger_distortion",
            "supports_bottomed_out",
            "supports_brace_distortion",
            "supports_loose_brackets",
            "supports_slides_plates",
            "supports_counter_balance",
            "supports_support_corrosion",
            "insulation_condition","insulation_comment",
            "insulation_damage_penetrations",
            "insulation_missing_jacketing",
            "insulation_sealing_deterioration",
            "insulation_bulging",
            "insulation_banding",
        ];

        foreach ($data_value as $key) {
            $data->$key = $request->$key ?? false;
        }

        $data->save();
        return response()->json([
            'status' => true,
            'message' => 'Sukses menambahkan data.'
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $data = VisualConditions::find($id);

        if(empty($data)) {
            return response()->json([
                'status' => false,
                'message' => 'Data tidak ditemukan.'
            ], 404);
        }

        $data->delete();

        return response()->json([
            'status' => true,
            'message' => 'Sukses menghapus data.'
        ]);
    }
}
