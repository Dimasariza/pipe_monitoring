<?php

namespace App\Http\Controllers;

use App\Models\QRCode;
use App\Http\Requests\StoreQRCodeRequest;
use App\Http\Requests\UpdateQRCodeRequest;
use Illuminate\Http\Request;

class QRCodeController extends Controller
{
    public function storeDocument(Request $request) {
        $filedir = "qr_code";
        $file_name = $request->file($filedir)->getClientOriginalName();
        $file_name = date('YmdHis').$file_name;
        $file_storage = new QRCode;
        $file_storage->qr_code = $request->title;
        $file_storage->file_name = $file_name;
        $file_storage->save();
        $request->file($filedir)->storeAs($filedir, $file_name);

        return response()->json([
            "status" => true,
            "message" => "QR Code report telah di publish.",
            "data" => $file_storage->getAttributes()
        ]);
    }

    public function showDocument($id) {
        $storage_path = storage_path("app/public/qr_code");  
        $file_path = QRCode::where("qr_code", $id)->first();
        if(empty($file_path)) {
            return response()->json([
                "status" => false,
                "message" => "Document QR Code tidak ditemukan."
            ]);
        }
        
        $file_path = $file_path->getAttributes();
        $storage_path = $storage_path. "/" .$file_path["file_name"];
        
        $file_info = new \finfo(FILEINFO_MIME_TYPE);
        $file_show=file_get_contents($storage_path);

        return response($file_show, 200)
        ->header('Content-Type', $file_info->buffer($file_show));
    }
}
