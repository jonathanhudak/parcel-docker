## Get going

```bash
docker build -t parcel-docker .
docker run -v ${PWD}:/app -v /app/node_modules -p 3001:1234 -p 44139:44139 --rm parcel-docker
```
