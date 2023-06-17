<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\User;
use Illuminate\Support\Facades\Auth;

class AuthenticationController extends Controller
{
    public function login(Request $request) 
    {
        $credentials = $request->validate([
            'email' => 'required',
            'password' => 'required'
        ]);

        if(Auth::attempt($credentials)) {
            $user = User::where('email', $request->email)
            ->orWhere("username", $request['username'])
            ->first();

            $user['token'] = $request->user()->createToken($request['email'])->plainTextToken;

            return response()->json([
                "status" => true,
                "message" => "Login berhasil.",
                "data" => $user
            ], 200);
        }

        return response()->json([
            "status" => true,
            "message" => "Login gagal.",
        ],  401);
    }
}
