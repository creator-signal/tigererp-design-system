import{j as e}from"./iframe---5o4ase.js";import{B as a}from"./button-DO9wmuJe.js";const{expect:u,fn:m,userEvent:p,within:v}=__STORYBOOK_MODULE_TEST__,x={title:"DLS/06 Components/Actions/Button",component:a,tags:["canonical","component"],args:{children:"Save changes",onClick:m()},argTypes:{variant:{control:"select",options:["default","secondary","outline","ghost","success","destructive"]},size:{control:"select",options:["default","sm","compact","icon"]}}},t={},n={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx(a,{children:"Save draft"}),e.jsx(a,{variant:"secondary",children:"Export CSV"}),e.jsx(a,{variant:"outline",children:"Discuss"}),e.jsx(a,{variant:"success",children:"Reconcile"}),e.jsx(a,{variant:"destructive",children:"Void transaction"})]})},s={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx(a,{size:"default",children:"Default"}),e.jsx(a,{size:"sm",children:"Small"}),e.jsx(a,{size:"compact",children:"Compact"}),e.jsx(a,{size:"icon","aria-label":"Add journal line",children:"+"})]})},r={render:()=>e.jsxs("div",{className:"flex items-center gap-2 rounded-md border bg-card p-3 shadow-card",children:[e.jsx("span",{className:"mr-4 text-sm text-muted-foreground",children:"Imported bank transaction"}),e.jsx(a,{size:"compact",variant:"outline",children:"Match"}),e.jsx(a,{size:"compact",variant:"ghost",children:"Transfer"}),e.jsx(a,{size:"compact",variant:"success",children:"OK"})]})},c={args:{disabled:!0,children:"Processing"}},o={play:async({canvasElement:i,args:l})=>{const d=v(i);await p.click(d.getByRole("button",{name:"Save changes"})),await u(l.onClick).toHaveBeenCalledTimes(1)}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-3">\r
      <Button>Save draft</Button>\r
      <Button variant="secondary">Export CSV</Button>\r
      <Button variant="outline">Discuss</Button>\r
      <Button variant="success">Reconcile</Button>\r
      <Button variant="destructive">Void transaction</Button>\r
    </div>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-3">\r
      <Button size="default">Default</Button>\r
      <Button size="sm">Small</Button>\r
      <Button size="compact">Compact</Button>\r
      <Button size="icon" aria-label="Add journal line">+</Button>\r
    </div>
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2 rounded-md border bg-card p-3 shadow-card">\r
      <span className="mr-4 text-sm text-muted-foreground">Imported bank transaction</span>\r
      <Button size="compact" variant="outline">Match</Button>\r
      <Button size="compact" variant="ghost">Transfer</Button>\r
      <Button size="compact" variant="success">OK</Button>\r
    </div>
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Processing'
  }
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save changes'
    }));
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  }
}`,...o.parameters?.docs?.source}}};const B=["Basic","FinancialActions","Sizes","DenseTableActions","Disabled","ClickInteraction"],f=Object.freeze(Object.defineProperty({__proto__:null,Basic:t,ClickInteraction:o,DenseTableActions:r,Disabled:c,FinancialActions:n,Sizes:s,__namedExportsOrder:B,default:x},Symbol.toStringTag,{value:"Module"}));export{f as B,c as D,n as F,s as S,t as a};
