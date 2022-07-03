const e=document.querySelector(".feedback-form"),t={};e.addEventListener("input",(function(a){t.email=e.elements.email.value,t.message=e.elements.message.value,localStorage.setItem("feedback-form-state",JSON.stringify(t)),console.dir(t)}));
//# sourceMappingURL=03-feedback.156fee34.js.map
