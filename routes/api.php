<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AssetsController;
use App\Http\Controllers\CircuitsController;
use App\Http\Controllers\DatacmlsController;
use App\Http\Controllers\FileStorageController;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\DamageMechanismController;
use App\Http\Controllers\ImportExcelController;
use App\Http\Controllers\ProposalsController;
use App\Http\Controllers\ReportControllers;
use App\Http\Controllers\ThicknessController;
use App\Http\Controllers\VisualConditionsController;
use Illuminate\Support\Facades\Artisan;

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
Route::apiResource('circuit', CircuitsController::class);
Route::apiResource('visual_condition', VisualConditionsController::class);
Route::apiResource('cml', DatacmlsController::class);
Route::apiResource('proposal', ProposalsController::class);
Route::apiResource('damage_mechanism', DamageMechanismController::class);

Route::post('image', [FileStorageController::class, 'storeImage']);
Route::get('image/{id}', [FileStorageController::class, 'showImage']);
Route::post('document', [FileStorageController::class, 'storeDocument']);
Route::get('document/{id}', [FileStorageController::class, 'showDocument']);

Route::get('asset_report/{id}', [ReportControllers::class, 'report_assets']);
Route::get('circuit_report/{id}', [ReportControllers::class, 'report_circuit']);
    
Route::get('thickness', [ThicknessController::class, 'get_thickness']);

Route::post('import_assets', [ImportExcelController::class, 'import_assets']);
Route::post('import_cmls', [ImportExcelController::class, 'import_cmls']);

Route::get('/linkstorage', function () {
    Artisan::call('storage:link');
});