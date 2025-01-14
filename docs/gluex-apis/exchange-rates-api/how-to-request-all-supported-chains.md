# How to request all supported chains

The `/chains` endpoint allows you to retrieve a list of all blockchain networks supported by the Gluex Exchange Rates API.

---

## **Endpoint**

`GET /chains`

---

## **Base URL**
https://exchange-rates.gluex.xyz/chains

---

## **Example Request**

Here’s how you can make a simple request to fetch the supported chains:

#### **Using `curl`**  
```bash
curl -X GET "https://exchange-rates.gluex.xyz/chains"
```

#### **Using Python (requests library)**  
``` python
import requests

url = "https://exchange-rates.gluex.xyz/chains"
response = requests.get(url)

if response.status_code == 200:
    supported_chains = response.json()
    print(supported_chains)
else:
    print(f"Error: {response.status_code}")
```

### **Response Example**  
```json
{
  "chains": [
    {
      "id": 1,
      "name": "Ethereum",
      "blockchain_id": "ethereum"
    },
    {
      "id": 56,
      "name": "Binance Smart Chain",
      "blockchain_id": "bnb"
    },
    {
      "id": 137,
      "name": "Polygon",
      "blockchain_id": "polygon"
    }
  ]
}

```
