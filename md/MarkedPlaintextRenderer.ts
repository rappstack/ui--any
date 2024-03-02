import { type MarkedOptions, Renderer } from 'marked'
/** @see {import('marked-plaintext')} */
export class MarkedPlaintextRenderer extends Renderer {
	options:MarkedOptions&{ spaces?:string }
	whitespaceDelimiter:string
	constructor(options?:MarkedOptions&{ spaces?:string }) {
		super(options)
		this.options = options ?? {}
		this.whitespaceDelimiter = this.options.spaces ? ' ' : '\n'
	}
	code(code:string, lang:string, escaped:boolean) {
		return this.whitespaceDelimiter + this.whitespaceDelimiter + code + this.whitespaceDelimiter + this.whitespaceDelimiter
	}
	blockquote(quote:string) {
		return '\t' + quote + this.whitespaceDelimiter
	}
	html(html:string) {
		return html
	}
	heading(text:string, level:number, raw:string) {
		return text
	}
	hr() {
		return this.whitespaceDelimiter + this.whitespaceDelimiter
	}
	list(body:string, ordered:boolean) {
		return body
	}
	listitem(text:string) {
		return '\t' + text + this.whitespaceDelimiter
	}
	paragraph(text:string) {
		return this.whitespaceDelimiter + text + this.whitespaceDelimiter
	}
	table(header:string, body:string) {
		return this.whitespaceDelimiter + header + this.whitespaceDelimiter + body + this.whitespaceDelimiter
	}
	tablerow(content:string) {
		return content + this.whitespaceDelimiter
	}
	tablecell(content:string, flags:{
		header:boolean;
		align:'center'|'left'|'right'|null;
	}) {
		return content + '\t'
	}
	strong(text:string) {
		return text
	}
	em(text:string) {
		return text
	}
	codespan(text:string) {
		return text
	}
	br() {
		return this.whitespaceDelimiter + this.whitespaceDelimiter
	}
	del(text:string) {
		return text
	}
	link(href:string, title:string, text:string) {
		return text
	}
	image(href:string, title:string, text:string) {
		return text
	}
	text(text:string) {
		return text
	}
}
