import{j as e}from"./iframe-XT2nZs-u.js";import{B as a}from"./button-DW5qFnaM.js";var c,l,d,u,m,p,v,_,B,x,g,h,f,S,b,j,z,D;const{expect:w,fn:y,userEvent:A,within:E}=__STORYBOOK_MODULE_TEST__,O={title:"DLS/04 Components/Button",component:a,tags:["canonical","component"],args:{children:"Save changes",onClick:y()},argTypes:{variant:{control:"select",options:["default","secondary","outline","ghost","success","destructive"]},size:{control:"select",options:["default","sm","compact","icon"]}}},s={},n={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx(a,{children:"Save draft"}),e.jsx(a,{variant:"secondary",children:"Export CSV"}),e.jsx(a,{variant:"outline",children:"Discuss"}),e.jsx(a,{variant:"success",children:"Reconcile"}),e.jsx(a,{variant:"destructive",children:"Void transaction"})]})},t={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx(a,{size:"default",children:"Default"}),e.jsx(a,{size:"sm",children:"Small"}),e.jsx(a,{size:"compact",children:"Compact"}),e.jsx(a,{size:"icon","aria-label":"Add journal line",children:"+"})]})},r={render:()=>e.jsxs("div",{className:"flex items-center gap-2 rounded-md border bg-card p-3 shadow-card",children:[e.jsx("span",{className:"mr-4 text-sm text-muted-foreground",children:"Imported bank transaction"}),e.jsx(a,{size:"compact",variant:"outline",children:"Match"}),e.jsx(a,{size:"compact",variant:"ghost",children:"Transfer"}),e.jsx(a,{size:"compact",variant:"success",children:"OK"})]})},o={args:{disabled:!0,children:"Processing"}},i={play:async({canvasElement:C,args:T})=>{const k=E(C);await A.click(k.getByRole("button",{name:"Save changes"})),await w(T.onClick).toHaveBeenCalledTimes(1)}};s.parameters={...s.parameters,docs:{...(c=s.parameters)===null||c===void 0?void 0:c.docs,source:{originalSource:"{}",...(d=s.parameters)===null||d===void 0||(l=d.docs)===null||l===void 0?void 0:l.source}}};n.parameters={...n.parameters,docs:{...(u=n.parameters)===null||u===void 0?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-3">\r
      <Button>Save draft</Button>\r
      <Button variant="secondary">Export CSV</Button>\r
      <Button variant="outline">Discuss</Button>\r
      <Button variant="success">Reconcile</Button>\r
      <Button variant="destructive">Void transaction</Button>\r
    </div>
}`,...(p=n.parameters)===null||p===void 0||(m=p.docs)===null||m===void 0?void 0:m.source}}};t.parameters={...t.parameters,docs:{...(v=t.parameters)===null||v===void 0?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-3">\r
      <Button size="default">Default</Button>\r
      <Button size="sm">Small</Button>\r
      <Button size="compact">Compact</Button>\r
      <Button size="icon" aria-label="Add journal line">+</Button>\r
    </div>
}`,...(B=t.parameters)===null||B===void 0||(_=B.docs)===null||_===void 0?void 0:_.source}}};r.parameters={...r.parameters,docs:{...(x=r.parameters)===null||x===void 0?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2 rounded-md border bg-card p-3 shadow-card">\r
      <span className="mr-4 text-sm text-muted-foreground">Imported bank transaction</span>\r
      <Button size="compact" variant="outline">Match</Button>\r
      <Button size="compact" variant="ghost">Transfer</Button>\r
      <Button size="compact" variant="success">OK</Button>\r
    </div>
}`,...(h=r.parameters)===null||h===void 0||(g=h.docs)===null||g===void 0?void 0:g.source}}};o.parameters={...o.parameters,docs:{...(f=o.parameters)===null||f===void 0?void 0:f.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Processing'
  }
}`,...(b=o.parameters)===null||b===void 0||(S=b.docs)===null||S===void 0?void 0:S.source}}};i.parameters={...i.parameters,docs:{...(j=i.parameters)===null||j===void 0?void 0:j.docs,source:{originalSource:`{
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
}`,...(D=i.parameters)===null||D===void 0||(z=D.docs)===null||z===void 0?void 0:z.source}}};const N=["Basic","FinancialActions","Sizes","DenseTableActions","Disabled","ClickInteraction"],R=Object.freeze(Object.defineProperty({__proto__:null,Basic:s,ClickInteraction:i,DenseTableActions:r,Disabled:o,FinancialActions:n,Sizes:t,__namedExportsOrder:N,default:O},Symbol.toStringTag,{value:"Module"}));export{R as B,o as D,n as F,t as S,s as a};
