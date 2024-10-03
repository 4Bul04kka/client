import { useEffect } from "react";

export function trackYandexMetricaGoal(id, goal) {
  if (typeof window.ym !== "undefined") {
    window.ym(id, "reachGoal", goal);
  } else {
    console.warn("Yandex Metrica is not loaded yet.");
  }
}

function YandexMetrica({ id }) {
  useEffect(() => {
    // Load Yandex Metrica script
    (function (m, e, t, r, i, k, a) {
      m[i] =
        m[i] ||
        function () {
          (m[i].a = m[i].a || []).push(arguments);
        };
      m[i].l = 1 * new Date();
      for (let j = 0; j < document.scripts.length; j++) {
        if (document.scripts[j].src === r) {
          return;
        }
      }
      k = e.createElement(t);
      a = e.getElementsByTagName(t)[0];
      k.async = 1;
      k.src = r;
      a.parentNode.insertBefore(k, a);
    })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    // Initialize Yandex Metrica
    if (typeof window.ym !== "undefined") {
      window.ym(id, "init", {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
      });
    }

    // Cleanup script when component unmounts
    return () => {
      const script = document.querySelector(
        `script[src="https://mc.yandex.ru/metrika/tag.js"]`
      );
      if (script) {
        script.remove();
      }
    };
  }, [id]);

  return null; // No visible UI component needed
}

export default YandexMetrica;
