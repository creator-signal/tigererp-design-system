import{j as a,r as E}from"./iframe-XT2nZs-u.js";import{B as o}from"./badge-DveRJTZW.js";import{D as d}from"./data-table-base-DS8KHt-y.js";import{I as j}from"./input-currency-RdfGNl0f.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BfnVJkRC.js";var p,g,v,w,b,x,h,A,y,_,B,S;const{expect:f,fn:R,userEvent:r,within:C}=__STORYBOOK_MODULE_TEST__,T=[{id:"1",date:"2026-08-25",reference:"INV-1049",account:"200 · Sales Revenue",state:"Reconciled",amount:18480},{id:"2",date:"2026-08-25",reference:"BAS-Q4-26",account:"310 · GST Clearing",state:"Pending",amount:-42870.4},{id:"3",date:"2026-08-24",reference:"JE-07204",account:"825 · Suspense",state:"Unmatched",amount:-861.55}],u=[{id:"date",header:"Date",accessor:"date",width:"112px",financial:!0,sortable:!0},{id:"reference",header:"Reference",accessor:"reference",width:"120px",financial:!0,sortable:!0},{id:"account",header:"Account",accessor:"account",width:"220px"},{id:"state",header:"State",width:"110px",cell:e=>a.jsx(o,{tone:e.state==="Reconciled"?"credit":"suspense",indicator:!0,children:e.state})},{id:"amount",header:"Amount",accessor:"amount",width:"140px",align:"right",financial:!0,sortable:!0,cell:e=>`${e.amount<0?"−":""}$${Math.abs(e.amount).toFixed(2)}`}],L={title:"DLS/04 Components/Core Financial Components",tags:["autodocs","canonical","component"],parameters:{docs:{description:{component:"Atomic contracts for monetary entry, semantic status, and dense tabular work. All primitives expose typed value and interaction callbacks."}}},args:{onAmountChange:R(),onSort:R(),onRowActivate:R()},argTypes:{onAmountChange:{action:"amount changed"},onSort:{action:"table sorted"},onRowActivate:{action:"row activated"}}};function D({onAmountChange:e}){const[n,t]=E.useState(12480392e-1);return a.jsxs("div",{className:"grid max-w-2xl grid-cols-1 gap-4 border bg-card p-4 sm:grid-cols-2",children:[a.jsxs("label",{className:"text-[11px]",children:[a.jsx("span",{className:"mb-1.5 block font-semibold",children:"Invoice total · dense"}),a.jsx(j,{value:n,onValueChange:m=>{t(m),e(m)},currency:"AUD"})]}),a.jsxs("label",{className:"text-[11px]",children:[a.jsx("span",{className:"mb-1.5 block font-semibold",children:"Invalid allocation · standard"}),a.jsx(j,{defaultValue:-8412.9,invalid:!0,density:"standard",currency:"AUD","aria-describedby":"allocation-error"}),a.jsx("span",{id:"allocation-error",className:"mt-1 block text-[10px] text-financial-debit",children:"Allocation exceeds the unassigned balance."})]})]})}const s={render:e=>a.jsx(D,{onAmountChange:e.onAmountChange}),play:async({canvasElement:e})=>{const t=C(e).getAllByLabelText("Amount in AUD")[0];await r.clear(t),await r.type(t,"2500.75"),await r.tab(),await f(t).toHaveValue("2,500.75")}},i={render:()=>a.jsxs("div",{className:"flex flex-wrap gap-2 border bg-card p-4",children:[a.jsx(o,{tone:"credit",indicator:!0,children:"Reconciled"}),a.jsx(o,{tone:"debit",indicator:!0,children:"Overdue"}),a.jsx(o,{tone:"suspense",indicator:!0,children:"Unmatched"}),a.jsx(o,{tone:"audit",indicator:!0,children:"OCR 98%"}),a.jsx(o,{tone:"neutral",children:"Archived"})]})},c={render:e=>a.jsx(d,{className:"max-w-4xl",caption:"Financial table primitive specimen",columns:u,rows:T,getRowId:n=>n.id,initialSort:{columnId:"date",direction:"desc"},onSort:e.onSort,onRowActivate:e.onRowActivate}),play:async({canvasElement:e,args:n})=>{const t=C(e);await r.click(t.getByRole("button",{name:/Amount/i})),await f(t.getByRole("columnheader",{name:/Amount/i})).toHaveAttribute("aria-sort","ascending"),t.getAllByRole("cell")[0].focus(),await r.keyboard("{ArrowDown}{Enter}"),await f(n.onRowActivate).toHaveBeenCalledTimes(1)}},l={render:()=>a.jsxs("div",{className:"grid gap-4",children:[a.jsx(d,{caption:"Loading journal",columns:u,rows:[],getRowId:e=>e.id,loading:!0}),a.jsx(d,{caption:"Unavailable journal",columns:u,rows:[],getRowId:e=>e.id,error:"Projection cursor is unavailable. Posting is paused until reconciliation completes."}),a.jsx(d,{caption:"Empty journal",columns:u,rows:[],getRowId:e=>e.id})]})};s.parameters={...s.parameters,docs:{...(p=s.parameters)===null||p===void 0?void 0:p.docs,source:{originalSource:`{
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
}`,...(v=s.parameters)===null||v===void 0||(g=v.docs)===null||g===void 0?void 0:g.source}}};i.parameters={...i.parameters,docs:{...(w=i.parameters)===null||w===void 0?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2 border bg-card p-4"><Badge tone="credit" indicator>Reconciled</Badge><Badge tone="debit" indicator>Overdue</Badge><Badge tone="suspense" indicator>Unmatched</Badge><Badge tone="audit" indicator>OCR 98%</Badge><Badge tone="neutral">Archived</Badge></div>
}`,...(x=i.parameters)===null||x===void 0||(b=x.docs)===null||b===void 0?void 0:b.source}}};c.parameters={...c.parameters,docs:{...(h=c.parameters)===null||h===void 0?void 0:h.docs,source:{originalSource:`{
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
}`,...(y=c.parameters)===null||y===void 0||(A=y.docs)===null||A===void 0?void 0:A.source}}};l.parameters={...l.parameters,docs:{...(_=l.parameters)===null||_===void 0?void 0:_.docs,source:{originalSource:`{
  render: () => <div className="grid gap-4"><DataTableBase caption="Loading journal" columns={columns} rows={[]} getRowId={row => row.id} loading /><DataTableBase caption="Unavailable journal" columns={columns} rows={[]} getRowId={row => row.id} error="Projection cursor is unavailable. Posting is paused until reconciliation completes." /><DataTableBase caption="Empty journal" columns={columns} rows={[]} getRowId={row => row.id} /></div>
}`,...(S=l.parameters)===null||S===void 0||(B=S.docs)===null||B===void 0?void 0:B.source}}};const V=["CurrencyInput","SemanticBadges","DenseTableEngine","TableStates"];export{s as CurrencyInput,c as DenseTableEngine,i as SemanticBadges,l as TableStates,V as __namedExportsOrder,L as default};
