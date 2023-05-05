var pname = document.getElementById("mem_name").value;
var config = {
      // replace the publicKey with yours
      "publicKey": "live_public_key_2ff739a57337486bb46e4d3d767e28e8",
      "productIdentity": "787",
      "productName": "Investment",
      "productUrl": "http://gameofthrones.wikia.com/wiki/Dragons",
      "paymentPreference": [
          "KHALTI",
        "EBANKING",
                "MOBILE_BANKING",
                "CONNECT_IPS",
                "SCT",
      ],
      "eventHandler": {
          onSuccess(payload) {
              // hit merchant api for initiating verification

              var subscription = document.getElementById('mem_name').textContent;
              var price = document.getElementById('price').textContent;
              var productRef = firebase.database().ref('membership_blaxer');
              productRef.push({ subscription: subscription, price: price });
              var x = document.getElementById("meat");
              if (x.style.display === "none") {
                  x.style.display = "block";
              } else {
                  x.style.display = "none";
              };

              alert('Payment successful!');
          },
          onError(error) {
              console.log(error);
          },
          onClose() {
              console.log('widget is closing');
          }
      }
  };

  var checkout = new KhaltiCheckout(config);

  // Handle Buy button click
  var buyBtns = document.querySelectorAll(".payment-button");
  for (var i = 0; i < buyBtns.length; i++) {
      buyBtns[i].addEventListener("click", function() {
          var price = this.getAttribute("data-price");
          checkout.show({ amount: price * 100 });
      });
  }
  // Check if the "visited" flag is set in localStorage
  if (localStorage.getItem("visited")) {
      // If the "visited" flag is set, delete it and fade out the body element
      localStorage.removeItem("visited");
      $("body").fadeOut(500, function() {
          // After the fade out effect is complete, redirect to "index.html"
          window.location.href = "index.html";
      });
  } else {
      // Otherwise, set the "visited" flag in localStorage
      localStorage.setItem("visited", true);
  }
