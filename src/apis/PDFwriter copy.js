import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { async } from 'regenerator-runtime';

export const editAndDownloadPDF = async (existingPdfUrl , ID , name , date) => {
  // Load the existing PDF file
  const existingPdfBytes = await fetch(existingPdfUrl).then((res) => res.arrayBuffer());

  // Create a new PDFDocument
  const pdfDoc = await PDFDocument.load(existingPdfBytes);

  // Edit the PDF - add text, modify existing content, etc.
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  // Add text to the first page
  //drawText(pages[0], pdfDoc , ID , 190 ,623.5, 15)
  drawText(pages[0], pdfDoc , date , 490 ,200, 15)
  //drawText(pages[0], pdfDoc , name + "," , 100 ,586.5, 15)

  // Serialize the modified PDF to bytes
  const modifiedPdfBytes = await pdfDoc.save();

  // Create a Blob from the modified PDF bytes
  const modifiedPdfBlob = new Blob([modifiedPdfBytes], { type: 'application/pdf' });

  // Create a download link and trigger the download
  const downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(modifiedPdfBlob);
  downloadLink.download = 'edited.pdf';
  downloadLink.click();
}

const drawText = async (firstPage ,pdfDoc , text , _x , _y , _size) => {
    firstPage.drawText(text.toString(), {
        x: _x,
        y: _y,
        size: _size,
        font: await pdfDoc.embedFont(StandardFonts.Helvetica),
        color: rgb(0, 0, 0), // Black color
      });
}
