export interface Item {
  title: string;
  price: number;
  picture: string;
  description: string;
}

export interface DrinksSubcategories {
  canned: Item[];
  bottled: {
    soda: Item[];
    juice: Item[];
  };
  small: Item[];
}

export interface Category {
  skewer: Item[];
  portions: Item[];
  drinks: DrinksSubcategories;
  additionals: Item[];
}

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
  drinks: {
    canned: [
      { title: "Coca-Cola", price: 5.0, picture: "url_da_imagem", description: "Refrigerante 350 ml Coca-Cola gelado." },
      { title: "Coca-Cola Zero", price: 5.0, picture: "url_da_imagem", description: "Refrigerante 350 ml Coca-Cola Zero gelado." },
      { title: "Fanta Laranja", price: 5.0, picture: "url_da_imagem", description: "Refrigerante 350 ml Fanta Laranja gelado." },
      { title: "Fanta Uva", price: 5.0, picture: "url_da_imagem", description: "Refrigerante 350 ml Fanta Uva gelado." },
      { title: "Sprite", price: 5.0, picture: "url_da_imagem", description: "Refrigerante 350 ml Sprite gelado." },
      { title: "Guaraná Antartica", price: 5.0, picture: "url_da_imagem", description: "Refrigerante 350 ml Guaraná gelado." },
    ],
    bottled: {
      soda: [
        { title: "Guaraná Antartica", price: 8.0, picture: "url_da_imagem", description: "Garrafa de 1L de Guaraná." },
        { title: "Coca-Cola", price: 9.0, picture: "url_da_imagem", description: "Garrafa de 1L de Coca-Cola." },
        { title: "Coca-Cola Zero", price: 9.0, picture: "url_da_imagem", description: "Garrafa de 1L de Coca-Cola Zero." }
      ],
      juice: [
        { title: "Laranja com Acerola", price: 16.0, picture: "url_da_imagem", description: "Suco Prats 900 ml de laranja com acerola." },
        { title: "Maçã", price: 16.0, picture: "url_da_imagem", description: "Suco Prats 900 ml de maçã." },
        { title: "Goiaba", price: 16.0, picture: "url_da_imagem", description: "Suco Prats 900 ml de goiaba." },
        { title: "Suco Uva - Dell Vale", price: 6.0, picture: "url_da_imagem", description: "Lata de suco de uva Dell Vale." }
      ]
    },
    small: [
      { title: "Caçulinha Coca-Cola", price: 3.0, picture: "url_da_imagem", description: "Refrigerante 200 ml Coca-Cola gelado." },
      { title: "Caçulinha Coca-Cola Zero", price: 3.0, picture: "url_da_imagem", description: "Refrigerante 200 ml Coca-Cola Zero gelado." },
      { title: "CaçulinhaFanta Laranja", price: 3.0, picture: "url_da_imagem", description: "Refrigerante 200 ml Fanta Laranja gelado." },
      { title: "Caçulinha Guaraná Antartica", price: 3.0, picture: "url_da_imagem", description: "Refrigerante 200 ml Guaraná gelado." },
      { title: "Água Mineral", price: 3.0, picture: "url_da_imagem", description: "Garrafa de água mineral." },
      { title: "Água com Gás", price: 3.0, picture: "url_da_imagem", description: "Garrafa de água com gás." }
    ],
  },
  additionals: [
    { title: "Frasco Molho de Alho", price: 8.0, picture: "image_teste", description: "Delicioso Molho de Alho" },
    { title: "Frasco Molho de Pimenta", price: 8.0, picture: "image_teste", description: "Delicioso Molho de Pimenta" }
  ]
};

export default mocks;
