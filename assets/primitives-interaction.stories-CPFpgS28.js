import{j as e}from"./iframe-D8TDVfrG.js";import{T as d,I as l,A as n,F as m,P as p,V as u}from"./primitives-CNalY77e.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BPY4yvGi.js";import"./index-CvCHq8cH.js";import"./index-BHQWN7vA.js";import"./cn-C3u6LSxm.js";const{expect:b,userEvent:h,within:x}=__STORYBOOK_MODULE_TEST__,F={title:"DLS/05 Primitives/Interaction and Accessibility",tags:["autodocs","canonical","primitive","beta"]},r={name:"Pressable",render:()=>e.jsx(p,{className:"border bg-card px-3 py-2 text-sm hover:bg-muted",children:"Select this operational record"}),play:async({canvasElement:o})=>{const c=x(o);await h.tab(),await b(c.getByRole("button")).toHaveFocus()}},a={name:"Anchor",render:()=>e.jsxs(l,{children:[e.jsx(n,{href:"#internal",children:"Internal evidence"}),e.jsx(n,{href:"https://example.com",external:!0,children:"External evidence source"})]})},s={name:"FocusRing",render:()=>e.jsx(m,{asChild:!0,children:e.jsx("button",{type:"button",className:"border bg-card px-3 py-2 text-sm",children:"Focus with Tab"})})},t={name:"VisuallyHidden",render:()=>e.jsxs("button",{type:"button","aria-label":"Download audit report",className:"grid size-9 place-items-center border bg-card",children:[e.jsx("span",{"aria-hidden":!0,children:"↓"}),e.jsx(u,{children:"Download audit report"})]})},i={render:()=>e.jsx("div",{className:"max-w-2xl border bg-card p-4",children:e.jsx(d,{as:"p",children:"Primitives preserve native semantics, visible focus, tokenized spacing, and non-colour meaning. They constrain implementation decisions without replacing the browser accessibility model."})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Pressable',
  render: () => <Pressable className="border bg-card px-3 py-2 text-sm hover:bg-muted">Select this operational record</Pressable>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.tab();
    await expect(canvas.getByRole('button')).toHaveFocus();
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Anchor',
  render: () => <Inline><Anchor href="#internal">Internal evidence</Anchor><Anchor href="https://example.com" external>External evidence source</Anchor></Inline>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'FocusRing',
  render: () => <FocusRing asChild><button type="button" className="border bg-card px-3 py-2 text-sm">Focus with Tab</button></FocusRing>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'VisuallyHidden',
  render: () => <button type="button" aria-label="Download audit report" className="grid size-9 place-items-center border bg-card"><span aria-hidden>↓</span><VisuallyHidden>Download audit report</VisuallyHidden></button>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-2xl border bg-card p-4"><Text as="p">Primitives preserve native semantics, visible focus, tokenized spacing, and non-colour meaning. They constrain implementation decisions without replacing the browser accessibility model.</Text></div>
}`,...i.parameters?.docs?.source}}};const R=["PressablePrimitive","AnchorPrimitive","FocusRingPrimitive","VisuallyHiddenPrimitive","AccessibilityContract"];export{i as AccessibilityContract,a as AnchorPrimitive,s as FocusRingPrimitive,r as PressablePrimitive,t as VisuallyHiddenPrimitive,R as __namedExportsOrder,F as default};
