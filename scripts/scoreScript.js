document.addEventListener("DOMContentLoaded", () => {
  console.log("dom loaded message", "scores loaded");

  console.log(`here's the cookie`, document.cookie); 

  //todo: get the user name
  $('#btnSaveUserName').on('click', ()=>{
    let $userName = $('#userName').val(); 
    console.log("user name entered:", $userName); 
    
    $('#userName').val('seinfeld'); 
    $userName = $('#userName').val(); 
     console.log("user name set by code: ", $userName); 

    // $('body').append('<br><p>Welcome, ' + $userName + '</p>');

    $('body').append(`<br><p>Welcome, ${$userName} </p>`);

    // Set a cookie 
    document.cookie = `userName = ${$userName}`; 
    // Read cookies 
    console.log(`here's the cookie`, document.cookie); 
    // // Delete a cookie 
    // document.cookie = "theme=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

  })


  //todo: record the score

  //todo: reset the game. 

});