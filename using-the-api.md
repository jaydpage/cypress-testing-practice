# Using the API

## 1. Create a new request
`POST`
http://localhost:3000/api/create

`BODY`
```
{
    "title": "a cool request"
}
```
`HEADERS`
```
    x-forwarded-for 123456789
```

## 2. Listing all the features
`GET`
http://localhost:3000/api/features


## 3. Voting on a feature 
`POST`
http://localhost:3000/api/vote
```
{
    "id": "1aa12b33-a1af-4d38-8aab-0d85aa044d72",
    "title": "a cool request"
}
```
HEADERS
```
    x-forwarded-for 123456789
```
