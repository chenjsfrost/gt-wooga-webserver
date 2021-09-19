const express = require("express");
const axios = require("axios");
const app = express();
const rateRouter = require("../routes/rate");
app.use("/rates", rateRouter);

describe("Rate Route Testing", () => {
    const hostUrl = 'http://localhost:3031';
    const ratesUrl = `${hostUrl}/rates`;
    it('Successfully GET /rates', async () => {
        const result = await axios.get(ratesUrl);
        expect(result.status).toBe(200);
    });

    it('Successfully POST /rates', async () => {
        // Post a new rate
        const rateJson = { "rate": 5 };
        const result = await axios.post(ratesUrl, rateJson);
        expect(result.status).toBe(200);
    });

    it('Failure in POST /rates', async () => {
        // Post a new rate with wrong object
        const rateJson = { "rates": 5 };
        const result = await axios.post(ratesUrl, rateJson)
            .then((r) => r).catch((err) => err);
        expect(result.response.status).toBe(400);
    });

    it('Successfully POST /rates and GET /rates/id', async () => {
        // Post a new rate result
        const rateJson = { "rate": 5 };
        const result = await axios.post(ratesUrl, rateJson);
        expect(result.status).toBe(200);

        // Retrieve the posted rate result
        const id = result.data.data._id;
        const foundResult = await axios.get(`${ratesUrl}/${id}`);
        // Expect only found 1 result
        const oneResult = foundResult.data.data[0];
        expect(oneResult._id).toEqual(id);
    });
});