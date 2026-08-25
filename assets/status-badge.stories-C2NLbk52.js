import{j as t}from"./iframe-XT2nZs-u.js";import{S as a}from"./status-badge-CWfJgXML.js";import"./preload-helper-PPVm8Dsz.js";import"./badge-DveRJTZW.js";import"./utils-BfnVJkRC.js";var d,o,n,i,c,u,l,p,m;const B={title:"DLS/04 Components/Status Badge",component:a,tags:["autodocs","canonical","component"],args:{children:"Reconciled",status:"reconciled"},argTypes:{status:{control:"select",options:["neutral","paid","reconciled","overdue","pending","draft","unmatched"]},dot:{control:"boolean"}}},e={},s={render:()=>t.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[t.jsx(a,{status:"paid",children:"Paid"}),t.jsx(a,{status:"reconciled",children:"Reconciled"}),t.jsx(a,{status:"overdue",children:"Overdue"}),t.jsx(a,{status:"pending",children:"Pending approval"}),t.jsx(a,{status:"draft",children:"Draft"}),t.jsx(a,{status:"unmatched",children:"Unmatched"})]})},r={args:{children:"Paid",status:"paid",dot:!1}};e.parameters={...e.parameters,docs:{...(d=e.parameters)===null||d===void 0?void 0:d.docs,source:{originalSource:"{}",...(n=e.parameters)===null||n===void 0||(o=n.docs)===null||o===void 0?void 0:o.source}}};s.parameters={...s.parameters,docs:{...(i=s.parameters)===null||i===void 0?void 0:i.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-2">\r
      <StatusBadge status="paid">Paid</StatusBadge>\r
      <StatusBadge status="reconciled">Reconciled</StatusBadge>\r
      <StatusBadge status="overdue">Overdue</StatusBadge>\r
      <StatusBadge status="pending">Pending approval</StatusBadge>\r
      <StatusBadge status="draft">Draft</StatusBadge>\r
      <StatusBadge status="unmatched">Unmatched</StatusBadge>\r
    </div>
}`,...(u=s.parameters)===null||u===void 0||(c=u.docs)===null||c===void 0?void 0:c.source}}};r.parameters={...r.parameters,docs:{...(l=r.parameters)===null||l===void 0?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'Paid',
    status: 'paid',
    dot: false
  }
}`,...(m=r.parameters)===null||m===void 0||(p=m.docs)===null||p===void 0?void 0:p.source}}};const x=["Basic","AccountingStates","WithoutIndicator"];export{s as AccountingStates,e as Basic,r as WithoutIndicator,x as __namedExportsOrder,B as default};
