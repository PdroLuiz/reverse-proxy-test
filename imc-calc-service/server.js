require("dotenv/config");
const express = require("express");
const cors = require("cors");


const app = express();

app.use(cors({
    origin: "*"
}));
app.use(express.json());



app.get("/", (req, res) => {
    try {

        let { height, weight } = req.query;
        height /= 100;

        const imc = weight / (height * height);

        return res.status(200).send({
            imc
        });
        
    } catch(error) {
        return res.status(500).send({
            error: {
                message: "something went wrong"
            }
        })
    }
});


const port = process.env.PORT || 3334;


app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})
