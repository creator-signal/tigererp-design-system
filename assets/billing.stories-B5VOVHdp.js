import{p as o}from"./poc-story-meta-BzhPuF3w.js";import"./poc-experience-DEIS9AXH.js";import"./iframe-C0m-lKQZ.js";import"./preload-helper-PPVm8Dsz.js";import"./poc-catalogue-DI9zhtSF.js";import"./badge-D52VJ3Jy.js";import"./index-BF4t_Kdj.js";import"./cn-C3u6LSxm.js";import"./button-DRrg4ttv.js";import"./index-DYY4sbWj.js";import"./modal-dialog-B3pvqET1.js";const{expect:i,userEvent:n,within:c}=__STORYBOOK_MODULE_TEST__,w={...o,title:"POC/08 Billing second slice"},e={args:{initialPage:"billing"},play:async({canvasElement:a})=>{const t=c(a);await n.click(t.getByRole("button",{name:"Simulate test invoice event"})),await n.click(t.getByRole("button",{name:"Replay sample event"})),await i(t.getByRole("status")).toHaveTextContent("Duplicate demo webhook ignored")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const S=["StripeSandbox"];export{e as StripeSandbox,S as __namedExportsOrder,w as default};
