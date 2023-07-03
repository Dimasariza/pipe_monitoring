<?php

namespace App\Http\Controllers;

use App\Http\Resources\CircuitResource;
use App\Models\Circuits;
use GrahamCampbell\ResultType\Success;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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
            // 'data' => $data
            'data' => CircuitResource::collection($data)
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
        $this->reconstructData($data, $request);
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
        $this->reconstructData($data, $request);
    }

    public function reconstructData($data, Request $request)
    {
        $rules = [
            "date_in_service"       => "required",
            "class"                 => "required",
            "piping_circuit_name"   => "required",
            "piping_circuit_id"     => "required",
            "piping_id"             => "required",
        ];

        $validator = FacadesValidator::make($request->all(), $rules);
        if ( $validator->fails() ) {
            return response()->json([
                'status' => false,
                'message' => 'Gagal menambahkan data.',
                'data' => $validator->errors()
            ], 403);
        }

        $data_value = [
            "date_in_service",
            "class",
            "piping_circuit_name",
            "piping_circuit_id",
            "piping_id",
            "notes",
            "attachment",
            "recomendation",
        ];

        foreach ($data_value as $key) {
            $data->$key = $request->$key;
        }
        
        $data->piping_id = json_encode($request->piping_id);
        $data->images = json_encode($request->images);
        $complete = $data->save();

        if($complete) {
            foreach($request->piping_id as $pipe) {
                DB::table('assets')->where('id', $pipe)->update([
                    "piping_circuit" =>  $data['id']
                ]);
            }

            return response()->json([
                'status' => true,
                'message' => 'Sukses menambahkan data.'
            ], 200);
        }

        if(!$complete) 
        return response()->json([
            'status' => false,
            'message' => 'Data gagal di tambahkan'
        ]);
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

        $success = $data->delete();
        if($success) {
            $piping_id = json_decode($data['piping_id']);
            foreach($piping_id as $pipe) {
                DB::table('assets')->where('id', $pipe)->update([
                    "piping_circuit" =>  null
                ]);
            }

            return response()->json([
                'status' => true,
                'message' => 'Sukses menghapus data.'
            ], 200);
        }

        if(!$success)
        return response()->json([
            'status' => false,
            'message' => 'Gagal menghapus data.'
        ], 400);
    }
}
