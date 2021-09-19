const express = require("express");
const axios = require("axios");
const app = express();
const responseRouter = require("../routes/response");
app.use("/responses", responseRouter);

describe("Response Route Testing", () => {
    const hostUrl = 'http://localhost:3031';
    const resUrl = `${hostUrl}/responses`;
    it('Successfully GET /responses', async () => {
        const result = await axios.get(resUrl);
        expect(result.status).toBe(200);
    });

    it('Successfully POST /responses', async () => {
        // Post a new response
        const resJson = {
            response: [
                {
                    question: "test qns",
                    answer: "test answer"
                }
            ]
        }
        const result = await axios.post(resUrl, resJson);
        expect(result.status).toBe(200);
    });
});