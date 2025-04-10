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

    // adding video
   
    const hero = document.querySelector('.video-hero .row');
    const buttonContainer = document.querySelector('.button-container');

    if (buttonContainer) {
        const anchor = buttonContainer.querySelector('a');

        if (anchor && anchor.href) {
            const video = document.createElement('video');
            
            video.src = anchor.href;
            video.autoplay = true;
            video.muted = true;
            video.playsInline = true; // Important for mobile autoplay
        
            video.setAttribute('autoplay', '');
            video.setAttribute('muted', '');
            video.setAttribute('playsinline', '');
            video.setAttribute('loop', ''); 
            video.setAttribute('preload', 'auto');

            hero.replaceWith(video);
        }
    }


}