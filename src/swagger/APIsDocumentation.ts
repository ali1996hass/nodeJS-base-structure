import { sampleDoc } from './api/sampleDoc.documentations';


export const apiDocument = {
    doc: {
        "swagger": "2.0",
        "info": {
            "title": "Sample Title",
            "description": "Sample description ...  ",
            "version": "1.0"
        },
        "produces": ["application/json"],
        "paths": {
            "/api/sample/": sampleDoc.noId,
            "/api/sample/{_id}": sampleDoc.withID,
        }
    }
};