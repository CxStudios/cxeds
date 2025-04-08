import { fetchPlaceholders,getMetadata } from '../../scripts/aem.js';
const placeholders = await fetchPlaceholders(getMetadata("locale"));

export default function decorate(block) {
    const rows= [...block.children];
    [...block.children].forEach((row,r) => {
        if(r==rows.length-1){
            row.classList.add('row');
        }
    });
    [...block.children].forEach((row,r) => {
        if(r==3){
            row.classList.add('description');
        }
    });
    let paragraph = document.querySelector(".description p");  
    if(paragraph)
    {
    let text = paragraph.innerHTML;
    let highlightedText = text.replace(/strategy|innovation|lean six sigma|for your business growth./g, match => `<span class="text-green">${match}</span>`);
    paragraph.innerHTML = highlightedText;
    }
}