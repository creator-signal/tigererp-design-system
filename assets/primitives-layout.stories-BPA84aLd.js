import{j as e}from"./iframe-D8TDVfrG.js";import{G as c,B as d,T as t,I as l,S as p,H as x}from"./primitives-CNalY77e.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BPY4yvGi.js";import"./index-CvCHq8cH.js";import"./index-BHQWN7vA.js";import"./cn-C3u6LSxm.js";const b={title:"DLS/05 Primitives/Layout",tags:["autodocs","canonical","primitive","beta"]},r=({children:o})=>e.jsx(d,{surface:"subtle",border:!0,padding:"sm",children:e.jsx(t,{size:"small",children:o})}),a={name:"Box",render:()=>e.jsxs(c,{columns:3,children:[e.jsx(d,{surface:"canvas",border:!0,padding:"md",children:e.jsx(t,{children:"Canvas"})}),e.jsx(d,{surface:"panel",border:!0,radius:!0,elevation:"card",padding:"md",children:e.jsx(t,{children:"Panel"})}),e.jsx(d,{surface:"subtle",border:!0,padding:"md",children:e.jsx(t,{children:"Subtle"})})]})},s={name:"Stack",render:()=>e.jsxs(p,{gap:"sm",children:[e.jsx(x,{level:2,children:"Stack"}),e.jsx(r,{children:"First region"}),e.jsx(r,{children:"Second region"}),e.jsx(r,{children:"Third region"})]})},i={name:"Inline",render:()=>e.jsxs(l,{gap:"sm",children:[e.jsx(r,{children:"Reference"}),e.jsx(r,{children:"Status"}),e.jsx(r,{children:"Owner"}),e.jsx(r,{children:"Version"})]})},n={name:"Grid",render:()=>e.jsx(c,{columns:4,gap:"sm",children:Array.from({length:8},(o,m)=>e.jsxs(r,{children:["Cell ",m+1]},m))})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Box',
  render: () => <Grid columns={3}><Box surface="canvas" border padding="md"><Text>Canvas</Text></Box><Box surface="panel" border radius elevation="card" padding="md"><Text>Panel</Text></Box><Box surface="subtle" border padding="md"><Text>Subtle</Text></Box></Grid>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Stack',
  render: () => <Stack gap="sm"><Heading level={2}>Stack</Heading><Sample>First region</Sample><Sample>Second region</Sample><Sample>Third region</Sample></Stack>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Inline',
  render: () => <Inline gap="sm"><Sample>Reference</Sample><Sample>Status</Sample><Sample>Owner</Sample><Sample>Version</Sample></Inline>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Grid',
  render: () => <Grid columns={4} gap="sm">{Array.from({
      length: 8
    }, (_, index) => <Sample key={index}>Cell {index + 1}</Sample>)}</Grid>
}`,...n.parameters?.docs?.source}}};const B=["BoxPrimitive","StackPrimitive","InlinePrimitive","GridPrimitive"];export{a as BoxPrimitive,n as GridPrimitive,i as InlinePrimitive,s as StackPrimitive,B as __namedExportsOrder,b as default};
