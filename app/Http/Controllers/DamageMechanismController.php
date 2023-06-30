<?php

namespace App\Http\Controllers;

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
        $damage_mechanism = array();
        foreach($data as $damage_data)
        array_push($damage_mechanism, [
            "id" => $damage_data["id"],
            "piping_id" => $damage_data["piping_id"],
            "damage_mechanism" => json_decode($damage_data["damage_mechanism"])
        ]);
        return response()->json([
            'status' => true,
            'message' => 'Data ditemukan',
            'data' => $damage_mechanism
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
        $data->damage_mechanism = json_encode($request->damage_mechanism);
        $data->piping_id = $request->piping_id;
        $data->save();
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
        $data->piping_id = $request->piping_id;
        $data->save();
        return response()->json([
            "status" => true,
            "message" => "Data berhasil diperbarui.",
            "data" => $data
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
