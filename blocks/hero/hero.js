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

    // Create the video element
    const video = document.createElement('video');
    video.src = '/../../icons/hero-video_small.mp4'; 
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true; // Important for mobile
    video.style.width = '100%';
    video.style.height = '500px';
    video.style.objectFit = 'cover';
    video.style.position = 'absolute';
    video.style.left = 0;
    video.style.zIndex = '-1';

    hero.replaceWith(video);

}