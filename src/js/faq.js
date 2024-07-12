import Accordion from 'accordion-js';

export function initAccardionFaq() {
    new Accordion('.accordion-container', {
        openOnInit: [0],
      });
}