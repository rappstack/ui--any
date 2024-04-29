/// <reference lib="dom" />
import { type tag_dom_T, type wide_ctx_T } from 'relementjs'
import { type tag_props_T } from 'relementjs/any'
import { dd_, dl_, dt_ } from 'relementjs/html'
import { md__raw_ } from '../md/index.js'
export type dl_tree_props_T = {
	ctx:wide_ctx_T
	dl_class?:string
	dt_class?:string
	dd_class?:string
}
export function dl_tree_(
	dt_dd_pair_a1:dt_dd_pair_a1_T
):tag_dom_T
export function dl_tree_(
	props:dl_tree_props_T,
	dt_dd_pair_a1:dt_dd_pair_a1_T
):tag_dom_T
export function dl_tree_(
	props_OR_dt_dd_pair_a1:dl_tree_props_T|dt_dd_pair_a1_T,
	dt_dd_pair_a1?:dt_dd_pair_a1_T
) {
	if ((<dl_tree_props_T>props_OR_dt_dd_pair_a1).ctx?.is_ctx) {
		const {
			ctx,
			dl_class,
			dt_class,
			dd_class,
		} = <dl_tree_props_T>props_OR_dt_dd_pair_a1
		return dl_({ class: dl_class }, dt_dd_pair_a1!.map(([_dt, _dd])=>{
			const _dt_a1 = <tag_dom_T[]>(<any[]>[_dt]).flat(Infinity)
			const _dd_a1 = _dd ? <tag_dom_T[]>(<any[]>[_dd]).flat(Infinity) : null
			return [
				dt_(
					{ class: dt_class },
					_dt_a1.map(__dt=>
						typeof __dt === 'string'
							? md__raw_(ctx, __dt)
							: __dt)),
				_dd
					? dd_(
						{ class: dd_class },
						_dd_a1!.map(__dd=>
							typeof __dd === 'string'
								? md__raw_(ctx, __dd)
								: __dd))
					: null,
			]
		}))
	} else {
		dt_dd_pair_a1 = <dt_dd_pair_a1_T>props_OR_dt_dd_pair_a1
		return dl_(dt_dd_pair_a1.map(([_dt, _dd])=>[
			dt_(_dt),
			_dd
				? dd_(_dd)
				: null,
		]))
	}
}
type dt_dd_pair_a1_T = ([tag_dom_T, tag_dom_T]|[tag_dom_T])[]
export function dt_md_(
	$p:tag_props_T<HTMLElementTagNameMap['dt']>&{ ctx:wide_ctx_T },
	md:string
) {
	const { ctx, ...props } = $p
	return dt_(props, md__raw_(ctx, md))
}
export function dd_md_(
	$p:tag_props_T<HTMLElementTagNameMap['dd']>&{ ctx:wide_ctx_T },
	md:string
) {
	const { ctx, ...props } = $p
	return dd_(props, md__raw_(ctx, md))
}
