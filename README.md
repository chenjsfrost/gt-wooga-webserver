# gt-wooga-webserver

<b>Performing a `GET - /rates`</b>

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

<b>Performing a `POST - /rates`</b>

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
======================================================

<b>Performing a `GET - /responses`</b>

Example:
```
Result: 
[
 {
    "status": 200,
    "data": [
        {
            "_id": "xxxxx",
            "response": [
                {
                    "question": "test qns",
                    "answer": "test answer"
                }
            ],
            "__v": 0
        },
    ]
]
```

<b>Performing a `POST - /responses`</b>

Example:
```
JSON: 
{
    "response": [
        {
            "question": "test qns",
            "answer": "test answer"
        }
    ]
}

Result:
{
    "status": 200,
    "data": {
        "response": [
            {
                "question": "test qns",
                "answer": "test answer"
            }
        ],
        "_id": "xxxx",
        "__v": 0
    }
}
```
======================================================

<b>Performing a `GET - /questions` </b>

Example:
```
Result: 
{
    "status": 200,
    "data": [
        {
            "_id": "xxxx",
            "question": "What did you like most?",
            "placeHolder": "Tell us your experience (optional)",
            "type": "short answer",
            "__v": 0
        },
        {
            "_id": "yyyy",
            "question": "What did you like least?",
            "placeHolder": "Let us know how we can improve (optional)",
            "type": "short answer",
            "__v": 0
        },
        {
            "_id": "zzzz",
            "question": "Your email?",
            "placeHolder": "Your email address (optional)",
            "type": "email",
            "__v": 0
        },
    ]
}
```

<b>Performing a `POST - /questions`</b>

Example:
```
JSON: 
{
    "question": "Rate us?",
    "placeHolder": "Please rate high!",
    "type": "linear scale"
}

Result:
{
    "status": 200,
    "data": {
        "question": "Rate us?",
        "placeHolder": "Please rate high!",
        "type": "linear scale",
        "_id": "xxxx",
        "__v": 0
    }
}
```
<b>Performing a `PATCH - /questions/id`</b>

Example:
```
JSON: 
{
    "question": "Rate us?????",
    "placeHolder": "Please rate high!",
    "type": "linear scale"
}

Result:
{
    "status": 200,
    "data": {
        "_id": "xxxx",
        "question": "Rate us?????",
        "placeHolder": "Please rate high!",
        "type": "linear scale",
        "__v": 0
    }
}
```
<b>Performing a `DELETE - /questions/id`</b>

Example:
```
Result:
{
    "status": 200,
    "message": "Question has been deleted successfully"
}
```

<b>Performing a `GET - /rateReport`</b>

Example:
```
Result:
{
    "rating_breakdown": {
        "1": 1,
        "2": 2,
        "3": 3
    }
}
```
