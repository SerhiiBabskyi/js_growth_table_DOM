var e=document.querySelector(".container"),t=document.querySelector(".field").querySelector("tbody");function n(e,n){var r=t.querySelectorAll("tr");if(n){if(r[0].children.length>=10)return;r.forEach(function(e){var t=document.createElement("td");e.appendChild(t)})}else{if(r[0].children.length<=2)return;r.forEach(function(e){e.removeChild(e.lastElementChild)})}l(e,n,r[0].children.length,10,2,"column")}function r(e,n){var r=t.querySelectorAll("tr");if(n){if(r.length>=10)return;var c=r[0].cloneNode(!0);t.appendChild(c)}else{if(r.length<=2)return;t.removeChild(r[r.length-1])}l(e,n,(r=t.querySelectorAll("tr")).length,10,2,"row")}function l(e,t,n,r,l,c){var o=document.querySelector(".".concat(t?"remove-".concat(c):"append-".concat(c),"[disabled]"));n===r&&t?e.setAttribute("disabled",!0):n!==l||t?e.removeAttribute("disabled"):e.setAttribute("disabled",!0),o&&o.removeAttribute("disabled")}e.addEventListener("click",function(e){var t=e.target;t.classList.contains("remove-column")?n(t,!1):t.classList.contains("remove-row")?r(t,!1):t.classList.contains("append-column")?n(t,!0):t.classList.contains("append-row")&&r(t,!0)});
//# sourceMappingURL=index.1aa2ddd0.js.map