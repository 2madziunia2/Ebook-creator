function toggleEditor() {
    var theText = document.getElementById('textt');
    var theEditor = document.getElementById('ta1');
    var editorArea = document.getElementById('edit');
  
    //set text in text div to textarea
    //correct line breaks, prevent HTML injection
    var subject = theText.innerHTML;
    subject = subject.replace(new RegExp("<br />", "gi"), 'n');
    subject = subject.replace(new RegExp("<br />", "gi"), 'n');
    subject = subject.replace(new RegExp("<", "gi"), '<');
    subject = subject.replace(new RegExp(">", "gi"), '>');
    theEditor.value = subject;
  
    //hide text, show editor
    theText.style.display = 'none';
    editorArea.style.display = 'inline';
 }
 function doEdit() {
    var theText = document.getElementById('textt');
    var theEditor = document.getElementById('ta1');
    var editorArea = document.getElementById('edit');
  
    //this is where you would call your AJAX update script
    //e.g., doXMLRequest(data);
    //you probably want to make your DB update BEFORE converting for display
  
    //set text to be value in editor
    //correct line breaks, prevent HTML injection
    var subject = theEditor.value;
    subject = subject.replace(new RegExp("<", "g"), '<');
    subject = subject.replace(new RegExp(">", "g"), '>');
    subject = subject.replace(new RegExp("n", "g"), '<br />');
    theText.innerHTML = subject;
  
    //hide editor, show text
    theText.style.display = 'inline';
    editorArea.style.display = 'none';
 }