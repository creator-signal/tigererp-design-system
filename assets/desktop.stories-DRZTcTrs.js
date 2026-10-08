import{p as s}from"./poc-story-meta-BzhPuF3w.js";import"./poc-experience-DEIS9AXH.js";import"./iframe-C0m-lKQZ.js";import"./preload-helper-PPVm8Dsz.js";import"./poc-catalogue-DI9zhtSF.js";import"./badge-D52VJ3Jy.js";import"./index-BF4t_Kdj.js";import"./cn-C3u6LSxm.js";import"./button-DRrg4ttv.js";import"./index-DYY4sbWj.js";import"./modal-dialog-B3pvqET1.js";const{expect:n,userEvent:o,within:i}=__STORYBOOK_MODULE_TEST__,k={...s,title:"POC/07 Desktop and settings"},e={args:{initialPage:"desktop"}},t={args:{initialPage:"settings"},play:async({canvasElement:r})=>{const a=i(r);await o.selectOptions(a.getByLabelText("Source retention"),"archive"),await o.click(a.getByRole("button",{name:"Save demo preferences"})),await n(a.getByRole("status")).toHaveTextContent("browser memory only")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    initialPage: 'desktop'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    initialPage: 'settings'
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await userEvent.selectOptions(c.getByLabelText('Source retention'), 'archive');
    await userEvent.click(c.getByRole('button', {
      name: 'Save demo preferences'
    }));
    await expect(c.getByRole('status')).toHaveTextContent('browser memory only');
  }
}`,...t.parameters?.docs?.source}}};const x=["DesktopServices","WorkspaceSettings"];export{e as DesktopServices,t as WorkspaceSettings,x as __namedExportsOrder,k as default};
