import{j as e}from"./iframe-D8TDVfrG.js";import"./preload-helper-PPVm8Dsz.js";const{expect:m,userEvent:p,within:u}=__STORYBOOK_MODULE_TEST__;function s({eyebrow:a,title:i,description:n}){return e.jsxs("header",{className:"border-b bg-card px-5 py-5 sm:px-7",children:[e.jsx("p",{className:"text-[10px] font-semibold uppercase tracking-[0.12em] text-financial-audit",children:a}),e.jsx("h1",{className:"mt-1 text-xl font-semibold tracking-tight",children:i}),e.jsx("p",{className:"mt-2 max-w-3xl text-sm leading-6 text-muted-foreground",children:n})]})}function t({title:a,element:i,children:n,className:h=""}){return e.jsxs("section",{className:`min-w-0 border bg-card ${h}`,children:[e.jsxs("div",{className:"flex min-h-9 items-center gap-3 border-b bg-muted/45 px-3",children:[e.jsx("h2",{className:"text-[11px] font-semibold",children:a}),e.jsx("code",{className:"ml-auto text-[10px] text-muted-foreground",children:i})]}),e.jsx("div",{className:"dls-native p-4 sm:p-5",children:n})]})}const g={title:"DLS/04 Platform Semantics/Native Reference",parameters:{layout:"fullscreen",docs:{description:{component:"The canonical semantic baseline for native HTML. Product components inherit these meanings and may extend behaviour, but must not erase the platform contract."}}},tags:["autodocs","canonical","native-html"]},l={render:()=>e.jsxs("main",{className:"min-h-screen bg-background",children:[e.jsx(s,{eyebrow:"Native layer · canonical",title:"HTML before components",description:"Every TigerERP interface starts with valid semantic HTML. This layer defines the native meaning, keyboard behaviour, focus, text hierarchy, input states, and data semantics that composed components must preserve."}),e.jsx("div",{className:"grid gap-3 p-3 sm:grid-cols-2 sm:p-5 xl:grid-cols-4",children:[["Text & semantics","Headings, paragraphs, links, quotations, edits, code, time, and inline meaning.","29 elements"],["Lists & data","Ordered, unordered, description, figure, table, progress, and meter semantics.","18 elements"],["Forms & controls","Labels, fieldsets, input families, selection, validation, and action controls.","24 elements"],["Disclosure & dialogue","Native progressive disclosure and bounded decision surfaces.","4 elements"]].map(([a,i,n])=>e.jsxs("section",{className:"border bg-card p-4",children:[e.jsx("p",{className:"text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground",children:n}),e.jsx("h2",{className:"mt-2 text-sm font-semibold",children:a}),e.jsx("p",{className:"mt-2 text-xs leading-5 text-muted-foreground",children:i}),e.jsx("p",{className:"mt-4 border-t pt-3 text-[10px] font-semibold text-financial-credit",children:"SUPPORTED · AA BASELINE"})]},a))}),e.jsx("section",{className:"mx-3 mb-5 border bg-card sm:mx-5",children:e.jsx("div",{className:"grid gap-px bg-border sm:grid-cols-4",children:[["Use native","When the platform element already supplies the correct meaning and behaviour."],["Apply DLS baseline","Use the scoped native treatment for authored content and reference specimens."],["Promote to component","When repeated visual options, validation, or state need a typed contract."],["Promote to widget","When several components cooperate to complete a bounded user task."]].map(([a,i],n)=>e.jsxs("div",{className:"bg-card p-4",children:[e.jsxs("p",{className:"financial-data text-[10px] text-financial-audit",children:["0",n+1]}),e.jsx("h2",{className:"mt-1 text-xs font-semibold",children:a}),e.jsx("p",{className:"mt-2 text-[11px] leading-5 text-muted-foreground",children:i})]},a))})})]}),play:async({canvasElement:a})=>{const i=u(a);await m(i.getByRole("heading",{name:"HTML before components"})).toBeVisible(),await m(i.getByText("Forms & controls")).toBeVisible()}},r={render:()=>e.jsxs("main",{className:"min-h-screen bg-background",children:[e.jsx(s,{eyebrow:"Native layer",title:"Text and semantic meaning",description:"A complete authored-content baseline. Heading levels describe document structure; visual size is never used to counterfeit hierarchy."}),e.jsxs("div",{className:"grid gap-3 p-3 sm:p-5 xl:grid-cols-2",children:[e.jsxs(t,{title:"Heading hierarchy",element:"h1–h6",children:[e.jsx("h1",{children:"Quarterly financial position"}),e.jsx("h2",{children:"Revenue and receivables"}),e.jsx("h3",{children:"Outstanding invoices"}),e.jsx("h4",{children:"Customer concentration"}),e.jsx("h5",{children:"Evidence notes"}),e.jsx("h6",{children:"Source reference"})]}),e.jsxs(t,{title:"Paragraph and inline semantics",element:"p · strong · em · small · mark · abbr · time",children:[e.jsxs("p",{children:["A posted journal is ",e.jsx("strong",{children:"immutable accounting evidence"}),". A draft remains ",e.jsx("em",{children:"editable intent"}),"."]}),e.jsxs("p",{children:[e.jsx("mark",{children:"Review required"})," before the ",e.jsx("abbr",{title:"Business Activity Statement",children:"BAS"})," can be submitted."]}),e.jsx("p",{children:e.jsxs("small",{children:["Last reconciled ",e.jsx("time",{dateTime:"2026-08-25T16:42:00+10:00",children:"25 Aug 2026 at 4:42 pm AEST"}),"."]})})]}),e.jsxs(t,{title:"Links and quotations",element:"a · q · blockquote · cite",children:[e.jsxs("p",{children:["Open the ",e.jsx("a",{href:"#evidence-note",children:"reconciliation evidence"})," or review the governing policy."]}),e.jsxs("p",{children:["Controller note: ",e.jsx("q",{children:"Retain the supplier statement with the payment batch."})]}),e.jsxs("blockquote",{children:[e.jsx("p",{children:"Financial control is strongest when the evidence, decision, actor, and consequence remain visible together."}),e.jsx("cite",{children:"TigerERP design principle"})]})]}),e.jsxs(t,{title:"Technical and change semantics",element:"code · kbd · samp · var · del · ins · sub · sup",children:[e.jsxs("p",{children:["Run ",e.jsx("code",{children:"ledger.validate()"}),", then press ",e.jsx("kbd",{children:"Ctrl"})," + ",e.jsx("kbd",{children:"Enter"}),"."]}),e.jsxs("p",{children:["Result: ",e.jsx("samp",{children:"3 exceptions require review"}),"; let ",e.jsx("var",{children:"n"})," be the exception count."]}),e.jsxs("p",{children:["Policy changed from ",e.jsx("del",{children:"30 calendar days"})," to ",e.jsx("ins",{children:"20 business days"}),"."]}),e.jsxs("p",{children:["Reference CO",e.jsx("sub",{children:"2"})," and 10",e.jsx("sup",{children:"2"})," only where domain content requires it."]})]}),e.jsx(t,{title:"Preformatted evidence",element:"pre · code",children:e.jsx("pre",{children:e.jsx("code",{children:`journal_id: JE-07204
state: validated
debits: 42870.40
credits: 42870.40`})})}),e.jsxs(t,{title:"Contact and separation",element:"address · hr · br",children:[e.jsxs("address",{children:["Acacia Holdings Finance Control",e.jsx("br",{}),"Sydney, Australia",e.jsx("br",{}),e.jsx("a",{href:"mailto:finance@example.com",children:"finance@example.com"})]}),e.jsx("hr",{}),e.jsx("p",{id:"evidence-note",children:"A thematic break separates topics; spacing alone does not."})]})]})]})},d={render:()=>e.jsxs("main",{className:"min-h-screen bg-background",children:[e.jsx(s,{eyebrow:"Native layer",title:"Lists, figures, and data",description:"Structural content uses native relationships so screen readers, browser navigation, copying, and printing retain the same meaning."}),e.jsxs("div",{className:"grid gap-3 p-3 sm:p-5 xl:grid-cols-2",children:[e.jsx(t,{title:"Unordered list",element:"ul · li",children:e.jsxs("ul",{children:[e.jsx("li",{children:"Bank reconciliation completed"}),e.jsx("li",{children:"Supplier statements retained"}),e.jsx("li",{children:"Three GST exceptions remain"})]})}),e.jsx(t,{title:"Ordered procedure",element:"ol · li",children:e.jsxs("ol",{children:[e.jsx("li",{children:"Inspect the source document."}),e.jsx("li",{children:"Confirm the account and tax treatment."}),e.jsx("li",{children:"Post only after validation succeeds."})]})}),e.jsx(t,{title:"Term definitions",element:"dl · dt · dd",children:e.jsxs("dl",{children:[e.jsx("dt",{children:"Draft"}),e.jsx("dd",{children:"Editable business intent without a posted ledger effect."}),e.jsx("dt",{children:"Post"}),e.jsx("dd",{children:"Create an immutable accounting effect after validation and authority checks."}),e.jsx("dt",{children:"Reverse"}),e.jsx("dd",{children:"Create a compensating effect linked to the original posting."})]})}),e.jsx(t,{title:"Figure with caption",element:"figure · img · figcaption",children:e.jsxs("figure",{children:[e.jsx("img",{alt:"Bar summary showing cash at 248 thousand dollars, receivables at 52 thousand, and payables at 82 thousand",className:"h-32 w-full border bg-muted object-cover",src:"data:image/svg+xml;charset=utf-8,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 180"><rect width="640" height="180" fill="#f1f5f9"/><rect x="72" y="34" width="420" height="24" fill="#16a34a"/><rect x="72" y="78" width="88" height="24" fill="#2563eb"/><rect x="72" y="122" width="139" height="24" fill="#dc2626"/></svg>')}),e.jsx("figcaption",{children:"Position summary · exact values remain available in the adjacent data table."})]})}),e.jsx(t,{title:"Financial table",element:"table · caption · thead · tbody · tfoot",className:"xl:col-span-2",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{children:[e.jsx("caption",{children:"Ledger movement for 25 August 2026"}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Account"}),e.jsx("th",{scope:"col",children:"Reference"}),e.jsx("th",{scope:"col",className:"text-right",children:"Debit"}),e.jsx("th",{scope:"col",className:"text-right",children:"Credit"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"GST clearing"}),e.jsx("td",{children:"BAS-Q4-26"}),e.jsx("td",{className:"financial-data text-right",children:"$42,870.40"}),e.jsx("td",{className:"financial-data text-right",children:"—"})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Coastal Bank"}),e.jsx("td",{children:"BAS-Q4-26"}),e.jsx("td",{className:"financial-data text-right",children:"—"}),e.jsx("td",{className:"financial-data text-right",children:"$42,870.40"})]})]}),e.jsx("tfoot",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"row",colSpan:2,children:"Balanced total"}),e.jsx("td",{className:"financial-data text-right",children:"$42,870.40"}),e.jsx("td",{className:"financial-data text-right",children:"$42,870.40"})]})})]})})}),e.jsxs(t,{title:"Progress and measurement",element:"progress · meter",children:[e.jsx("label",{htmlFor:"close-progress",children:"Month-end close"}),e.jsx("progress",{id:"close-progress",max:"23",value:"19",children:"19 of 23 controls"}),e.jsx("label",{htmlFor:"match-confidence",children:"Match confidence"}),e.jsx("meter",{id:"match-confidence",min:"0",max:"100",low:70,high:90,optimum:100,value:96,children:"96%"})]})]})]})},c={render:()=>e.jsxs("main",{className:"min-h-screen bg-background",children:[e.jsx(s,{eyebrow:"Native layer",title:"Forms and controls",description:"Every control has a persistent accessible name, an explicit state, and help or error text connected in code. Placeholder text never replaces a label."}),e.jsxs("form",{className:"grid gap-3 p-3 sm:p-5 xl:grid-cols-2",onSubmit:a=>a.preventDefault(),children:[e.jsxs(t,{title:"Text entry",element:"label · input · textarea",children:[e.jsxs("div",{className:"dls-field",children:[e.jsx("label",{htmlFor:"invoice-reference",children:"Invoice reference"}),e.jsx("input",{id:"invoice-reference",name:"invoice-reference",defaultValue:"INV-1049"})]}),e.jsxs("div",{className:"dls-field",children:[e.jsx("label",{htmlFor:"supplier-email",children:"Supplier email"}),e.jsx("input",{id:"supplier-email",name:"supplier-email",type:"email",placeholder:"accounts@example.com"})]}),e.jsxs("div",{className:"dls-field",children:[e.jsx("label",{htmlFor:"journal-note",children:"Journal note"}),e.jsx("textarea",{id:"journal-note",name:"journal-note",rows:3,defaultValue:"Reclassification approved by the financial controller."})]})]}),e.jsxs(t,{title:"Specialised entry",element:"search · password · tel · url · number",children:[e.jsxs("div",{className:"dls-field",children:[e.jsx("label",{htmlFor:"record-search",children:"Search records"}),e.jsx("input",{id:"record-search",type:"search",placeholder:"Reference, entity, or amount"})]}),e.jsxs("div",{className:"dls-field",children:[e.jsx("label",{htmlFor:"account-password",children:"Password"}),e.jsx("input",{id:"account-password",type:"password",defaultValue:"not-a-real-password",autoComplete:"current-password"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsxs("div",{className:"dls-field",children:[e.jsx("label",{htmlFor:"supplier-phone",children:"Phone"}),e.jsx("input",{id:"supplier-phone",type:"tel",defaultValue:"+61 2 5550 0184"})]}),e.jsxs("div",{className:"dls-field",children:[e.jsx("label",{htmlFor:"payment-terms",children:"Payment terms"}),e.jsx("input",{id:"payment-terms",type:"number",min:"0",max:"365",defaultValue:"30"})]})]}),e.jsxs("div",{className:"dls-field",children:[e.jsx("label",{htmlFor:"evidence-url",children:"Evidence URL"}),e.jsx("input",{id:"evidence-url",type:"url",defaultValue:"https://example.com/evidence"})]})]}),e.jsxs(t,{title:"Date, time, and range",element:"date · time · month · week · range",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsxs("div",{className:"dls-field",children:[e.jsx("label",{htmlFor:"posting-date",children:"Posting date"}),e.jsx("input",{id:"posting-date",type:"date",defaultValue:"2026-08-25"})]}),e.jsxs("div",{className:"dls-field",children:[e.jsx("label",{htmlFor:"approval-time",children:"Approval time"}),e.jsx("input",{id:"approval-time",type:"time",defaultValue:"16:42"})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsxs("div",{className:"dls-field",children:[e.jsx("label",{htmlFor:"report-month",children:"Report month"}),e.jsx("input",{id:"report-month",type:"month",defaultValue:"2026-08"})]}),e.jsxs("div",{className:"dls-field",children:[e.jsx("label",{htmlFor:"payroll-week",children:"Payroll week"}),e.jsx("input",{id:"payroll-week",type:"week",defaultValue:"2026-W35"})]})]}),e.jsxs("div",{className:"dls-field",children:[e.jsx("label",{htmlFor:"confidence-range",children:"Automation confidence · 88%"}),e.jsx("input",{id:"confidence-range",type:"range",min:"0",max:"100",defaultValue:"88"})]})]}),e.jsxs(t,{title:"Selection controls",element:"select · optgroup · checkbox · radio",children:[e.jsxs("div",{className:"dls-field",children:[e.jsx("label",{htmlFor:"ledger-account",children:"Ledger account"}),e.jsxs("select",{id:"ledger-account",defaultValue:"430",children:[e.jsx("optgroup",{label:"Income",children:e.jsx("option",{value:"200",children:"200 · Sales revenue"})}),e.jsxs("optgroup",{label:"Expenses",children:[e.jsx("option",{value:"430",children:"430 · Software subscriptions"}),e.jsx("option",{value:"610",children:"610 · Bank fees"})]})]})]}),e.jsxs("fieldset",{children:[e.jsx("legend",{children:"Evidence requirements"}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",defaultChecked:!0})," Supplier invoice retained"]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox"})," Approval note attached"]})]}),e.jsxs("fieldset",{children:[e.jsx("legend",{children:"GST treatment"}),e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"gst-treatment",defaultChecked:!0})," GST on expenses"]}),e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"gst-treatment"})," GST free"]})]})]}),e.jsxs(t,{title:"File, colour, and output",element:"file · color · output",children:[e.jsxs("div",{className:"dls-field",children:[e.jsx("label",{htmlFor:"supporting-file",children:"Supporting evidence"}),e.jsx("input",{id:"supporting-file",type:"file",accept:".pdf,.png,.jpg"}),e.jsx("small",{children:"PDF, PNG, or JPG · maximum 20 MB."})]}),e.jsxs("div",{className:"dls-field",children:[e.jsx("label",{htmlFor:"series-colour",children:"Report series colour"}),e.jsx("input",{id:"series-colour",type:"color",defaultValue:"#2563eb"})]}),e.jsxs("div",{className:"dls-field",children:[e.jsx("span",{children:"Calculated GST"}),e.jsx("output",{name:"calculated-gst",htmlFor:"invoice-reference",children:"AUD 107.67"})]})]}),e.jsxs(t,{title:"Control states",element:"required · readonly · disabled · aria-invalid",children:[e.jsxs("div",{className:"dls-field",children:[e.jsxs("label",{htmlFor:"required-entity",children:["Entity ",e.jsx("span",{"aria-hidden":!0,children:"*"})]}),e.jsx("input",{id:"required-entity",required:!0,placeholder:"Required"})]}),e.jsxs("div",{className:"dls-field",children:[e.jsx("label",{htmlFor:"readonly-id",children:"Immutable journal ID"}),e.jsx("input",{id:"readonly-id",readOnly:!0,defaultValue:"JE-07204"})]}),e.jsxs("div",{className:"dls-field",children:[e.jsx("label",{htmlFor:"disabled-control",children:"Ledger currency"}),e.jsx("input",{id:"disabled-control",disabled:!0,defaultValue:"AUD"})]}),e.jsxs("div",{className:"dls-field",children:[e.jsx("label",{htmlFor:"invalid-amount",children:"Allocation amount"}),e.jsx("input",{id:"invalid-amount","aria-invalid":"true","aria-describedby":"invalid-amount-error",defaultValue:"84,210.00"}),e.jsx("small",{id:"invalid-amount-error",className:"dls-error",children:"Allocation exceeds the unassigned balance by AUD 1,799.80."})]})]}),e.jsx(t,{title:"Actions",element:"button · reset · submit",className:"xl:col-span-2",children:e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("button",{type:"submit",children:"Save draft"}),e.jsx("button",{type:"button",children:"Validate journal"}),e.jsx("button",{type:"reset",children:"Reset fields"}),e.jsx("button",{type:"button",disabled:!0,children:"Posting…"})]})})]})]}),play:async({canvasElement:a})=>{const i=u(a),n=i.getByLabelText("Invoice reference");await p.clear(n),await p.type(n,"INV-2050"),await m(n).toHaveValue("INV-2050"),await m(i.getByLabelText("Allocation amount")).toHaveAttribute("aria-invalid","true")}},o={render:()=>e.jsxs("main",{className:"min-h-screen bg-background",children:[e.jsx(s,{eyebrow:"Native layer",title:"Disclosure and dialogue",description:"Use native interaction where it matches the task. Composite popovers, menus, comboboxes, tabs, grids, and notifications belong to the component or widget layers because they require an authored interaction model."}),e.jsxs("div",{className:"grid gap-3 p-3 sm:p-5 xl:grid-cols-2",children:[e.jsxs(t,{title:"Progressive disclosure",element:"details · summary",children:[e.jsxs("details",{open:!0,children:[e.jsx("summary",{children:"Why is GST submission locked?"}),e.jsx("p",{children:"Three classification exceptions have no documented disposition. Resolve or explicitly accept each exception before review."})]}),e.jsxs("details",{children:[e.jsx("summary",{children:"Show source evidence"}),e.jsx("p",{children:"Evidence includes the source invoice, bank transaction, actor, timestamp, and validation outcome."})]})]}),e.jsx(t,{title:"Bounded decision",element:"dialog",className:"relative min-h-[300px]",children:e.jsxs("dialog",{open:!0,"aria-labelledby":"native-dialog-title",children:[e.jsx("h3",{id:"native-dialog-title",children:"Discard journal changes?"}),e.jsx("p",{children:"Unsaved account and tax-code changes will be lost."}),e.jsxs("form",{method:"dialog",children:[e.jsx("button",{value:"cancel",children:"Keep editing"}),e.jsx("button",{value:"confirm",children:"Discard changes"})]})]})}),e.jsxs("section",{className:"border bg-card p-4 xl:col-span-2",children:[e.jsx("h2",{className:"text-sm font-semibold",children:"Authored interaction boundary"}),e.jsx("div",{className:"mt-3 grid gap-px bg-border sm:grid-cols-3",children:[["Native","details, summary, dialog","Use platform semantics and expected keys."],["Component","button, input, combobox, tabs","Add typed options and reusable state contracts."],["Widget","command palette, upload mapper, notification tray","Coordinate multiple components around a task."]].map(([a,i,n])=>e.jsxs("div",{className:"bg-card p-3",children:[e.jsx("p",{className:"text-[10px] font-semibold uppercase tracking-[0.08em] text-financial-audit",children:a}),e.jsx("p",{className:"mt-1 text-xs font-semibold",children:i}),e.jsx("p",{className:"mt-2 text-[11px] leading-5 text-muted-foreground",children:n})]},a))})]})]})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <main className="min-h-screen bg-background">
      <ReferenceHeader eyebrow="Native layer · canonical" title="HTML before components" description="Every TigerERP interface starts with valid semantic HTML. This layer defines the native meaning, keyboard behaviour, focus, text hierarchy, input states, and data semantics that composed components must preserve." />
      <div className="grid gap-3 p-3 sm:grid-cols-2 sm:p-5 xl:grid-cols-4">
        {[['Text & semantics', 'Headings, paragraphs, links, quotations, edits, code, time, and inline meaning.', '29 elements'], ['Lists & data', 'Ordered, unordered, description, figure, table, progress, and meter semantics.', '18 elements'], ['Forms & controls', 'Labels, fieldsets, input families, selection, validation, and action controls.', '24 elements'], ['Disclosure & dialogue', 'Native progressive disclosure and bounded decision surfaces.', '4 elements']].map(([title, description, count]) => <section key={title} className="border bg-card p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">{count}</p>
            <h2 className="mt-2 text-sm font-semibold">{title}</h2>
            <p className="mt-2 text-xs leading-5 text-muted-foreground">{description}</p>
            <p className="mt-4 border-t pt-3 text-[10px] font-semibold text-financial-credit">SUPPORTED · AA BASELINE</p>
          </section>)}
      </div>
      <section className="mx-3 mb-5 border bg-card sm:mx-5">
        <div className="grid gap-px bg-border sm:grid-cols-4">
          {[['Use native', 'When the platform element already supplies the correct meaning and behaviour.'], ['Apply DLS baseline', 'Use the scoped native treatment for authored content and reference specimens.'], ['Promote to component', 'When repeated visual options, validation, or state need a typed contract.'], ['Promote to widget', 'When several components cooperate to complete a bounded user task.']].map(([title, description], index) => <div key={title} className="bg-card p-4">
              <p className="financial-data text-[10px] text-financial-audit">0{index + 1}</p>
              <h2 className="mt-1 text-xs font-semibold">{title}</h2>
              <p className="mt-2 text-[11px] leading-5 text-muted-foreground">{description}</p>
            </div>)}
        </div>
      </section>
    </main>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('heading', {
      name: 'HTML before components'
    })).toBeVisible();
    await expect(canvas.getByText('Forms & controls')).toBeVisible();
  }
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <main className="min-h-screen bg-background">
      <ReferenceHeader eyebrow="Native layer" title="Text and semantic meaning" description="A complete authored-content baseline. Heading levels describe document structure; visual size is never used to counterfeit hierarchy." />
      <div className="grid gap-3 p-3 sm:p-5 xl:grid-cols-2">
        <Specimen title="Heading hierarchy" element="h1–h6">
          <h1>Quarterly financial position</h1>
          <h2>Revenue and receivables</h2>
          <h3>Outstanding invoices</h3>
          <h4>Customer concentration</h4>
          <h5>Evidence notes</h5>
          <h6>Source reference</h6>
        </Specimen>
        <Specimen title="Paragraph and inline semantics" element="p · strong · em · small · mark · abbr · time">
          <p>A posted journal is <strong>immutable accounting evidence</strong>. A draft remains <em>editable intent</em>.</p>
          <p><mark>Review required</mark> before the <abbr title="Business Activity Statement">BAS</abbr> can be submitted.</p>
          <p><small>Last reconciled <time dateTime="2026-08-25T16:42:00+10:00">25 Aug 2026 at 4:42 pm AEST</time>.</small></p>
        </Specimen>
        <Specimen title="Links and quotations" element="a · q · blockquote · cite">
          <p>Open the <a href="#evidence-note">reconciliation evidence</a> or review the governing policy.</p>
          <p>Controller note: <q>Retain the supplier statement with the payment batch.</q></p>
          <blockquote>
            <p>Financial control is strongest when the evidence, decision, actor, and consequence remain visible together.</p>
            <cite>TigerERP design principle</cite>
          </blockquote>
        </Specimen>
        <Specimen title="Technical and change semantics" element="code · kbd · samp · var · del · ins · sub · sup">
          <p>Run <code>ledger.validate()</code>, then press <kbd>Ctrl</kbd> + <kbd>Enter</kbd>.</p>
          <p>Result: <samp>3 exceptions require review</samp>; let <var>n</var> be the exception count.</p>
          <p>Policy changed from <del>30 calendar days</del> to <ins>20 business days</ins>.</p>
          <p>Reference CO<sub>2</sub> and 10<sup>2</sup> only where domain content requires it.</p>
        </Specimen>
        <Specimen title="Preformatted evidence" element="pre · code">
          <pre><code>{\`journal_id: JE-07204\\nstate: validated\\ndebits: 42870.40\\ncredits: 42870.40\`}</code></pre>
        </Specimen>
        <Specimen title="Contact and separation" element="address · hr · br">
          <address>
            Acacia Holdings Finance Control<br />
            Sydney, Australia<br />
            <a href="mailto:finance@example.com">finance@example.com</a>
          </address>
          <hr />
          <p id="evidence-note">A thematic break separates topics; spacing alone does not.</p>
        </Specimen>
      </div>
    </main>
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <main className="min-h-screen bg-background">
      <ReferenceHeader eyebrow="Native layer" title="Lists, figures, and data" description="Structural content uses native relationships so screen readers, browser navigation, copying, and printing retain the same meaning." />
      <div className="grid gap-3 p-3 sm:p-5 xl:grid-cols-2">
        <Specimen title="Unordered list" element="ul · li">
          <ul>
            <li>Bank reconciliation completed</li>
            <li>Supplier statements retained</li>
            <li>Three GST exceptions remain</li>
          </ul>
        </Specimen>
        <Specimen title="Ordered procedure" element="ol · li">
          <ol>
            <li>Inspect the source document.</li>
            <li>Confirm the account and tax treatment.</li>
            <li>Post only after validation succeeds.</li>
          </ol>
        </Specimen>
        <Specimen title="Term definitions" element="dl · dt · dd">
          <dl>
            <dt>Draft</dt><dd>Editable business intent without a posted ledger effect.</dd>
            <dt>Post</dt><dd>Create an immutable accounting effect after validation and authority checks.</dd>
            <dt>Reverse</dt><dd>Create a compensating effect linked to the original posting.</dd>
          </dl>
        </Specimen>
        <Specimen title="Figure with caption" element="figure · img · figcaption">
          <figure>
            <img alt="Bar summary showing cash at 248 thousand dollars, receivables at 52 thousand, and payables at 82 thousand" className="h-32 w-full border bg-muted object-cover" src={'data:image/svg+xml;charset=utf-8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 180"><rect width="640" height="180" fill="#f1f5f9"/><rect x="72" y="34" width="420" height="24" fill="#16a34a"/><rect x="72" y="78" width="88" height="24" fill="#2563eb"/><rect x="72" y="122" width="139" height="24" fill="#dc2626"/></svg>')} />
            <figcaption>Position summary · exact values remain available in the adjacent data table.</figcaption>
          </figure>
        </Specimen>
        <Specimen title="Financial table" element="table · caption · thead · tbody · tfoot" className="xl:col-span-2">
          <div className="overflow-x-auto">
            <table>
              <caption>Ledger movement for 25 August 2026</caption>
              <thead><tr><th scope="col">Account</th><th scope="col">Reference</th><th scope="col" className="text-right">Debit</th><th scope="col" className="text-right">Credit</th></tr></thead>
              <tbody>
                <tr><th scope="row">GST clearing</th><td>BAS-Q4-26</td><td className="financial-data text-right">$42,870.40</td><td className="financial-data text-right">—</td></tr>
                <tr><th scope="row">Coastal Bank</th><td>BAS-Q4-26</td><td className="financial-data text-right">—</td><td className="financial-data text-right">$42,870.40</td></tr>
              </tbody>
              <tfoot><tr><th scope="row" colSpan={2}>Balanced total</th><td className="financial-data text-right">$42,870.40</td><td className="financial-data text-right">$42,870.40</td></tr></tfoot>
            </table>
          </div>
        </Specimen>
        <Specimen title="Progress and measurement" element="progress · meter">
          <label htmlFor="close-progress">Month-end close</label>
          <progress id="close-progress" max="23" value="19">19 of 23 controls</progress>
          <label htmlFor="match-confidence">Match confidence</label>
          <meter id="match-confidence" min="0" max="100" low={70} high={90} optimum={100} value={96}>96%</meter>
        </Specimen>
      </div>
    </main>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <main className="min-h-screen bg-background">
      <ReferenceHeader eyebrow="Native layer" title="Forms and controls" description="Every control has a persistent accessible name, an explicit state, and help or error text connected in code. Placeholder text never replaces a label." />
      <form className="grid gap-3 p-3 sm:p-5 xl:grid-cols-2" onSubmit={event => event.preventDefault()}>
        <Specimen title="Text entry" element="label · input · textarea">
          <div className="dls-field"><label htmlFor="invoice-reference">Invoice reference</label><input id="invoice-reference" name="invoice-reference" defaultValue="INV-1049" /></div>
          <div className="dls-field"><label htmlFor="supplier-email">Supplier email</label><input id="supplier-email" name="supplier-email" type="email" placeholder="accounts@example.com" /></div>
          <div className="dls-field"><label htmlFor="journal-note">Journal note</label><textarea id="journal-note" name="journal-note" rows={3} defaultValue="Reclassification approved by the financial controller." /></div>
        </Specimen>
        <Specimen title="Specialised entry" element="search · password · tel · url · number">
          <div className="dls-field"><label htmlFor="record-search">Search records</label><input id="record-search" type="search" placeholder="Reference, entity, or amount" /></div>
          <div className="dls-field"><label htmlFor="account-password">Password</label><input id="account-password" type="password" defaultValue="not-a-real-password" autoComplete="current-password" /></div>
          <div className="grid grid-cols-2 gap-3"><div className="dls-field"><label htmlFor="supplier-phone">Phone</label><input id="supplier-phone" type="tel" defaultValue="+61 2 5550 0184" /></div><div className="dls-field"><label htmlFor="payment-terms">Payment terms</label><input id="payment-terms" type="number" min="0" max="365" defaultValue="30" /></div></div>
          <div className="dls-field"><label htmlFor="evidence-url">Evidence URL</label><input id="evidence-url" type="url" defaultValue="https://example.com/evidence" /></div>
        </Specimen>
        <Specimen title="Date, time, and range" element="date · time · month · week · range">
          <div className="grid grid-cols-2 gap-3"><div className="dls-field"><label htmlFor="posting-date">Posting date</label><input id="posting-date" type="date" defaultValue="2026-08-25" /></div><div className="dls-field"><label htmlFor="approval-time">Approval time</label><input id="approval-time" type="time" defaultValue="16:42" /></div></div>
          <div className="grid grid-cols-2 gap-3"><div className="dls-field"><label htmlFor="report-month">Report month</label><input id="report-month" type="month" defaultValue="2026-08" /></div><div className="dls-field"><label htmlFor="payroll-week">Payroll week</label><input id="payroll-week" type="week" defaultValue="2026-W35" /></div></div>
          <div className="dls-field"><label htmlFor="confidence-range">Automation confidence · 88%</label><input id="confidence-range" type="range" min="0" max="100" defaultValue="88" /></div>
        </Specimen>
        <Specimen title="Selection controls" element="select · optgroup · checkbox · radio">
          <div className="dls-field"><label htmlFor="ledger-account">Ledger account</label><select id="ledger-account" defaultValue="430"><optgroup label="Income"><option value="200">200 · Sales revenue</option></optgroup><optgroup label="Expenses"><option value="430">430 · Software subscriptions</option><option value="610">610 · Bank fees</option></optgroup></select></div>
          <fieldset><legend>Evidence requirements</legend><label><input type="checkbox" defaultChecked /> Supplier invoice retained</label><label><input type="checkbox" /> Approval note attached</label></fieldset>
          <fieldset><legend>GST treatment</legend><label><input type="radio" name="gst-treatment" defaultChecked /> GST on expenses</label><label><input type="radio" name="gst-treatment" /> GST free</label></fieldset>
        </Specimen>
        <Specimen title="File, colour, and output" element="file · color · output">
          <div className="dls-field"><label htmlFor="supporting-file">Supporting evidence</label><input id="supporting-file" type="file" accept=".pdf,.png,.jpg" /><small>PDF, PNG, or JPG · maximum 20 MB.</small></div>
          <div className="dls-field"><label htmlFor="series-colour">Report series colour</label><input id="series-colour" type="color" defaultValue="#2563eb" /></div>
          <div className="dls-field"><span>Calculated GST</span><output name="calculated-gst" htmlFor="invoice-reference">AUD 107.67</output></div>
        </Specimen>
        <Specimen title="Control states" element="required · readonly · disabled · aria-invalid">
          <div className="dls-field"><label htmlFor="required-entity">Entity <span aria-hidden>*</span></label><input id="required-entity" required placeholder="Required" /></div>
          <div className="dls-field"><label htmlFor="readonly-id">Immutable journal ID</label><input id="readonly-id" readOnly defaultValue="JE-07204" /></div>
          <div className="dls-field"><label htmlFor="disabled-control">Ledger currency</label><input id="disabled-control" disabled defaultValue="AUD" /></div>
          <div className="dls-field"><label htmlFor="invalid-amount">Allocation amount</label><input id="invalid-amount" aria-invalid="true" aria-describedby="invalid-amount-error" defaultValue="84,210.00" /><small id="invalid-amount-error" className="dls-error">Allocation exceeds the unassigned balance by AUD 1,799.80.</small></div>
        </Specimen>
        <Specimen title="Actions" element="button · reset · submit" className="xl:col-span-2">
          <div className="flex flex-wrap gap-2"><button type="submit">Save draft</button><button type="button">Validate journal</button><button type="reset">Reset fields</button><button type="button" disabled>Posting…</button></div>
        </Specimen>
      </form>
    </main>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const reference = canvas.getByLabelText('Invoice reference');
    await userEvent.clear(reference);
    await userEvent.type(reference, 'INV-2050');
    await expect(reference).toHaveValue('INV-2050');
    await expect(canvas.getByLabelText('Allocation amount')).toHaveAttribute('aria-invalid', 'true');
  }
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <main className="min-h-screen bg-background">
      <ReferenceHeader eyebrow="Native layer" title="Disclosure and dialogue" description="Use native interaction where it matches the task. Composite popovers, menus, comboboxes, tabs, grids, and notifications belong to the component or widget layers because they require an authored interaction model." />
      <div className="grid gap-3 p-3 sm:p-5 xl:grid-cols-2">
        <Specimen title="Progressive disclosure" element="details · summary">
          <details open><summary>Why is GST submission locked?</summary><p>Three classification exceptions have no documented disposition. Resolve or explicitly accept each exception before review.</p></details>
          <details><summary>Show source evidence</summary><p>Evidence includes the source invoice, bank transaction, actor, timestamp, and validation outcome.</p></details>
        </Specimen>
        <Specimen title="Bounded decision" element="dialog" className="relative min-h-[300px]">
          <dialog open aria-labelledby="native-dialog-title">
            <h3 id="native-dialog-title">Discard journal changes?</h3>
            <p>Unsaved account and tax-code changes will be lost.</p>
            <form method="dialog"><button value="cancel">Keep editing</button><button value="confirm">Discard changes</button></form>
          </dialog>
        </Specimen>
        <section className="border bg-card p-4 xl:col-span-2">
          <h2 className="text-sm font-semibold">Authored interaction boundary</h2>
          <div className="mt-3 grid gap-px bg-border sm:grid-cols-3">
            {[['Native', 'details, summary, dialog', 'Use platform semantics and expected keys.'], ['Component', 'button, input, combobox, tabs', 'Add typed options and reusable state contracts.'], ['Widget', 'command palette, upload mapper, notification tray', 'Coordinate multiple components around a task.']].map(([level, examples, rule]) => <div key={level} className="bg-card p-3"><p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-financial-audit">{level}</p><p className="mt-1 text-xs font-semibold">{examples}</p><p className="mt-2 text-[11px] leading-5 text-muted-foreground">{rule}</p></div>)}
          </div>
        </section>
      </div>
    </main>
}`,...o.parameters?.docs?.source}}};const v=["Overview","TextAndSemantics","ListsFiguresAndData","FormsAndControls","DisclosureAndDialogue"];export{o as DisclosureAndDialogue,c as FormsAndControls,d as ListsFiguresAndData,l as Overview,r as TextAndSemantics,v as __namedExportsOrder,g as default};
