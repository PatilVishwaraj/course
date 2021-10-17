const lot = [
    {
      image: "images/Shirt1.jpg",
      name: "Comfy Men Vest",
      price: "₹374",
      discount: "₹100 discount on 1st order",
      delivery_charges: "Delivery ₹70",
      rating: "3.5",
    },
    {
      image: "images/Shirt2.jpg",
      name: "Comfy Designer Men Shirts",
      price: "₹399",
      discount: "₹100 discount on 1st order",
      delivery_charges: "Free Delivery",
      rating: "3.0",
    },
    {
      image: "images/Shirt3.jpg",
      name: "Trendy Fashionable Men Shirts",
      price: "₹477",
      discount: "₹100 discount on 1st order",
      delivery_charges: "Free Delivery",
      rating: "4.5",
    },
    {
      image: "images/Shirt4.jpg",
      name: "Cartoon Graffiti Printed Turn Down Collar",
      price: "₹369",
      discount: "₹100 discount on 1st order",
      delivery_charges: "Free Delivery",
      rating: "2.5",
    },
    {
      image: "images/Shirt5.jpg",
      name: "Fancy Glamorous Men Tshirts",
      price: "₹241",
      discount: "₹72 discount on 1st order",
      delivery_charges: "Free Delivery",
      rating: "3.6",
    },
    {
      image: "images/Shirt6.jpg",
      name: "Fancy Fashionista Men Shirts",
      price: "₹405",
      discount: "₹100 discount on 1st order",
      delivery_charges: "Free Delivery",
      rating: "3.5",
    },
    {
      image: "images/Shirt7.jpg",
      name: "Classic Fashionista Men Shirts",
      price: "₹373",
      discount: "₹100 discount on 1st order",
      delivery_charges: "Free Delivery",
      rating: "4.0",
    },
    {
      image: "images/Shirt8.jpg",
      name: "TaBudi Men's Cotton Full Sleeves Shirt",
      price: "₹540",
      discount: "₹100 discount on 1st order",
      delivery_charges: "Free Delivery",
      rating: "5.0",
    },
    {
      image: "images/Shirt9.jpg",
      name: "Men Shirt",
      price: "₹475",
      discount: "₹100 discount on 1st order",
      delivery_charges: "Free Delivery",
      rating: "4.7",
    },
    {
      image: "images/Shirt10.jpg",
      name: "Stylish Fashionable Men Shirts",
      price: "₹526",
      discount: "₹100 discount on 1st order",
      delivery_charges: "Free Delivery",
      rating: "4.3",
    },
    {
      image: "images/Shirt11.jpg",
      name: "Men's Regular Fit T-Shirt 100% Cotton",
      price: "₹473",
      discount: "₹100 discount on 1st order",
      delivery_charges: "Free Delivery",
      rating: "4.3",
    },
    {
      image: "images/Shirt12.jpg",
      name: "Stylish Designer Men Shirts",
      price: "₹363",
      discount: "₹100 discount on 1st order",
      delivery_charges: "Free Delivery",
      rating: "4.0",
    },
  ];
  const Shirts_JSON = JSON.stringify(lot);
  //store above data in local storage
  localStorage.setItem("My_lot", Shirts_JSON);
  //display on web page
  let My_lot = localStorage.getItem("My_lot");
  //convert JSON into object;
  mens_lot = JSON.parse(My_lot);
  //create elements in div






  
  function showProduct() {
    var prod_div = document.getElementById("Data");
    mens_lot.forEach(function (Product) {
      var div = document.createElement("div");
      var image = document.createElement("img");
      image.src = Product.image;
      var p_name = document.createElement("p");
      p_name.innerText = Product.name;
      var p_price = document.createElement("p");
      p_price.innerText = Product.price;
      var p_discount = document.createElement("p");
      p_discount.innerText = Product.discount;
      var p_d_charges = document.createElement("p");
      p_d_charges.innerText = Product.delivery_charges;
      var p_rating = document.createElement("p");
      p_rating.innerText = Product.rating;
      div.append(image, p_name, p_price, p_discount, p_d_charges, p_rating);
      prod_div.append(div);
    });
  }
  showProduct();