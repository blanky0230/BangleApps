const bulba = {
  width: 35, height: 33, bpp: 8,
  transparent: 254,
  buffer: require("heatshrink").decompress(atob("/wAZqobaEAtVwpAXrYACDwIgCAwVbEaYXB2AAEwoABreFESggGAAQrBEgVVEQ8Hg4hNg8ANYRHEEQ85x2OEgUyAA4LBx1kgBrGNI4iCxwZBAgQABsgABEAIGCERIjFEQIkDAAM5AAIjCFAgiHaY85IIohCFQRHCAAU5EYYiFEYghLERQhCEQJGGERCNEAwIiFEIpGFYQIXBEgggDW4Os1kHEwQjBEIoiFg+7UoRGEEIe7tvXEYIiDg4gDERrPEEQnXERQhCEQJZB3fXQoaKEnILBtpGCEQQmBEYgiFCgIiBRgyEBBYPC4QiEmQlCEIytBsg3BYgbsFBYIiBEIYAEg5IERQUAD44nIMoQkHEIYiBTIQWCAQJOBAAkyGYMAM4hECAYQhCEYaiCDpEA64dDI4giBEYYiDEYQ0BEgIAHEJBGFEYxZEtu7VAIABEAgPDagoiIEgoAGNYTzGJoyNEWYgAHZQwaCRowiGaATUBdQzfDZQawHEQ3+LAIjDCwgCBEYYiWRAhLDEQ5vEEIxpEDAQPCD4YiDYQI2BAIYiIIwIWBEQ4sDBAUH1gBEEJEH64BCGIitBFYxGBAAYhIB5IrE64ZLACI7PAAQA=="))
};

(function () {
  return {
    name: "Bangle",
    items: [
      {
        name: "itm1",
        get: function () {
          return {
            text: " ",
            // v : 10, min : 0, max : 100, - optional
            img: bulba
          };
        },
        show: function () { },
        hide: function () { },
        // run : function() {} optional (called when tapped)
      }
    ]
  };
}); // must not have a semi-colon!