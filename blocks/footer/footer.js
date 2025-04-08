import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = '';
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  block.append(footer);
  
// green text
  let paragraph = document.querySelectorAll('footer .footer .section')[1].querySelector('p');  
  let text = paragraph.innerHTML;
  let highlightedText = text.replace(/business growth/g, match => `<span class="text-green">${match}</span>`);
  paragraph.innerHTML = highlightedText;


  // adding nav and info link within the footer list
  let ulList = document.querySelectorAll('footer .footer .section')[1]
  ulList.classList.add('footer-nav-links');
  let secondUlList = document.querySelectorAll('footer .footer .section')[3]
  secondUlList.classList.add('footer-links');
  // nav links
  document.querySelectorAll('.footer-nav-links .default-content-wrapper > ul > li').forEach((li) => {
    const text = li.textContent.trim();
    const href = '/' + text.toLowerCase().replace(/\s+/g, '-'); 
    
    const a = document.createElement('a');
    a.href = href;
    a.textContent = text;
    a.setAttribute('aria-expanded', 'false');
  
    li.textContent = ''; 
    li.appendChild(a);
  });
  // info links
  document.querySelectorAll('.footer-links .default-content-wrapper > ul > li').forEach((li) => {
    const text = li.textContent.trim();
    const href = '/' + text.toLowerCase().replace(/\s+/g, '-'); 
    
    const a = document.createElement('a');
    a.href = href;
    a.textContent = text;
    a.setAttribute('aria-expanded', 'false');
  
    li.textContent = ''; 
    li.appendChild(a);
  });

}
