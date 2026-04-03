import{a as f,S as g,i as n}from"./assets/vendor-Bbadc3Tp.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p="55274437-2a8c9d4d1632f9e1aa043681a",y="https://pixabay.com/api/";async function h(o){return(await f.get(y,{params:{key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}const l=document.querySelector(".gallery"),d=document.querySelector("#loader"),b=new g(".gallery a",{captionsData:"alt",captionDelay:250});function v(o){const r=o.map(({webformatURL:s,largeImageURL:a,tags:e,likes:t,views:i,comments:u,downloads:m})=>`
        <li class="gallery-item">
            <a href="${a}">
                <img src="${s}" alt="${e}" class="gallery-image" />
                <div class="info">
                    <div class="info-item"><b>Likes</b>${t}</div>
                    <div class="info-item"><b>Views</b>${i}</div>
                    <div class="info-item"><b>Comments</b>${u}</div>
                    <div class="info-item"><b>Downloads</b>${m}</div>
                </div>
            </a>
        </li>
    `).join("");l.innerHTML=r,b.refresh()}function L(){l.innerHTML=""}function F(){d.classList.add("visible")}function w(){d.classList.remove("visible")}const c=document.querySelector("#search-form");c.addEventListener("submit",async o=>{o.preventDefault();const r=o.currentTarget.elements["search-text"].value.trim();if(!r){n.warning({message:"Please enter a search query!",position:"topRight"});return}L(),F();try{const s=await h(r);s.length===0?n.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FFFFFF",messageSize:"16px",iconColor:"#FFFFFF",theme:"dark",maxWidth:432,displayMode:2,close:!0,progressBarColor:"#B51B1B"}):v(s)}catch{n.error({message:"Something went wrong! Please try again later.",position:"topRight"})}finally{w(),c.reset()}});
//# sourceMappingURL=index.js.map
