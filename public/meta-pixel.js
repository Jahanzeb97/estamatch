(function () {
  function track(eventName) {
    if (typeof window.fbq === "function") window.fbq("track", eventName);
  }

  function labelOf(el) {
    var text = (el.innerText || el.textContent || "").replace(/\s+/g, " ").trim();
    var aria = el.getAttribute("aria-label") || "";
    return (text + " " + aria).toLowerCase();
  }

  function hrefOf(el) {
    var href = el.getAttribute("href") || "";
    if (!href && el.href) href = String(el.href);
    return href;
  }

  document.addEventListener("click", function (event) {
    var target = event.target;
    if (!target || !target.closest) return;
    var el = target.closest("a, button");
    if (!el) return;
    var href = hrefOf(el);
    var label = labelOf(el);
    var isCalendly = /calendly\.com/i.test(href);
    var isBookDemo = label.indexOf("book a demo") !== -1;
    if (isCalendly || isBookDemo) track("Schedule");
  });

  var lastPath = location.pathname;
  function onRoute() {
    if (location.pathname === lastPath) return;
    lastPath = location.pathname;
    track("PageView");
  }

  var pushState = history.pushState;
  history.pushState = function () {
    pushState.apply(history, arguments);
    onRoute();
  };
  var replaceState = history.replaceState;
  history.replaceState = function () {
    replaceState.apply(history, arguments);
    onRoute();
  };
  window.addEventListener("popstate", onRoute);
})();
