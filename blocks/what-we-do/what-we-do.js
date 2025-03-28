import { fetchPlaceholders,getMetadata } from '../../scripts/aem.js';
const placeholders = await fetchPlaceholders(getMetadata("locale"));

export default function decorate(block) {
    const rows= [...block.children];
    [...block.children].forEach((row,r) => {
        if(r>0){
            row.classList.add('row');
        }
    });

}