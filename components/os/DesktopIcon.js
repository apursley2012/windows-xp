import{u as l,r as o,j as e}from"../../context/WindowManagerContext.js";const x=({app:r,label:n,icon:a})=>{const{openWindow:i}=l(),[t,s]=o.useState(!1),c=()=>{i(r),s(!1)};return e.jsxs("div",{className:"flex flex-col items-center w-20 p-1 m-1 cursor-pointer group",onClick:()=>s(!0),onDoubleClick:c,children:[e.jsx("div",{className:`w-10 h-10 mb-1 flex items-center justify-center text-white drop-shadow-md transition-transform group-active:scale-95
        ${t?"opacity-80":""}
      `,children:o.cloneElement(a,{size:36,strokeWidth:1.5})}),e.jsx("span",{className:`text-white font-tahoma text-xs text-center leading-tight drop-shadow-[1px_1px_2px_rgba(0,0,0,0.8)] px-1 rounded-sm
        ${t?"bg-xp-selection bg-opacity-70":"group-hover:bg-white/20"}
      `,children:n})]})};export{x as D};
