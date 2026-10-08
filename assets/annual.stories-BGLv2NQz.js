import{p}from"./poc-story-meta-BzhPuF3w.js";import"./poc-experience-DEIS9AXH.js";import"./iframe-C0m-lKQZ.js";import"./preload-helper-PPVm8Dsz.js";import"./poc-catalogue-DI9zhtSF.js";import"./badge-D52VJ3Jy.js";import"./index-BF4t_Kdj.js";import"./cn-C3u6LSxm.js";import"./button-DRrg4ttv.js";import"./index-DYY4sbWj.js";import"./modal-dialog-B3pvqET1.js";const{expect:t,userEvent:n,within:l}=__STORYBOOK_MODULE_TEST__,C={...p,title:"POC/06 Annual preparation"},s={args:{initialPage:"claims"},play:async({canvasElement:a})=>{const e=l(a);await t(e.getByTestId("claims-total")).toHaveTextContent("$236.60"),await n.click(e.getByRole("button",{name:"Computer software and accessories"})),await t(e.getByText("Category drill-down")).toBeVisible(),await n.selectOptions(e.getByLabelText("Report financial year"),"2023–2024"),await t(e.getByTestId("claims-total")).toHaveTextContent("$30.00")}},i={args:{initialPage:"assets"},play:async({canvasElement:a})=>{const e=l(a);await n.selectOptions(e.getByLabelText("Asset work use"),"0"),await t(e.getByText(/Work-use cost basis/)).toHaveTextContent("$0.00")}},o={args:{initialPage:"wfh"},play:async({canvasElement:a})=>{const e=l(a);await t(e.getByRole("button",{name:"Confirm schedule inputs"})).toBeDisabled(),await n.selectOptions(e.getByLabelText("Calculation method"),"actual"),await n.click(e.getByRole("button",{name:"Confirm schedule inputs"})),await t(e.getByText(/420 hours recorded/)).toBeVisible()}},r={args:{initialPage:"annual",initialStage:"reviewed"}},c={args:{initialPage:"pack",initialStage:"reviewed"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    initialPage: 'claims'
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await expect(c.getByTestId('claims-total')).toHaveTextContent('$236.60');
    await userEvent.click(c.getByRole('button', {
      name: 'Computer software and accessories'
    }));
    await expect(c.getByText('Category drill-down')).toBeVisible();
    await userEvent.selectOptions(c.getByLabelText('Report financial year'), '2023–2024');
    await expect(c.getByTestId('claims-total')).toHaveTextContent('$30.00');
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    initialPage: 'assets'
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await userEvent.selectOptions(c.getByLabelText('Asset work use'), '0');
    await expect(c.getByText(/Work-use cost basis/)).toHaveTextContent('$0.00');
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    initialPage: 'wfh'
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await expect(c.getByRole('button', {
      name: 'Confirm schedule inputs'
    })).toBeDisabled();
    await userEvent.selectOptions(c.getByLabelText('Calculation method'), 'actual');
    await userEvent.click(c.getByRole('button', {
      name: 'Confirm schedule inputs'
    }));
    await expect(c.getByText(/420 hours recorded/)).toBeVisible();
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    initialPage: 'annual',
    initialStage: 'reviewed'
  }
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    initialPage: 'pack',
    initialStage: 'reviewed'
  }
}`,...c.parameters?.docs?.source}}};const E=["ClaimsReport","AssetSchedule","WorkingFromHome","AnnualPreparation","ExportAndLodgment"];export{r as AnnualPreparation,i as AssetSchedule,s as ClaimsReport,c as ExportAndLodgment,o as WorkingFromHome,E as __namedExportsOrder,C as default};
