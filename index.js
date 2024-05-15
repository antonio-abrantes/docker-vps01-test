const express = require("express");

const productsList = {
  products: [
    {
      id: "25f04fd0-62a5-4bcb-bb14-73955b43cb1a",
      name: "Camiseta",
      price: 25.0,
      promotionActive: true,
      promotionPrice: 20.0,
    },
    {
      id: "8c12543b-6bc7-4e1e-8161-c019a98f71ee",
      name: "Calça Jeans",
      price: 50.0,
      promotionActive: false,
      promotionPrice: 0,
    },
    {
      id: "5ac2d7b4-248c-41fc-9d95-0a062ed43a1e",
      name: "Tênis",
      price: 80.0,
      promotionActive: true,
      promotionPrice: 65.0,
    },
    {
      id: "73b88232-fb52-4b61-a4e1-005bb2ab19d4",
      name: "Óculos de Sol",
      price: 35.0,
      promotionActive: false,
      promotionPrice: 0,
    },
    {
      id: "f982f5a3-c15e-4d48-9620-50a735b21733",
      name: "Bolsa",
      price: 45.0,
      promotionActive: true,
      promotionPrice: 40.0,
    },
  ],
};

const PORT = 3000;
const HOST = "0.0.0.0";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    aapName: "Docker App Test",
    version: "1.0.0",
    author: "Antônio Abrantes",
    company: "Tony "
  });
});

app.get("/products", (req, res) => {
  res.send(productsList);
});

app.listen(PORT, HOST);
