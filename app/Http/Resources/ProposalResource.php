<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProposalResource extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        $data = parent::toArray($request);
        if(array_key_exists('inspection_method', $data))
        $data['inspection_method'] = json_decode($data['inspection_method']);
        $data['circuit'] = $this->manyCircuits;
        $data['assets'] = $this->manyAssets;
        return $data;
    }
}
