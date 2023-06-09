import { Component, ElementRef, ViewChild } from "@angular/core";
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';

@Component({
    selector : 'pdf-circuit-dashboard',
    templateUrl : './pdf-circuit-dashboard.html'
})
export class PDFCircuitDashboard {
    @ViewChild('pdfCircuit') pdfCircuit: ElementRef;
    tableData

    assetsHead = [
        { name : "Id", props : 'piping_circuit_id' },
        { name : "Name", props : 'piping_circuit_name' },
        { name : "Date In Service", props : 'date_in_service' },
        { name : "Class", props : 'class' },
    ]

    public generateData(data) {
      // return console.log (data)
        this.tableData = data
        setTimeout(() => {
            this.downloadAsPDF()
        }, 500);
    }

    public downloadAsPDF() {   
        pdfMake.tableLayouts = {
            exampleLayout: {
              hLineWidth: function (i, node) {
                if (i === 0 || i === node.table.body.length) {
                  return 0;
                }
                return (i === node.table.headerRows) ? 2 : 1;
              },
              vLineWidth: function (i) {
                return 0;
              },
              hLineColor: function (i) {
                return i === 1 ? 'black' : '#aaa';
              },
              paddingLeft: function (i) {
                return i === 0 ? 0 : 8;
              },
              paddingRight: function (i, node) {
                return (i === node.table.widths.length - 1) ? 0 : 8;
              }
            }
        };
        
        const pdfTable = this.pdfCircuit.nativeElement;
        let html = htmlToPdfmake(pdfTable.innerHTML);
    
        const documentDefinition = { 
          content: [
            html,
            {
                pageBreak: 'before', 
                text: 'Attachment\n', 
                style: {bold: true, fontSize: 16, color : '#5588EE'}, 
                pageOrientation: 'landscape'
            },
          ],
        //   images,
          pageBreakBefore: function(currentNode) {
            return currentNode.style && currentNode.style.indexOf('pdf-pagebreak-before') > -1;
          }
        };
    
        pdfMake.createPdf(documentDefinition).print();
    }
}