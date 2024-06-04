<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TransactionDetail extends Model
{
    use HasFactory , SoftDeletes;
    protected $fillable = [
        'cose',
        'ticket_id',
        'transaction_id',
        'is_redemeed',
    ];
    //relasi ke tiket
    public function ticket()
    {
        return $this->belongsTo(Ticket::class);
    }
    //relasi ke transaction
    public function transaction()
    {
        return $this->belongsTo(Transaction::class);
    }
}
