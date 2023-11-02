<?php

namespace App\Http\Controllers;

use App\Models\Proposals;
use App\Http\Resources\ProposalResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator as FacadesValidator;


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
    public function store(Request $request)
    {
        $data = new Proposals;
        return $this->reconstructData($data, $request);
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
    public function update(Request $request, string $id)
    {
        $data = Proposals::find($id);
        $this->reconstructData($data, $request);
        
    }

    public function reconstructData($data, Request $request)
    {
        $rules = [
            "proposal_id"               => "required",
            "list_of_piping_id"         => "required",
            "inspection_planned_date"   => "required",
            "inspection_method"         => "required",
        ];

        $validator = FacadesValidator::make($request->all(), $rules);
        if ( $validator->fails() ) {
            return response()->json([
                'status' => false,
                'message' => 'Gagal menambahkan data.',
                'data' => $validator->errors()
            ], 403);
        }

        foreach ($rules as $key => $value) {
            $data->$key = $request->$key;
        }
        
        $data->list_of_piping_id = json_encode($request->list_of_piping_id);
        $data->inspection_method = json_encode($request->inspection_method);
        $data->remarks = $request->remarks;

        $data->carried_out = $request->carried_out;
        $data->inspection_date = $request->inspection_date;

        $complete = $data->save();

        if($complete) {

            foreach($request->list_of_piping_id as $piping) {
                // print($piping);
                DB::table('assets')->where('id', $piping)
                ->update([
                    "proposal_id" => $piping
                ]);
            }

            foreach($request->circuit as $circuit) {

                $success = DB::table('proposal_circuits')
                ->where('id_proposal',$data["id"])
                ->where("id_circuit", $circuit)
                ->update([
                    "id_circuit" =>  $circuit
                ]);

                if(!$success) {
                    DB::table('proposal_circuits')->insert([
                        "id_proposal" => $data["id"],
                        "id_circuit" => $circuit
                    ]);
                }
            }

            foreach($request->list_of_piping_id as $asset){
                $success = DB::table('proposal_assets')
                ->where('id_proposal',$data["id"])
                ->where("id_asset", $asset)
                ->update([
                    "id_asset" =>  $asset
                ]);

                if(!$success) {
                    DB::table('proposal_assets')->insert([
                        "id_proposal" => $data["id"],
                        "id_asset" => $asset
                    ]);
                }
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
        ], 400);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $data = Proposals::find($id);
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
        ], 200);
    }
}
