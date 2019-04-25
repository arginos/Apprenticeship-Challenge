const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.post("/test", (req, res) => {
  let str = req.body.string_to_cut;
  let ret = {
    return_string: ""
  };
  for (i = 0; i < str.length; i++) {
    if ((i + 1) % 3 === 0) {
      ret.return_string += str.charAt(i);
    }
  }
  res.json(ret);
});

app.listen(4444, () => {
  console.log("server listening on port 4444");
});
