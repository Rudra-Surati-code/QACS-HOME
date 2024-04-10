$(".mode").click(() => {
  if(localStorage.getItem("dark") === "false") {
    $(".cl").removeClass("fa-sun");
    $(".cl").addClass("fa-moon");
    localStorage.setItem("dark", "true")
    darkedMode(true)
  } else {
    $(".cl").addClass("fa-sun");
    $(".cl").removeClass("fa-moon");
    localStorage.setItem("dark", "false")
    darkedMode(false)
  }
})

const check = () => {
  if(localStorage.getItem("dark") === "true") {
    $(".cl").removeClass("fa-sun");
    $(".cl").addClass("fa-moon");
    darkedMode(true)
  } else {
    $(".cl").addClass("fa-sun");
    $(".cl").removeClass("fa-moon");
    localStorage.setItem("dark", "false")
    darkedMode(false)
  }
  $(".loader").addClass("d-none");
}

const showNav = () => {
  if($(".hamBurger").hasClass("show")) {
      $(".navigation").animate({position: "absolute", top: "-100vh"})
      $('.hamBurger').removeClass("show")
  } else {
      $(".navigation").animate({position: "absolute", top: "12vh"})
      $('.hamBurger').addClass("show")
  }
}

const darkedMode = (isTrue) => {
  if(isTrue == true) {
      $("body").css({background: "#000"})
      $(".loader").css({background: "#000"})
      $(".toggle-button-cover").css({background: "#000"})
      $(".switch").css({background: "#fff"})
      $(".navTools").css({background: "#000"})
      $(".more").css({background: "#000"})
      $(".mode").css({color: "#fff"})
      $(".navbtn").css({color: "#fff"})
      $(".text").css({color: "#fff"})
      $(".close").css({color: "#fff"})
      $(".chh1").css({color: "#fff"})
      $(".chp").css({color: "#fff"})
      $(".cht1").css({color: "#fff"})
      $(".students").css({color: "#000"})
      $(".cht2").css({color: "#fff"})
      $(".ntbtn").css({color: "#fff"})
      $(".hamBurger").css({color: "#fff"})
      $(".round").css({border: "1px solid #fff"})
      $(".switchOutline").css({border: "1px solid #fff"})
      $(".admission").css({color: "#000", background: "#fff"})
      $(".navigation").css({ background: "#000"})
      $(".students").css({backgroundColor: "#fff"})
  } else if(isTrue == false) {
      $("body").css({background: "#fff"})
      $(".switch").css({background: "#000"})
      $(".students").css({color: "#fff"})
      $(".loader").css({background: "#fff"})
      $(".more").css({background: "#fff"})
      $(".navTools").css({background: "#fff"})
      $(".navbtn").css({color: "#000"})
      $(".mode").css({color: "#000"})
      $(".text").css({color: "#000"})
      $(".close").css({color: "#000"})
      $(".ntbtn").css({color: "#000"})
      $(".hamBurger").css({color: "#000"})
      $(".round").css({border: "1px solid #000"})
      $(".switchOutline").css({border: "1px solid #000"})
      $(".admission").css({color: "#fff", background: "#000"})
      $(".navigation").css({ background: "#fff"})
      $(".chh1").css({color: "#000"})
      $(".students").css({backgroundColor: "#000"})
      $(".chp").css({color: "#000"})
      $(".cht1").css({color: "#000"})
      $(".cht2").css({color: "#000"})
  }
}

$(".close").click(() => {
  $(".home").addClass("d-none");
  $(".au").addClass("d-none");
  $(".bb").addClass("d-none");
  $(".aca").addClass("d-none");
  $(".act").addClass("d-none");
  $(".mag").addClass("d-none");
  $(".other").addClass("d-none");
  $(".navTools").animate({left: "-101%"})
})

$(".geo").click(() => {
  $(".geo").addClass("ins");
  $(".faci").removeClass("ins");
  $(".des").html("The academy is situated at Vadadla Village on NH-8. Built up on a 4 acre land, the well-maintained school building is of two-storey, sectioned into two blocks (Primary and Secondary) having four different gateways, each leading to the main gate of the school.");
})

$(".faci").click(() => {
  $(".faci").addClass("ins");
  $(".geo").removeClass("ins");
  $(".des").html("Emphasis has been put upon making provisions for perfect amenities and facilities within school environment, prioritizing the needs and requirements of the students. These include big ventilated classrooms, CCTV Surveillance, playgrounds, basketball courts, skating rink, football ground, abundant greenery, stage, sports complex, garden, pure drinking water, generator, fenced boundary walls and so on.");
})

$(".hbtn").click(() => {
  $(".navTools").animate({left: "0%"})
  $(".home").removeClass("d-none");
})

$(".aubtn").click(() => {
  $(".navTools").animate({left: "0%"})
  $(".au").removeClass("d-none");
})

$(".bbbtn").click(() => {
  $(".navTools").animate({left: "0%"})
  $(".bb").removeClass("d-none");
})

$(".acabtn").click(() => {
  $(".navTools").animate({left: "0%"})
  $(".aca").removeClass("d-none");
})

$(".actbtn").click(() => {
  $(".navTools").animate({left: "0%"})
  $(".act").removeClass("d-none");
})

$(".magbtn").click(() => {
  $(".navTools").animate({left: "0%"})
  $(".mag").removeClass("d-none");
})

$(".othbtn").click(() => {
  $(".navTools").animate({left: "0%"})
  $(".other").removeClass("d-none");
})