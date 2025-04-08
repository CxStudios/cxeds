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

}
