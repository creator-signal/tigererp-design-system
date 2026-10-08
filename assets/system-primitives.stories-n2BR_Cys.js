import{j as a,r as x}from"./iframe-C0m-lKQZ.js";import{D as d}from"./data-table-38NEnw_t.js";import{B as o}from"./badge-D52VJ3Jy.js";import{I as w}from"./input-currency-BsMwtVfQ.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-C3u6LSxm.js";import"./index-BF4t_Kdj.js";const{expect:g,fn:p,userEvent:r,within:v}=__STORYBOOK_MODULE_TEST__,b=[{id:"1",date:"2026-08-25",reference:"INV-1049",account:"200 · Sales Revenue",state:"Reconciled",amount:18480},{id:"2",date:"2026-08-25",reference:"BAS-Q4-26",account:"310 · GST Clearing",state:"Pending",amount:-42870.4},{id:"3",date:"2026-08-24",reference:"JE-07204",account:"825 · Suspense",state:"Unmatched",amount:-861.55}],u=[{id:"date",header:"Date",accessor:"date",width:"112px",financial:!0,sortable:!0},{id:"reference",header:"Reference",accessor:"reference",width:"120px",financial:!0,sortable:!0},{id:"account",header:"Account",accessor:"account",width:"220px"},{id:"state",header:"State",width:"110px",cell:e=>a.jsx(o,{tone:e.state==="Reconciled"?"credit":"suspense",indicator:!0,children:e.state})},{id:"amount",header:"Amount",accessor:"amount",width:"140px",align:"right",financial:!0,sortable:!0,cell:e=>`${e.amount<0?"−":""}$${Math.abs(e.amount).toFixed(2)}`}],C={title:"DLS/06 Components/Financial/Core Financial Components",tags:["autodocs","canonical","component"],parameters:{docs:{description:{component:"Atomic contracts for monetary entry, semantic status, and dense tabular work. All primitives expose typed value and interaction callbacks."}}},args:{onAmountChange:p(),onSort:p(),onRowActivate:p()},argTypes:{onAmountChange:{action:"amount changed"},onSort:{action:"table sorted"},onRowActivate:{action:"row activated"}}};function h({onAmountChange:e}){const[n,t]=x.useState(12480392e-1);return a.jsxs("div",{className:"grid max-w-2xl grid-cols-1 gap-4 border bg-card p-4 sm:grid-cols-2",children:[a.jsxs("label",{className:"text-[11px]",children:[a.jsx("span",{className:"mb-1.5 block font-semibold",children:"Invoice total · dense"}),a.jsx(w,{value:n,onValueChange:m=>{t(m),e(m)},currency:"AUD"})]}),a.jsxs("label",{className:"text-[11px]",children:[a.jsx("span",{className:"mb-1.5 block font-semibold",children:"Invalid allocation · standard"}),a.jsx(w,{defaultValue:-8412.9,invalid:!0,density:"standard",currency:"AUD","aria-describedby":"allocation-error"}),a.jsx("span",{id:"allocation-error",className:"mt-1 block text-[10px] text-financial-debit",children:"Allocation exceeds the unassigned balance."})]})]})}const s={render:e=>a.jsx(h,{onAmountChange:e.onAmountChange}),play:async({canvasElement:e})=>{const t=v(e).getAllByLabelText("Amount in AUD")[0];await r.clear(t),await r.type(t,"2500.75"),await r.tab(),await g(t).toHaveValue("2,500.75")}},i={render:()=>a.jsxs("div",{className:"flex flex-wrap gap-2 border bg-card p-4",children:[a.jsx(o,{tone:"credit",indicator:!0,children:"Reconciled"}),a.jsx(o,{tone:"debit",indicator:!0,children:"Overdue"}),a.jsx(o,{tone:"suspense",indicator:!0,children:"Unmatched"}),a.jsx(o,{tone:"audit",indicator:!0,children:"OCR 98%"}),a.jsx(o,{tone:"neutral",children:"Archived"})]})},c={render:e=>a.jsx(d,{className:"max-w-4xl",caption:"Financial table primitive specimen",columns:u,rows:b,getRowId:n=>n.id,initialSort:{columnId:"date",direction:"desc"},onSort:e.onSort,onRowActivate:e.onRowActivate}),play:async({canvasElement:e,args:n})=>{const t=v(e);await r.click(t.getByRole("button",{name:/Amount/i})),await g(t.getByRole("columnheader",{name:/Amount/i})).toHaveAttribute("aria-sort","ascending"),t.getAllByRole("cell")[0].focus(),await r.keyboard("{ArrowDown}{Enter}"),await g(n.onRowActivate).toHaveBeenCalledTimes(1)}},l={render:()=>a.jsxs("div",{className:"grid gap-4",children:[a.jsx(d,{caption:"Loading journal",columns:u,rows:[],getRowId:e=>e.id,loading:!0}),a.jsx(d,{caption:"Unavailable journal",columns:u,rows:[],getRowId:e=>e.id,error:"Projection cursor is unavailable. Posting is paused until reconciliation completes."}),a.jsx(d,{caption:"Empty journal",columns:u,rows:[],getRowId:e=>e.id})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <CurrencySpecimen onAmountChange={args.onAmountChange} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getAllByLabelText('Amount in AUD')[0];
    await userEvent.clear(input);
    await userEvent.type(input, '2500.75');
    await userEvent.tab();
    await expect(input).toHaveValue('2,500.75');
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2 border bg-card p-4"><Badge tone="credit" indicator>Reconciled</Badge><Badge tone="debit" indicator>Overdue</Badge><Badge tone="suspense" indicator>Unmatched</Badge><Badge tone="audit" indicator>OCR 98%</Badge><Badge tone="neutral">Archived</Badge></div>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <DataTableBase className="max-w-4xl" caption="Financial table primitive specimen" columns={columns} rows={rows} getRowId={row => row.id} initialSort={{
    columnId: 'date',
    direction: 'desc'
  }} onSort={args.onSort} onRowActivate={args.onRowActivate} />,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: /Amount/i
    }));
    await expect(canvas.getByRole('columnheader', {
      name: /Amount/i
    })).toHaveAttribute('aria-sort', 'ascending');
    const firstCell = canvas.getAllByRole('cell')[0];
    firstCell.focus();
    await userEvent.keyboard('{ArrowDown}{Enter}');
    await expect(args.onRowActivate).toHaveBeenCalledTimes(1);
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid gap-4"><DataTableBase caption="Loading journal" columns={columns} rows={[]} getRowId={row => row.id} loading /><DataTableBase caption="Unavailable journal" columns={columns} rows={[]} getRowId={row => row.id} error="Projection cursor is unavailable. Posting is paused until reconciliation completes." /><DataTableBase caption="Empty journal" columns={columns} rows={[]} getRowId={row => row.id} /></div>
}`,...l.parameters?.docs?.source}}};const E=["CurrencyInput","SemanticBadges","DenseTableEngine","TableStates"];export{s as CurrencyInput,c as DenseTableEngine,i as SemanticBadges,l as TableStates,E as __namedExportsOrder,C as default};
