!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),o=document.querySelector("body");t.addEventListener("click",(function(){e.removeAttribute("disabled",!1),t.setAttribute("disabled",!0),interval=setInterval((function(){o.style.backgroundColor=(console.log("#".concat(Math.floor(16777215*Math.random()).toString(16))),"#".concat(Math.floor(16777215*Math.random()).toString(16)))}),1e3)})),e.addEventListener("click",(function(){e.setAttribute("disabled",!0),t.removeAttribute("disabled",!1),clearInterval(interval)})),e.setAttribute("disabled",!0)}();
//# sourceMappingURL=01-color-switcher.a424af4b.js.map
