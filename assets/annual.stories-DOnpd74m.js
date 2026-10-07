import{p as l}from"./poc-story-meta-CJDYyiaT.js";import"./poc-experience-Bzbaz08E.js";import"./iframe-D8TDVfrG.js";import"./preload-helper-PPVm8Dsz.js";import"./poc-catalogue-AzKQiidA.js";import"./badge-Di1JuIYD.js";import"./index-BF4t_Kdj.js";import"./cn-C3u6LSxm.js";import"./button-BBOFzuJC.js";import"./index-BHQWN7vA.js";const{expect:r,userEvent:o,within:c}=__STORYBOOK_MODULE_TEST__,b={...l,title:"POC/06 Annual preparation"},t={args:{initialPage:"assets"},play:async({canvasElement:i})=>{const e=c(i);await o.selectOptions(e.getByLabelText("Asset work use"),"0"),await r(e.getByText(/Work-use cost basis/)).toHaveTextContent("$0.00")}},a={args:{initialPage:"wfh"},play:async({canvasElement:i})=>{const e=c(i);await r(e.getByRole("button",{name:"Confirm schedule inputs"})).toBeDisabled(),await o.selectOptions(e.getByLabelText("Calculation method"),"actual"),await o.click(e.getByRole("button",{name:"Confirm schedule inputs"})),await r(e.getByText(/420 hours recorded/)).toBeVisible()}},n={args:{initialPage:"annual",initialStage:"reviewed"}},s={args:{initialPage:"pack",initialStage:"reviewed"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    initialPage: 'annual',
    initialStage: 'reviewed'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    initialPage: 'pack',
    initialStage: 'reviewed'
  }
}`,...s.parameters?.docs?.source}}};const v=["AssetSchedule","WorkingFromHome","AnnualPreparation","ExportAndLodgment"];export{n as AnnualPreparation,t as AssetSchedule,s as ExportAndLodgment,a as WorkingFromHome,v as __namedExportsOrder,b as default};
