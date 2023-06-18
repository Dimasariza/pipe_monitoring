<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AssetsController;
use App\Http\Controllers\AuthenticationController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get("/test", function() {
    return response()->json([
        "message" => "Test api success."
    ]);
});

Route::post('login', [AuthenticationController::class, 'login'])
->middleware('api')
->name('login');

Route::post('logout', [AuthenticationController::class, 'logout'])
->middleware('api')
->name('logout');

Route::apiResource('assets', AssetsController::class);
Route::apiResource('circuit', CircuitController::class);
Route::apiResource('visual_condition', VisualConditionController::class);
Route::apiResource('cml', DataCMLController::class);

Route::post('image', [FileStorageController::class, 'storeImage']);
Route::get('image/{id}', [FileStorageController::class, 'showImage']);
Route::post('document', [FileStorageController::class, 'storeDocument']);
Route::get('document/{id}', [FileStorageController::class, 'showDocument']);