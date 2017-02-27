# Timestamp Microservice API

## Usage
To receive the response, send a GET request to

https://time-microservice-api.herokuapp.com/api/ **datestring** 

Where  **datestring** can be a:

- Any [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date.
- A [Unix timestamp](https://en.wikipedia.org/wiki/Unix_time).
- A **"Natural" or spoken date**, such as Thursday 4th April 2030 or Thursday, April 4 2030.

## Response
A successuful request will return the following:

```
{
  "unix": "1901484000",
  "unixMilliseconds": "1901484000000",
  "natural": "Thursday, April 4th 2030",
  "isoString": "2030-04-03T22:00:00.000Z",
  "parsed": {
  "years": 2030,
  "months": 3,
  "date": 4,
  "hours": 0,
  "minutes": 0,
  "seconds": 0,
  "milliseconds": 0
}
```

A failed request will return the following:

```
{
  "unix": null, 
  "natural": null
}
```