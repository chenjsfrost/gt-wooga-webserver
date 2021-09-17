# gt-wooga-webserver

Performing a `POST - /rates` 

Example:
```
JSON: 
{
    "rate": 5
}

Result:
{
    "status": 200,
    "data": {
        "rate": 5,
        "_id": "xxxx",
        "__v": 0
    }
}
```

Performing a `GET - /rates` 

Example:
```
Result: 
[
  {
      "_id": "xxxx",
      "rate": 5,
      "__v": 0
  },
]
```
