import './hljs.css'
import { raw_, type relement_env_T, type wide_ctx_T } from 'relementjs'
import { marked_ } from './marked.js'
export function md__raw_<E extends relement_env_T>(ctx:wide_ctx_T, md:string) {
	return raw_<E>(marked_(ctx)!.parse(md))
}
export function md__inline_raw_<E extends relement_env_T>(ctx:wide_ctx_T, md:string) {
	return raw_<E>(marked_(ctx)!.parseInline(md))
}
