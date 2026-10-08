import{p as l}from"./poc-story-meta-BzhPuF3w.js";import"./poc-experience-DEIS9AXH.js";import"./iframe-C0m-lKQZ.js";import"./preload-helper-PPVm8Dsz.js";import"./poc-catalogue-DI9zhtSF.js";import"./badge-D52VJ3Jy.js";import"./index-BF4t_Kdj.js";import"./cn-C3u6LSxm.js";import"./button-DRrg4ttv.js";import"./index-DYY4sbWj.js";import"./modal-dialog-B3pvqET1.js";const{expect:a,userEvent:t,within:s}=__STORYBOOK_MODULE_TEST__,T={...l,title:"POC/05 Review automation"},i={args:{initialPage:"patterns"},play:async({canvasElement:n})=>{const e=s(n);await t.click(e.getByRole("button",{name:"Preview pattern"})),await a(e.getAllByRole("status").at(-1)).toHaveTextContent("Enter a name"),await t.type(e.getByLabelText("Pattern name"),"New supplier books"),await t.type(e.getByLabelText("Pattern text"),"unmapped purchase"),await t.selectOptions(e.getByLabelText("Pattern category"),"education"),await t.clear(e.getByLabelText("Pattern work use %")),await t.type(e.getByLabelText("Pattern work use %"),"100"),await t.click(e.getByRole("button",{name:"Preview pattern"})),await a(e.getByText("Pattern preview · both financial years, no automatic approval")).toBeVisible(),await t.click(e.getByRole("button",{name:"Save demo pattern"})),await t.click(e.getByRole("button",{name:"Apply configured patterns"})),await t.click(e.getByRole("button",{name:"Review affected transactions"})),await a(e.getByLabelText("Category evt-06")).toHaveValue("education"),await a(e.getByTestId("evt-03")).toHaveTextContent("Manual override · book receipt"),await a(e.getByTestId("evt-06")).toHaveTextContent("Needs review")}},o={args:{initialPage:"categories"},play:async({canvasElement:n})=>{const e=s(n);await t.selectOptions(e.getByLabelText("Treatment Internet"),"capital"),await t.click(e.getAllByRole("button",{name:"Claims report"}).at(-1)),await a(e.getByTestId("claims-total")).toHaveTextContent("$146.60"),await a(e.getByRole("cell",{name:"Separate asset schedule"})).toBeVisible()}},r={args:{initialPage:"rules",initialStage:"reviewed"},play:async({canvasElement:n})=>{const e=s(n);await t.click(e.getByRole("button",{name:"Activate scoped rule"})),await a(e.getByText("Demo rule active")).toBeVisible(),await t.click(e.getByRole("button",{name:"Disable demo rule"})),await a(e.getByText("Draft suggestion")).toBeVisible()}},c={args:{initialPage:"collectors"},play:async({canvasElement:n})=>{const e=s(n);await a(e.getByRole("button",{name:"Collect sample export"})).toBeDisabled(),await t.click(e.getByRole("checkbox")),await t.click(e.getByRole("button",{name:"Collect sample export"})),await a(e.getByRole("heading",{name:"Acquired · demo-order-export-01"})).toBeVisible(),await t.click(e.getByRole("button",{name:"Preview expired provider session"})),await a(e.getByRole("alert")).toHaveTextContent("Provider session expired")}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    initialPage: 'patterns'
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await userEvent.click(c.getByRole('button', {
      name: 'Preview pattern'
    }));
    await expect(c.getAllByRole('status').at(-1)!).toHaveTextContent('Enter a name');
    await userEvent.type(c.getByLabelText('Pattern name'), 'New supplier books');
    await userEvent.type(c.getByLabelText('Pattern text'), 'unmapped purchase');
    await userEvent.selectOptions(c.getByLabelText('Pattern category'), 'education');
    await userEvent.clear(c.getByLabelText('Pattern work use %'));
    await userEvent.type(c.getByLabelText('Pattern work use %'), '100');
    await userEvent.click(c.getByRole('button', {
      name: 'Preview pattern'
    }));
    await expect(c.getByText('Pattern preview · both financial years, no automatic approval')).toBeVisible();
    await userEvent.click(c.getByRole('button', {
      name: 'Save demo pattern'
    }));
    await userEvent.click(c.getByRole('button', {
      name: 'Apply configured patterns'
    }));
    await userEvent.click(c.getByRole('button', {
      name: 'Review affected transactions'
    }));
    await expect(c.getByLabelText('Category evt-06')).toHaveValue('education');
    await expect(c.getByTestId('evt-03')).toHaveTextContent('Manual override · book receipt');
    await expect(c.getByTestId('evt-06')).toHaveTextContent('Needs review');
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    initialPage: 'categories'
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await userEvent.selectOptions(c.getByLabelText('Treatment Internet'), 'capital');
    await userEvent.click(c.getAllByRole('button', {
      name: 'Claims report'
    }).at(-1)!);
    await expect(c.getByTestId('claims-total')).toHaveTextContent('$146.60');
    await expect(c.getByRole('cell', {
      name: 'Separate asset schedule'
    })).toBeVisible();
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const R=["ClaimPatterns","CategoryConfiguration","ReviewRules","CollectionHelpers"];export{o as CategoryConfiguration,i as ClaimPatterns,c as CollectionHelpers,r as ReviewRules,R as __namedExportsOrder,T as default};
