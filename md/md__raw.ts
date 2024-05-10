import { raw_, type relement_env_T, type wide_ctx_T } from 'relementjs'
import { marked_ } from './marked.js'
export type md__raw_props_T = {
	ctx:wide_ctx_T
	inline?:boolean
}
export function md__raw_<E extends relement_env_T>($p:md__raw_props_T, md:string) {
	const { ctx, inline } = $p
	return raw_<E>(
		inline
		? marked_(ctx)!.parseInline(md)
		: marked_(ctx)!.parse(md)
	)
}
export type md__inline_raw_props_T = {
	ctx:wide_ctx_T
}
export function md__inline_raw_<E extends relement_env_T>($p:md__inline_raw_props_T, md:string) {
	return raw_<E>(marked_($p.ctx)!.parseInline(md))
}
