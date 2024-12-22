import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import { saveAs } from "file-saver";


export async function loadTemlate(filepath: RequestInfo) {
    const response = await fetch(filepath);
    if (!response.ok) {
      throw new Error("Failed to load template");
    }
    return await response.arrayBuffer();
}

export async function generateDocument(filepath: RequestInfo,data:object) {
    try {
        const templateContent = await loadTemlate(filepath);
        const zip = new PizZip(templateContent);
        const doc = new Docxtemplater(zip, {
          paragraphLoop: true,
          linebreaks: true,
        });
        
        doc.render(data); 
  
        const docxBlob = new Blob([doc.getZip().generate({ type: "arraybuffer" })], {
          type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        });
  
        return docxBlob;
      } catch (error) {
        console.error("Error generating document:", error);
        throw error;
      }
}


export async function handleFile(filepath: RequestInfo,data:object){
    try {
        const docxBlob = await generateDocument(filepath,data);
        saveAs(docxBlob, "output.docx");
      } catch (error) {
        console.error("Error during download process:", error);
      }
}

