const products = [
  {
    name: "Toallitas",
    description: "Extra fina",
    trademark: "Kotex",
    type: "perfumeria",
    quantity: 0
  },
  {
    name: "Dentrifico",
    description: "Total 12",
    trademark: "Colgate",
    type: "perfumeria",
    quantity: 0
  },
  {
    name: "Quitaesmalte",
    description: "Fortalecedor",
    trademark: "Cutex",
    type: "perfumeria",
    quantity: 0
  },
  {
    name: "Shampoo",
    description: "Caida del cabello",
    trademark: "Capilatis",
    type: "perfumeria",
    quantity: 0
  },
  {
    name: "Perfume en crema",
    description: "Odorono",
    trademark: "Rexona",
    type: "perfumeria",
    quantity: 0
  },
  {
    name: "Limpiador Piso",
    description: "Liquido pisos aires de primavera",
    trademark: "Procenex",
    type: "limpieza",
    quantity: 0
  },
  {
    name: "Detergente",
    description: "Limon",
    trademark: "Cif",
    type: "limpieza",
    quantity: 0
  },
  {
    name: "Limpiador Baño",
    description: "Baño Liquido biodegradable",
    trademark: "Cif",
    type: "limpieza",
    quantity: 0
  },
  {
    name: "Esponja",
    description: "Multiuso",
    trademark: "Virulana",
    type: "limpieza",
    quantity: 0
  },
  {
    name: "Lavandina",
    description: "Lavandina",
    trademark: "Ayudin",
    type: "limpieza",
    quantity: 0
  },
  {
    name: "Papel Higenico",
    description: "Premiun",
    trademark: "Higienol",
    type: "limpieza",
    quantity: 0
  },
  {
    name: "Servilletas",
    description: "Rojo",
    trademark: "Sussex",
    type: "limpieza",
    quantity: 0
  },
  {
    name: "Jabon Liquido",
    description: "Clasico",
    trademark: "Ariel",
    type: "limpieza",
    quantity: 0
  },
  {
    name: "Pastillas Mosquitos",
    description: "Clasico",
    trademark: "Raid",
    type: "limpieza",
    quantity: 0
  },
  {
    name: "Desodorante ambiente Limon",
    description: "Desinfectante",
    trademark: "Lysoform",
    type: "limpieza",
    quantity: 0
  },
  {
    name: "Vinagre",
    description: "De Alcohol",
    trademark: "Menoyo",
    type: "almacen",
    quantity: 0
  },
  {
    name: "Fideo Largo",
    description: "Spaghetti",
    trademark: "Matarazzo",
    type: "almacen",
    quantity: 0
  },
  {
    name: "Arroz L",
    description: "Largo fino",
    trademark: "Luchetti",
    type: "almacen",
    quantity: 0
  },
  {
    name: "Harina",
    description: "0000",
    trademark: "Pureza",
    type: "almacen",
    quantity: 0
  },
  {
    name: "Harina leudante",
    description: "Ultra refinada",
    trademark: "Pureza",
    type: "almacen",
    quantity: 0
  },
  {
    name: "Cafe",
    description: "Maquina",
    trademark: "La Virginia",
    type: "almacen",
    quantity: 0
  },
  {
    name: "Azucar",
    description: "Fina",
    trademark: "Ledesma",
    type: "almacen",
    quantity: 0
  },
  {
    name: "Calditos de Verdura",
    description: "Verdura",
    trademark: "Knorr",
    type: "almacen",
    quantity: 0
  },
  {
    name: "Calditos de Gallina",
    description: "Verdura",
    trademark: "Knorr",
    type: "almacen",
    quantity: 0
  },
  {
    name: "Fideos Mostachol",
    description: "Fideo",
    trademark: "Matarazzo",
    type: "almacen",
    quantity: 0
  },
  {
    name: "Fideos Cabello de angel",
    description: "Fideo",
    trademark: "Knorr",
    type: "almacen",
    quantity: 0
  },
  {
    name: "Lata de atun",
    description: "Pescado",
    trademark: "Carrefour",
    type: "almacen",
    quantity: 0
  },
  {
    name: "Huevos",
    description: "Blancos",
    trademark: "Carrefour",
    type: "almacen",
    quantity: 0
  },
  {
    name: "Bizcochuelo",
    description: "Vainilla",
    trademark: "Exquisita",
    type: "almacen",
    quantity: 0
  },
  {
    name: "Galletitas Chocolinas",
    description: "Original",
    trademark: "Bagley",
    type: "almacen",
    quantity: 0
  },
  {
    name: "Cacao en polvo",
    description: "Nesquik",
    trademark: "Nestle",
    type: "almacen",
    quantity: 0
  },
  {
    name: "Galleguitas dulces",
    description: "Clasicas",
    trademark: "Galleguitas",
    type: "almacen",
    quantity: 0
  },
  {
    name: "Sorrentinos",
    description: "Ricotta",
    trademark: "La italiana",
    type: "almacen",
    quantity: 0
  },
  {
    name: "Edulcorantes",
    description: "Stevia",
    trademark: "Hileret",
    type: "almacen",
    quantity: 0
  },
  {
    name: "Te Negro",
    description: "Clasico",
    trademark: "Green Hills",
    type: "almacen",
    quantity: 0
  },
  {
    name: "Te con sabor",
    description: "Mandarina, naranja y pomelo ",
    trademark: "La Virginia",
    type: "almacen",
    quantity: 0
  },
  {
    name: "Mostaza",
    description: "Liviana y sabrosa",
    trademark: "Natura",
    type: "almacen",
    quantity: 0
  },
  {
    name: "Mayonesa",
    description: "Liviana y sabrosa",
    trademark: "Natura",
    type: "almacen",
    quantity: 0
  },
  {
    name: "Ketchup",
    description: "EST.1913",
    trademark: "Hellmanns",
    type: "almacen",
    quantity: 0
  },
  {
    name: "Leche 0%",
    description: "0%",
    trademark: "La serenisima",
    type: "lacteos",
    quantity: 0
  },
  {
    name: "Leche 1%",
    description: "1%",
    trademark: "La serenisima",
    type: "lacteos",
    quantity: 0
  },
  {
    name: "Queso crema",
    description: "Clasico",
    trademark: "Casancrem",
    type: "lacteos",
    quantity: 0
  },
  {
    name: "Dulce de leche_C",
    description: "Clasico",
    trademark: "Milkaut",
    type: "lacteos",
    quantity: 0
  },
  {
    name: "Dulce de leche_R",
    description: "Repostero",
    trademark: "Milkaut",
    type: "lacteos",
    quantity: 0
  },
  {
    name: "Yogurt de Frutilla",
    description: "Clasico",
    trademark: "La Serenisima",
    type: "lacteos",
    quantity: 0
  },
  {
    name: "Crema de leche_C",
    description: "Cocinar",
    trademark: "La Serenisima",
    type: "lacteos",
    quantity: 0
  },
  {
    name: "Crema de leche_B",
    description: "Batir",
    trademark: "La Serenisima",
    type: "lacteos",
    quantity: 0
  },
  {
    name: "Salame",
    description: "Feteado",
    trademark: "Paladini",
    type: "lacteos",
    quantity: 0
  },
  {
    name: "Jamon",
    description: "Feteado",
    trademark: "Paladini",
    type: "lacteos",
    quantity: 0
  },
  {
    name: "Queso",
    description: "Feteado",
    trademark: "Paladini",
    type: "lacteos",
    quantity: 0
  },
  {
    name: "Queso fresco P",
    description: "Trozo",
    trademark: "Punta del agua",
    type: "lacteos",
    quantity: 0
  },
  {
    name: "Queso fresco C",
    description: "Cremon",
    trademark: "La serenisima",
    type: "lacteos",
    quantity: 0
  },
  {
    name: "Aperitivo",
    description: "Gancia Americano",
    trademark: "Gancia",
    type: "bebidas",
    quantity: 0
  },
  {
    name: "Gaseosa",
    description: "Sabor original",
    trademark: "Coca Cola",
    type: "bebidas",
    quantity: 0
  },
  {
    name: "Hamburguesa",
    description: "clasico",
    trademark: "Paty",
    type: "congelados",
    quantity: 0
  },
  {
    name: "Helado",
    description: "Crema americana",
    trademark: "Frigor",
    type: "congelados",
    quantity: 0
  },
  {
    name: "Pan Hamburgesa",
    description: "Artesano",
    trademark: "Bimbo",
    type: "panaderia",
    quantity: 0
  },
  {
    name: "Pan Blanco A",
    description: "Artesano",
    trademark: "Bimbo",
    type: "panaderia",
    quantity: 0
  },
  {
    name: "Pan Blanco L",
    description: "Lacteado",
    trademark: "Fargo",
    type: "panaderia",
    quantity: 0
  },
  {
    name: "Papa",
    description: "Blanca",
    trademark: "-",
    type: "verduleria",
    quantity: 0
  },
  {
    name: "Banana",
    description: "Natural",
    trademark: "Huella",
    type: "verduleria",
    quantity: 0
  },
  {
    name: "Manzana",
    description: "Roja",
    trademark: "Carrefour",
    type: "verduleria",
    quantity: 0
  },
  {
    name: "Bowl",
    description: "Vidrio",
    trademark: "Carrefour ",
    type: "bazar",
    quantity: 0
  },
  {
    name: "Jarro",
    description: "hervidor",
    trademark: "Carrefour",
    type: "bazar",
    quantity: 0
  }
];
