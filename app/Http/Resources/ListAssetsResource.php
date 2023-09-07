<?php

namespace App\Http\Resources;

use App\Models\DamageMechanism;
use App\Models\VisualConditions;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ListAssetsResource extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        $data = parent::toArray($request);
        if(array_key_exists('images', $data))
        $data['images'] = json_decode($data['images']);

        $pipe_id = $data['id'];
        $data['visual_conditions'] = VisualConditions::where("piping_id", $pipe_id)->first();
        $data['damage_mechanism'] = DamageMechanism::where("piping_id", $pipe_id)->first();

        return $data;
    }
}
