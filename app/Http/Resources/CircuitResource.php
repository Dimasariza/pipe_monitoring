<?php

namespace App\Http\Resources;

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
        return [
            "id" => $this->id,
            "date_in_service" => $this->date_in_service ,
            "class" => $this->class,
            "piping_circuit_name" => $this->piping_circuit_name,
            "piping_circuit_id" => $this->piping_circuit_id,
            "notes" => $this->notes,
            "attachment" => $this->attachment,
            "recomendation" => $this-> recomendation,
            "image" => $this->image,
            "piping" => new AssetsResource($this->circuit),
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at
        ];
    }
}
