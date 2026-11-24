import { NavLink, useLocation } from "react-router-dom";

type Page = readonly [label: string, path: string];
type Group = { label: string; pages: Page[] };

const entries: (Page | Group)[] = [
  ["General", "/general"],
  { label: "Layout", pages: [
    ["Col", "/components/evp-col"],
    ["Row", "/components/evp-row"],
    ["Dom", "/components/evp-dom"],
    ["Divider", "/components/evp-divider"],
  ] },
  ["Shadow", "/components/evp-shadow"],
  ["Button", "/components/evp-button"],
  ["Input", "/components/evp-input"],
  ["Color", "/components/evp-color"],
  ["Card", "/components/evp-card"],
  ["Menu", "/components/evp-menu"],
  ["Header", "/components/evp-header"],
  ["Msg", "/components/evp-msg"],
  ["Toast", "/components/evp-toast"],
  ["Popover", "/components/evp-popover"],
  ["Flexbar", "/components/evp-flexbar"],
  ["Radio", "/components/evp-radio"],
  ["CheckBox", "/components/evp-checkbox"],
  ["Select", "/components/evp-select"],
  ["Slider", "/components/evp-slider"],
  ["Form", "/components/evp-form"],
  ["Tag", "/components/evp-tag"],
  ["ToolTip", "/components/evp-tooltip"],
  ["Badge", "/components/evp-badge"],
  ["Anchor", "/components/evp-anchor"],
  ["BreadCrumb", "/components/evp-breadcrumb"],
  ["Counter", "/components/evp-counter"],
  ["Switch", "/components/evp-switch"],
  ["Loading", "/components/evp-loading"],
  ["Label", "/components/evp-label"],
  ["Modal", "/components/evp-modal"],
  ["Dialog", "/components/evp-dialog"],
  ["Drawer", "/components/evp-drawer"],
  ["Alert", "/components/evp-alert"],
  ["Code", "/components/evp-code"],
  ["Table", "/components/evp-table"],
  ["Paginator", "/components/evp-paginator"],
  ["List", "/components/evp-list"],
  ["Img", "/components/evp-img"],
  ["Calendar", "/components/evp-calendar"],
  ["Progress", "/components/evp-progress"],
  ["Steps", "/components/evp-steps"],
  ["Required", "/components/evp-required"],
  ["Waterfalls", "/components/evp-waterfalls"],
  ["Slides", "/components/evp-slides"],
  ["Title", "/components/evp-title"],
  ["Rate", "/components/evp-rate"],
  ["GhostButtonGroup", "/components/evp-ghost-button-group"],
  ["FrostedGlass", "/components/evp-frosted-glass"],
  ["Circle", "/components/evp-circle"],
  ["Droplet", "/components/evp-droplet"],
  ["Snake", "/components/evp-snake"],
  { label: "Animation", pages: [
    ["Animation", "/components/evp-animation"],
    ["Bounce", "/components/evp-animation/Bounce"],
    ["Twinkle", "/components/evp-animation/Twinkle"],
    ["Flip", "/components/evp-animation/Flip"],
    ["Shake", "/components/evp-animation/Shake"],
    ["ZoomIn", "/components/evp-animation/ZoomIn"],
    ["Fade", "/components/evp-animation/Fade"],
    ["FadeIn", "/components/evp-animation/FadeIn"],
    ["FadeOut", "/components/evp-animation/FadeOut"],
  ] },
  { label: "utils (unstable)", pages: [
    ["Utils", "/components/evp-utils"],
  ] },
];

export default function DocsMenu({ onNavigate }: { onNavigate: () => void }) {
  const { pathname } = useLocation();
  const link = ([label, path]: Page) => (
    <NavLink key={path} to={path} end onClick={onNavigate}>{label}</NavLink>
  );
  return (
    <>
      {entries.map(entry => "pages" in entry ? (
        <details key={entry.label} open={entry.pages.some(([, path]) => path === pathname) || undefined}>
          <summary>{entry.label}</summary>
          {entry.pages.map(link)}
        </details>
      ) : link(entry))}
    </>
  );
}
