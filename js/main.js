$(document).ready(function() {
  $('#fullpage').fullpage({
    verticalCentered: false
  });

    var scene = document.getElementById('scene');
    	var parallax = new Parallax(scene);
      var controller = new ScrollMagic.Controller();


/*      var controller = new ScrollMagic.Controller();
      /*TweenMax.staggerTo([img , document.getElementById("buto"), document.getElementById("nova"), document.getElementById("serv"), document.getElementById("total"), document.getElementById("letras"), document.getElementById("somos"), document.getElementById("dw"), document.getElementById("dwt"), document.getElementById("ec"), document.getElementById("ect"), document.getElementById("sm"), document.getElementById("smt"), document.getElementById("rdi"), document.getElementById("rdt"), document.getElementById("mantei"), document.getElementById("mantet"), document.getElementById("segui"), document.getElementById("segut")], 0.5,*/

          /*  var xx3 = TweenMax.staggerTo([], 0.5, {scale:0, opacity:0.0}, 0.1);
            var x = new ScrollMagic.Scene({
                          triggerElement: "#section0", // point of execution
                          duration: 0 // pin the element for a total of 400px
                        })
                        .setTween(xx3)
                        .addTo(controller)*/

      var tl = new TimelineLite();
      var numb = 0;

var sT = document.getElementById("servicioT");
var sText = document.getElementById("sText");
var sI = document.getElementById("sI");

var iT = document.getElementById("inovacionT");
var iText = document.getElementById("inovacionText");
var iI = document.getElementById("inovacionI");
var satT = document.getElementById("satisfaccionT");
var satText = document.getElementById("satisfaccionText");

var appS = document.getElementById("appS");
var carritoS = document.getElementById("carritoS");
var diseS = document.getElementById("diseS");
var codeS = document.getElementById("codeS");
var servicioS = document.getElementById("servicioS");
var socialS = document.getElementById("socialS");
var cerrar = document.getElementById("cerrar");
var contacto = document.getElementById("contacto");
var adan = document.getElementById("adan");
var chimp = document.getElementById("chimp");
var face = document.getElementById("face");
var link = document.getElementById("link");
var twitter = document.getElementById("twitter");



var xx3 = TweenMax.staggerTo([appS, carritoS, diseS, codeS, servicioS, socialS, contacto, adan, chimp, face, link, twitter, sT, sText,sI,iT, satT,iText,iI,satText], 0.1,
           {scale:0, opacity:0.0}, 0.1);
var x = new ScrollMagic.Scene({
              triggerElement: "#sec1", // point of execution
              duration: 0 // pin the element for a total of 400px
            })
            .setTween(xx3)
            .addTo(controller);
var y1 = new TimelineMax()
              .to([sT, sText, sI], 0.4, {delay:0.8, scale:1, opacity:1}, 0.3);

var xx4 = TweenMax.staggerTo([appS, carritoS, diseS, codeS, servicioS, socialS], 0.4,
                       {scale:1, opacity:1}, 0.3);

/*var xx5 = new TimelineMax()
              .to(appS, 0.2, {delay: 4, scale:1.4})
              .to(appS, 0.1, {scale:1})
              .to(carritoS, 0.2, {scale:1.4})
              .to(carritoS, 0.1, {scale:1})
              .to(diseS, 0.2, {scale:1.4})
              .to(diseS, 0.1, {scale:1})
              .to(codeS, 0.2, {scale:1.4})
              .to(codeS, 0.1, {scale:1})
              .to(servicioS, 0.2, {scale:1.4})
              .to(servicioS, 0.1, {scale:1})
              .to(socialS, 0.2, {scale:1.4})
              .to(socialS, 0.1, {scale:1});*/


 var x1 = new ScrollMagic.Scene({
                                     triggerElement: "#servi", // point of execution
                                     duration: 0 // pin the element for a total of 400px
                                   })
                                   .setTween(xx4)
                                   .addTo(controller);

  /* var x8 = new ScrollMagic.Scene({
                                        triggerElement: "#servi", // point of execution
                                        duration: 0 // pin the element for a total of 400px
                                      })
                                  .setTween(xx5)
                                  .addTo(controller);*/


    var xxconta = TweenMax.staggerTo([contacto,adan,chimp], 0.4,
                     {delay:0.4, scale:1, opacity:1}, 0.3);

var xxconta2 = TweenMax.staggerTo([twitter,link,face], 0.4,
                 {delay:0.7,scale:1, opacity:1}, 0.3);

var somosA = new  TimelineMax()
            .to(sT, 0.7, {delay:0.9, scale:1, opacity:1})
            .to(sText, 0.7, {delay:0.1,scale:1, opacity:1})
            .to(sI, 0.7, {delay:0.1,scale:1,opacity:1})
            .to(iT, 0.7, {delay:1.9,scale:1,opacity:1})
            .to(iText, 0.7, {delay:0.2,scale:1,opacity:1})
            .to(iI, 0.7, {delay:0.3,scale:1,opacity:1});

var somosAS = new ScrollMagic.Scene({
      triggerElement: "#nosott", // point of execution
      duration: 0 // pin the element for a total of 400px
              })
      .setTween(somosA)
      .addTo(controller);


/*sT, sText,sI,iT, satT,iText,iI,satText*/

  var xconta = new ScrollMagic.Scene({
            triggerElement: "#con", // point of execution
            duration: 0 // pin the element for a total of 400px
                      })
            .setTween(xxconta)
            .addTo(controller);

  var xconta2 = new ScrollMagic.Scene({
        triggerElement: "#con", // point of execution
            duration: 0 // pin the element for a total of 400px
                  })
          .setTween(xxconta2)
         .addTo(controller);



cerrar.onclick = function(){
  TweenMax.set("#titu", {delay:0.1, text:""});
  TweenMax.set("#contenido", {delay:0.1, text:""});
  TweenMax.set("#cerrar", {delay:0.1, text:""});
  if (numb==1) {
    TweenMax.staggerTo(["#carritoS","#diseS","#codeS","#servicioS","#socialS"], 0.2, { scale: 1}, 0.1);
    TweenMax.staggerTo("#appS", 0.9, { top:"6px"}, 0.1);
     $("#servi").css("background", "white");


  }
  if (numb==2) {
    TweenMax.staggerTo("#carritoS", 0.9, { top:"3px"}, 0.1);
    TweenMax.staggerTo("#carritoS", 0.9, { delay:0.8,  right:"-1px" }, 0.1);
    TweenMax.staggerTo(["#appS","#diseS","#codeS","#servicioS","#socialS"], 0.2, {delay:1.2, scale: 1}, 0.1);



  }
  if (numb==3) {
    TweenMax.staggerTo(["#appS","#carritoS","#codeS","#servicioS","#socialS"], 0.2, {delay:1.2, scale: 1}, 0.1);
    TweenMax.staggerTo("#diseS", 0.9, { top:"4px"}, 0.1);
    TweenMax.staggerTo("#diseS", 0.9, { delay:0.8,  right:"-1px" }, 0.1);


  }
  if (numb==4) {
    TweenMax.staggerTo(["#appS","#carritoS","#diseS","#servicioS","#socialS"], 0.2, { delay:1.3, scale: 1}, 0.1);
    TweenMax.staggerTo("#codeS", 0.9, { top:"2px"}, 0.1);
    TweenMax.staggerTo("#codeS", 0.9, { delay:1,  right:"-1px" }, 0.1);


  }
  if (numb==5) {
    TweenMax.staggerTo(["#appS","#carritoS","#diseS","#codeS","#socialS"], 0.2, {delay:1.3, scale: 1}, 0.1);
    TweenMax.staggerTo("#servicioS", 0.9, { top:"-1px"}, 0.1);
    TweenMax.staggerTo("#servicioS", 0.9, { delay:1,  right:"-1px" }, 0.1);


  }
  if (numb==6) {
    TweenMax.staggerTo(["#appS","#carritoS","#diseS","#codeS","#servicioS"], 0.2, {delay:1.3, scale: 1}, 0.1);
    TweenMax.staggerTo("#socialS", 0.9, { top:"-3px"}, 0.1);
    TweenMax.staggerTo("#socialS", 0.9, { delay:1,  right:"-1px" }, 0.1);


  }
  };

appS.onclick = function(){
  TweenMax.staggerTo("#appS", 0.2, { scale: 1}, 0.1);
  TweenMax.staggerTo(["#carritoS","#diseS","#codeS","#servicioS","#socialS"], 0.2, { scale: 0}, 0.1);
  TweenMax.set("#titu", {delay:0.1, text:"Desarrollo Web"})
  TweenMax.set("#contenido", {delay:0.1, text:"desarrollo contenido desarrollo contenido desarrollo contenido desarrollo contenido desarrollo contenido desarrollo contenido desarrollo contenido desarrollo contenido desarrollo contenido desarrollo contenido"})
  TweenMax.set("#cerrar", {delay:2.3, text:"Cerrar X"})

  TweenMax.staggerTo("#appS", 0.9, { top:-175}, 0.1);
  numb = 1;
  /*document.getElementById("servi").setAttribute(
   "style", "background-size:cover;background-repeat:no-repeat");*/
  $("#servi").css("background-image", "url(http://blogvecindad.com/imagenes/2013/07/01_Responsive_web_design.jpg)")

   /*tl.set("#cara", {text:"Desarrollo Web"})*/
};

appS.onmouseover = function(){
    TweenMax.staggerTo("#appS", 0.2, { scale: 1.4}, 0.1);
   /*tl.set("#cara", {text:"Desarrollo Web"})*/
};
appS.onmouseout = function(){
  TweenMax.staggerTo("#appS", 0.2, { scale: 1}, 0.1);
   /*tl.set("#cara", {text:"Desarrollo Web"})*/
};
carritoS.onclick = function(){
  TweenMax.staggerTo("#carritoS", 0.2, { scale: 1}, 0.1);
  TweenMax.staggerTo(["#appS","#diseS","#codeS","#servicioS","#socialS"], 0.2, { scale: 0}, 0.1);
  TweenMax.staggerTo("#carritoS", 1.2, { right:"19%"}, 0.1);
  TweenMax.staggerTo("#carritoS", 1.2, { delay:1.2, top:"-225px"}, 0.1);



  TweenMax.set("#titu", {delay:2.7, text:"e Comerce"})
  TweenMax.set("#contenido", {delay:2.8, text:"desarrollo contenido desarrollo contenido desarrollo contenido desarrollo contenido desarrollo contenido desarrollo contenido desarrollo contenido desarrollo contenido desarrollo contenido desarrollo contenido"})
  TweenMax.set("#cerrar", {delay:5.9, text:"Cerrar X"})
  numb = 2;
   /*tl.set("#cara", {text:"Desarrollo Web"})*/
};
carritoS.onmouseover = function(){
  TweenMax.staggerTo("#carritoS", 0.2, { scale: 1.4}, 0.1);

   /*tl.set("#cara", {text:"Desarrollo Web"})*/
};
carritoS.onmouseout = function(){
  TweenMax.staggerTo("#carritoS", 0.2, { scale: 1}, 0.1);
   /*tl.set("#cara", {text:"Desarrollo Web"})*/
};

diseS.onclick = function(){
  TweenMax.staggerTo("#diseS", 0.2, { scale: 1}, 0.1);
  TweenMax.staggerTo(["#appS","#carritoS","#codeS","#servicioS","#socialS"], 0.2, { scale: 0}, 0.1);
  TweenMax.staggerTo("#diseS", 1.2, { right:"34%"}, 0.1);
  TweenMax.staggerTo("#diseS", 1.2, { delay:1.2, top:"-225px"}, 0.1);



  TweenMax.set("#titu", {delay:2.4, text:"Diseño"})
  TweenMax.set("#contenido", {delay:2.6, text:"desarrollo contenido desarrollo contenido desarrollo contenido desarrollo contenido desarrollo contenido desarrollo contenido desarrollo contenido desarrollo contenido desarrollo contenido desarrollo contenido"})
  TweenMax.set("#cerrar", {delay:6.9, text:"Cerrar X"})
  numb = 3;
   /*tl.set("#cara", {text:"Desarrollo Web"})*/
};
diseS.onmouseover = function(){
  TweenMax.staggerTo("#diseS", 0.2, { scale: 1.4}, 0.1);
   /*tl.set("#cara", {text:"Desarrollo Web"})*/
};
diseS.onmouseout = function(){
  TweenMax.staggerTo("#diseS", 0.2, { scale: 1}, 0.1);
   /*tl.set("#cara", {text:"Desarrollo Web"})*/
};
codeS.onclick = function(){
  TweenMax.staggerTo("#codeS", 0.2, { scale: 1}, 0.1);
  TweenMax.staggerTo(["#appS","#carritoS","#diseS","#servicioS","#socialS"], 0.2, { scale: 0}, 0.1);
  TweenMax.staggerTo("#codeS", 1.2, { right:"50%"}, 0.1);
  TweenMax.staggerTo("#codeS", 1.2, { delay:1.2, top:"-225px"}, 0.1);



  TweenMax.set("#titu", {delay:2.4, text:"Desarrollo de software"})
  TweenMax.set("#contenido", {delay:2.6, text:"desarrollo contenido desarrollo contenido desarrollo contenido desarrollo contenido desarrollo contenido desarrollo contenido desarrollo contenido desarrollo contenido desarrollo contenido desarrollo contenido"})
  TweenMax.set("#cerrar", {delay:6.9, text:"Cerrar X"})
  numb = 4;

};
codeS.onmouseover = function(){
  TweenMax.staggerTo("#codeS", 0.2, { scale: 1.4}, 0.1);
   /*tl.set("#cara", {text:"Desarrollo Web"})*/
};
codeS.onmouseout = function(){
  TweenMax.staggerTo("#codeS", 0.2, { scale: 1}, 0.1);
   /*tl.set("#cara", {text:"Desarrollo Web"})*/
};
servicioS.onclick = function(){
  TweenMax.staggerTo("#servicioS", 0.2, { scale: 1}, 0.1);
  TweenMax.staggerTo(["#appS","#carritoS","#diseS","#codeS","#socialS"], 0.2, { scale: 0}, 0.1);
  TweenMax.staggerTo("#servicioS", 1.2, { right:"65%"}, 0.1);
  TweenMax.staggerTo("#servicioS", 1.2, { delay:1.2, top:"-225px"}, 0.1);



  TweenMax.set("#titu", {delay:2.4, text:"Servicio tecnico"})
  TweenMax.set("#contenido", {delay:2.6, text:"desarrollo contenido desarrollo contenido desarrollo contenido desarrollo contenido desarrollo contenido desarrollo contenido desarrollo contenido desarrollo contenido desarrollo contenido desarrollo contenido"})
  TweenMax.set("#cerrar", {delay:6.9, text:"Cerrar X"})
  numb = 5;
}
servicioS.onmouseover = function(){
  TweenMax.staggerTo("#servicioS", 0.2, { scale: 1.4}, 0.1);
   /*tl.set("#cara", {text:"Desarrollo Web"})*/
};

servicioS.onmouseout = function(){
  TweenMax.staggerTo("#servicioS", 0.2, { scale: 1}, 0.1);
   /*tl.set("#cara", {text:"Desarrollo Web"})*/
};
socialS.onclick = function(){
  TweenMax.staggerTo("#socialS", 0.2, { scale: 1}, 0.1);
  TweenMax.staggerTo(["#appS","#carritoS","#diseS","#codeS","#servicioS"], 0.2, { scale: 0}, 0.1);
  TweenMax.staggerTo("#socialS", 1.2, { right:"82%"}, 0.1);
  TweenMax.staggerTo("#socialS", 1.2, { delay:1.2, top:"-225px"}, 0.1);



  TweenMax.set("#titu", {delay:2.4, text:"Servicio tecnico"})
  TweenMax.set("#contenido", {delay:2.6, text:"desarrollo contenido desarrollo contenido desarrollo contenido desarrollo contenido desarrollo contenido desarrollo contenido desarrollo contenido desarrollo contenido desarrollo contenido desarrollo contenido"})
  TweenMax.set("#cerrar", {delay:6.9, text:"Cerrar X"})
  numb = 6;
};
socialS.onmouseover = function(){
  TweenMax.staggerTo("#socialS", 0.2, { scale: 1.4}, 0.1);
   /*tl.set("#cara", {text:"Desarrollo Web"})*/
};
socialS.onmouseout = function(){
  TweenMax.staggerTo("#socialS", 0.2, { scale: 1}, 0.1);
   /*tl.set("#cara", {text:"Desarrollo Web"})*/
};



});
