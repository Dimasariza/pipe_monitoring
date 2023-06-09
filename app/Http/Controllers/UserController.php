<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator as FacadesValidator;


class UserController extends Controller
{
    public function index() 
    {
        $data = User::all();
        return response()->json([
            'status' => true,
            'message' => 'Data ditemukan',
            'data' => $data
        ], 200);
    }

    public function show(string $id) 
    {
        $data = User::find($id);
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

    public function store(Request $request) 
    {
        $data = new User;
        $rules = [
            "name"       => "required",
            "email"     => "required",
            "password"     => "required",
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
            'name',
            'job',
            'address',
            'email',
            'password',
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

    public function update(Request $request, string $id)
    {
        $data = User::find($id);
        $rules = [
            "name"       => "required",
            "email"     => "required",
            "password"     => "required",
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
            'name',
            'job',
            'address',
            'email',
            'password',
        ];

        foreach ($data_value as $key) {
            $data->$key = $request->$key;
        }

        $data->save();
        return response()->json([
            'status' => true,
            'message' => 'Sukses menambahkan data.'
        ], 200);
    }

    public function destroy(string $id)
    {
        $data = User::find($id);

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
