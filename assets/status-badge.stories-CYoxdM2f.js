import{j as t}from"./iframe---5o4ase.js";import{S as a}from"./status-badge-BWt0onnF.js";import"./preload-helper-PPVm8Dsz.js";import"./badge-AVs9Gz7z.js";import"./index-DHklY11n.js";import"./cn-yMAG7bfM.js";const p={title:"DLS/06 Components/Status/Status Badge",component:a,tags:["autodocs","canonical","component"],args:{children:"Reconciled",status:"reconciled"},argTypes:{status:{control:"select",options:["neutral","paid","reconciled","overdue","pending","draft","unmatched"]},dot:{control:"boolean"}}},e={},s={render:()=>t.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[t.jsx(a,{status:"paid",children:"Paid"}),t.jsx(a,{status:"reconciled",children:"Reconciled"}),t.jsx(a,{status:"overdue",children:"Overdue"}),t.jsx(a,{status:"pending",children:"Pending approval"}),t.jsx(a,{status:"draft",children:"Draft"}),t.jsx(a,{status:"unmatched",children:"Unmatched"})]})},r={args:{children:"Paid",status:"paid",dot:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-2">\r
      <StatusBadge status="paid">Paid</StatusBadge>\r
      <StatusBadge status="reconciled">Reconciled</StatusBadge>\r
      <StatusBadge status="overdue">Overdue</StatusBadge>\r
      <StatusBadge status="pending">Pending approval</StatusBadge>\r
      <StatusBadge status="draft">Draft</StatusBadge>\r
      <StatusBadge status="unmatched">Unmatched</StatusBadge>\r
    </div>
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Paid',
    status: 'paid',
    dot: false
  }
}`,...r.parameters?.docs?.source}}};const l=["Basic","AccountingStates","WithoutIndicator"];export{s as AccountingStates,e as Basic,r as WithoutIndicator,l as __namedExportsOrder,p as default};
