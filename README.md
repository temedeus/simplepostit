#  Simple Post-it application
Simple Post-it application that provides basic CRUD operations for post-it notes. 
Data is stored on a local h2 database which can be persisted by configuration.

Project created using Spring Boot and Spring Data REST for backend and React for front-end.

# Prequisites
* Java 11
* Maven 3.6.3 (wrapper included)
* (npm installed in local target upon maven build)
* (IDE selection of your choice)

# Running sofware in local development environment
1. Import project into selected IDE (import using pom.xml)
1. build with maven
    1. command line: mvn clean -f pom.xml
    1. (build should download necessary tools to build React-side as well)
1. Run either of the two
    1. npm run build (to just build the project)
    1. npm run watch (to build and watch for changes)
1. Run SimplePostitApplication
    1. Web application by default is located at **localhost:8080**

 
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