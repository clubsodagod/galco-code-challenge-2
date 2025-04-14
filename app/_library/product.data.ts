export interface ProductCategory {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface Product {
  id: string;
  product_category_id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  manufacturer: string;
  created_at: string;
  updated_at: string;
  product_category: ProductCategory;
}


export const productData:Product[] = [
  {
      "id": "38157975-522f-4613-bc6d-f349df58398b",
      "product_category_id": "8a927012-91e2-4f51-8b65-da3eb9029cd4",
      "name": "Outstanding Utensil",
      "price": 274.12,
      "image": "https://images.unsplash.com/photo-1625094640367-05f84293fe42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwyOHx8Q29zbWV0aWNzfGVufDB8MHx8fDE2OTczNjQyNDJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Illo eveniet inventore esse sint id eos sunt dolorem. Corrupti aperiam reiciendis aut qui deserunt. Doloremque quo deleniti accusantium a. Suscipit molestiae qui laborum neque accusantium.",
      "manufacturer": "Wuckert, Smith and Wiegand",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "8a927012-91e2-4f51-8b65-da3eb9029cd4",
          "name": "Beauty Products",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "882c0d0c-ecff-424f-a8da-f7d19ade1a6c",
      "product_category_id": "d031bd75-0906-47b2-811a-40b58bb9a0a8",
      "name": "Mega Contraption",
      "price": 67.88,
      "image": "https://images.unsplash.com/photo-1557154683-264bf969e849?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwxMHx8U3RhdGlvbmVyeXxlbnwwfDB8fHwxNjk3MzY0MjU1fDA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Sit cumque voluptas totam. Totam sapiente consequatur sapiente et. Reiciendis et ab suscipit. Eos quos minima veritatis atque quia. Quis eaque ab voluptatibus culpa tenetur est voluptas non.",
      "manufacturer": "Bogisich, Armstrong and Hand",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "d031bd75-0906-47b2-811a-40b58bb9a0a8",
          "name": "Jewelry",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "dace53e8-2cf7-42ed-8bb4-edac107f4630",
      "product_category_id": "dc1fc001-5a25-4c2c-936b-72b1865f1965",
      "name": "Mega Artifact",
      "price": 280.7,
      "image": "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwyOHx8QXBwYXJlbHxlbnwwfDB8fHwxNjk3MzY0MjQwfDA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Reprehenderit temporibus ut architecto labore. Soluta libero sequi non maxime ab ut. Tenetur facere omnis dolore laborum ipsum. Sunt ut consequatur ipsum eius et ut illum ratione.",
      "manufacturer": "Leffler PLC",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "dc1fc001-5a25-4c2c-936b-72b1865f1965",
          "name": "Toys",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "ee0dbc37-3d64-476a-8d22-f32f4c2bd086",
      "product_category_id": "8a927012-91e2-4f51-8b65-da3eb9029cd4",
      "name": "Extraordinary Gadget",
      "price": 972.16,
      "image": "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwxMHx8T2ZmaWNlfGVufDB8MHx8fDE2OTczNjQyNzJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Ducimus exercitationem doloribus cumque. Explicabo totam est est error qui. Unde quidem eveniet dicta quia accusantium qui quae. Minima cumque corporis modi aut.",
      "manufacturer": "Cremin and Sons",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "8a927012-91e2-4f51-8b65-da3eb9029cd4",
          "name": "Beauty Products",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "fd567d05-0fdc-400a-8724-7959803eeb47",
      "product_category_id": "3ad7fe87-74f9-4be7-955b-a61b7ef6c8c1",
      "name": "Marvelous Doozy",
      "price": 280.68,
      "image": "https://images.unsplash.com/photo-1549834185-bd9f078a5dfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHw4fHxQYWludGluZ3xlbnwwfDB8fHwxNjk3MzY0MjY2fDA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Impedit non reiciendis id praesentium non. Dolorum sapiente vero ipsum pariatur. Repellat atque voluptates ut numquam beatae nemo. Blanditiis provident necessitatibus non voluptatem.",
      "manufacturer": "Yundt, Lindgren and Konopelski",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "3ad7fe87-74f9-4be7-955b-a61b7ef6c8c1",
          "name": "Sports Equipment",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "f5590844-f92c-45b1-b92c-60067623b8c1",
      "product_category_id": "5e3060e0-a5e7-4dbd-b644-e3f3901ad5a8",
      "name": "Mega Contraption",
      "price": 1075.49,
      "image": "https://images.unsplash.com/photo-1575975243243-5462a2054ed2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHw4fHxIZWFkcGhvbmVzfGVufDB8MHx8fDE2OTczNjQyNTF8MA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Deleniti eius delectus rerum minus et molestiae consequatur eum. Recusandae quis nihil omnis quia dicta eius natus. Omnis odit atque rerum vero. Nisi voluptas ut iusto.",
      "manufacturer": "Kirlin Group",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "5e3060e0-a5e7-4dbd-b644-e3f3901ad5a8",
          "name": "Automotive Parts",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "9afa2e71-2356-4727-872c-962ed144d511",
      "product_category_id": "6a342ad8-380c-4977-9fe9-cdb6b0e7310e",
      "name": "Brilliant Apparatus",
      "price": 901.68,
      "image": "https://images.unsplash.com/photo-1454587399083-b11b22f48fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwyN3x8U3RhdGlvbmVyeXxlbnwwfDB8fHwxNjk3MzY0MjU1fDA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Deleniti suscipit nihil nostrum culpa iste numquam. Nam ab tempore aut blanditiis alias vitae. Dolore cupiditate repellat a explicabo similique blanditiis. Qui rem ut reiciendis ex culpa rerum placeat.",
      "manufacturer": "Kub, Renner and Flatley",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "6a342ad8-380c-4977-9fe9-cdb6b0e7310e",
          "name": "Books",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "9821519f-b52d-4c5c-883b-305f6a1cb2c2",
      "product_category_id": "6a342ad8-380c-4977-9fe9-cdb6b0e7310e",
      "name": "Outstanding Doozy",
      "price": 1192.91,
      "image": "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHw4fHxDYW1lcmF8ZW58MHwwfHx8MTY5NzM2NDI0Nnww&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Rerum praesentium quisquam ipsam ut numquam. Ut voluptatem fuga et impedit placeat consequatur amet consequuntur. Totam ipsa doloremque tempore ab velit excepturi saepe. Nesciunt qui ratione sed tenetur voluptatem.",
      "manufacturer": "Cremin-Bradtke",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "6a342ad8-380c-4977-9fe9-cdb6b0e7310e",
          "name": "Books",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "0a0a5ff1-342f-49be-9789-0d7641401a70",
      "product_category_id": "7c2bf15d-b834-46ea-94f6-0a349e258d1f",
      "name": "Ultra Mechanism",
      "price": 296.87,
      "image": "https://images.unsplash.com/photo-1519638831568-d9897f54ed69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwxN3x8Q2FtZXJhfGVufDB8MHx8fDE2OTczNjQyNDZ8MA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Pariatur qui repellat maiores labore. Rerum molestiae ex dolorem non labore ut neque. Sunt totam eaque facilis eius alias omnis ut. Placeat asperiores nam neque necessitatibus unde aspernatur velit. Eos dicta mollitia tenetur qui quo.",
      "manufacturer": "Ritchie-Heaney",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "7c2bf15d-b834-46ea-94f6-0a349e258d1f",
          "name": "Pet Supplies",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "ecdd7799-5793-4d92-b7b2-a9e7f4ea78bf",
      "product_category_id": "e7e1bc83-96c0-448d-aa9a-6103bff732e4",
      "name": "Extraordinary Artifact",
      "price": 262.63,
      "image": "https://images.unsplash.com/photo-1531913764164-f85c52e6e654?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwzfHxQYWludGluZ3xlbnwwfDB8fHwxNjk3MzY0MjY2fDA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Hic facilis nesciunt modi laudantium. Voluptatibus aspernatur rerum est sed deleniti voluptatem. Ut voluptatem et alias reprehenderit sed voluptate provident. Sint totam aut adipisci sit repudiandae.",
      "manufacturer": "Koch Group",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "e7e1bc83-96c0-448d-aa9a-6103bff732e4",
          "name": "Kitchenware",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "079a818f-2f92-4b30-aceb-1488a633f07c",
      "product_category_id": "dc1fc001-5a25-4c2c-936b-72b1865f1965",
      "name": "Stupendous Thingamajig",
      "price": 518.07,
      "image": "https://images.unsplash.com/photo-1620656798579-1984d9e87df7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwxM3x8SmV3ZWxyeXxlbnwwfDB8fHwxNjk3MzY0MjQxfDA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Hic quis accusantium provident numquam eveniet optio. Et incidunt laboriosam maxime illum animi. Doloribus voluptate repellendus et fugiat quis tempore dolores. Et sit est voluptatem omnis nisi voluptates quia.",
      "manufacturer": "Jones Ltd",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "dc1fc001-5a25-4c2c-936b-72b1865f1965",
          "name": "Toys",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "4d3e7120-2118-4cab-b2a2-5e72ce61148c",
      "product_category_id": "12b8a87a-4195-4fb7-9a59-d3ba64cbb7f6",
      "name": "Brilliant Mechanism",
      "price": 92.23,
      "image": "https://images.unsplash.com/photo-1574357675216-a7ce77356a2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwzMHx8Q2FuZGxlc3xlbnwwfDB8fHwxNjk3MzY0MjYzfDA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Adipisci voluptatem suscipit omnis. Iure aut ratione quam voluptatem explicabo blanditiis quo.",
      "manufacturer": "Aufderhar-Ankunding",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "12b8a87a-4195-4fb7-9a59-d3ba64cbb7f6",
          "name": "Furniture",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "3f2adff8-a6aa-48cf-95a4-4e990100f575",
      "product_category_id": "dc1fc001-5a25-4c2c-936b-72b1865f1965",
      "name": "Unbelievable Appliance",
      "price": 1016.36,
      "image": "https://images.unsplash.com/photo-1580611519215-e5b704997e2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwxNHx8Rm9vdHdlYXJ8ZW58MHwwfHx8MTY5NzM2NDI0MXww&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Molestiae similique mollitia corrupti autem aut sunt. Omnis dolorem qui sit tempore ut. Autem animi numquam deserunt ut consectetur voluptate rerum. Hic nam consequuntur nesciunt eligendi ratione dolorum. Libero quisquam autem dolore repudiandae ad.",
      "manufacturer": "Senger, Marquardt and Considine",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "dc1fc001-5a25-4c2c-936b-72b1865f1965",
          "name": "Toys",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "64b2c411-c5ff-4cf2-8220-3bf2e0a06e9a",
      "product_category_id": "5e3060e0-a5e7-4dbd-b644-e3f3901ad5a8",
      "name": "Ultra Object",
      "price": 1109.76,
      "image": "https://images.unsplash.com/photo-1515940175183-6798529cb860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHw0fHxHYWRnZXRzfGVufDB8MHx8fDE2OTczNjQyNDN8MA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Cum ut possimus praesentium ad. Esse minima dolorum ipsam. Quia cumque vero est consequatur non sint. Voluptas ipsa nam illo ipsum dolores velit sapiente. Nulla qui rerum nemo eos voluptatum.",
      "manufacturer": "Miller, Torp and Dickens",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "5e3060e0-a5e7-4dbd-b644-e3f3901ad5a8",
          "name": "Automotive Parts",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "86f81c64-ca3e-4da3-8357-8dbe9bda700b",
      "product_category_id": "3ad7fe87-74f9-4be7-955b-a61b7ef6c8c1",
      "name": "Wonderful Thingamajig",
      "price": 501,
      "image": "https://images.unsplash.com/photo-1566150906772-1b8d20ca63cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwzMHx8SGFuZGJhZ3xlbnwwfDB8fHwxNjk3MzY0MjUwfDA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Quam incidunt et nulla distinctio a neque veritatis. Excepturi aut neque adipisci et dignissimos. Culpa quasi vitae sit at quos.",
      "manufacturer": "Schneider-Schneider",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "3ad7fe87-74f9-4be7-955b-a61b7ef6c8c1",
          "name": "Sports Equipment",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "995d3ed8-9177-4ac6-a578-e7a80019c274",
      "product_category_id": "6a342ad8-380c-4977-9fe9-cdb6b0e7310e",
      "name": "Mega Object",
      "price": 825.97,
      "image": "https://images.unsplash.com/photo-1545989253-02cc26577f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHw2fHxBcnR8ZW58MHwwfHx8MTY5NzM2NDI1OXww&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Neque esse neque qui et. Et quo dolorem molestias iste et. Quis id ipsum perspiciatis accusantium. Et corrupti animi reprehenderit sunt voluptatem.",
      "manufacturer": "Homenick, Brown and Swift",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "6a342ad8-380c-4977-9fe9-cdb6b0e7310e",
          "name": "Books",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "711a776d-6711-419e-821b-9a7412456a27",
      "product_category_id": "e7e1bc83-96c0-448d-aa9a-6103bff732e4",
      "name": "Unbelievable Engine",
      "price": 921.53,
      "image": "https://images.unsplash.com/photo-1494366222322-387658a1a976?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHw3fHxTbWFydHBob25lfGVufDB8MHx8fDE2OTczNjQyNDV8MA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Et atque recusandae illum. Earum sit rerum repellat omnis facere quas ut. Unde sequi quasi quod voluptatem. Rerum dolorum libero at et quia.",
      "manufacturer": "Bernier-Lemke",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "e7e1bc83-96c0-448d-aa9a-6103bff732e4",
          "name": "Kitchenware",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "f04f3c3b-a20c-40f8-ae02-ba0498902618",
      "product_category_id": "92668c60-d0ce-42e5-aef3-fb3b771ff570",
      "name": "Marvelous Tool",
      "price": 178.81,
      "image": "https://images.unsplash.com/photo-1529720317453-c8da503f2051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwxMHx8QXBwYXJlbHxlbnwwfDB8fHwxNjk3MzY0MjQwfDA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Vel eos ratione quia quis sit ratione aut. Distinctio ut quia dolorum nemo harum adipisci.",
      "manufacturer": "Emard, Terry and Carter",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "92668c60-d0ce-42e5-aef3-fb3b771ff570",
          "name": "Outdoor Gear",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "e7833d9b-7bc6-4848-bdc3-71bee945758d",
      "product_category_id": "d031bd75-0906-47b2-811a-40b58bb9a0a8",
      "name": "Marvelous Apparatus",
      "price": 97.15,
      "image": "https://images.unsplash.com/photo-1512950050685-b1d4ae63d2df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwxM3x8U3RhdGlvbmVyeXxlbnwwfDB8fHwxNjk3MzY0MjU1fDA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Qui et nobis modi numquam nesciunt. Harum qui id magni. Voluptatibus dolores aliquid eos at sit aperiam quia.",
      "manufacturer": "Maggio, Wiza and Mills",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "d031bd75-0906-47b2-811a-40b58bb9a0a8",
          "name": "Jewelry",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "913a294d-3dc9-4e27-b137-9f927124cf62",
      "product_category_id": "1b43132a-e746-4588-97ad-29e40ec5e37c",
      "name": "Stupendous Contraption",
      "price": 204.38,
      "image": "https://images.unsplash.com/photo-1600121848594-d8644e57abab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwxNnx8RnVybml0dXJlfGVufDB8MHx8fDE2OTczNjQyMzl8MA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Excepturi totam a recusandae exercitationem. Earum similique sint ratione ipsam esse assumenda possimus possimus. Ipsum a totam qui maiores omnis hic perferendis aut.",
      "manufacturer": "Turner-Zboncak",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "1b43132a-e746-4588-97ad-29e40ec5e37c",
          "name": "Clothing",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "975c29ff-4601-4e12-953f-c44e5032de91",
      "product_category_id": "ab5d6bed-9a11-4996-854c-81567fa191af",
      "name": "Ultra Mechanism",
      "price": 997.16,
      "image": "https://images.unsplash.com/photo-1543459176-4426b37223ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwzfHxQbGFudHN8ZW58MHwwfHx8MTY5NzM1NzU2NXww&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Enim commodi a aliquid iusto. Nam ipsa quia sed et cupiditate aut rerum facilis. Ut sit tempore aliquam voluptate.",
      "manufacturer": "Flatley-Lindgren",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "ab5d6bed-9a11-4996-854c-81567fa191af",
          "name": "Home Appliances",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "c5129412-5a3e-4050-b096-e59314c254c2",
      "product_category_id": "7c2bf15d-b834-46ea-94f6-0a349e258d1f",
      "name": "Extraordinary Object",
      "price": 320.54,
      "image": "https://images.unsplash.com/photo-1592853625597-7d17be820d0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwyN3x8QXV0b21vYmlsZXxlbnwwfDB8fHwxNjk3MzY0MjQ5fDA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Laudantium dolore dicta sit fugiat deserunt. Ratione et exercitationem harum quia libero officia. Fugiat distinctio expedita sint ut ut quos. Doloremque aliquid quis debitis aperiam quia maiores laboriosam.",
      "manufacturer": "Miller-Murphy",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "7c2bf15d-b834-46ea-94f6-0a349e258d1f",
          "name": "Pet Supplies",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "471308c6-e3e9-47bd-a256-44191b41d723",
      "product_category_id": "8a927012-91e2-4f51-8b65-da3eb9029cd4",
      "name": "Ultra Machine",
      "price": 1153.6,
      "image": "https://images.unsplash.com/photo-1598331668826-20cecc596b86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwyOHx8R2FkZ2V0c3xlbnwwfDB8fHwxNjk3MzY0MjQzfDA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Est optio et culpa velit dolor ad. Corrupti enim nulla reprehenderit praesentium quisquam debitis. In dolore doloribus dolores repellendus.",
      "manufacturer": "Boehm, Spinka and Von",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "8a927012-91e2-4f51-8b65-da3eb9029cd4",
          "name": "Beauty Products",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "b23148a1-e243-41e8-9afd-fe67000c5118",
      "product_category_id": "0934411a-9207-4cf1-824c-6909433402d8",
      "name": "Mega Machine",
      "price": 101.49,
      "image": "https://images.unsplash.com/photo-1597733336794-12d05021d510?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHw3fHxUZWNofGVufDB8MHx8fDE2OTczNjQyNjF8MA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Similique aliquam laboriosam quis sapiente et magni delectus. Alias vitae necessitatibus ut velit accusantium consequuntur veritatis voluptas. Recusandae placeat illum amet quo nobis nobis.",
      "manufacturer": "Wyman Group",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "0934411a-9207-4cf1-824c-6909433402d8",
          "name": "Travel Accessories",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "8fdefe32-e455-4a3d-9da5-7e6fb87c0bf4",
      "product_category_id": "0934411a-9207-4cf1-824c-6909433402d8",
      "name": "Splendid Thingamajig",
      "price": 711.85,
      "image": "https://images.unsplash.com/photo-1668611084082-5c151e20cbdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwxNHx8SG9tZURlY29yfGVufDB8MHx8fDE2OTczNjQyNTZ8MA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Similique voluptates et veritatis et omnis exercitationem magni. Assumenda tempore repellendus hic ex.",
      "manufacturer": "West and Sons",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "0934411a-9207-4cf1-824c-6909433402d8",
          "name": "Travel Accessories",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "2856bf06-5ef8-4be6-91b0-39c26f33e70d",
      "product_category_id": "8a927012-91e2-4f51-8b65-da3eb9029cd4",
      "name": "Splendid Apparatus",
      "price": 419.96,
      "image": "https://images.unsplash.com/photo-1546852199-2d8e8c4aaada?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwyN3x8VGVhfGVufDB8MHx8fDE2OTczNjQyNjh8MA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Amet sed architecto laboriosam rem provident ratione. Sunt veritatis error vitae officiis nisi. Voluptatem qui debitis repellat laborum.",
      "manufacturer": "Hackett-Oberbrunner",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "8a927012-91e2-4f51-8b65-da3eb9029cd4",
          "name": "Beauty Products",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "4b1e81f0-bbab-4581-b9f0-71bcb8f669d0",
      "product_category_id": "5e3060e0-a5e7-4dbd-b644-e3f3901ad5a8",
      "name": "Amazing Whatsit",
      "price": 1027.21,
      "image": "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwxMHx8R2FtZXN8ZW58MHwwfHx8MTY5NzM2NDI2M3ww&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Facere ut consequatur numquam aut inventore praesentium voluptatum omnis. Vel ratione illum nihil dolore beatae nihil magni. Minima ea nihil eos explicabo cupiditate id ea. Amet exercitationem soluta qui.",
      "manufacturer": "Harber-Denesik",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "5e3060e0-a5e7-4dbd-b644-e3f3901ad5a8",
          "name": "Automotive Parts",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "703797a5-95d4-4f67-b518-17d01d6e8b0f",
      "product_category_id": "1b43132a-e746-4588-97ad-29e40ec5e37c",
      "name": "Ultra Gizmo",
      "price": 1063.7,
      "image": "https://images.unsplash.com/photo-1645567454790-6529ae789595?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwyMHx8SG9tZURlY29yfGVufDB8MHx8fDE2OTczNjQyNTZ8MA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Quia numquam voluptate rem eos. A distinctio ut sint quas consectetur occaecati dolorum. Blanditiis fugit est error consectetur non. Aut sit quo qui in modi porro odit.",
      "manufacturer": "Beer-Gibson",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "1b43132a-e746-4588-97ad-29e40ec5e37c",
          "name": "Clothing",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "d8245a51-116f-40d5-b6c6-dcd3a8f545d8",
      "product_category_id": "bb24adb8-ff04-425f-ae52-3fcec71886f6",
      "name": "Exquisite Gizmo",
      "price": 582.8,
      "image": "https://images.unsplash.com/photo-1556909172-6ab63f18fd12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwyMHx8S2l0Y2hlbndhcmV8ZW58MHwwfHx8MTY5NzM2NDI0M3ww&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Nostrum nihil impedit maiores harum eum accusamus quia. Natus vel laudantium quia mollitia.",
      "manufacturer": "Swift, Emmerich and Jaskolski",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "bb24adb8-ff04-425f-ae52-3fcec71886f6",
          "name": "Electronics",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "8d77f401-d540-4f3d-96bb-1633733659e5",
      "product_category_id": "dc1fc001-5a25-4c2c-936b-72b1865f1965",
      "name": "Unbelievable Gadget",
      "price": 1276.85,
      "image": "https://images.unsplash.com/photo-1627483298089-52a5c0eb7258?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MXwxfHNlYXJjaHwxfHxGaXRuZXNzfGVufDB8MHx8fDE2OTczNjQyNjF8MA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Excepturi nam rem consectetur accusamus sed. Aut facere dicta expedita voluptas consequatur sed. Debitis facilis explicabo autem soluta voluptatum deserunt. Illum nesciunt autem et dolor et quae nemo.",
      "manufacturer": "Stiedemann-Treutel",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "dc1fc001-5a25-4c2c-936b-72b1865f1965",
          "name": "Toys",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "59981ff6-1965-414e-a2ce-91a2551cdc96",
      "product_category_id": "12b8a87a-4195-4fb7-9a59-d3ba64cbb7f6",
      "name": "Spectacular Tool",
      "price": 297.01,
      "image": "https://images.unsplash.com/photo-1610398752828-254e167b3322?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwyMXx8Rm9vdHdlYXJ8ZW58MHwwfHx8MTY5NzM2NDI0MXww&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Aliquid hic modi quo quia tempore. Commodi voluptas odit aperiam sed inventore ipsa sit. Cupiditate suscipit illo rerum tempore fugit reiciendis. Blanditiis et non qui non.",
      "manufacturer": "Veum, McLaughlin and Conroy",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "12b8a87a-4195-4fb7-9a59-d3ba64cbb7f6",
          "name": "Furniture",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "b505f118-1200-40e8-a090-9edc22af9dfb",
      "product_category_id": "3ad7fe87-74f9-4be7-955b-a61b7ef6c8c1",
      "name": "Fantastic Apparatus",
      "price": 1113.53,
      "image": "https://images.unsplash.com/photo-1520420097861-e4959843b682?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHw1fHxQYWludGluZ3xlbnwwfDB8fHwxNjk3MzY0MjY2fDA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Aut cupiditate non accusantium et inventore est porro. Nihil ipsam voluptatem nobis odit mollitia. Est adipisci quia id molestiae ratione ullam.",
      "manufacturer": "West LLC",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "3ad7fe87-74f9-4be7-955b-a61b7ef6c8c1",
          "name": "Sports Equipment",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "78c0a103-8f4a-46f1-b287-c308c98baec2",
      "product_category_id": "d031bd75-0906-47b2-811a-40b58bb9a0a8",
      "name": "Wonderful Whatsit",
      "price": 936.28,
      "image": "https://images.unsplash.com/photo-1515377905703-c4788e51af15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHw5fHxTa2luY2FyZXxlbnwwfDB8fHwxNjk3MzY0MjU5fDA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Ut nemo ut quo modi recusandae mollitia incidunt. Eius commodi quisquam quia ipsum sint aperiam. Sit quam sint nam dolor. Rerum quaerat perferendis et.",
      "manufacturer": "Murazik-Muller",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "d031bd75-0906-47b2-811a-40b58bb9a0a8",
          "name": "Jewelry",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "bf7aaa41-5d65-4560-845e-46c5d9fe371c",
      "product_category_id": "6a342ad8-380c-4977-9fe9-cdb6b0e7310e",
      "name": "Super Machine",
      "price": 1163.24,
      "image": "https://images.unsplash.com/photo-1566496875470-68ada46a38c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwyM3x8U25hY2tzfGVufDB8MHx8fDE2OTczNjQyNzF8MA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Quis rerum laborum quo dolorem suscipit neque aut. Omnis officia quis fuga non nobis nobis blanditiis. Esse aliquam accusamus veniam ut maiores debitis voluptatem. Recusandae et nostrum deserunt voluptate est et quod.",
      "manufacturer": "Wintheiser and Sons",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "6a342ad8-380c-4977-9fe9-cdb6b0e7310e",
          "name": "Books",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "13b117b7-1ca4-482a-8c7f-04edf655d747",
      "product_category_id": "f18dd85d-12ea-4816-b9d7-2a35bc95a394",
      "name": "Stupendous Widget",
      "price": 1168.19,
      "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHw4fHxUZWNofGVufDB8MHx8fDE2OTczNjQyNjF8MA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Quaerat facere nihil in dignissimos sit. Aut ut ducimus assumenda ad aut quisquam exercitationem numquam. Veniam ab qui soluta omnis.",
      "manufacturer": "Ledner Ltd",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "f18dd85d-12ea-4816-b9d7-2a35bc95a394",
          "name": "Garden Tools",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "8045aea9-7369-475f-a3a1-8da8d7bdcdb5",
      "product_category_id": "3ad7fe87-74f9-4be7-955b-a61b7ef6c8c1",
      "name": "Spectacular Doozy",
      "price": 798.4,
      "image": "https://images.unsplash.com/photo-1572025442646-866d16c84a54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwyMHx8T2ZmaWNlfGVufDB8MHx8fDE2OTczNjQyNzJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Non voluptatem et magni inventore vero. Praesentium qui eius officiis quam voluptatem id sequi. Ex nihil aut consectetur incidunt blanditiis. Tenetur quaerat voluptates nihil.",
      "manufacturer": "Blick-Rempel",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "3ad7fe87-74f9-4be7-955b-a61b7ef6c8c1",
          "name": "Sports Equipment",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "beb294a5-5b29-44af-a581-4f734577f2eb",
      "product_category_id": "5e3060e0-a5e7-4dbd-b644-e3f3901ad5a8",
      "name": "Brilliant Widget",
      "price": 918.5,
      "image": "https://images.unsplash.com/photo-1526045612212-70caf35c14df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwyMXx8U21hcnRwaG9uZXxlbnwwfDB8fHwxNjk3MzY0MjQ1fDA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Nostrum quia qui placeat at. Dignissimos qui aut eius eius et facilis. Officiis non ut eos libero eius.",
      "manufacturer": "Ebert Inc",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "5e3060e0-a5e7-4dbd-b644-e3f3901ad5a8",
          "name": "Automotive Parts",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "5374ad21-2f57-4f1b-a6ca-579f44813880",
      "product_category_id": "0934411a-9207-4cf1-824c-6909433402d8",
      "name": "Awesome Widget",
      "price": 1048.02,
      "image": "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwxfHxHYWRnZXRzfGVufDB8MHx8fDE2OTczNjQyNDN8MA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Voluptas fuga sit corrupti alias doloremque est et qui. Ex et quibusdam molestias odit. Perferendis vel est laboriosam iste hic.",
      "manufacturer": "Sporer PLC",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "0934411a-9207-4cf1-824c-6909433402d8",
          "name": "Travel Accessories",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "4e522506-44aa-4350-a73a-ce5a34ecbb65",
      "product_category_id": "ce8ffbf3-3a8c-49e1-b9e6-e1fc3834f5a3",
      "name": "Ultra Widget",
      "price": 563.76,
      "image": "https://images.unsplash.com/photo-1584944471186-8568e2793a6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwyN3x8Q29zbWV0aWNzfGVufDB8MHx8fDE2OTczNjQyNDJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Necessitatibus fugiat magni mollitia. Earum in deserunt aut aspernatur et fugit. Tempore ipsum est mollitia tempore aliquam quam.",
      "manufacturer": "Miller LLC",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "ce8ffbf3-3a8c-49e1-b9e6-e1fc3834f5a3",
          "name": "Office Supplies",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "e05373b5-0faa-4cc3-bbb4-4c43fce17d11",
      "product_category_id": "d031bd75-0906-47b2-811a-40b58bb9a0a8",
      "name": "Outstanding Appliance",
      "price": 757.74,
      "image": "https://images.unsplash.com/photo-1510563800743-aed236490d08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwxOHx8Q2FuZGxlc3xlbnwwfDB8fHwxNjk3MzY0MjYyfDA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Molestiae eaque esse est quasi illum. Fugit est exercitationem natus sed id omnis. Quos et id velit ut eum aliquid quidem aliquam.",
      "manufacturer": "Brown-Ledner",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "d031bd75-0906-47b2-811a-40b58bb9a0a8",
          "name": "Jewelry",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "72321634-edc0-4b96-93e8-9cd82979a990",
      "product_category_id": "1b43132a-e746-4588-97ad-29e40ec5e37c",
      "name": "Fantastic Utensil",
      "price": 76.87,
      "image": "https://images.unsplash.com/photo-1572250802606-70d7bac06e62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwyN3x8Rm9vdHdlYXJ8ZW58MHwwfHx8MTY5NzM2NDI0MXww&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Ad quae sequi temporibus et. Et accusamus et molestiae voluptatem dolorem. Dignissimos impedit iure vel et et est laboriosam.",
      "manufacturer": "Tillman-Kassulke",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "1b43132a-e746-4588-97ad-29e40ec5e37c",
          "name": "Clothing",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "a58b2523-829a-40c4-bca3-9c10c8286b97",
      "product_category_id": "12b8a87a-4195-4fb7-9a59-d3ba64cbb7f6",
      "name": "Exceptional Appliance",
      "price": 1216.04,
      "image": "https://images.unsplash.com/photo-1608539733292-190446b22b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwzfHxTdW5nbGFzc2VzfGVufDB8MHx8fDE2OTczNjQyNTN8MA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Est provident quaerat ad libero dolor. Numquam rerum sunt sit fugit nemo mollitia aut. Quod veniam consequatur provident odio ea sed a. Laborum sint temporibus voluptas. Sint veniam rerum nemo illo veritatis odit.",
      "manufacturer": "McCullough-Schaefer",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "12b8a87a-4195-4fb7-9a59-d3ba64cbb7f6",
          "name": "Furniture",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "9bf551d3-b6f7-4bc5-8ede-00737c9edcff",
      "product_category_id": "ce8ffbf3-3a8c-49e1-b9e6-e1fc3834f5a3",
      "name": "Spectacular Doodad",
      "price": 598.41,
      "image": "https://images.unsplash.com/photo-1534685785745-60a2cea0ec34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwyNXx8T3V0ZG9vcnxlbnwwfDB8fHwxNjk3MzY0MjU2fDA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Ea nesciunt quisquam odio sit. Quia veritatis ut occaecati ut. Minus harum aperiam neque. Modi doloremque cumque accusantium et eos est voluptatibus. Non voluptates quae harum repudiandae praesentium.",
      "manufacturer": "Langosh LLC",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "ce8ffbf3-3a8c-49e1-b9e6-e1fc3834f5a3",
          "name": "Office Supplies",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "5d12e2e4-503d-4088-bca5-037cdbc5e8db",
      "product_category_id": "6a342ad8-380c-4977-9fe9-cdb6b0e7310e",
      "name": "Exquisite Appliance",
      "price": 882.91,
      "image": "https://images.unsplash.com/photo-1562261150-0989084c593e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwxMXx8U3VuZ2xhc3Nlc3xlbnwwfDB8fHwxNjk3MzY0MjUzfDA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Iste vitae et voluptatem tenetur quia. Est aperiam vero ex rerum. Natus enim molestias aspernatur cumque fugit voluptatem aut impedit.",
      "manufacturer": "Wolf and Sons",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "6a342ad8-380c-4977-9fe9-cdb6b0e7310e",
          "name": "Books",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "71dbe57d-7f82-4f3b-b545-ae8732538a0d",
      "product_category_id": "ab5d6bed-9a11-4996-854c-81567fa191af",
      "name": "Wonderful Mechanism",
      "price": 545.96,
      "image": "https://images.unsplash.com/photo-1565120130276-dfbd9a7a3ad7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwyMnx8U29mdHdhcmV8ZW58MHwwfHx8MTY5NzM2NDI2NHww&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Explicabo explicabo voluptas hic minima adipisci velit ut et. Necessitatibus aperiam quia voluptates porro qui architecto. Ab reprehenderit recusandae eligendi vero quia.",
      "manufacturer": "Hauck-Mueller",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "ab5d6bed-9a11-4996-854c-81567fa191af",
          "name": "Home Appliances",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "91db5347-456c-4553-8867-6c5bd4084ce8",
      "product_category_id": "3ad7fe87-74f9-4be7-955b-a61b7ef6c8c1",
      "name": "Super Tool",
      "price": 124.11,
      "image": "https://images.unsplash.com/photo-1558981852-426c6c22a060?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwyMnx8QmlrZXN8ZW58MHwwfHx8MTY5NzM2NDI2Nnww&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Consequuntur quisquam voluptatem doloribus ullam. Ut magni voluptas voluptatem. Dolorum dolor qui dignissimos assumenda dignissimos animi placeat. Nisi ratione facilis aut hic deserunt autem. Corporis et et aut reiciendis sit deserunt voluptatem omnis.",
      "manufacturer": "Pollich, Stoltenberg and Weimann",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "3ad7fe87-74f9-4be7-955b-a61b7ef6c8c1",
          "name": "Sports Equipment",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "769e01c5-20b9-41ea-af64-b9bff90b9a4f",
      "product_category_id": "2806a03f-b004-47ad-9411-daa958e5ba91",
      "name": "Majestic Utensil",
      "price": 1049.75,
      "image": "https://images.unsplash.com/photo-1599669454699-248893623440?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwxMHx8SGVhZHBob25lc3xlbnwwfDB8fHwxNjk3MzY0MjUxfDA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Aperiam omnis soluta ab nostrum ut. Nulla non rerum saepe aut dolorum sint perspiciatis. Magni neque consequatur harum possimus eligendi rerum. Beatae rem sit quia voluptatem omnis.",
      "manufacturer": "Gorczany-Armstrong",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "2806a03f-b004-47ad-9411-daa958e5ba91",
          "name": "Musical Instruments",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "393bcd01-5acc-412b-976e-4076b5ce9ecb",
      "product_category_id": "dc1fc001-5a25-4c2c-936b-72b1865f1965",
      "name": "Super Doodad",
      "price": 174.82,
      "image": "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwyOXx8QXBwYXJlbHxlbnwwfDB8fHwxNjk3MzY0MjQwfDA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Nostrum nisi omnis doloremque repudiandae. Nihil voluptatum ut culpa porro. Et officiis vel tempora dignissimos.",
      "manufacturer": "Miller Group",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "dc1fc001-5a25-4c2c-936b-72b1865f1965",
          "name": "Toys",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "3a4047aa-8b72-4b19-a963-890dea82ea1b",
      "product_category_id": "dc1fc001-5a25-4c2c-936b-72b1865f1965",
      "name": "Brilliant Appliance",
      "price": 216.62,
      "image": "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwxMXx8Rm9vZHxlbnwwfDB8fHwxNjk3MzY0MjYyfDA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Sapiente omnis quia laboriosam dolores iure. Vel quo cum et autem. Aut tempora dolorem quia qui. Enim ut dicta deleniti.",
      "manufacturer": "Rice Group",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "dc1fc001-5a25-4c2c-936b-72b1865f1965",
          "name": "Toys",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "81bdc87c-f2ed-4af1-9c99-9af278cff999",
      "product_category_id": "d031bd75-0906-47b2-811a-40b58bb9a0a8",
      "name": "Fantastic Utensil",
      "price": 367.47,
      "image": "https://images.unsplash.com/photo-1695653422259-8a74ffe90401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MXwxfHNlYXJjaHw4fHxGb29kfGVufDB8MHx8fDE2OTczNjQyNjJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Doloremque quia ratione non qui eos recusandae suscipit. Molestiae est eius nisi iusto quas. Mollitia est facere qui rem veritatis sequi expedita. A repellendus dolor commodi necessitatibus eum dolorem.",
      "manufacturer": "Hirthe, Hane and Kutch",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "d031bd75-0906-47b2-811a-40b58bb9a0a8",
          "name": "Jewelry",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "c2538940-d09b-47a4-bb67-847cef880a63",
      "product_category_id": "d031bd75-0906-47b2-811a-40b58bb9a0a8",
      "name": "Majestic Thingamajig",
      "price": 684.38,
      "image": "https://images.unsplash.com/photo-1582493255270-b3844e2a63c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwzMHx8Q2hvY29sYXRlc3xlbnwwfDB8fHwxNjk3MzY0MjcwfDA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Nihil nobis est neque aperiam. Recusandae veniam rem cupiditate nulla omnis aliquid nisi. Magni qui dolores consequuntur quidem. Fugiat enim quasi tempora.",
      "manufacturer": "Denesik, Kling and Hilpert",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "d031bd75-0906-47b2-811a-40b58bb9a0a8",
          "name": "Jewelry",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "c27a054d-54ba-40ae-979c-434c3eab53e4",
      "product_category_id": "2806a03f-b004-47ad-9411-daa958e5ba91",
      "name": "Wonderful Mechanism",
      "price": 878.68,
      "image": "https://images.unsplash.com/photo-1597840900616-664e930c29df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwyOXx8R2FtZXN8ZW58MHwwfHx8MTY5NzM2NDI2M3ww&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Dolor qui accusamus est fuga. Quas magnam ducimus voluptate laboriosam est. Praesentium consectetur quae aut consequatur optio natus.",
      "manufacturer": "Pfannerstill, Dibbert and Towne",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "2806a03f-b004-47ad-9411-daa958e5ba91",
          "name": "Musical Instruments",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "4f7b653f-3bfc-45c2-8e23-72d6fb696e15",
      "product_category_id": "12b8a87a-4195-4fb7-9a59-d3ba64cbb7f6",
      "name": "Outstanding Utensil",
      "price": 1281.69,
      "image": "https://images.unsplash.com/photo-1508896694512-1eade558679c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwyM3x8VG95c3xlbnwwfDB8fHwxNjk3MzY0MjQ4fDA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Fugiat et ratione eos perspiciatis dignissimos dolor odio. Ipsa nisi alias voluptatum ut similique. Enim iure cupiditate debitis omnis.",
      "manufacturer": "Considine, Kling and Herzog",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "12b8a87a-4195-4fb7-9a59-d3ba64cbb7f6",
          "name": "Furniture",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "b47a6708-6413-4d39-82a6-0b8d359ed50a",
      "product_category_id": "1b43132a-e746-4588-97ad-29e40ec5e37c",
      "name": "Exceptional Mechanism",
      "price": 570.54,
      "image": "https://images.unsplash.com/photo-1544015759-237f87d55ef3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwyOXx8VGVhfGVufDB8MHx8fDE2OTczNjQyNjh8MA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Et alias fugit magnam laborum omnis modi. Alias et qui debitis unde rem architecto totam atque. Accusantium autem corrupti impedit sequi quia.",
      "manufacturer": "Koelpin Inc",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "1b43132a-e746-4588-97ad-29e40ec5e37c",
          "name": "Clothing",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "8c8a833f-ddb9-4056-9afe-f31bc8334d2b",
      "product_category_id": "dc1fc001-5a25-4c2c-936b-72b1865f1965",
      "name": "Remarkable Tool",
      "price": 772.48,
      "image": "https://images.unsplash.com/photo-1517260739337-6799d239ce83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwyN3x8U2tpbmNhcmV8ZW58MHwwfHx8MTY5NzM2NDI1OXww&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Natus tenetur laborum praesentium qui quidem nobis nam. Repellat ut libero corporis. Suscipit cumque occaecati vel. Ea facilis unde qui est et voluptatibus.",
      "manufacturer": "Klein-Leffler",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "dc1fc001-5a25-4c2c-936b-72b1865f1965",
          "name": "Toys",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "aea41412-5204-4754-88dc-ad0214a21d29",
      "product_category_id": "8a927012-91e2-4f51-8b65-da3eb9029cd4",
      "name": "Fantastic Engine",
      "price": 856.22,
      "image": "https://images.unsplash.com/photo-1573096108468-702f6014ef28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwyNnx8QXJ0fGVufDB8MHx8fDE2OTczNjQyNTl8MA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Voluptas minus reiciendis minus error aut exercitationem vel est. Qui et minima voluptatem dicta. Perferendis atque esse laborum laudantium.",
      "manufacturer": "Mosciski, Wintheiser and Bogan",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "8a927012-91e2-4f51-8b65-da3eb9029cd4",
          "name": "Beauty Products",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "2e153e71-d8af-4b65-a0d9-b47b2b083664",
      "product_category_id": "2806a03f-b004-47ad-9411-daa958e5ba91",
      "name": "Wonderful Gizmo",
      "price": 546.1,
      "image": "https://images.unsplash.com/photo-1413708617479-50918bc877eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHw5fHxHYWRnZXRzfGVufDB8MHx8fDE2OTczNjQyNDN8MA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Totam enim aliquid molestiae blanditiis repudiandae. Sed id excepturi nostrum quaerat deleniti deleniti sed. Ipsam corporis voluptatem dolorem suscipit fugiat quae. Placeat ad vero assumenda sed quo illum.",
      "manufacturer": "Frami, Ledner and McKenzie",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "2806a03f-b004-47ad-9411-daa958e5ba91",
          "name": "Musical Instruments",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "d6f46bdf-2f32-461a-8c22-047587d701cf",
      "product_category_id": "3ad7fe87-74f9-4be7-955b-a61b7ef6c8c1",
      "name": "Awesome Object",
      "price": 397.98,
      "image": "https://images.unsplash.com/photo-1611647832580-377268dba7cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwyOXx8U29mdHdhcmV8ZW58MHwwfHx8MTY5NzM2NDI2NHww&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Exercitationem a odit sed rem consectetur. Et enim nulla culpa nam repudiandae. Dignissimos aut vel itaque.",
      "manufacturer": "Bashirian, Hermiston and Hills",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "3ad7fe87-74f9-4be7-955b-a61b7ef6c8c1",
          "name": "Sports Equipment",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "a26390dc-3ae3-4be6-b645-b32f629484e0",
      "product_category_id": "f18dd85d-12ea-4816-b9d7-2a35bc95a394",
      "name": "Wonderful Object",
      "price": 50.24,
      "image": "https://images.unsplash.com/photo-1459908676235-d5f02a50184b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwxOXx8QXJ0fGVufDB8MHx8fDE2OTczNjQyNTl8MA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Quas sed velit sequi laudantium eum. Possimus temporibus quo nihil beatae et aut tenetur. Qui quae blanditiis qui unde suscipit repellendus.",
      "manufacturer": "Von, Hodkiewicz and Grant",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "f18dd85d-12ea-4816-b9d7-2a35bc95a394",
          "name": "Garden Tools",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "26d89b5e-b1a3-45ac-884f-1f41a33c9503",
      "product_category_id": "dc1fc001-5a25-4c2c-936b-72b1865f1965",
      "name": "Exceptional Implement",
      "price": 272.2,
      "image": "https://images.unsplash.com/photo-1485322551133-3a4c27a9d925?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwyOXx8Qm9va3N8ZW58MHwwfHx8MTY5NzM2NDI0N3ww&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Saepe et repellat dolor assumenda maxime amet. Dolor error quis sed distinctio ea ut. Quia nulla nisi mollitia reiciendis. Dicta quis sequi aperiam doloribus numquam.",
      "manufacturer": "Schroeder, Schmeler and Spinka",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "dc1fc001-5a25-4c2c-936b-72b1865f1965",
          "name": "Toys",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "57182273-3762-4ba6-be10-a7526260ca7b",
      "product_category_id": "12b8a87a-4195-4fb7-9a59-d3ba64cbb7f6",
      "name": "Outstanding Apparatus",
      "price": 862.53,
      "image": "https://images.unsplash.com/photo-1498049860654-af1a5c566876?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwyOHx8T2ZmaWNlfGVufDB8MHx8fDE2OTczNjQyNzJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Non ipsum dicta deleniti voluptas. Sit modi nobis deserunt quia. Non eos incidunt deleniti cupiditate. Numquam sint sit odio doloribus.",
      "manufacturer": "McClure-Willms",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "12b8a87a-4195-4fb7-9a59-d3ba64cbb7f6",
          "name": "Furniture",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "0c34bf2d-e292-44fa-a2d2-13121bd0c476",
      "product_category_id": "92668c60-d0ce-42e5-aef3-fb3b771ff570",
      "name": "Stupendous Tool",
      "price": 444.26,
      "image": "https://images.unsplash.com/photo-1554167838-07aa5723df3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwxOXx8Q2FuZGxlc3xlbnwwfDB8fHwxNjk3MzY0MjYyfDA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Occaecati et qui nemo explicabo nostrum voluptates voluptas. Exercitationem occaecati omnis vitae. Expedita sed qui molestias illo rerum nesciunt molestiae.",
      "manufacturer": "Purdy Ltd",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "92668c60-d0ce-42e5-aef3-fb3b771ff570",
          "name": "Outdoor Gear",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "1a426e26-b63a-43e3-86ae-de95bc96581a",
      "product_category_id": "1b43132a-e746-4588-97ad-29e40ec5e37c",
      "name": "Exquisite Artifact",
      "price": 136.92,
      "image": "https://images.unsplash.com/photo-1612719571301-aac17bacf628?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwzMHx8QXBwbGlhbmNlc3xlbnwwfDB8fHwxNjk3MzY0MjY1fDA&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Saepe dolorum qui ut est adipisci est. Et necessitatibus commodi nulla quo ipsum quibusdam ea. Ea unde deleniti eum odit maxime et.",
      "manufacturer": "Hintz, Nitzsche and Braun",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "1b43132a-e746-4588-97ad-29e40ec5e37c",
          "name": "Clothing",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "46b83186-16e9-48f6-9f5f-d1d100035fe8",
      "product_category_id": "6a342ad8-380c-4977-9fe9-cdb6b0e7310e",
      "name": "Splendid Instrument",
      "price": 481.95,
      "image": "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwyNnx8R2FtZXN8ZW58MHwwfHx8MTY5NzM2NDI2M3ww&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Dolores repellendus hic sint distinctio quis porro. Explicabo et autem illo. Sunt in voluptatum architecto beatae. Inventore consequuntur amet illum labore fuga cumque ea. Quos ea vitae iure.",
      "manufacturer": "D'Amore-Hoeger",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "6a342ad8-380c-4977-9fe9-cdb6b0e7310e",
          "name": "Books",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  {
      "id": "6d9fed2e-494a-4fb7-a20e-c81f8a576987",
      "product_category_id": "3ad7fe87-74f9-4be7-955b-a61b7ef6c8c1",
      "name": "Exceptional Contraption",
      "price": 512.27,
      "image": "https://images.unsplash.com/photo-1604242692760-2f7b0c26856d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTE2MTF8MHwxfHNlYXJjaHwxOHx8V2F0Y2h8ZW58MHwwfHx8MTY5NzM2NDI0N3ww&ixlib=rb-4.0.3&q=80&w=1080",
      "description": "Ipsum fugiat non est sed porro doloremque illum. Aliquam qui cumque sequi. Atque omnis et facere earum occaecati ullam. Eum est fugit inventore temporibus.",
      "manufacturer": "Stoltenberg, Nitzsche and Donnelly",
      "created_at": "Sun, 10/15/2023",
      "updated_at": "Sun, 10/15/2023",
      "product_category": {
          "id": "3ad7fe87-74f9-4be7-955b-a61b7ef6c8c1",
          "name": "Sports Equipment",
          "created_at": "Sun, 10/15/2023",
          "updated_at": "Sun, 10/15/2023"
      }
  },
  
]