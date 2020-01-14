$.ajax({
  url: "https://api.getpostman.com/collections",
  type: "GET",
  headers: {
    "x-api-key": ""
  },
  success: function() {
    console.log("Success!");
  },
  error: function() {
    console.log("Failure!");
  }
});
