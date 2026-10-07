import{p as c}from"./poc-story-meta-CJDYyiaT.js";import"./poc-experience-Bzbaz08E.js";import"./iframe-D8TDVfrG.js";import"./preload-helper-PPVm8Dsz.js";import"./poc-catalogue-AzKQiidA.js";import"./badge-Di1JuIYD.js";import"./index-BF4t_Kdj.js";import"./cn-C3u6LSxm.js";import"./button-BBOFzuJC.js";import"./index-BHQWN7vA.js";const{expect:t,userEvent:a,within:r}=__STORYBOOK_MODULE_TEST__,v={...c,title:"POC/05 Review automation"},o={args:{initialPage:"rules",initialStage:"reviewed"},play:async({canvasElement:n})=>{const e=r(n);await a.click(e.getByRole("button",{name:"Activate scoped rule"})),await t(e.getByText("Demo rule active")).toBeVisible(),await a.click(e.getByRole("button",{name:"Disable demo rule"})),await t(e.getByText("Draft suggestion")).toBeVisible()}},i={args:{initialPage:"collectors"},play:async({canvasElement:n})=>{const e=r(n);await t(e.getByRole("button",{name:"Collect sample export"})).toBeDisabled(),await a.click(e.getByRole("checkbox")),await a.click(e.getByRole("button",{name:"Collect sample export"})),await t(e.getByRole("heading",{name:"Acquired · demo-order-export-01"})).toBeVisible(),await a.click(e.getByRole("button",{name:"Preview expired provider session"})),await t(e.getByRole("alert")).toHaveTextContent("Provider session expired")}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    initialPage: 'rules',
    initialStage: 'reviewed'
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await userEvent.click(c.getByRole('button', {
      name: 'Activate scoped rule'
    }));
    await expect(c.getByText('Demo rule active')).toBeVisible();
    await userEvent.click(c.getByRole('button', {
      name: 'Disable demo rule'
    }));
    await expect(c.getByText('Draft suggestion')).toBeVisible();
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    initialPage: 'collectors'
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await expect(c.getByRole('button', {
      name: 'Collect sample export'
    })).toBeDisabled();
    await userEvent.click(c.getByRole('checkbox'));
    await userEvent.click(c.getByRole('button', {
      name: 'Collect sample export'
    }));
    await expect(c.getByRole('heading', {
      name: 'Acquired · demo-order-export-01'
    })).toBeVisible();
    await userEvent.click(c.getByRole('button', {
      name: 'Preview expired provider session'
    }));
    await expect(c.getByRole('alert')).toHaveTextContent('Provider session expired');
  }
}`,...i.parameters?.docs?.source}}};const x=["ReviewRules","CollectionHelpers"];export{i as CollectionHelpers,o as ReviewRules,x as __namedExportsOrder,v as default};
