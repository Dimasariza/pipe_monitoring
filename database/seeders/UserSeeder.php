<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert(
            [
                [
                    "name" => "David",
                    "username" => "david",
                    "email" => "david@gmail.com",
                    "password" => Hash::make('12345'),
                ],
                [
                    "name" => "Roganda",
                    "username" => "roganda",
                    "email" => "roganda@gmail.com",
                    "password" => Hash::make('12345'),
                ]
            ]
        );
    }
}
