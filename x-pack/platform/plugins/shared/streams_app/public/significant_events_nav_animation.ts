/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

const STYLE_ID = 'sig-events-nav-icon-animation';
const NAV_ATTR = 'data-sig-events-nav';
const HREF_FRAGMENT = '/app/streams/_discovery';

/**
 * Injects a CSS transition for the scale bounce and attaches mousedown/mouseup
 * event handlers on every nav link that points to the Significant Events route.
 * A MutationObserver ensures the handlers are re-attached if the nav re-renders.
 *
 * Returns a cleanup function to be called on plugin stop.
 */
export function setupSignificantEventsNavAnimation(
  defaultIconUrl: string,
  activeIconUrl: string
): () => void {
  // --- CSS for the scale animation ------------------------------------------
  if (!document.getElementById(STYLE_ID)) {
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      [${NAV_ATTR}] img {
        transition: opacity 0.08s ease-out;
      }
      [${NAV_ATTR}].sig-events-pressed img {
        opacity: 0.75;
      }
    `;
    document.head.appendChild(style);
  }

  const attached = new WeakSet<Element>();

  const attach = () => {
    document.querySelectorAll<HTMLElement>(`a[href*="${HREF_FRAGMENT}"]`).forEach((el) => {
      if (attached.has(el)) return;
      attached.add(el);
      el.setAttribute(NAV_ATTR, 'true');

      const press = () => {
        const img = el.querySelector('img');
        if (img) img.src = activeIconUrl;
        el.classList.add('sig-events-pressed');
      };

      const release = () => {
        const img = el.querySelector('img');
        if (img) img.src = defaultIconUrl;
        el.classList.remove('sig-events-pressed');
      };

      el.addEventListener('mousedown', press);
      el.addEventListener('mouseup', release);
      // Revert if pointer leaves while held
      el.addEventListener('mouseleave', release);
      el.addEventListener('touchstart', press, { passive: true });
      el.addEventListener('touchend', release);
      el.addEventListener('touchcancel', release);
    });
  };

  attach();

  const observer = new MutationObserver(attach);
  observer.observe(document.body, { childList: true, subtree: true });

  return () => {
    observer.disconnect();
    document.getElementById(STYLE_ID)?.remove();
  };
}
