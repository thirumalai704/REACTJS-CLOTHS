const textileData = {
  orders: [
    {
      sno: 1,
      name: "Arun Textiles",
      location: "Tiruppur",
      mobile: "9876543210",
      products:"Denim Jeans"
        
      
    },
    {
      sno: 2,
      name: "Kumar Fabrications",
      location: "Erode",
      mobile: "9123456780",
      products: "Silk Saree"
        
      
    },
    {
      sno: 3,
      name: "Siva Cloth Mart",
      location: "Coimbatore",
      mobile: "9001122334",
      products: "Terry Cotto5005"
      
    },
    {
      sno: 4,
      name: "Devi Textiles",
      location: "Salem",
      mobile: "9898989898",
      products: "Printed Kuuct"
      
    },
    {
      sno: 5,
      name: "Ganesh Cloth Center",
      location: "Madurai",
      mobile: "9988776655",
      products: "Woolen Jacket",
      
    }
  ],

  lowStock: [
    { product: "Cotton Shirt", quantity: 12, code: "CT1001" },
    { product: "Denim Jeans", quantity: 5, code: "DJ2002" },
    { product: "Silk Saree", quantity: 9, code: "SS3003" },
    { product: "Formal Shirt", quantity: 7, code: "FS6006" },
    { product: "Chiffon Dupatta", quantity: 3, code: "CD9009" }
  ],

  expense: [
    {
      sno: "01",
      category: "Maintenance",
      subcategory: "Machine Repair",
      date: "2025-06-01",
      amount: 15000,
      status: "Paid"
    },
    {
      sno: "02",
      category: "Transport",
      subcategory: "Delivery Van Fuel",
      date: "2025-06-10",
      amount: 3500,
      status: "Pending"
    },
    {
      sno: "03",
      category: "Salary",
      subcategory: "Staff Wages",
      date: "2025-06-05",
      amount: 45000,
      status: "Paid"
    },
    {
      sno: "04",
      category: "Electricity",
      subcategory: "Monthly Bill",
      date: "2025-06-07",
      amount: 8000,
      status: "Paid"
    },
    {
      sno: "05",
      category: "Purchase",
      subcategory: "New Stock",
      date: "2025-06-12",
      amount: 22000,
      status: "Pending"
    }
  ]
};

export default textileData;
