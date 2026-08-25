import{j as n}from"./iframe-XT2nZs-u.js";import{u as a,M as r,C as s,a as l,S as c}from"./blocks-vKrDMpr5.js";import{B as d,a as o,F as h,S as u,D as x}from"./button.stories-DVPS-PYl.js";import"./preload-helper-PPVm8Dsz.js";import"./button-DW5qFnaM.js";import"./utils-BfnVJkRC.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:d}),`
`,n.jsx(e.h1,{id:"button",children:"Button"}),`
`,n.jsx(e.p,{children:"Triggers an action or confirms local intent. Use a link when the outcome is navigation."}),`
`,n.jsx(s,{of:o}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Button } from '@/components/ui/button'

<Button variant="default" size="sm">
  Save changes
</Button>
`})}),`
`,n.jsx(e.h2,{id:"composition",children:"Composition"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-text",children:`Button
├── optional leading icon
├── action label
└── optional trailing icon or progress indicator
`})}),`
`,n.jsxs(e.p,{children:["The accessible name comes from the visible label. Icon-only buttons require an ",n.jsx(e.code,{children:"aria-label"}),"."]}),`
`,n.jsx(e.h2,{id:"design-options",children:"Design options"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"default"})," — the primary action in a decision region"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"secondary"})," — a supporting action with visible weight"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"outline"})," — a neutral action near dense operational data"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"ghost"})," — low-emphasis local action"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"success"})," — a validated positive financial action"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"destructive"})," — an action with destructive or reversing consequence"]}),`
`]}),`
`,n.jsx(s,{of:h}),`
`,n.jsx(e.h2,{id:"sizes-and-density",children:"Sizes and density"}),`
`,n.jsx(e.p,{children:"Use standard or small buttons for forms and page actions. Compact buttons belong inside dense tables and toolbars. Icon-only buttons are reserved for universally understood actions with an accessible name."}),`
`,n.jsx(s,{of:u}),`
`,n.jsx(e.h2,{id:"disabled-state",children:"Disabled state"}),`
`,n.jsx(e.p,{children:"Disabled buttons explain the blocking condition nearby. Never use disabled state to hide missing authority or validation errors."}),`
`,n.jsx(s,{of:x}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Keep the native ",n.jsx(e.code,{children:"button"})," element and its keyboard behaviour."]}),`
`,n.jsx(e.li,{children:"Preserve a visible focus indicator."}),`
`,n.jsxs(e.li,{children:["Use ",n.jsx(e.code,{children:"aria-pressed"})," only for toggle buttons."]}),`
`,n.jsx(e.li,{children:"Announce asynchronous completion outside the button with an appropriate live region."}),`
`,n.jsx(e.li,{children:"Do not rely on colour to communicate destructive or successful meaning."}),`
`]}),`
`,n.jsx(e.h2,{id:"api-reference",children:"API reference"}),`
`,n.jsx(l,{of:o}),`
`,n.jsx(e.h2,{id:"additional-examples",children:"Additional examples"}),`
`,n.jsx(c,{includePrimary:!1})]})}function v(i={}){const{wrapper:e}={...a(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(t,{...i})}):t(i)}export{v as default};
