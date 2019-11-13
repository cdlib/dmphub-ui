"use strict";if(document.querySelector(".c-progress"))for(var steps=document.querySelectorAll(".c-progress li"),i=0;i<steps.length&&!steps[i].hasAttribute("aria-current");i++)steps[i].classList.add("completed"),steps[i].insertAdjacentHTML("afterbegin","<span>Completed step: </span>");function ethicalToggle(){!0===ethicalCheckbox.checked?ethicsReport.hidden=!1:ethicsReport.hidden=!0}if(document.querySelector("#c-ethical")){var ethicalCheckbox=document.querySelector("#c-ethical"),ethicsReport=document.querySelector("#c-ethicsreport");ethicalToggle(),ethicalCheckbox.addEventListener("change",function(){ethicalToggle()})}function accordion(r){r.forEach(function(e,t){0===t&&(e.open=!0),e.addEventListener("click",function(){r.forEach(function(e){e!==this&&(e.open=!1)},this)})})}if(document.querySelector(".c-accordion")){var fundingAccordionEls=document.querySelectorAll("#accordion-funding details"),datasetsAccordtionEls=document.querySelectorAll("#accordion-datasets details"),distributionAccordionEls=document.querySelectorAll("#accordion-distribution details");accordion(fundingAccordionEls),accordion(datasetsAccordtionEls),accordion(distributionAccordionEls)}function appendElAttributes(e){e.forEach(function(e){e.hasAttribute("aria-label")&&e.setAttribute("aria-label",e.getAttribute("aria-label")+" "+counter),e.hasAttribute("id")&&e.setAttribute("id",e.getAttribute("id")+counter),e.hasAttribute("name")&&e.setAttribute("name",e.getAttribute("name")+counter),e.hasAttribute("for")&&e.setAttribute("for",e.getAttribute("for")+counter)})}function focusFirstLabel(){document.querySelector(".c-other__fieldgroup")&&document.querySelector(".c-other__fieldgroup:last-child label").focus()}if(document.querySelector(".c-other")){var fields=document.querySelector(".c-other__fields"),fieldGroups=document.querySelectorAll(".c-other__fieldgroup"),buttonAdd=document.querySelector("#button-add"),counter=0;if(0<fieldGroups.length){var fieldGroupNumbers=[].map.call(fieldGroups,function(e){return e.getAttribute("aria-label").replace(/\D/g,"")}),highestNumber=Math.max.apply(Math,fieldGroupNumbers);counter=highestNumber}buttonAdd.addEventListener("click",function(){counter++;var e=document.querySelector("template").content,t=(e=document.importNode(e,!0)).querySelectorAll(".c-other__fieldgroup"),r=e.querySelectorAll("input"),o=e.querySelectorAll("select"),c=e.querySelectorAll("textarea"),i=e.querySelectorAll("label");appendElAttributes(t),appendElAttributes(r),appendElAttributes(o),appendElAttributes(c),appendElAttributes(i),fields.appendChild(e),focusFirstLabel(),(fieldGroups=document.querySelectorAll(".c-other__fieldgroup")).forEach(function(e){e.querySelector(".e-button3").addEventListener("click",function(){this.parentElement.remove(),focusFirstLabel()})})})}