/// <reference lib="dom" />
import { type tag_dom_T, type wide_ctx_T } from 'relementjs'
import { type tag_props_T } from 'relementjs/any'
import { dd_, dl_, dt_ } from 'relementjs/html'
import { md__raw_ } from '../md/index.js'
export type dl_dt_dd_tree_props_T = {
	ctx:wide_ctx_T
	dl_class?:string
	dt_class?:string
	dd_class?:string
}
export function dl_dt_dd_tree_(
	pair_a1:pair_a1_T
):tag_dom_T
export function dl_dt_dd_tree_(
	props:dl_dt_dd_tree_props_T,
	pair_a1:pair_a1_T
):tag_dom_T
export function dl_dt_dd_tree_(
	props_OR_pair_a1:dl_dt_dd_tree_props_T|pair_a1_T,
	pair_a1?:pair_a1_T
) {
	if ((<dl_dt_dd_tree_props_T>props_OR_pair_a1).ctx.is_ctx) {
		const {
			ctx,
			dl_class,
			dt_class,
			dd_class,
		} = <dl_dt_dd_tree_props_T>props_OR_pair_a1
		return dl_({ class: dl_class }, pair_a1!.map(([_dt, _dd])=>[
			dt_(
				{ class: dt_class },
				typeof _dt === 'string'
					? md__raw_(ctx, _dt)
					: _dt),
			_dd
				? dd_(
					{ class: dd_class },
					typeof _dd === 'string'
						? md__raw_(ctx, _dd)
						: _dd)
				: null,
		]))
	} else {
		pair_a1 = <pair_a1_T>props_OR_pair_a1
		return dl_(pair_a1.map(([_dt, _dd])=>[
			dt_(_dt),
			_dd
				? dd_(_dd)
				: null,
		]))
	}
}
type pair_a1_T = ([tag_dom_T, tag_dom_T|[tag_props_T<HTMLElement>, tag_dom_T]]|[tag_dom_T])[]
