# simplepostit-backend
SimplePostIT

# API documentation

API description:
```
curl localhost:8080/api/
```

Fetching all postit notes:
```
curl localhost:8080/api/postIts/
```

Fetching single postit note:
```
curl localhost:8080/api/postIts/{id}
```

Adding new postit note:
```
curl -X POST localhost:8080/api/postIts -d "{\"content\": \"Post it content\"}" -H "Content-Type:application/json"
```

Editing single postit note:
```
curl -X PUT  http://localhost:8080/api/postIts/{id}  -H "Content-Type:application/json" -d "{\"content\": \"Post it content\"}"
```

Deleting single postit note:
```
curl -X DELETE http://localhost:8080/api/postIts/{id}
```