<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ThicknessResources extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        $piping = parent::toArray($request);
        $piping['images'] = json_decode($piping['images']);
        return [
            ...$piping,
            "cml" => new AssetsResource($this->AllCml)
        ];
    }
}
