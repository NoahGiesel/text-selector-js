 
    const textarea = document.getElementById("Textarea") ;


    function getSelectedText() { 
         alert(textarea) 
        if (window.getSelection) {
            return window.getSelection().toString();
        } else if (document.selection) {
            return document.selection.createRange().text;
        }
        return '';
    }
    var b = document.getElementsByTagName('body')[0],
        o = document.getElementById('output');
    b.onmouseup = function(e){
        var selText = getSelectedText(),
            targetElem = e.target.tagName.toLowerCase();
        if (selText && targetElem == 'p') {
            o.textContent = 'You selected the text: "' + selText + '" from a ' + targetElem + ' element.';
        }
    };