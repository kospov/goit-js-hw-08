const e=document.querySelector(".feedback-form"),t={email:"",message:""};null===localStorage.getItem("feedback-form-state")&&localStorage.setItem("feedback-form-state",JSON.stringify(t)),e.elements.email.value=JSON.parse(localStorage.getItem("feedback-form-state")).email,e.elements.message.value=JSON.parse(localStorage.getItem("feedback-form-state")).message,e.addEventListener("input",(function(a){t.email=e.elements.email.value,t.message=e.elements.message.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))})),e.addEventListener("submit",(function(a){a.preventDefault(),localStorage.removeItem("feedback-form-state"),e.reset(),console.log(t)}));
//# sourceMappingURL=03-feedback.5c9b1480.js.map
