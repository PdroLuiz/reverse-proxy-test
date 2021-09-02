require("dotenv/config");
const express = require("express");
const cors = require("cors");

const { randomInt } = require('./randomInt');

const app = express();

app.use(cors({
    origin: "*"
}));

app.use(express.json());

app.get("/", (req, res) => {
    try {

        const weight = randomInt(50, 130);
        const height = randomInt(155, 190);
        
        
        return res.status(200).send({
            weight,
            height
        });
        
    } catch(error) {
        return res.status(500).send({
            error: {
                message: "something went wrong"
            }
        })
    }
});

const port = process.env.PORT || 3333;


app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})
