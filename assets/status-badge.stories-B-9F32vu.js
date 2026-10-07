import{j as t}from"./iframe-D8TDVfrG.js";import{S as a}from"./status-badge-CGDyKIu-.js";import"./preload-helper-PPVm8Dsz.js";import"./badge-Di1JuIYD.js";import"./index-BF4t_Kdj.js";import"./cn-C3u6LSxm.js";const p={title:"DLS/06 Components/Status/Status Badge",component:a,tags:["autodocs","canonical","component"],args:{children:"Reconciled",status:"reconciled"},argTypes:{status:{control:"select",options:["neutral","paid","reconciled","overdue","pending","draft","unmatched"]},dot:{control:"boolean"}}},e={},s={render:()=>t.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[t.jsx(a,{status:"paid",children:"Paid"}),t.jsx(a,{status:"reconciled",children:"Reconciled"}),t.jsx(a,{status:"overdue",children:"Overdue"}),t.jsx(a,{status:"pending",children:"Pending approval"}),t.jsx(a,{status:"draft",children:"Draft"}),t.jsx(a,{status:"unmatched",children:"Unmatched"})]})},r={args:{children:"Paid",status:"paid",dot:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-2">
      <StatusBadge status="paid">Paid</StatusBadge>
      <StatusBadge status="reconciled">Reconciled</StatusBadge>
      <StatusBadge status="overdue">Overdue</StatusBadge>
      <StatusBadge status="pending">Pending approval</StatusBadge>
      <StatusBadge status="draft">Draft</StatusBadge>
      <StatusBadge status="unmatched">Unmatched</StatusBadge>
    </div>
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Paid',
    status: 'paid',
    dot: false
  }
}`,...r.parameters?.docs?.source}}};const l=["Basic","AccountingStates","WithoutIndicator"];export{s as AccountingStates,e as Basic,r as WithoutIndicator,l as __namedExportsOrder,p as default};
