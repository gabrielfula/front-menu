// Define the structure for each item
interface Item {
  title: string;
  price: number;
  picture: string;
  description: string;
}

// Define the structure for each category
interface Category {
  skewer: Item[];
  portions: Item[];
  drinks: Item[];
  additionals: Item[];
}

// Create the mock data
const mocks: Category = {
  skewer: [
    { title: "Medalhão", price: 8.0, picture: "url_da_imagem", description: "Delicioso medalhão de carne." },
    { title: "Frango", price: 8.0, picture: "url_da_imagem", description: "Espetinho de frango saboroso." },
    { title: "Frango Empanado", price: 8.0, picture: "url_da_imagem", description: "Frango empanado crocante." },
    { title: "Tulipa", price: 8.0, picture: "url_da_imagem", description: "Tulipa de frango deliciosa." },
    { title: "Coração", price: 8.0, picture: "url_da_imagem", description: "Corações de frango grelhados." },
    { title: "Carne", price: 8.0, picture: "url_da_imagem", description: "Espetinho de carne suculenta." },
    { title: "Carne com Bacon", price: 8.0, picture: "url_da_imagem", description: "Carne com bacon grelhado." },
    { title: "Carne com Linguiça", price: 8.0, picture: "url_da_imagem", description: "Carne com linguiça saborosa." },
    { title: "Kafta", price: 8.0, picture: "url_da_imagem", description: "Espetinho de Kafta deliciosa." },
    { title: "Porpeta", price: 8.0, picture: "url_da_imagem", description: "Porpeta de carne saborosa." },
    { title: "Linguiça", price: 8.0, picture: "url_da_imagem", description: "Linguiça grelhada." },
    { title: "Linguiça com Bacon", price: 8.0, picture: "url_da_imagem", description: "Linguiça com bacon saborosa." },
    { title: "Linguiça Caseira com Rúcula", price: 8.0, picture: "url_da_imagem", description: "Linguiça caseira com rúcula." },
    { title: "Cudiguin", price: 8.0, picture: "url_da_imagem", description: "Cudiguin grelhado." },
    { title: "Panceta", price: 8.0, picture: "url_da_imagem", description: "Panceta crocante." },
    { title: "Queijo", price: 8.0, picture: "url_da_imagem", description: "Espetinho de queijo." },
    { title: "Pão de Alho", price: 8.0, picture: "url_da_imagem", description: "Pão de alho grelhado." }
  ],
  portions: [
    { title: "Batata", price: 10.0, picture: "url_da_imagem", description: "Porção de Batata frita crocante." },
    { title: "Polenta", price: 10.0, picture: "url_da_imagem", description: "Porção de Polenta frita saborosa." },
    { title: "Mandioca", price: 10.0, picture: "url_da_imagem", description: "Porção de Mandioca frita deliciosa." }
  ],
  drinks: [
    { title: "Coca-Cola", price: 5.0, picture: "url_da_imagem", description: "Refrigerante Coca-Cola gelado." },
    { title: "Coca-Cola Zero", price: 5.0, picture: "url_da_imagem", description: "Refrigerante Coca-Cola Zero gelado." },
    { title: "Fanta Laranja", price: 5.0, picture: "url_da_imagem", description: "Refrigerante Fanta Laranja gelado." },
    { title: "Fanta Uva", price: 5.0, picture: "url_da_imagem", description: "Refrigerante Fanta Uva gelado." },
    { title: "Sprite", price: 5.0, picture: "url_da_imagem", description: "Refrigerante Sprite gelado." },
    { title: "Guaraná", price: 5.0, picture: "url_da_imagem", description: "Refrigerante Guaraná gelado." },
    { title: "Refri Pequeno", price: 3.0, picture: "url_da_imagem", description: "Refrigerante pequeno de sua escolha." },
    { title: "1L Guaraná", price: 10.0, picture: "url_da_imagem", description: "Garrafa de 1L de Guaraná." },
    { title: "1L Coca", price: 10.0, picture: "url_da_imagem", description: "Garrafa de 1L de Coca-Cola." },
    { title: "1L Coca Zero", price: 10.0, picture: "url_da_imagem", description: "Garrafa de 1L de Coca-Cola Zero." },
    { title: "Suco Prats 900 ml", price: 8.0, picture: "url_da_imagem", description: "Garrafa de 900 ml de suco ." },
    { title: "Laranja com Acerola", price: 8.0, picture: "url_da_imagem", description: "Suco Prats de laranja com acerola." },
    { title: "Maçã", price: 8.0, picture: "url_da_imagem", description: "Suco de maçã." },
    { title: "Goiaba", price: 8.0, picture: "url_da_imagem", description: "Suco de goiaba." },
    { title: "Latas Suco Uva - Dell Vale", price: 5.0, picture: "url_da_imagem", description: "Lata de suco de uva Dell Vale." },
    { title: "Água Mineral", price: 3.0, picture: "url_da_imagem", description: "Garrafa de água mineral." },
    { title: "Água com Gás", price: 3.0, picture: "url_da_imagem", description: "Garrafa de água com gás." }
  ],
  additionals: [
    { title: "Frasco Molho de Alho", price: 8.00, picture: "image_teste", description: "Delicioso Molho de Alho" },
    { title: "Frasco Molho de Pimenta", price: 8.00, picture: "image_teste", description: "Delicioso Molho de Alho" }
  ]
};

export default mocks;
