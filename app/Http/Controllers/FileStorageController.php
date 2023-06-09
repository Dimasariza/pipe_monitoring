<?php

namespace App\Http\Controllers;

use App\Models\FileStorage;
use Illuminate\Http\Request;
use function PHPUnit\Framework\fileExists;
use function PHPUnit\Framework\returnSelf;

class FileStorageController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function storeImage(Request $request)
    {
        $file_name = $request->image->getClientOriginalName();
        $file_name = date('YmdHis').$file_name;
        $file_storage = new FileStorage;
        $file_storage->file_name = $file_name;
        $file_storage->type = "image";
        $file_storage->save();
        $request->image->storeAs('image', $file_name);
        return response()->json([
            "status" => true,
            "message" => "Gambar telah di tambahkan.",
            "data" => $file_storage->getAttributes()
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function showImage($id)    
    {
        $storage_path = FileStorage::all();
        return response()->json($storage_path);
        $file_path = storage_path("app\public\image");  
        $file_path = $file_path. "\\" .$id;
        
        if(fileExists($file_path)) {
            $file_info = new \finfo(FILEINFO_MIME_TYPE);
            $file_show=file_get_contents($file_path);

            return response($file_show, 200)
            ->header('Content-Type', $file_info->buffer($file_show));
        } else {
            return response()->json([
                "status" => false,
                "message" => "Gambar tidak ditemukan."
            ], 404);
        }
    }

    public function storeDocument(Request $request) {
        $filedir = "document";
        $file_name = $request->file($filedir)->getClientOriginalName();
        $file_name = date('YmdHis').$file_name;
        $file_storage = new FileStorage;
        $file_storage->file_name = $file_name;
        $file_storage->type = $filedir;
        $file_storage->save();
        $request->file($filedir)->storeAs($filedir, $file_name);

        return response()->json([
            "status" => true,
            "message" => "Dokumen telah di tamabhkan.",
            "data" => $file_storage->getAttributes()
        ]);
    }

    public function showDocument($id) {
        $storage_path = storage_path("app\public\document");  
        $file_path = FileStorage::find($id);
        if(empty($file_path)) {
            return response()->json([
                "status" => false,
                "message" => "Dokumen tidak ditemukan."
            ]);
        }
        
        $file_path = $file_path->getAttributes();
        if($file_path["type"] != "document") {
            return response()->json([
                "status" => false,
                "message" => "Dokumen tidak ditemukan."
            ]);
        }
        $storage_path = $storage_path. "\\" .$file_path["file_name"];
        
        $file_info = new \finfo(FILEINFO_MIME_TYPE);
        $file_show=file_get_contents($storage_path);

        return response($file_show, 200)
        ->header('Content-Type', $file_info->buffer($file_show));
    }
}
