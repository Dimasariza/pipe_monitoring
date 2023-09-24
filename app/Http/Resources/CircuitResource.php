<?php

namespace App\Http\Resources;

use App\Models\Proposals;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CircuitResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $data = parent::toArray($request);
        $data['images'] = json_decode($data['images']);
        $data['piping'] = AssetsResource::collection($this->circuit);
        
        return $data;
    }
}
