import{P as l}from"./poc-experience-DEIS9AXH.js";import"./iframe-C0m-lKQZ.js";import"./preload-helper-PPVm8Dsz.js";import"./poc-catalogue-DI9zhtSF.js";import"./badge-D52VJ3Jy.js";import"./index-BF4t_Kdj.js";import"./cn-C3u6LSxm.js";import"./button-DRrg4ttv.js";import"./index-DYY4sbWj.js";import"./modal-dialog-B3pvqET1.js";const{expect:a,userEvent:t,within:p}=__STORYBOOK_MODULE_TEST__,k={title:"POC/02 Workspace",component:l,globals:{viewport:{value:"responsive",isRotated:!1}},tags:["autodocs","candidate","product-surface"],parameters:{layout:"fullscreen",docs:{description:{component:"TigerERP expense POC consumer preview. Owner: TigerERP. Maturity: candidate, browser-only simulation. Recipe: shared Button and Badge, responsive navigation, source table, evidence chain, review allocation and readiness gate. Uses invented records only. No source parsing, persistent rules, ledger writes, service provisioning or tax filing. Preview requirements: .governance/specs/SPEC-002-expense-poc-preview.md. Implementation authority and acceptance gates: docs/roadmap/poc.md; approved backend capabilities need separate governance specs."}}}},o={args:{initialPage:"overview"}},r={args:{initialPage:"imports"},play:async({canvasElement:n})=>{const e=p(n);await t.click(e.getByRole("button",{name:"Import sample batch"})),await t.click(e.getByRole("button",{name:"Reimport sample batch"})),await a(e.getByRole("status")).toHaveTextContent("No records added"),await t.click(e.getByRole("button",{name:"Review connected event"})),await a(e.getByText("Net expense:",{exact:!1})).toHaveTextContent("$127.00"),await a(e.getByText("Proposed workpaper:",{exact:!1})).toHaveTextContent("$101.60"),await t.selectOptions(e.getByLabelText("Work use"),"100"),await a(e.getByText("Proposed workpaper:",{exact:!1})).toHaveTextContent("$127.00"),await t.click(e.getByRole("checkbox")),await t.click(e.getByRole("button",{name:"Approve demo event"})),await t.click(e.getByRole("button",{name:/Annual preparation/})),await a(e.getByRole("button",{name:"Export synthetic workpapers"})).toBeEnabled(),await a(e.getByText("Incomplete return",{exact:!0})).toBeVisible(),await t.click(e.getByRole("button",{name:/Transaction review/})),await t.click(e.getByRole("button",{name:"Reopen decision"})),await t.click(e.getByRole("button",{name:/Annual preparation/})),await a(e.getByRole("button",{name:"Export synthetic workpapers"})).toBeDisabled()}},s={args:{initialPage:"review"}},i={args:{initialPage:"annual"},play:async({canvasElement:n})=>{await a(p(n).getByRole("button",{name:"Export synthetic workpapers"})).toBeDisabled()}},c={args:{initialPage:"desktop"},play:async({canvasElement:n})=>{const e=p(n);await t.click(e.getByRole("button",{name:"Preview startup failure"})),await a(e.getByRole("alert")).toHaveTextContent("API health check timed out"),await t.click(e.getByRole("button",{name:"Simulate startup"})),await a(e.getAllByText("Simulated ready")).toHaveLength(3),await t.click(e.getByRole("button",{name:"Simulate shutdown"})),await a(e.getByRole("status")).toHaveTextContent("Retained data is preserved")}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    initialPage: 'overview'
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    initialPage: 'imports'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Import sample batch'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Reimport sample batch'
    }));
    await expect(canvas.getByRole('status')).toHaveTextContent('No records added');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Review connected event'
    }));
    await expect(canvas.getByText('Net expense:', {
      exact: false
    })).toHaveTextContent('$127.00');
    await expect(canvas.getByText('Proposed workpaper:', {
      exact: false
    })).toHaveTextContent('$101.60');
    await userEvent.selectOptions(canvas.getByLabelText('Work use'), '100');
    await expect(canvas.getByText('Proposed workpaper:', {
      exact: false
    })).toHaveTextContent('$127.00');
    await userEvent.click(canvas.getByRole('checkbox'));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Approve demo event'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: /Annual preparation/
    }));
    await expect(canvas.getByRole('button', {
      name: 'Export synthetic workpapers'
    })).toBeEnabled();
    await expect(canvas.getByText('Incomplete return', {
      exact: true
    })).toBeVisible();
    await userEvent.click(canvas.getByRole('button', {
      name: /Transaction review/
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Reopen decision'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: /Annual preparation/
    }));
    await expect(canvas.getByRole('button', {
      name: 'Export synthetic workpapers'
    })).toBeDisabled();
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    initialPage: 'review'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    initialPage: 'annual'
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByRole('button', {
      name: 'Export synthetic workpapers'
    })).toBeDisabled();
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    initialPage: 'desktop'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Preview startup failure'
    }));
    await expect(canvas.getByRole('alert')).toHaveTextContent('API health check timed out');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Simulate startup'
    }));
    await expect(canvas.getAllByText('Simulated ready')).toHaveLength(3);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Simulate shutdown'
    }));
    await expect(canvas.getByRole('status')).toHaveTextContent('Retained data is preserved');
  }
}`,...c.parameters?.docs?.source}}};const b=["Workspace","ImportToWorkpapers","EvidenceAndCurrency","IncompleteAnnualPreparation","DesktopRecovery"];export{c as DesktopRecovery,s as EvidenceAndCurrency,r as ImportToWorkpapers,i as IncompleteAnnualPreparation,o as Workspace,b as __namedExportsOrder,k as default};
