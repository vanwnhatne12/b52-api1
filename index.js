const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api/b52", async (req, res) => {
  try {
    const response = await axios.get("https://toolhth.site/b52th.php", {
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
    });

    const data = response.data;

    const orderedData = {
      phien: data.current_session,
      ket_qua: data.current_result,
      phien_sau: data.next_session,
      du_doan: data.prediction,
      id: "Tele_VanwNhatReal",
    };

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(orderedData);
  } catch (error) {
    res.status(500).json({
      error: "Không thể truy cập API gốc.",
      chi_tiet: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(Server is running on port ${PORT});
});