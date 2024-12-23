
const cors = require('cors');
//const fetch = require('node-fetch');

// Enable CORS
const corsOptions = {
  origin: '*', // Allow all origins or specify specific origins like 'http://localhost:8080'
};

exports.handler = async (event, context) => {

  try {
        const recipes = [
          {
            id: 1,
            name: "Masala Dosa",
            ingredients: ["Dosa Batter", "Potatoes", "Onions", "Green Chilies", "Mustard Seeds", "Curry Leaves"],
            steps: [
              "Prepare dosa batter",
              "Cook spiced potato filling",
              "Spread batter on a hot pan",
              "Fill dosa with potato masala and serve"
            ],
            cookingTime: "30 mins",
            image: "https://tse1.mm.bing.net/th?id=OIP.tgBEnGL82S1XlRWeIRqA4gHaEK&pid=Api&P=0&h=220"
          },
          {
            id: 2,
            name: "Sambar",
            ingredients: ["Toor Dal", "Tamarind", "Vegetables", "Sambar Powder", "Mustard Seeds", "Curry Leaves"],
            steps: [
              "Cook toor dal",
              "Prepare tamarind water",
              "Add vegetables, spices, and tamarind water",
              "Simmer and garnish with curry leaves"
            ],
            cookingTime: "40 mins",
            image: "https://tse1.mm.bing.net/th?id=OIP.YHh1_zM4EuZfHL_XnXfJcQHaGc&pid=Api&P=0&h=220"
          },
          {
            id: 3,
            name: "Idli",
            ingredients: ["Idli Batter", "Water", "Oil (for greasing)"],
            steps: [
              "Prepare idli batter (fermented rice and lentils)",
              "Pour batter into greased idli molds",
              "Steam for 10-12 minutes",
              "Serve with chutney and sambar"
            ],
            cookingTime: "15 mins",
            image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/idli-recipe-500x500.jpg"
          },
          {
            id: 4,
            name: "Vada",
            ingredients: ["Urad Dal", "Green Chilies", "Onions", "Curry Leaves", "Oil (for frying)"],
            steps: [
              "Soak urad dal and grind into a paste",
              "Mix with chilies, onions, and curry leaves",
              "Shape into donuts and deep fry",
              "Serve with chutney and sambar"
            ],
            cookingTime: "25 mins",
            image: "https://tse4.mm.bing.net/th?id=OIP.U-byr6AmPCFWq9q6Ay10VwHaE7&pid=Api&P=0&h=220"
          },
          {
            id: 5,
            name: "Pongal",
            ingredients: ["Rice", "Moong Dal", "Pepper", "Cumin", "Cashews", "Ghee"],
            steps: [
              "Cook rice and moong dal together",
              "Temper with spices and cashews in ghee",
              "Mix and serve hot",
              "Pair with chutney or sambar"
            ],
            cookingTime: "30 mins",
            image: "https://tse2.mm.bing.net/th?id=OIP.ff3K8IggGGjjcMM0kzj01QAAAA&pid=Api&P=0&h=220"
          },
          {
            id: 6,
            name: "Upma",
            ingredients: ["Rava (Semolina)", "Onions", "Green Chilies", "Mustard Seeds", "Curry Leaves"],
            steps: [
              "Roast rava until fragrant",
              "Prepare a tempered mixture with spices and onions",
              "Add water and cook rava until fluffy",
              "Serve hot with coconut chutney"
            ],
            cookingTime: "20 mins",
            image: "https://tse3.mm.bing.net/th?id=OIP.VrDBMojGiH6JaqqPjV4MiQHaHa&pid=Api&P=0&h=220"
          },
          {
            id: 7,
            name: "Chicken Chettinad",
            ingredients: [
              "Chicken",
              "Coconut",
              "Onions",
              "Tomatoes",
              "Chettinad Masala",
              "Curry Leaves"
            ],
            steps: [
              "Marinate chicken with turmeric and spices",
              "Prepare a masala paste with roasted spices and coconut",
              "Cook onions and tomatoes, add the masala paste",
              "Add chicken and cook until tender",
              "Garnish with curry leaves and serve with rice or parotta"
            ],
            cookingTime: "45 mins",
            image: "https://tse4.mm.bing.net/th?id=OIP.mtbhe2TpvszIll4ON_QF5wHaHa&pid=Api&P=0&h=220"
          },
          {
            id: 8,
            name: "Fish Fry",
            ingredients: [
              "Fish",
              "Turmeric Powder",
              "Chili Powder",
              "Garlic Paste",
              "Lemon Juice",
              "Oil"
            ],
            steps: [
              "Clean and marinate fish with spices, garlic paste, and lemon juice",
              "Let it rest for 30 minutes",
              "Heat oil in a pan and shallow fry the fish until crispy",
              "Serve hot with lemon wedges and onions"
            ],
            cookingTime: "30 mins",
            image: "https://tse2.mm.bing.net/th?id=OIP.TA_Axw5jHnh8K0InB-HOpQHaFj&pid=Api&P=0&h=220"
          },
          {
            id: 9,
            name: "Hyderabadi Biryani",
            ingredients: ["Basmati Rice", "Chicken/Goat Meat", "Yogurt", "Spices", "Saffron", "Fried Onions", "Mint", "Coriander"],
            steps: [
              "Marinate the meat with yogurt, spices, and herbs",
              "Cook partially boiled basmati rice",
              "Layer rice and marinated meat in a pot",
              "Seal the pot and cook on low heat (Dum) until done"
            ],
            cookingTime: "1 hr 30 mins",
            image: "https://tse4.mm.bing.net/th?id=OIP.FHJDPQCHkCaXpj5sSEf9vQHaE8&pid=Api&P=0&h=220"
          },
          {
            id: 10,
            name: "Kothu Parotta",
            ingredients: ["Parotta", "Eggs", "Chicken (optional)", "Onions", "Tomatoes", "Spices", "Curry Leaves"],
            steps: [
              "Shred parottas into small pieces",
              "Cook onions, tomatoes, and spices in a pan",
              "Add eggs and scrambled chicken (optional)",
              "Mix in shredded parottas and cook together"
            ],
            cookingTime: "40 mins",
            image: "https://tse3.mm.bing.net/th?id=OIP.hkYNM7AuX_xttwPCc00xRwHaFj&pid=Api&P=0&h=220"
          },
          {
            id: 11,
            name: "Gongura Mutton",
            ingredients: ["Mutton", "Gongura Leaves (Sour Spinach)", "Garlic", "Onions", "Green Chilies", "Spices"],
            steps: [
              "Cook mutton with spices until tender",
              "Saute gongura leaves separately with garlic and green chilies",
              "Combine cooked mutton and gongura mixture",
              "Simmer together for rich flavor"
            ],
            cookingTime: "1 hr",
            image: "https://www.fiahomefoods.com/uploads/products/fia-gongura-mutton_1669873554.jpg"
          },
          {
            id: 12,
            name: "Kerala Prawn Curry",
            ingredients: ["Prawns", "Coconut Milk", "Shallots", "Curry Leaves", "Green Chilies", "Tamarind", "Spices"],
            steps: [
              "Marinate prawns with turmeric and salt",
              "Saute shallots, chilies, and spices in coconut oil",
              "Add tamarind pulp and coconut milk to the mixture",
              "Cook prawns in the curry until tender"
            ],
            cookingTime: "40 mins",
            image: "https://tse2.mm.bing.net/th?id=OIP.s8G2lygC60D5bIshksG3tgHaHa&pid=Api&P=0&h=220"
          }

        ];

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',  // Allow all origins (you can restrict it to specific domains later)
      'Access-Control-Allow-Methods': 'GET',  // Allow only GET requests
      'Access-Control-Allow-Headers': 'Content-Type', // Allow Content-Type header
    },
    body: JSON.stringify(recipes),
  };
}
catch (error) {
  console.error('Error fetching recipes:', error);
  return {
    statusCode: 500,
    body: JSON.stringify({ message: 'Internal Server Error' }),
  };
}
};