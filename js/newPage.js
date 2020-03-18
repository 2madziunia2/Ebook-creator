function myFunction() {
    var elmnt = document.getElementById("paper");
    var form = document.getElementById("f1");
    var cln = elmnt.cloneNode(true);
    cln.class ="paper";
    cln.textContent="lal";
    //cln.after("paper");
    document.body.append(cln);
    //document.body.cha1.appendChild(lcn);
    var list = document.getElementById("cha1");    // Get the <ul> element to insert a new node
     list.insertBefore(cln, f1); 
  //  console.log("efdsf");
  }