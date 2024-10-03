import { useEffect } from "react";

/* eslint-disable no-undef */

function YandexMetrica({ id }) {
  useEffect(() => {
    (function (m, e, t, r, i, k, a) {
      m[i] =
        m[i] ||
        function () {
          (m[i].a = m[i].a || []).push(arguments);
        };
      m[i].l = 1 * new Date();
      for (var j = 0; j < document.scripts.length; j++) {
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

    if (typeof ym !== "undefined") {
      ym(id, "init", {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
      });
    }

    return () => {
      const script = document.querySelector(
        `script[src="https://mc.yandex.ru/metrika/tag.js"]`
      );
      if (script) {
        script.remove();
      }
    };
  }, [id]);

  return null;
}

export default YandexMetrica;
