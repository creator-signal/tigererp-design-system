import{p as g}from"./poc-story-meta-BzhPuF3w.js";import"./poc-experience-DEIS9AXH.js";import"./iframe-C0m-lKQZ.js";import"./preload-helper-PPVm8Dsz.js";import"./poc-catalogue-DI9zhtSF.js";import"./badge-D52VJ3Jy.js";import"./index-BF4t_Kdj.js";import"./cn-C3u6LSxm.js";import"./button-DRrg4ttv.js";import"./index-DYY4sbWj.js";import"./modal-dialog-B3pvqET1.js";const{expect:a,userEvent:t,within:p}=__STORYBOOK_MODULE_TEST__,E={...g,title:"POC/04 Expense accounting"},o={args:{initialPage:"matching"},play:async({canvasElement:n})=>{const e=p(n);await t.selectOptions(e.getByLabelText("Reconciliation event"),"evt-07"),await a(e.getByRole("alert")).toHaveTextContent("references differ"),await t.click(e.getByRole("button",{name:"Reject equal-amount candidate"})),await t.selectOptions(e.getByLabelText("Reconciliation event"),"evt-04"),await a(e.getByRole("button",{name:"Accept source group"})).toBeDisabled(),await t.click(e.getByRole("checkbox",{name:/I reviewed references/})),await t.type(e.getByLabelText("Reconciliation reason"),"Order, payment and funding references verified"),await t.click(e.getByRole("button",{name:"Accept source group"})),await t.click(e.getAllByRole("button",{name:"Transactions and mapping"}).at(-1)),await t.click(e.getByRole("button",{name:"Review evt-04"})),await t.click(e.getAllByRole("button",{name:"Claims report"}).at(-1)),await a(e.getByTestId("claims-total")).toHaveTextContent("$300.60")}},i={args:{initialPage:"expense"}},c={args:{initialPage:"approvals"}},r={args:{initialPage:"ledger"},play:async({canvasElement:n})=>{const e=p(n);await a(e.getByRole("button",{name:"Simulate posting"})).toBeDisabled(),await t.click(e.getByRole("button",{name:"Capture expense"})),await t.click(e.getByRole("button",{name:"Send for approval"})),await t.click(e.getByRole("button",{name:"Approve capture example"})),await t.click(e.getByRole("button",{name:"Review ledger posting"})),await t.click(e.getByRole("button",{name:"Simulate posting"})),await t.click(e.getByRole("button",{name:"Retry same posting"})),await a(e.getByRole("status")).toHaveTextContent("no second effect"),await t.click(e.getByRole("button",{name:"Preview correction"})),await a(e.getByRole("button",{name:"Create reversal and replacement"})).toBeDisabled(),await t.type(e.getByLabelText("Correction reason"),"Correct category"),await t.click(e.getByRole("button",{name:"Create reversal and replacement"})),await a(e.getByRole("cell",{name:"demo-replacement-02"})).toBeVisible(),await t.click(e.getByRole("button",{name:"Ledger and audit"}))}},l={args:{initialPage:"corrections"}},s={args:{initialPage:"reconciliation"},play:async({canvasElement:n})=>{const e=p(n);await t.click(e.getByRole("button",{name:"Confirm funding match"})),await a(e.getByRole("cell",{name:"Confirmed funding transfer"})).toBeVisible()}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    initialPage: 'matching'
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await userEvent.selectOptions(c.getByLabelText('Reconciliation event'), 'evt-07');
    await expect(c.getByRole('alert')).toHaveTextContent('references differ');
    await userEvent.click(c.getByRole('button', {
      name: 'Reject equal-amount candidate'
    }));
    await userEvent.selectOptions(c.getByLabelText('Reconciliation event'), 'evt-04');
    await expect(c.getByRole('button', {
      name: 'Accept source group'
    })).toBeDisabled();
    await userEvent.click(c.getByRole('checkbox', {
      name: /I reviewed references/
    }));
    await userEvent.type(c.getByLabelText('Reconciliation reason'), 'Order, payment and funding references verified');
    await userEvent.click(c.getByRole('button', {
      name: 'Accept source group'
    }));
    await userEvent.click(c.getAllByRole('button', {
      name: 'Transactions and mapping'
    }).at(-1)!);
    await userEvent.click(c.getByRole('button', {
      name: 'Review evt-04'
    }));
    await userEvent.click(c.getAllByRole('button', {
      name: 'Claims report'
    }).at(-1)!);
    await expect(c.getByTestId('claims-total')).toHaveTextContent('$300.60');
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    initialPage: 'expense'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    initialPage: 'approvals'
  }
}`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    initialPage: 'corrections'
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const f=["SourceReconciliation","CaptureExpense","ApprovalQueue","LedgerAndAudit","CorrectAPosting","Reconciliation"];export{c as ApprovalQueue,i as CaptureExpense,l as CorrectAPosting,r as LedgerAndAudit,s as Reconciliation,o as SourceReconciliation,f as __namedExportsOrder,E as default};
