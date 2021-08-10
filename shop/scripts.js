<script src="https://www.paypal.com/sdk/js?client-id=AZxMuAwZzWeqb1KpVKvQltAONu8UVT3__HjFictayL4kLQs-h0lw30YVfPBLoKiLZxZ1eVeW-PWLKwTV&vault=true&intent=subscription&enable-funding=venmo&currency=USD" data-sdk-integration-source="button-factory"></script>
    
    function initPayPalButton() {
      paypal.Buttons(
          
      {
        style: {
          shape: 'rect',
          color: 'blue',
          layout: 'vertical',
          label: 'buynow',
          
        },

        createOrder: function(data, actions) {
          return actions.order.create({
            purchase_units: [{"amount":{"currency_code":"USD","value":320,"breakdown":{"item_total":{"currency_code":"USD","value":300},"shipping":{"currency_code":"USD","value":20},"tax_total":{"currency_code":"USD","value":0}}}}]
          });
        },

        onApprove: function(data, actions) {
          return actions.order.capture().then(function(orderData) {
            
            // Full available details
            console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

            // Show a success message within this page, e.g.
            const element = document.getElementById('paypal-button-container');
            element.innerHTML = '';
            element.innerHTML = '<h3>Thank you for your payment!</h3>';

            // Or go to another URL:  actions.redirect('thank_you.html');
            
          });
        },

        onError: function(err) {
          console.log(err);
        }
      }).render('#paypal-button-container');
    }

    initPayPalButton();


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function initPayPalButton2() {
      paypal.Buttons(
          
      {
        style: {
          shape: 'rect',
          color: 'blue',
          layout: 'vertical',
          label: 'buynow',
          
        },

        createOrder: function(data, actions) {
          return actions.order.create({
            purchase_units: [{"amount":{"currency_code":"USD","value":320,"breakdown":{"item_total":{"currency_code":"USD","value":300},"shipping":{"currency_code":"USD","value":20},"tax_total":{"currency_code":"USD","value":0}}}}]
          });
        },

        onApprove: function(data, actions) {
          return actions.order.capture().then(function(orderData) {
            
            // Full available details
            console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

            // Show a success message within this page, e.g.
            const element = document.getElementById('paypal-button-container');
            element.innerHTML = '';
            element.innerHTML = '<h3>Thank you for your payment!</h3>';

            // Or go to another URL:  actions.redirect('thank_you.html');
            
          });
        },

        onError: function(err) {
          console.log(err);
        }
      }).render('#paypal-button-container-2');
    }

    initPayPalButton2();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function initPayPalButton3() {
    paypal.Buttons(
        
    {
      style: {
        shape: 'rect',
        color: 'blue',
        layout: 'vertical',
        label: 'buynow',
        
      },

      createOrder: function(data, actions) {
        return actions.order.create({
          purchase_units: [{"amount":{"currency_code":"USD","value":320,"breakdown":{"item_total":{"currency_code":"USD","value":300},"shipping":{"currency_code":"USD","value":20},"tax_total":{"currency_code":"USD","value":0}}}}]
        });
      },

      onApprove: function(data, actions) {
        return actions.order.capture().then(function(orderData) {
          
          // Full available details
          console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

          // Show a success message within this page, e.g.
          const element = document.getElementById('paypal-button-container');
          element.innerHTML = '';
          element.innerHTML = '<h3>Thank you for your payment!</h3>';

          // Or go to another URL:  actions.redirect('thank_you.html');
          
        });
      },

      onError: function(err) {
        console.log(err);
      }
    }).render('#paypal-button-container-3');
  }

  initPayPalButton3();

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function initPayPalButton4() {
    paypal.Buttons(
        
    {
      style: {
        shape: 'rect',
        color: 'blue',
        layout: 'vertical',
        label: 'buynow',
        
      },

      createOrder: function(data, actions) {
        return actions.order.create({
          purchase_units: [{"amount":{"currency_code":"USD","value":320,"breakdown":{"item_total":{"currency_code":"USD","value":300},"shipping":{"currency_code":"USD","value":20},"tax_total":{"currency_code":"USD","value":0}}}}]
        });
      },

      onApprove: function(data, actions) {
        return actions.order.capture().then(function(orderData) {
          
          // Full available details
          console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

          // Show a success message within this page, e.g.
          const element = document.getElementById('paypal-button-container');
          element.innerHTML = '';
          element.innerHTML = '<h3>Thank you for your payment!</h3>';

          // Or go to another URL:  actions.redirect('thank_you.html');
          
        });
      },

      onError: function(err) {
        console.log(err);
      }
    }).render('#paypal-button-container-4');
  }

  initPayPalButton4();

  function initPayPalButton5() {
    paypal.Buttons(
        
    {
      style: {
        shape: 'rect',
        color: 'blue',
        layout: 'vertical',
        label: 'buynow',
        
      },

      createOrder: function(data, actions) {
        return actions.order.create({
          purchase_units: [{"amount":{"currency_code":"USD","value":320,"breakdown":{"item_total":{"currency_code":"USD","value":300},"shipping":{"currency_code":"USD","value":20},"tax_total":{"currency_code":"USD","value":0}}}}]
        });
      },

      onApprove: function(data, actions) {
        return actions.order.capture().then(function(orderData) {
          
          // Full available details
          console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

          // Show a success message within this page, e.g.
          const element = document.getElementById('paypal-button-container');
          element.innerHTML = '';
          element.innerHTML = '<h3>Thank you for your payment!</h3>';

          // Or go to another URL:  actions.redirect('thank_you.html');
          
        });
      },

      onError: function(err) {
        console.log(err);
      }
    }).render('#paypal-button-container-5');
  }

  initPayPalButton5();


  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function initPayPalButton6() {
    paypal.Buttons(
        
    {
      style: {
        shape: 'rect',
        color: 'blue',
        layout: 'vertical',
        label: 'buynow',
        
      },

      createOrder: function(data, actions) {
        return actions.order.create({
          purchase_units: [{"amount":{"currency_code":"USD","value":320,"breakdown":{"item_total":{"currency_code":"USD","value":300},"shipping":{"currency_code":"USD","value":20},"tax_total":{"currency_code":"USD","value":0}}}}]
        });
      },

      onApprove: function(data, actions) {
        return actions.order.capture().then(function(orderData) {
          
          // Full available details
          console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

          // Show a success message within this page, e.g.
          const element = document.getElementById('paypal-button-container');
          element.innerHTML = '';
          element.innerHTML = '<h3>Thank you for your payment!</h3>';

          // Or go to another URL:  actions.redirect('thank_you.html');
          
        });
      },

      onError: function(err) {
        console.log(err);
      }
    }).render('#paypal-button-container-6');
  }

  initPayPalButton6();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function initPayPalButton7() {
  paypal.Buttons(
      
  {
    style: {
      shape: 'rect',
      color: 'blue',
      layout: 'vertical',
      label: 'buynow',
      
    },

    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{"amount":{"currency_code":"USD","value":320,"breakdown":{"item_total":{"currency_code":"USD","value":300},"shipping":{"currency_code":"USD","value":20},"tax_total":{"currency_code":"USD","value":0}}}}]
      });
    },

    onApprove: function(data, actions) {
      return actions.order.capture().then(function(orderData) {
        
        // Full available details
        console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

        // Show a success message within this page, e.g.
        const element = document.getElementById('paypal-button-container');
        element.innerHTML = '';
        element.innerHTML = '<h3>Thank you for your payment!</h3>';

        // Or go to another URL:  actions.redirect('thank_you.html');
        
      });
    },

    onError: function(err) {
      console.log(err);
    }
  }).render('#paypal-button-container-7');
}

initPayPalButton7();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function initPayPalButton8() {
  paypal.Buttons(
      
  {
    style: {
      shape: 'rect',
      color: 'blue',
      layout: 'vertical',
      label: 'buynow',
      
    },

    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{"amount":{"currency_code":"USD","value":320,"breakdown":{"item_total":{"currency_code":"USD","value":300},"shipping":{"currency_code":"USD","value":20},"tax_total":{"currency_code":"USD","value":0}}}}]
      });
    },

    onApprove: function(data, actions) {
      return actions.order.capture().then(function(orderData) {
        
        // Full available details
        console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

        // Show a success message within this page, e.g.
        const element = document.getElementById('paypal-button-container');
        element.innerHTML = '';
        element.innerHTML = '<h3>Thank you for your payment!</h3>';

        // Or go to another URL:  actions.redirect('thank_you.html');
        
      });
    },

    onError: function(err) {
      console.log(err);
    }
  }).render('#paypal-button-container-4');
}

initPayPalButton8();