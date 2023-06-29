<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator as FacadesValidator;
use App\Models\Datacmls;
use Illuminate\Http\Request;

class DatacmlsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Datacmls::all();
        return response()->json([
            'status' => true,
            'message' => 'Data ditemukan',
            'data' => $data
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
        $data = new Datacmls;
        $rules = [
            "piping_id"                     => "required",
            "cml_id"                        => "required",
            "gauge_point"                   => "required",
            "point_location"                => "required",
            "nominal_thickness"             => "required",
            "min_required_thickness"        => "required",
            "last_thickness_reading"        => "required",
            "last_thickness_reading_date"   => "required",
            "calculated_cr"                 => "required",
        ];

        $validator = FacadesValidator::make($request->all(), $rules);
        if ( $validator->fails() ) {
            return response()->json([
                'status' => false,
                'message' => 'Gagal menambahkan data.',
                'data' => $validator->errors()
            ]);
        }

        foreach ($rules as $key => $value) {
            $data->$key = $request->$key;
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
        $data = Datacmls::find($id);
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
    public function edit(Datacmls $dataCML)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $data = Datacmls::find($id);
        $rules = [
            "piping_id"                     => "required",
            "cml_id"                        => "required",
            "gauge_point"                   => "required",
            "point_location"                => "required",
            "nominal_thickness"             => "required",
            "min_required_thickness"        => "required",
            "last_thickness_reading"        => "required",
            "last_thickness_reading_date"   => "required",
            "calculated_cr"                 => "required",
        ];

        $validator = FacadesValidator::make($request->all(), $rules);
        if ( $validator->fails() ) {
            return response()->json([
                'status' => false,
                'message' => 'Gagal menambahkan data.',
                'data' => $validator->errors()
            ]);
        }

        foreach ($rules as $key => $value) {
            $data->$key = $request->$key;
        }

        $data->save();
        return response()->json([
            'status' => true,
            'message' => 'Sukses mengupdate data.'
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $data = Datacmls::find($id);

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
