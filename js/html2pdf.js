function downloadPDF(){
    var doc = new jsPDF('p', 'pt', 'letter');
    let elementHTML=$('#resume').html();
    let specialElementHandlers = {
        '#resume':function (element,renderer){
            return true;
        }
    };
    
    doc.fromHTML(elementHTML,15,15, {
        'width':170,
        'elementHandlers':specialElementHandlers
    });
    
    // save the pdf
    doc.save('asliddin\'s requestAnimationFrame.pdf')
}