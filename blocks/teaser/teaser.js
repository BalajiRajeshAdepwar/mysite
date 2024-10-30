import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const teaserMeta = getMetadata('teaser');
  const teaserPath = teaserMeta ? new URL(teaserMeta, window.location).pathname : '/teaser';
  const fragment = await loadFragment(teaserPath);

  // decorate footer DOM
  block.textContent = '';
  const teaser = document.createElement('div');
  while (fragment.firstElementChild) teaser.append(fragment.firstElementChild);

  block.append(teaser);
}
