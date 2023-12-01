<?php

namespace App\Http\Resources;

use App\Models\Datacmls;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AssetsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $data = parent::toArray($request);

        if($this->first() && array_key_exists('images', $data))
        $data["circuit"] = $this->circuit->first();
        
        if(array_key_exists('images', $data))
        $data['images'] = json_decode($data['images']);

        if(array_key_exists('class', $data)) 
        {
            $data['cml'] = Datacmls::where("piping_id", $this->id)->get();
        }

        return $data;
    } 
}
