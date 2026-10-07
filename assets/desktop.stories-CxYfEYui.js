import{p as o}from"./poc-story-meta-CJDYyiaT.js";import"./poc-experience-Bzbaz08E.js";import"./iframe-D8TDVfrG.js";import"./preload-helper-PPVm8Dsz.js";import"./poc-catalogue-AzKQiidA.js";import"./badge-Di1JuIYD.js";import"./index-BF4t_Kdj.js";import"./cn-C3u6LSxm.js";import"./button-BBOFzuJC.js";import"./index-BHQWN7vA.js";const{expect:r,userEvent:s,within:i}=__STORYBOOK_MODULE_TEST__,w={...o,title:"POC/07 Desktop and settings"},e={args:{initialPage:"desktop"}},t={args:{initialPage:"settings"},play:async({canvasElement:n})=>{const a=i(n);await s.selectOptions(a.getByLabelText("Source retention"),"archive"),await s.click(a.getByRole("button",{name:"Save demo preferences"})),await r(a.getByRole("status")).toHaveTextContent("browser memory only")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const k=["DesktopServices","WorkspaceSettings"];export{e as DesktopServices,t as WorkspaceSettings,k as __namedExportsOrder,w as default};
