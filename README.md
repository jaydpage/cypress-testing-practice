# Cypress Test Practice

## Pre requisites

1. [NodeJS](https://nodejs.org)
2. [Docker](https://www.docker.com/)

## Create the application

```
npx create-next-app --example with-redis roadmap
```

## Run Redis

```
docker run --rm -p 6379:6379 --name roadmap-redis -d redis
```

## Start the Next.js App

```
npm run dev
```

## Update logic for IP Address tracking

In `create.ts` change the `ip` value to

```
ip: req.headers['x-forwarded-for'] || 'NA'
```

# Using the API

## Create a new request

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
    x-forwarded-for 192.168.0.1
```

## Listing all the features

`GET`
http://localhost:3000/api/features

## Voting on a feature

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
    x-forwarded-for 192.168.0.1
```

# Manual Test Cases

## 1. Adding a request

### Successfully adding a request

```
Actions:
- Type a request into the request input box
- Click the "Request" button

Acceptance Criteria:
- The input box text should be cleared
- The request should appear in the request list
- The request should automatically have your vote 👍
- The vote count on the request should be 1
```

### Request empty validation

```
Actions:
- Ensure the request input box is empty
- Click the "Request" button

Acceptance Criteria:
- A validation message should be shown to indicate that the  request input is a mandatory field
```

### Maximum length validation

```
Actions:
- Type a request that exceeds 150 characters
- Click the "Request" button

Acceptance Criteria:
- A error toast should be displayed to indicate that the request should not exceed 150 characters
```

## 2. Subscribing with email address

## 3. Voting

## 4. Feature released
