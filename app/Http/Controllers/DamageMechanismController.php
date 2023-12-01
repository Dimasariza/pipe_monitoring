<?php

namespace App\Http\Controllers;

use App\Http\Resources\DamageMechanismResource;
use App\Models\DamageMechanism;
use Illuminate\Http\Request;

class DamageMechanismController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = DamageMechanism::all();
        return response()->json([
            'status' => true,
            'message' => 'Data ditemukan',
            'data' => DamageMechanismResource::collection($data) 
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
        $data = new DamageMechanism();
        return response()->json([
            "status" => true,
            "message" => "Data berhasil ditambahkan.",
            "data" => $data
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(DamageMechanism $damageMechanism)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(DamageMechanism $damageMechanism)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $data = DamageMechanism::find($id);
        $data->damage_mechanism = json_encode($request->damage_mechanism);
        $success = $data->save();
        if($success) 
        return response()->json([
            "status" => true,
            "message" => "Data berhasil diperbarui.",
            "data" => $data
        ]);

        if(!$success)
        return response()->json([
            "status" => false,
            "message" => "Data tidak berhasil diperbarui.",
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DamageMechanism $damageMechanism)
    {
        //
    }
}
