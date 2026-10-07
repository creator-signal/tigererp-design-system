import{p as o}from"./poc-story-meta-CJDYyiaT.js";import"./poc-experience-Bzbaz08E.js";import"./iframe-D8TDVfrG.js";import"./preload-helper-PPVm8Dsz.js";import"./poc-catalogue-AzKQiidA.js";import"./badge-Di1JuIYD.js";import"./index-BF4t_Kdj.js";import"./cn-C3u6LSxm.js";import"./button-BBOFzuJC.js";import"./index-BHQWN7vA.js";const{expect:i,userEvent:n,within:c}=__STORYBOOK_MODULE_TEST__,b={...o,title:"POC/08 Billing second slice"},e={args:{initialPage:"billing"},play:async({canvasElement:a})=>{const t=c(a);await n.click(t.getByRole("button",{name:"Simulate test invoice event"})),await n.click(t.getByRole("button",{name:"Replay sample event"})),await i(t.getByRole("status")).toHaveTextContent("Duplicate demo webhook ignored")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    initialPage: 'billing'
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await userEvent.click(c.getByRole('button', {
      name: 'Simulate test invoice event'
    }));
    await userEvent.click(c.getByRole('button', {
      name: 'Replay sample event'
    }));
    await expect(c.getByRole('status')).toHaveTextContent('Duplicate demo webhook ignored');
  }
}`,...e.parameters?.docs?.source}}};const w=["StripeSandbox"];export{e as StripeSandbox,w as __namedExportsOrder,b as default};
