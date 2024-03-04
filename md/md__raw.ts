import './hljs.css'
import hljs from 'highlight.js'
import cs from 'highlight.js/lib/languages/csharp'
import js from 'highlight.js/lib/languages/javascript'
import sh from 'highlight.js/lib/languages/shell'
import ts from 'highlight.js/lib/languages/typescript'
import { Marked } from 'marked'
import { markedHighlight } from 'marked-highlight'
import { raw_ } from 'relementjs'
hljs.registerLanguage('cs', cs)
hljs.registerLanguage('js', js)
hljs.registerLanguage('sh', sh)
hljs.registerLanguage('shell', sh)
hljs.registerLanguage('ts', ts)
const marked = new Marked(
	markedHighlight({
		langPrefix: 'hljs language-',
		highlight(code, lang, info) {
			const language = hljs.getLanguage(lang) ? lang : 'plaintext';
			return hljs.highlight(code, { language }).value;
		}
	})
)
export function md__raw_(md:string) {
	return raw_(marked.parse(md))
}
export function md__inline_raw_(md:string) {
	return raw_(marked.parseInline(md))
}
