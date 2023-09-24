<?php

namespace App\Http\Controllers;

use App\Http\Resources\CircuitResource;
use App\Models\Assets;
use App\Models\Circuits;
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
        return $this->reconstructData($data, $request, null);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = Circuits::find($id);
        $data = new CircuitResource($data);
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
        return $this->reconstructData($data, $request, $id = null);
    }

    public function reconstructData($data, Request $request, $id)
    {
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
            if($request->piping_id)

            // dd($id);
            $allPipes = Assets::all()->where('piping_circuit', $id)->toArray();
            // dd($allPipes);
            foreach($allPipes as $pipe)
            {
                DB::table('assets')->where('id', $pipe)
                ->update([
                    "piping_circuit" =>  null
                ]);
            }

            foreach($request->piping_id as $pipe) {
                DB::table('assets')->where('id', $pipe)
                ->update([
                    "piping_circuit" =>  $data['id']
                ]);
            }

            $message = "Sukeses menambahkan data";
            if($id) $message = "Sukses mengupdate data";

            return response()->json([
                'status' => true,
                'message' => $message
            ], 200);
        }

        if(!$complete) 
        return response()->json([
            'status' => false,
            'message' => 'Data gagal di tambahkan'
        ], 400);
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
