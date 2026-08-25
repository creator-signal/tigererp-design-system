import{j as e}from"./iframe---5o4ase.js";import{c as N}from"./utils-D8Y-Z291.js";import{W as y}from"./workspace-shell-Zwqdv4-K.js";import{S as g}from"./status-badge-BWt0onnF.js";import{B as c}from"./button-DO9wmuJe.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-yMAG7bfM.js";import"./badge-AVs9Gz7z.js";import"./index-DHklY11n.js";import"./index-BxxSYZrV.js";function h({title:a,description:s,isOpen:o,onClose:m,children:u,footer:p,className:j}){return e.jsxs("aside",{"aria-label":a,"aria-hidden":!o,className:N("flex h-full w-full min-w-0 flex-col border-l bg-card transition-[opacity,transform] duration-200 ease-out xl:min-w-[24rem]",o?"translate-x-0 opacity-100":"translate-x-4 opacity-0",j),children:[e.jsxs("div",{className:"flex min-h-[60px] shrink-0 items-start gap-3 border-b px-4 py-3",children:[e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx("h2",{className:"truncate text-sm font-semibold",children:a}),s&&e.jsx("p",{className:"mt-0.5 truncate text-xs text-muted-foreground",children:s})]}),e.jsx("button",{type:"button",onClick:m,className:"grid size-7 shrink-0 place-items-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring","aria-label":"Close details",children:e.jsx("svg",{"aria-hidden":!0,viewBox:"0 0 20 20",className:"size-4 fill-none stroke-current",strokeWidth:"1.7",children:e.jsx("path",{d:"m5 5 10 10M15 5 5 15",strokeLinecap:"round"})})})]}),e.jsx("div",{className:"min-h-0 flex-1 overflow-y-auto",children:u}),p&&e.jsx("div",{className:"shrink-0 border-t p-3",children:p})]})}h.__docgenInfo={description:"",methods:[],displayName:"ContextualSheet",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const{expect:r,fn:i,within:b}=__STORYBOOK_MODULE_TEST__;function t({type:a}){const s={home:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"m3 9 7-6 7 6"}),e.jsx("path",{d:"M5 8.5V17h10V8.5M8 17v-5h4v5"})]}),activity:e.jsx(e.Fragment,{children:e.jsx("path",{d:"M3 10h3l2-5 4 10 2-5h3"})}),bank:e.jsx(e.Fragment,{children:e.jsx("path",{d:"M3 7h14M4 7V5l6-3 6 3v2M5 8v6M9 8v6M13 8v6M3 15h14M2 18h16"})}),sales:e.jsx(e.Fragment,{children:e.jsx("path",{d:"M4 3h10l2 2v12H4zM7 8h6M7 11h6M7 14h3"})}),purchase:e.jsx(e.Fragment,{children:e.jsx("path",{d:"M3 4h2l2 9h8l2-6H6M8 17h.01M15 17h.01"})}),people:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"8",cy:"7",r:"3"}),e.jsx("path",{d:"M2.5 17c.5-3 2.4-4.5 5.5-4.5s5 1.5 5.5 4.5M13 5.5a3 3 0 0 1 0 5.7M14.5 13c1.8.5 2.8 1.8 3 4"})]}),settings:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"10",cy:"10",r:"2.5"}),e.jsx("path",{d:"M10 2.5v2M10 15.5v2M2.5 10h2M15.5 10h2M4.7 4.7l1.4 1.4M13.9 13.9l1.4 1.4M15.3 4.7l-1.4 1.4M6.1 13.9l-1.4 1.4"})]})};return e.jsx("svg",{"aria-hidden":!0,viewBox:"0 0 20 20",className:"size-4 fill-none stroke-current",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:s[a]})}const f=[{id:"general",label:"General workspace",items:[{id:"dashboard",label:"Dashboard",icon:e.jsx(t,{type:"home"})},{id:"activity",label:"Activity log",icon:e.jsx(t,{type:"activity"})}]},{id:"ledgers",label:"Core ledgers",items:[{id:"banking",label:"Banking",icon:e.jsx(t,{type:"bank"}),badge:"8"},{id:"sales",label:"Sales",icon:e.jsx(t,{type:"sales"})},{id:"purchases",label:"Purchases",icon:e.jsx(t,{type:"purchase"})}]},{id:"admin",label:"Enterprise admin",items:[{id:"hr",label:"People & payroll",icon:e.jsx(t,{type:"people"})},{id:"settings",label:"Settings",icon:e.jsx(t,{type:"settings"})}]}],A=[{id:"INV-1048",customer:"Northstar Architecture",issued:"22 Aug 2026",due:"29 Aug 2026",amount:"$18,480.00",status:"paid"},{id:"INV-1047",customer:"Harbourview Hospitality",issued:"21 Aug 2026",due:"28 Aug 2026",amount:"$6,270.00",status:"pending"},{id:"INV-1046",customer:"Mason & Fields",issued:"18 Aug 2026",due:"25 Aug 2026",amount:"$11,930.50",status:"overdue"},{id:"INV-1045",customer:"Koru Digital AU",issued:"18 Aug 2026",due:"1 Sep 2026",amount:"$4,840.00",status:"draft"},{id:"INV-1044",customer:"Southern Cross Dental",issued:"17 Aug 2026",due:"31 Aug 2026",amount:"$9,720.00",status:"paid"},{id:"INV-1043",customer:"Atlas Civil Works",issued:"15 Aug 2026",due:"22 Aug 2026",amount:"$24,116.90",status:"overdue"},{id:"INV-1042",customer:"Willow & Co Retail",issued:"14 Aug 2026",due:"28 Aug 2026",amount:"$3,388.20",status:"pending"}],w={paid:"Paid",pending:"Awaiting payment",overdue:"Overdue",draft:"Draft"};function x({label:a,value:s,note:o}){return e.jsxs("div",{className:"min-w-[9rem] border-l pl-3 first:border-l-0 first:pl-0",children:[e.jsx("p",{className:"text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground",children:a}),e.jsxs("div",{className:"mt-0.5 flex items-baseline gap-2",children:[e.jsx("span",{className:"financial-nums text-sm font-semibold",children:s}),e.jsx("span",{className:"text-[10px] text-muted-foreground",children:o})]})]})}function v({focusedId:a}){return e.jsxs("div",{className:"flex min-h-full min-w-[48rem] flex-col bg-card",children:[e.jsxs("div",{className:"flex min-h-[58px] items-center gap-4 border-b px-4 py-2.5",children:[e.jsxs("div",{className:"mr-auto min-w-0",children:[e.jsx("h1",{className:"text-base font-semibold tracking-tight",children:"Invoices"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"Accounts receivable ledger · Updated 2 minutes ago"})]}),e.jsx(x,{label:"Outstanding",value:"$51,705.60",note:"12 invoices"}),e.jsx(x,{label:"Overdue",value:"$36,047.40",note:"4 invoices"}),e.jsx(c,{size:"sm",children:"New invoice"})]}),e.jsxs("div",{className:"flex h-11 shrink-0 items-center gap-2 border-b px-4",children:[e.jsx("button",{className:"h-7 rounded-md border bg-background px-2.5 text-xs font-medium",type:"button",children:"All invoices"}),e.jsx("button",{className:"h-7 rounded-md px-2.5 text-xs text-muted-foreground hover:bg-accent",type:"button",children:"Awaiting payment"}),e.jsx("button",{className:"h-7 rounded-md px-2.5 text-xs text-muted-foreground hover:bg-accent",type:"button",children:"Overdue"}),e.jsx("span",{className:"ml-auto text-xs text-muted-foreground",children:"1–7 of 48"}),e.jsx(c,{size:"compact",variant:"outline",children:"Filter"})]}),e.jsx("div",{className:"min-h-0 flex-1 overflow-auto",children:e.jsxs("table",{className:"w-full border-collapse text-left text-xs",children:[e.jsx("thead",{className:"sticky top-0 z-10 bg-muted/90 text-[10px] font-semibold uppercase tracking-[0.07em] text-muted-foreground backdrop-blur",children:e.jsxs("tr",{className:"h-8 border-b",children:[e.jsx("th",{className:"px-4 font-semibold",children:"Invoice"}),e.jsx("th",{className:"px-3 font-semibold",children:"Customer"}),e.jsx("th",{className:"px-3 font-semibold",children:"Issued"}),e.jsx("th",{className:"px-3 font-semibold",children:"Due"}),e.jsx("th",{className:"px-3 font-semibold",children:"Status"}),e.jsx("th",{className:"px-4 text-right font-semibold",children:"Amount"})]})}),e.jsx("tbody",{children:A.map(s=>e.jsxs("tr",{className:a===s.id?"h-11 border-b bg-info-muted/80":"h-11 border-b transition-colors hover:bg-muted/55",children:[e.jsx("td",{className:"px-4 font-semibold text-info",children:s.id}),e.jsx("td",{className:"max-w-[14rem] truncate px-3 font-medium",children:s.customer}),e.jsx("td",{className:"whitespace-nowrap px-3 text-muted-foreground",children:s.issued}),e.jsx("td",{className:"whitespace-nowrap px-3 text-muted-foreground",children:s.due}),e.jsx("td",{className:"px-3",children:e.jsx(g,{status:s.status,children:w[s.status]})}),e.jsx("td",{className:"financial-nums whitespace-nowrap px-4 text-right font-medium",children:s.amount})]},s.id))})]})})]})}function T({isOpen:a=!0}){return e.jsx(h,{isOpen:a,title:"INV-1046",description:"Mason & Fields · Overdue",onClose:i(),footer:e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(c,{size:"sm",variant:"outline",children:"Open invoice"}),e.jsx(c,{size:"sm",children:"Record payment"})]}),children:e.jsxs("div",{className:"space-y-5 p-4",children:[e.jsxs("section",{children:[e.jsx("p",{className:"text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground",children:"Balance due"}),e.jsx("p",{className:"financial-nums mt-1 text-2xl font-semibold tracking-tight",children:"$11,930.50"}),e.jsx("div",{className:"mt-2",children:e.jsx(g,{status:"overdue",children:"3 days overdue"})})]}),e.jsxs("section",{className:"grid grid-cols-2 gap-x-6 gap-y-3 border-y py-4 text-xs",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-muted-foreground",children:"Issue date"}),e.jsx("p",{className:"mt-0.5 font-medium",children:"18 Aug 2026"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-muted-foreground",children:"Due date"}),e.jsx("p",{className:"mt-0.5 font-medium",children:"25 Aug 2026"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-muted-foreground",children:"Reference"}),e.jsx("p",{className:"mt-0.5 font-medium",children:"MF-Q3-118"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-muted-foreground",children:"Currency"}),e.jsx("p",{className:"mt-0.5 font-medium",children:"AUD"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-xs font-semibold",children:"Audit trail"}),e.jsx("ol",{className:"mt-3 space-y-0",children:[["Payment reminder sent","Today, 9:12 am","Automated workflow"],["Invoice became overdue","25 Aug 2026, 12:01 am","System"],["Invoice approved and posted","18 Aug 2026, 4:42 pm","Amelia Chen"],["Draft created","18 Aug 2026, 3:08 pm","Noah Williams"]].map(([s,o,m],u)=>e.jsxs("li",{className:"relative grid grid-cols-[1rem_1fr] gap-2 pb-4 last:pb-0",children:[e.jsxs("div",{className:"relative flex justify-center",children:[e.jsx("span",{className:"mt-1.5 size-1.5 rounded-full bg-info"}),u<3&&e.jsx("span",{className:"absolute bottom-[-0.375rem] top-3 w-px bg-border"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-medium",children:s}),e.jsxs("p",{className:"mt-0.5 text-[11px] text-muted-foreground",children:[o," · ",m]})]})]},s))})]})]})})}const n={onNavigate:i(),onToggle:i(),onOpenCommand:i(),onToggleTheme:i(),onToggleSidebar:i(),onOpenProfile:i()},z={title:"DLS/08 Patterns/Workspace Shell",component:y,parameters:{layout:"fullscreen"},globals:{viewport:{value:"responsive",isRotated:!1}},tags:["autodocs","canonical","experience-block"]},l={args:{sidebar:{organizationName:"Acacia Holdings",organizationMeta:"Australian operations",groups:f,activeItemId:"sales",isCollapsed:!1,onNavigate:n.onNavigate,onToggle:n.onToggle},header:{breadcrumbs:["Ledger","Accounts Receivable","Invoices"],user:{name:"Amelia Chen",initials:"AC"},onOpenCommand:n.onOpenCommand,onToggleTheme:n.onToggleTheme,onToggleSidebar:n.onToggleSidebar,onOpenProfile:n.onOpenProfile},children:e.jsx(v,{}),isDetailOpen:!1},play:async({canvasElement:a})=>{const s=b(a);await r(s.getByRole("navigation",{name:"Workspace navigation"})).toBeVisible(),await r(s.getByRole("heading",{name:"Invoices"})).toBeVisible(),await r(s.getByRole("button",{name:/Search or run a command/i})).toBeVisible()}},d={args:{sidebar:{organizationName:"Acacia Holdings",organizationMeta:"Australian operations",groups:f,activeItemId:"sales",isCollapsed:!0,onNavigate:n.onNavigate,onToggle:n.onToggle},header:{breadcrumbs:["Ledger","Accounts Receivable","Invoices","INV-1046"],user:{name:"Amelia Chen",initials:"AC"},onOpenCommand:n.onOpenCommand,onToggleTheme:n.onToggleTheme,onToggleSidebar:n.onToggleSidebar,onOpenProfile:n.onOpenProfile},children:e.jsx(v,{focusedId:"INV-1046"}),detailPanel:e.jsx(T,{}),isDetailOpen:!0},play:async({canvasElement:a})=>{const s=b(a);await r(s.getByRole("button",{name:"Show sidebar"})).toBeVisible(),await r(s.getByRole("complementary",{name:"INV-1046"})).toBeVisible(),await r(s.getByText("Audit trail")).toBeVisible()}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    sidebar: {
      organizationName: 'Acacia Holdings',
      organizationMeta: 'Australian operations',
      groups: navGroups,
      activeItemId: 'sales',
      isCollapsed: false,
      onNavigate: shellHandlers.onNavigate,
      onToggle: shellHandlers.onToggle
    },
    header: {
      breadcrumbs: ['Ledger', 'Accounts Receivable', 'Invoices'],
      user: {
        name: 'Amelia Chen',
        initials: 'AC'
      },
      onOpenCommand: shellHandlers.onOpenCommand,
      onToggleTheme: shellHandlers.onToggleTheme,
      onToggleSidebar: shellHandlers.onToggleSidebar,
      onOpenProfile: shellHandlers.onOpenProfile
    },
    children: <InvoiceLedgerPane />,
    isDetailOpen: false
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('navigation', {
      name: 'Workspace navigation'
    })).toBeVisible();
    await expect(canvas.getByRole('heading', {
      name: 'Invoices'
    })).toBeVisible();
    await expect(canvas.getByRole('button', {
      name: /Search or run a command/i
    })).toBeVisible();
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    sidebar: {
      organizationName: 'Acacia Holdings',
      organizationMeta: 'Australian operations',
      groups: navGroups,
      activeItemId: 'sales',
      isCollapsed: true,
      onNavigate: shellHandlers.onNavigate,
      onToggle: shellHandlers.onToggle
    },
    header: {
      breadcrumbs: ['Ledger', 'Accounts Receivable', 'Invoices', 'INV-1046'],
      user: {
        name: 'Amelia Chen',
        initials: 'AC'
      },
      onOpenCommand: shellHandlers.onOpenCommand,
      onToggleTheme: shellHandlers.onToggleTheme,
      onToggleSidebar: shellHandlers.onToggleSidebar,
      onOpenProfile: shellHandlers.onOpenProfile
    },
    children: <InvoiceLedgerPane focusedId="INV-1046" />,
    detailPanel: <InvoiceAuditSheet />,
    isDetailOpen: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('button', {
      name: 'Show sidebar'
    })).toBeVisible();
    await expect(canvas.getByRole('complementary', {
      name: 'INV-1046'
    })).toBeVisible();
    await expect(canvas.getByText('Audit trail')).toBeVisible();
  }
}`,...d.parameters?.docs?.source}}};const P=["ExpandedWorkspaceView","CollapsedMaximizeFocus"];export{d as CollapsedMaximizeFocus,l as ExpandedWorkspaceView,P as __namedExportsOrder,z as default};
