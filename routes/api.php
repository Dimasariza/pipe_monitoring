<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\assetsController;
use App\Http\Controllers\CircuitController;
use App\Http\Controllers\DataCMLController;
use App\Http\Controllers\FileStorageController;
use App\Http\Controllers\VisualConditionController;

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

// Route::get('/assets', [assetsController::class, 'index']);
// Route::get('/assets/{id}', [assetsController::class, 'show']);
// Route::post('/asset', [assetsController::class, 'store']);
// Route::put('/asset/{id}', [assetsController::class, 'update']);
// Route::delete('/asset/{id}', [assetsController::class, 'destroy']);

Route::apiResource('assets', AssetsController::class);
Route::apiResource('circuit', CircuitController::class);
Route::apiResource('visual_condition', VisualConditionController::class);
Route::apiResource('cml', DataCMLController::class);

Route::post('image', [FileStorageController::class, 'storeImage']);
Route::get('image/{id}', [FileStorageController::class, 'showImage']);
Route::post('document', [FileStorageController::class, 'storeDocument']);
Route::get('document/{id}', [FileStorageController::class, 'showDocument']);