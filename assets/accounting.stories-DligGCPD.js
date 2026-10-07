import{p}from"./poc-story-meta-CJDYyiaT.js";import"./poc-experience-Bzbaz08E.js";import"./iframe-D8TDVfrG.js";import"./preload-helper-PPVm8Dsz.js";import"./poc-catalogue-AzKQiidA.js";import"./badge-Di1JuIYD.js";import"./index-BF4t_Kdj.js";import"./cn-C3u6LSxm.js";import"./button-BBOFzuJC.js";import"./index-BHQWN7vA.js";const{expect:a,userEvent:t,within:l}=__STORYBOOK_MODULE_TEST__,E={...p,title:"POC/04 Expense accounting"},n={args:{initialPage:"expense"}},o={args:{initialPage:"approvals"}},r={args:{initialPage:"ledger"},play:async({canvasElement:s})=>{const e=l(s);await a(e.getByRole("button",{name:"Simulate posting"})).toBeDisabled(),await t.click(e.getByRole("button",{name:"Capture expense"})),await t.click(e.getByRole("button",{name:"Send for approval"})),await t.click(e.getByRole("button",{name:"Approve capture example"})),await t.click(e.getByRole("button",{name:"Review ledger posting"})),await t.click(e.getByRole("button",{name:"Simulate posting"})),await t.click(e.getByRole("button",{name:"Retry same posting"})),await a(e.getByRole("status")).toHaveTextContent("no second effect"),await t.click(e.getByRole("button",{name:"Preview correction"})),await a(e.getByRole("button",{name:"Create reversal and replacement"})).toBeDisabled(),await t.type(e.getByLabelText("Correction reason"),"Correct category"),await t.click(e.getByRole("button",{name:"Create reversal and replacement"})),await a(e.getByRole("cell",{name:"demo-replacement-02"})).toBeVisible(),await t.click(e.getByRole("button",{name:"Ledger and audit"}))}},i={args:{initialPage:"corrections"}},c={args:{initialPage:"reconciliation"},play:async({canvasElement:s})=>{const e=l(s);await t.click(e.getByRole("button",{name:"Confirm funding match"})),await a(e.getByRole("cell",{name:"Confirmed funding transfer"})).toBeVisible()}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    initialPage: 'expense'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    initialPage: 'approvals'
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    initialPage: 'ledger'
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await expect(c.getByRole('button', {
      name: 'Simulate posting'
    })).toBeDisabled();
    await userEvent.click(c.getByRole('button', {
      name: 'Capture expense'
    }));
    await userEvent.click(c.getByRole('button', {
      name: 'Send for approval'
    }));
    await userEvent.click(c.getByRole('button', {
      name: 'Approve capture example'
    }));
    await userEvent.click(c.getByRole('button', {
      name: 'Review ledger posting'
    }));
    await userEvent.click(c.getByRole('button', {
      name: 'Simulate posting'
    }));
    await userEvent.click(c.getByRole('button', {
      name: 'Retry same posting'
    }));
    await expect(c.getByRole('status')).toHaveTextContent('no second effect');
    await userEvent.click(c.getByRole('button', {
      name: 'Preview correction'
    }));
    await expect(c.getByRole('button', {
      name: 'Create reversal and replacement'
    })).toBeDisabled();
    await userEvent.type(c.getByLabelText('Correction reason'), 'Correct category');
    await userEvent.click(c.getByRole('button', {
      name: 'Create reversal and replacement'
    }));
    await expect(c.getByRole('cell', {
      name: 'demo-replacement-02'
    })).toBeVisible();
    await userEvent.click(c.getByRole('button', {
      name: 'Ledger and audit'
    }));
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    initialPage: 'corrections'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    initialPage: 'reconciliation'
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await userEvent.click(c.getByRole('button', {
      name: 'Confirm funding match'
    }));
    await expect(c.getByRole('cell', {
      name: 'Confirmed funding transfer'
    })).toBeVisible();
  }
}`,...c.parameters?.docs?.source}}};const x=["CaptureExpense","ApprovalQueue","LedgerAndAudit","CorrectAPosting","Reconciliation"];export{o as ApprovalQueue,n as CaptureExpense,i as CorrectAPosting,r as LedgerAndAudit,c as Reconciliation,x as __namedExportsOrder,E as default};
