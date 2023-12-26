var Receipt = {
    "_id": object_id,
    "tickets": [{
        "ticket": Billing_Ticket.id,
    },
    ],
    "createdDate": timestamp,
    "updatedDate": timestamp,
    "members": [{
        "user_id": long
    },
    ],
    "status": string,
}

var Billing_Ticket = {
    "_id": object_id,
    "receipt_id": object_id,
    "idx": int32,
    "request_user_id": long,
    "target_user_id": long,
    "menu": [{
        "item": string,
        "type": string,
        "category": string,
        "note": string,
        "fee": int32,
        "totalPrice": int32,
    },
    ],
    "createdDate": timestamp,
    "updatedDate": timestamp,
    "paid": boolean
}