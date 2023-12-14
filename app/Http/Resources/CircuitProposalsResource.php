<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CircuitProposalsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $data = $this->proposals->toArray();
        $data = array_map(function($e){
            $e['inspection_method'] = json_decode($e['inspection_method']);
            return $e;
        }, $data);
        return $data;
    } 
}
