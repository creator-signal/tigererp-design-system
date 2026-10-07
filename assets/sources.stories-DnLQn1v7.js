import{p as m}from"./poc-story-meta-CJDYyiaT.js";import"./poc-experience-Bzbaz08E.js";import"./iframe-D8TDVfrG.js";import"./preload-helper-PPVm8Dsz.js";import"./poc-catalogue-AzKQiidA.js";import"./badge-Di1JuIYD.js";import"./index-BF4t_Kdj.js";import"./cn-C3u6LSxm.js";import"./button-BBOFzuJC.js";import"./index-BHQWN7vA.js";const{expect:t,userEvent:n,within:l}=__STORYBOOK_MODULE_TEST__,h={...m,title:"POC/03 Sources and history"},i={args:{initialPage:"imports"}},o={args:{initialPage:"mapping"},play:async({canvasElement:a})=>{const e=l(a);await t(e.getByRole("button",{name:"Use validated mapping"})).toBeDisabled(),await n.selectOptions(e.getByLabelText("Amount column"),"balance"),await t(e.getByRole("alert")).toHaveTextContent("running balance is not"),await n.selectOptions(e.getByLabelText("Amount column"),"amount"),await t(e.getByRole("button",{name:"Use validated mapping"})).toBeEnabled()}},s={args:{initialPage:"documents"},play:async({canvasElement:a})=>{const e=l(a);await n.click(e.getByRole("button",{name:"Confirm evidence link"})),await t(e.getByText("Linked to demo-event-01")).toBeVisible()}},r={args:{initialPage:"history",initialStage:"imported"},play:async({canvasElement:a})=>{const e=l(a);await n.type(e.getByLabelText("Search event history"),"no match"),await t(e.getByText("No sample events match this search.")).toBeVisible(),await n.clear(e.getByLabelText("Search event history")),await t(e.getByRole("cell",{name:"Studio Tools"})).toBeVisible()}},c={args:{initialPage:"review",initialStage:"imported"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    initialPage: 'imports'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    initialPage: 'mapping'
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await expect(c.getByRole('button', {
      name: 'Use validated mapping'
    })).toBeDisabled();
    await userEvent.selectOptions(c.getByLabelText('Amount column'), 'balance');
    await expect(c.getByRole('alert')).toHaveTextContent('running balance is not');
    await userEvent.selectOptions(c.getByLabelText('Amount column'), 'amount');
    await expect(c.getByRole('button', {
      name: 'Use validated mapping'
    })).toBeEnabled();
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    initialPage: 'documents'
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await userEvent.click(c.getByRole('button', {
      name: 'Confirm evidence link'
    }));
    await expect(c.getByText('Linked to demo-event-01')).toBeVisible();
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    initialPage: 'history',
    initialStage: 'imported'
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await userEvent.type(c.getByLabelText('Search event history'), 'no match');
    await expect(c.getByText('No sample events match this search.')).toBeVisible();
    await userEvent.clear(c.getByLabelText('Search event history'));
    await expect(c.getByRole('cell', {
      name: 'Studio Tools'
    })).toBeVisible();
  }
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    initialPage: 'review',
    initialStage: 'imported'
  }
}`,...c.parameters?.docs?.source}}};const T=["ImportHistory","MapAndValidate","DocumentInbox","TransactionHistory","TransactionReview"];export{s as DocumentInbox,i as ImportHistory,o as MapAndValidate,r as TransactionHistory,c as TransactionReview,T as __namedExportsOrder,h as default};
