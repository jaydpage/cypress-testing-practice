# Getting Started

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