const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('theme');if(t==='light')document.documentElement.classList.add('light');}catch(e){}})();`

// Sets the `.light` class before hydration to avoid a flash of the wrong
// theme. Uses dangerouslySetInnerHTML (not JSX children) so React treats it
// as raw HTML rather than a reconciled child — the pattern next-themes used
// internally triggered React 19's "script tag rendered as component" warning
// and a real hydration mismatch; this static, childless script avoids both.
export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
}
