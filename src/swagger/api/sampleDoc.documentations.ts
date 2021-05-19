export const sampleDoc = {
    withID: {
        "get": {
            "x-swagger-router-controller": "home",
            "operationId": "getById",
            "tags": ["/sample/{_id}"],
            "description": "Returns the application ID from the system that the user has access to",
            "parameters": [
                { "name": "_id", "in": "path", "type": "string", "collectionFormat": "multi", "items": { "type": "integer" } },
            ],
            "responses": {}
        },
        "put": {
            "x-swagger-router-controller": "home",
            "operationId": "editApplication",
            "tags": ["/sample/{_id}"],
            "description": "Returns the application ID from the system that the user has access to",
            "parameters": [
                { "name": "_id", "in": "path", "type": "string", "collectionFormat": "multi", "items": { "type": "integer" } },
                { "name": "Payload", "in": "body", "required": false, },

            ],
            "responses": {

            }
        },
        "delete": {
            "x-swagger-router-controller": "home",
            "operationId": "deleteApplication",
            "tags": ["/sample/{_id}"],
            "description": "",
            "parameters": [
                { "name": "_id", "in": "path", "type": "string", "collectionFormat": "multi", "items": { "type": "integer" } },
            ],
            "responses": {}
        }
    },
    noId: {
        "get": {
            "x-swagger-router-controller": "home",
            "operationId": "impossible",
            "tags": ["/sample"],
            "description": "Returns the application with the ID sent in the path from the system that the user has access to",
            "responses": {}
        },
        "post": {
            "x-swagger-router-controller": "home",
            "operationId": "index",
            "tags": ["/sample"],
            "summary": "",
            "description": "",
            "parameters": [
                { "name": "Payload", "in": "body", "required": false, },
            ],

        }
    },
    "responses": {}
}

