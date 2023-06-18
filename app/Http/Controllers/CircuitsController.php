<?php

namespace App\Http\Controllers;

use App\Models\Circuits;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator as FacadesValidator;

class CircuitsController extends Controller
{
        /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Circuits::all();
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
        $data = new Circuits;
        $rules = [
            "date_in_service"       => "required",
            "class"                 => "required",
            "piping_circuit_name"   => "required",
            "piping_circuit_id"     => "required",
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
            "date_in_service",
            "class",
            "piping_circuit_name",
            "piping_circuit_id",
            "notes",
            "attachment",
            "recomendation",
            "image"
        ];

        foreach ($data_value as $key => $value) {
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
        $data = Circuits::find($id);
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
    public function edit(Circuits $circuit)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $data = Circuits::find($id);

        if(empty($data)) {
            return response()->json([
                'status' => false,
                'message' => 'Data tidak ditemukan.'
            ], 404);
        }

        $rules = [
            "date_in_service"       => "required",
            "class"                 => "required",
            "piping_circuit_name"   => "required",
            "piping_circuit_id"     => "required",
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
            "date_in_service",
            "class",
            "piping_circuit_name",
            "piping_circuit_id",
            "notes",
            "attachment",
            "recomendation",
            "image"
        ];

        foreach ($data_value as $key => $value) {
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
        $data = Circuits::find($id);

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
