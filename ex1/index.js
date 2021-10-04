"use strict";

window.onload = () => {
  console.log('page is fully loaded');

  const dishes = [];

  dishes.push({

    id: '1',
    name: 'Burger and french fries',
    price: '18',

  });

  dishes.push({

    id: '2',
    name: 'Steak and salade',
    price: '30',

  })

  dishes.push({

    id: '3',
    name: 'Falafel',
    price: '5',

  })


  console.log(dishes);

  document.getElementById("form").addEventListener('submit', event => {
    event.preventDefault();
    console.log("submit clicked");

    //get values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let order = document.getElementById("order").value

    //print on screen//
    // Literal object
    let orders = {
      name,
      email,
      order,
    }

    // function printing the order
    function printOrder(name, email, order) {
      let getOrder = `The order for the customer ${name} is the following: ${order}. The customer may be notified by email: ${email}`;
      console.log("function executed");

      document.getElementById("messages").innerHTML = getOrder;
    };

    printOrder(orders.name, orders.email, orders.order);



  })

}