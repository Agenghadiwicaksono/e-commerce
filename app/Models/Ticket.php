<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Ticket extends Model
{
    use HasFactory , SoftDeletes;
    protected $fillable = [
        'event_id',
        'nama',
        'price',
        'quantity',
        'max_buy',
    ];
    //relasi ke event
    public function event()
    {
        return $this->belongsTo(Event::class);
    }
}
