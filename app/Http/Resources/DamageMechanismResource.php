<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DamageMechanismResource extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        $data = parent::toArray($request);
        $data['damage_mechanism'] = json_decode($this->damage_mechanism);
        $data['piping'] = new AssetsResource($this->damage_mechanisms);
        return $data;
    }
}
