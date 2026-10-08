import{p as m}from"./poc-story-meta-BzhPuF3w.js";import"./poc-experience-DEIS9AXH.js";import"./iframe-C0m-lKQZ.js";import"./preload-helper-PPVm8Dsz.js";import"./poc-catalogue-DI9zhtSF.js";import"./badge-D52VJ3Jy.js";import"./index-BF4t_Kdj.js";import"./cn-C3u6LSxm.js";import"./button-DRrg4ttv.js";import"./index-DYY4sbWj.js";import"./modal-dialog-B3pvqET1.js";const{expect:a,userEvent:t,within:i}=__STORYBOOK_MODULE_TEST__,C={...m,title:"POC/03 Sources and history"},c={args:{initialPage:"imports"}},o={args:{initialPage:"mapping"},play:async({canvasElement:n})=>{const e=i(n);await a(e.getByRole("button",{name:"Use validated mapping"})).toBeDisabled(),await t.selectOptions(e.getByLabelText("Amount column"),"balance"),await a(e.getByRole("alert")).toHaveTextContent("running balance is not"),await t.selectOptions(e.getByLabelText("Amount column"),"amount"),await a(e.getByRole("button",{name:"Use validated mapping"})).toBeEnabled()}},s={args:{initialPage:"documents"},play:async({canvasElement:n})=>{const e=i(n);await t.click(e.getByRole("button",{name:"Confirm evidence link"})),await a(e.getByText("Linked to demo-event-01")).toBeVisible()}},r={args:{initialPage:"history",initialStage:"imported"},play:async({canvasElement:n})=>{const e=i(n);await t.type(e.getByLabelText("Search event history"),"no match"),await a(e.getByText("No sample events match this search.")).toBeVisible(),await t.clear(e.getByLabelText("Search event history")),await a(e.getByRole("cell",{name:"Studio Tools"})).toBeVisible()}},l={args:{initialPage:"review",initialStage:"imported"}},g={args:{initialPage:"grid"}},p={args:{initialPage:"grid"},play:async({canvasElement:n})=>{const e=i(n);await t.click(e.getByLabelText("Grid select evt-06")),await t.click(e.getByLabelText("Grid select evt-07")),await t.selectOptions(e.getByLabelText("Set category"),"education"),await t.type(e.getByLabelText("Set work use %"),"100"),await t.click(e.getByRole("button",{name:"Apply edits"})),await a(e.getByTestId("grid-selection-count")).toHaveTextContent("2 selected"),await a(e.getByLabelText("Grid select evt-06")).toBeChecked(),await t.click(e.getByRole("button",{name:"Review selected (1)"})),await a(e.getByTestId("grid-selection-count")).toHaveTextContent("1 selected"),await a(e.getByLabelText("Grid select evt-07")).toBeChecked(),await a(e.getByLabelText("Grid select evt-06")).not.toBeChecked(),await t.click(e.getByRole("button",{name:/New Supplier/})),await a(e.getByRole("dialog")).toBeVisible(),await t.keyboard("{Escape}"),await a(e.queryByRole("dialog")).not.toBeInTheDocument(),await a(e.getByRole("button",{name:/New Supplier/})).toHaveFocus(),await t.click(e.getByRole("button",{name:"Open claims report"})),await a(e.getByTestId("claims-total")).toHaveTextContent("$296.60")}},d={args:{initialPage:"grid"},play:async({canvasElement:n})=>{const e=i(n);e.getAllByRole("gridcell")[0].focus(),await t.keyboard(" {Shift>}{ArrowDown}{/Shift}"),await a(e.getByLabelText("Grid select evt-01")).toBeChecked(),await a(e.getByLabelText("Grid select evt-02")).toBeChecked(),await t.keyboard("{ArrowRight}{ArrowRight}{Enter}"),await a(e.getByRole("dialog")).toBeVisible(),await t.keyboard("{Escape}"),await a(e.queryByRole("dialog")).not.toBeInTheDocument(),await t.click(e.getByLabelText("Select all visible transactions")),await a(e.getByTestId("grid-selection-count")).toHaveTextContent("7 selected"),await t.selectOptions(e.getByLabelText("Grid review filter"),"conflicts"),await a(e.getByText("No transactions match the grid filters.")).toBeVisible(),await a(e.getByTestId("grid-selection-count")).toHaveTextContent("0 selected")}},y={args:{initialPage:"grid"},play:async({canvasElement:n})=>{const e=i(n);await t.selectOptions(e.getByLabelText("Grid review filter"),"unmapped"),await t.click(e.getByLabelText("Select all visible transactions")),await t.selectOptions(e.getByLabelText("Set category"),"education"),await t.type(e.getByLabelText("Set work use %"),"100"),await t.click(e.getByRole("button",{name:"Apply edits"})),await a(e.getByTestId("grid-evt-06")).toBeVisible(),await a(e.getByTestId("grid-selection-count")).toHaveTextContent("1 selected"),await t.click(e.getByRole("button",{name:"Review selected (1)"})),await a(e.getByText("No transactions match the grid filters.")).toBeVisible(),await t.click(e.getByRole("button",{name:"Open claims report"})),await a(e.getByTestId("claims-total")).toHaveTextContent("$296.60")}},w={args:{initialPage:"transactions"},play:async({canvasElement:n})=>{const e=i(n);await t.selectOptions(e.getByLabelText("Review filter"),"unmapped"),await a(e.getByTestId("evt-06")).toBeVisible(),await t.selectOptions(e.getByLabelText("Category evt-06"),"education"),await t.selectOptions(e.getByLabelText("Review filter"),"all"),await t.clear(e.getByLabelText("Work use evt-06")),await t.type(e.getByLabelText("Work use evt-06"),"100"),await t.click(e.getByRole("button",{name:"Review evt-06"})),await t.click(e.getAllByRole("button",{name:"Claims report"}).at(-1)),await a(e.getByTestId("claims-total")).toHaveTextContent("$296.60")}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    initialPage: 'imports'
  }
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    initialPage: 'review',
    initialStage: 'imported'
  }
}`,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    initialPage: 'grid'
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    initialPage: 'grid'
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await userEvent.click(c.getByLabelText('Grid select evt-06'));
    await userEvent.click(c.getByLabelText('Grid select evt-07'));
    await userEvent.selectOptions(c.getByLabelText('Set category'), 'education');
    await userEvent.type(c.getByLabelText('Set work use %'), '100');
    await userEvent.click(c.getByRole('button', {
      name: 'Apply edits'
    }));
    await expect(c.getByTestId('grid-selection-count')).toHaveTextContent('2 selected');
    await expect(c.getByLabelText('Grid select evt-06')).toBeChecked();
    await userEvent.click(c.getByRole('button', {
      name: 'Review selected (1)'
    }));
    await expect(c.getByTestId('grid-selection-count')).toHaveTextContent('1 selected');
    await expect(c.getByLabelText('Grid select evt-07')).toBeChecked();
    await expect(c.getByLabelText('Grid select evt-06')).not.toBeChecked();
    await userEvent.click(c.getByRole('button', {
      name: /New Supplier/
    }));
    await expect(c.getByRole('dialog')).toBeVisible();
    await userEvent.keyboard('{Escape}');
    await expect(c.queryByRole('dialog')).not.toBeInTheDocument();
    await expect(c.getByRole('button', {
      name: /New Supplier/
    })).toHaveFocus();
    await userEvent.click(c.getByRole('button', {
      name: 'Open claims report'
    }));
    await expect(c.getByTestId('claims-total')).toHaveTextContent('$296.60');
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    initialPage: 'grid'
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    const first = c.getAllByRole('gridcell')[0];
    first.focus();
    await userEvent.keyboard(' {Shift>}{ArrowDown}{/Shift}');
    await expect(c.getByLabelText('Grid select evt-01')).toBeChecked();
    await expect(c.getByLabelText('Grid select evt-02')).toBeChecked();
    await userEvent.keyboard('{ArrowRight}{ArrowRight}{Enter}');
    await expect(c.getByRole('dialog')).toBeVisible();
    await userEvent.keyboard('{Escape}');
    await expect(c.queryByRole('dialog')).not.toBeInTheDocument();
    await userEvent.click(c.getByLabelText('Select all visible transactions'));
    await expect(c.getByTestId('grid-selection-count')).toHaveTextContent('7 selected');
    await userEvent.selectOptions(c.getByLabelText('Grid review filter'), 'conflicts');
    await expect(c.getByText('No transactions match the grid filters.')).toBeVisible();
    await expect(c.getByTestId('grid-selection-count')).toHaveTextContent('0 selected');
  }
}`,...d.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    initialPage: 'grid'
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await userEvent.selectOptions(c.getByLabelText('Grid review filter'), 'unmapped');
    await userEvent.click(c.getByLabelText('Select all visible transactions'));
    await userEvent.selectOptions(c.getByLabelText('Set category'), 'education');
    await userEvent.type(c.getByLabelText('Set work use %'), '100');
    await userEvent.click(c.getByRole('button', {
      name: 'Apply edits'
    }));
    await expect(c.getByTestId('grid-evt-06')).toBeVisible();
    await expect(c.getByTestId('grid-selection-count')).toHaveTextContent('1 selected');
    await userEvent.click(c.getByRole('button', {
      name: 'Review selected (1)'
    }));
    await expect(c.getByText('No transactions match the grid filters.')).toBeVisible();
    await userEvent.click(c.getByRole('button', {
      name: 'Open claims report'
    }));
    await expect(c.getByTestId('claims-total')).toHaveTextContent('$296.60');
  }
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    initialPage: 'transactions'
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await userEvent.selectOptions(c.getByLabelText('Review filter'), 'unmapped');
    await expect(c.getByTestId('evt-06')).toBeVisible();
    await userEvent.selectOptions(c.getByLabelText('Category evt-06'), 'education');
    await userEvent.selectOptions(c.getByLabelText('Review filter'), 'all');
    await userEvent.clear(c.getByLabelText('Work use evt-06'));
    await userEvent.type(c.getByLabelText('Work use evt-06'), '100');
    await userEvent.click(c.getByRole('button', {
      name: 'Review evt-06'
    }));
    await userEvent.click(c.getAllByRole('button', {
      name: 'Claims report'
    }).at(-1)!);
    await expect(c.getByTestId('claims-total')).toHaveTextContent('$296.60');
  }
}`,...w.parameters?.docs?.source}}};const f=["ImportHistory","MapAndValidate","DocumentInbox","TransactionHistory","TransactionReview","CompactTransactionGrid","CompactGridBulkReview","CompactGridKeyboard","CompactGridFilteredReview","TransactionsAndMapping"];export{p as CompactGridBulkReview,y as CompactGridFilteredReview,d as CompactGridKeyboard,g as CompactTransactionGrid,s as DocumentInbox,c as ImportHistory,o as MapAndValidate,r as TransactionHistory,l as TransactionReview,w as TransactionsAndMapping,f as __namedExportsOrder,C as default};
