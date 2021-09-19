const express = require("express");
const axios = require("axios");
const app = express();
const qnsRouter = require("../routes/question");
app.use("/questions", qnsRouter);

describe("Question Route Testing", () => {
    const hostUrl = 'http://localhost:3031';
    const qnsUrl = `${hostUrl}/questions`;
    it('Successfully GET /questions', async () => {
        const result = await axios.get(qnsUrl);
        expect(result.status).toBe(200);
    });

    it('Successfully POST /questions', async () => {
        // Post a new question
        const qnsJson = {
            "question": "Rate us?",
            "placeHolder": "Please rate high!",
            "type": "linear scale"
        }
        const result = await axios.post(qnsUrl, qnsJson);
        expect(result.status).toBe(200);
    });

    it('Successfully PATCH /questions/id', async () => {
        // Post a new question
        const qnsJson = {
            "question": "Rate us?",
            "placeHolder": "Please rate high!",
            "type": "linear scale"
        }
        const result = await axios.post(qnsUrl, qnsJson);
        expect(result.status).toBe(200);

        // Patch the newly posted question
        const id = result.data.data._id;
        const patchData = "Rate us??";
        const patchQnsJson = { question: patchData }
        const patchResult = await axios.patch(`${qnsUrl}/${id}`, patchQnsJson);
        const checkPatchData = patchResult.data.data.question;
        expect(checkPatchData).toEqual(patchData);
    });

    it('Successfully DELETE /questions/id', async () => {
        // Post a new question
        const qnsJson = {
            "question": "Rate us?",
            "placeHolder": "Please rate high!",
            "type": "linear scale"
        }
        const result = await axios.post(qnsUrl, qnsJson);
        expect(result.status).toBe(200);

        // Delete the newly posted question
        const id = result.data.data._id;
        const delResult = await axios.delete(`${qnsUrl}/${id}`);
        expect(delResult.status).toBe(200);

        // Retrieve the post question again, it should have no result
        const foundResult = await axios.get(`${qnsUrl}/${id}`);
        expect(foundResult.data.data).toHaveLength(0); // Empty data
    });
});