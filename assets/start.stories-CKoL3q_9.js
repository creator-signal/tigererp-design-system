import{p as r}from"./poc-story-meta-BzhPuF3w.js";import"./poc-experience-DEIS9AXH.js";import"./iframe-C0m-lKQZ.js";import"./preload-helper-PPVm8Dsz.js";import"./poc-catalogue-DI9zhtSF.js";import"./badge-D52VJ3Jy.js";import"./index-BF4t_Kdj.js";import"./cn-C3u6LSxm.js";import"./button-DRrg4ttv.js";import"./index-DYY4sbWj.js";import"./modal-dialog-B3pvqET1.js";const{expect:n,userEvent:t,within:c}=__STORYBOOK_MODULE_TEST__,R={...r,title:"POC/01 Start and identity"},i={args:{initialPage:"first-run"},play:async({canvasElement:a})=>{const e=c(a);await n(e.getByRole("button",{name:"Continue to sign in"})).toBeDisabled(),await t.click(e.getByRole("button",{name:"Prepare demo workspace"})),await n(e.getByRole("button",{name:"Continue to sign in"})).toBeEnabled()}},o={args:{initialPage:"sign-in"},play:async({canvasElement:a})=>{const e=c(a);await t.click(e.getByRole("button",{name:"Preview sign-in outage"})),await n(e.getByRole("alert")).toHaveTextContent("Identity provider unavailable"),await t.click(e.getByRole("button",{name:"Continue with demo identity"})),await n(e.getByRole("heading",{name:"Choose entity"})).toBeVisible(),await t.click(e.getByRole("button",{name:"Sign in"}))}},s={args:{initialPage:"companies",initialStage:"reviewed"},play:async({canvasElement:a})=>{const e=c(a);await t.click(e.getByRole("button",{name:"Open Demo Personal"})),await n(e.getByRole("status")).toHaveTextContent("Demo Personal selected"),await n(e.getByText("0 imported")).toBeVisible(),await t.click(e.getByRole("button",{name:"Choose entity"}))}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    initialPage: 'first-run'
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await expect(c.getByRole('button', {
      name: 'Continue to sign in'
    })).toBeDisabled();
    await userEvent.click(c.getByRole('button', {
      name: 'Prepare demo workspace'
    }));
    await expect(c.getByRole('button', {
      name: 'Continue to sign in'
    })).toBeEnabled();
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    initialPage: 'sign-in'
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await userEvent.click(c.getByRole('button', {
      name: 'Preview sign-in outage'
    }));
    await expect(c.getByRole('alert')).toHaveTextContent('Identity provider unavailable');
    await userEvent.click(c.getByRole('button', {
      name: 'Continue with demo identity'
    }));
    await expect(c.getByRole('heading', {
      name: 'Choose entity'
    })).toBeVisible();
    await userEvent.click(c.getByRole('button', {
      name: 'Sign in'
    }));
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    initialPage: 'companies',
    initialStage: 'reviewed'
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await userEvent.click(c.getByRole('button', {
      name: 'Open Demo Personal'
    }));
    await expect(c.getByRole('status')).toHaveTextContent('Demo Personal selected');
    await expect(c.getByText('0 imported')).toBeVisible();
    await userEvent.click(c.getByRole('button', {
      name: 'Choose entity'
    }));
  }
}`,...s.parameters?.docs?.source}}};const E=["FirstRunSetup","SignIn","ChooseEntity"];export{s as ChooseEntity,i as FirstRunSetup,o as SignIn,E as __namedExportsOrder,R as default};
