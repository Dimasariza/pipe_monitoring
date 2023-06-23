<?php

namespace App\Http\Controllers;

use App\Models\Proposals;
use App\Http\Requests\StoreProposalsRequest;
use App\Http\Requests\UpdateProposalsRequest;
use App\Http\Resources\ProposalResource;

class ProposalsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Proposals::all();
        return response()->json([
            'status' => true,
            'message' => 'Data ditemukan',
            'data' => ProposalResource::collection($data)
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
    public function store(StoreProposalsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Proposals $proposals)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Proposals $proposals)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProposalsRequest $request, Proposals $proposals)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Proposals $proposals)
    {
        //
    }
}
