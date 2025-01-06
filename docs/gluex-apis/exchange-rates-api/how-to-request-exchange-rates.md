# How to request exchange rates


The `/exchange-rate` endpoint allows you to retrieve the exchange rates between token pairs on a specified blockchain.

---

### **Endpoint**

`POST /exchange-rate`

---

### **Base URL**

https://exchange-rates.gluex.xyz/

---

### **Request Body Format**

To request exchange rates, you need to provide a JSON body that includes the token pairs and the blockchain ID:

```json
{
    "token_pairs": [
        {
            "domestic_token": "tokenA-address",
            "foreign_token": null
        },
        {
            "domestic_token": "tokenB-address",
            "foreign_token": "tokenC-address"
        }
    ],
    "blockchain_id": "blockchain"
}
```
&#x20;
**Parameters**:

*token_pairs*: A list of token pairs where each pair contains a domestic_token and a foreign_token. If foreign_token is null, the API will fetch the rate for that specific token against the native currency of the blockchain.
*blockchain_id*: The ID of the blockchain on which the exchange rate is calculated (e.g., "ethereum").

---

### **Response Format**
The response will include a list of exchange rates for the requested token pairs on the specified blockchain.

```json
{
    "exchange_rates": [
        {
            "domestic_token": "tokenA-address",
            "price": 0.00010741495276069063,
            "foreign_token": "blockchain-native-currency-address",
        },
        {
            "domestic_token": "tokenB-address",
            "price": 1.0013751780636744e-12,
            "foreign_token": "tokenC-address",
        }
    ]
}
```

#### Response Parameters:

- `exchange_rates`: A list of exchange rates for the requested token pairs.
  - `domestic_token`: The address of the domestic token in the pair.
  - `foreign_token`: The address of the foreign token in the pair.
  - `price`: The exchange rate price of the domestic token to the foreign token.


#### Status Codes:

- `200 OK`:Successfully retrieved exchange rates
- `400 Bad Request`: Missing or invalid parameters.
- `500 Internal Server Error`: An error occurred while processing the request

---

#### Example Request:

Here’s how you can make a request to fetch exchange rates:

#### **Using `curl`**  
```bash
curl -X POST "https://exchange-rates.gluex.xyz/exchange-rate" \
     -H "Content-Type: application/json" \
     -d '{
            "token_pairs": [
                {
                    "domestic_token": "tokenA-address",
                    "foreign_token": null
                },
                {
                    "domestic_token": "tokenB-address",
                    "foreign_token": "tokenC-address"
                }
            ],
            "blockchain_id": "ethereum"
        }'

```

#### **Using Python (requests library)**  
``` python
import requests

import requests
import json

url = "https://exchange-rates.gluex.xyz/exchange-rate"
headers = {"Content-Type": "application/json"}

data = {
    "token_pairs": [
        {
            "domestic_token": "tokenA-address",
            "foreign_token": None
        },
        {
            "domestic_token": "tokenB-address",
            "foreign_token": "tokenC-address"
        }
    ],
    "blockchain_id": "ethereum"
}

response = requests.post(url, headers=headers, data=json.dumps(data))

if response.status_code == 200:
    exchange_rates = response.json()
    print(exchange_rates)
else:
    print(f"Error: {response.status_code}")

```

---

Now, you can easily integrate the Gluex Exchange Rates API to get real-time exchange rates for your application!