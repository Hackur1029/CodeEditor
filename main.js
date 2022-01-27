if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then(registeration => {
  }).catch(error => {
    console.log(error);
  })
}
window.onload = () => {
  setTimeout(()=>{
    $(".loader-box").fadeOut(100);
  },1000);
     $("#run").click(()=>{
       $(".pre-container").addClass("act");
        var res = document.getElementById("preview").contentWindow.document;
        res.open();
        res.write(eh.getValue());
        res.write("<style type='text/css'>" + ec.getValue() + "</style>");
        res.write("<script type='text/javascript'>" + es.getValue() + "</script>");
        res.close();
    });
    // html
    window.eh = ace.edit("htmleh");
    eh.setTheme("ace/theme/monokai");
    eh.session.setMode("ace/mode/html");
    eh.focus();
    eh.renderer.setScrollMargin(5,10,0,0)
    eh.setOptions({
        fontSize: '8pt',
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true,
        vScrollBarAlwaysVisible: false,
        copyWithEmptySelection: false
    });
    eh.setValue(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>`, 1);
   /* eh.getSession().on("change", function() {
        update();
    });*/
    eh.session.setUseWrapMode(true);
    // css
    window.ec = ace.edit("csseh");
    ec.setTheme("ace/theme/monokai");
    ec.session.setMode("ace/mode/css");
    ec.setOptions({
        fontSize: '8pt',
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true
    });
    ec.setValue(`* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}`, 1);
ec.renderer.setScrollMargin(5,10,0,0)
   /* ec.getSession().on("change", function() {
        update();
    });*/
    ec.session.setUseWrapMode(true);
    // javascript
    window.es = ace.edit("jseh");
    es.setTheme("ace/theme/monokai");
    es.session.setMode("ace/mode/javascript");
    es.setOptions({
        fontSize: '8pt',
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true
    });
    es.setValue(`// your javascript code`, 1);
   /* es.getSession().on("change", function() {
        update();
    });*/
    es.session.setUseWrapMode(true);
    es.renderer.setScrollMargin(5,10,0,0)
    // nav
}
$("#nav-btn").click(() => {
    $(".sidenav,.back").addClass("act");
});
$("#back-btn").click(() => {
    $(".sidenav,.back").removeClass("act");
});
// run
$("#close-pre").click(()=>{
    $(".pre-container").removeClass("act");
});
$(document).click((e)=>{
  if(e.target.id !== 'sidenav' && e.target.id !== 'nav-btn'){
    $(".sidenav,.back").removeClass("act")
  }
});
$("#about").click(()=>{
  $(".about-box").addClass("act");
});
$("#close-about").click(()=>{
  $(".about-box").removeClass("act")
})