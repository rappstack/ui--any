/// <reference lib="dom" />
import { class_ } from 'ctx-core/html'
import { type relement_env_T, type tag_dom_T, type wide_ctx_T } from 'relementjs'
import { type tag_props_T } from 'relementjs/any'
import { dd_, div_, dl_, dt_ } from 'relementjs/html'
import { md__raw_ } from '../md/index.js'
export type dl_tree_props_T = {
	ctx:wide_ctx_T
	hyop?:string
	dl_class?:string
	div_class?:string
	dt_class?:string
	dd_class?:string
	_?:(dl_tree_level:number)=>{
		hyop?:string
		dl_class?:string
		div_class?:string
		dt_class?:string
		dd_class?:string
	}
}
let dl_tree_level = -1
export function dl_tree_<env_T extends relement_env_T>(
	dt_dd_pair_a1_:(level:number)=>dt_dd_pair_a1_T
):tag_dom_T
export function dl_tree_<env_T extends relement_env_T>(
	props:dl_tree_props_T,
	dt_dd_pair_a1_:(level:number)=>dt_dd_pair_a1_T
):tag_dom_T
export function dl_tree_<env_T extends relement_env_T>(
	props_OR_dt_dd_pair_a1_:dl_tree_props_T|((level:number)=>dt_dd_pair_a1_T),
	dt_dd_pair_a1_?:(level:number)=>dt_dd_pair_a1_T
) {
	++dl_tree_level
	try {
		if ((<dl_tree_props_T>props_OR_dt_dd_pair_a1_).ctx?.is_ctx) {
			let {
				ctx,
				hyop,
				dl_class,
				div_class,
				dt_class,
				dd_class,
				_
			} = <dl_tree_props_T>props_OR_dt_dd_pair_a1_
			if (_) {
				const props2 = _(dl_tree_level)
				if (props2) hyop = props2.hyop
				dl_class = class_(dl_class, props2.dl_class)
				div_class = class_(div_class, props2.div_class)
				dt_class = class_(dt_class, props2.dt_class)
				dd_class = class_(dd_class, props2.dd_class)
			}
			return dl_<env_T>({ class: dl_class, hyop }, dt_dd_pair_a1_!(dl_tree_level).map(([_dt, _dd])=>{
				const _dt_a1 = <tag_dom_T[]>(<any[]>[_dt]).flat(Infinity)
				const _dd_a1 =
					_dd
						? <(((level:number)=>tag_dom_T)|tag_dom_T)[]>(<any[]>[_dd]).flat(Infinity)
						: null
				return [
					div_({ class: div_class }, [
						dt_({ class: dt_class },
							_dt_a1.map(__dt=>
								typeof __dt === 'string'
									? md__raw_({ ctx }, __dt)
									: __dt)),
						_dd
							? dd_({ class: dd_class },
								_dd_a1!.map(__dd=>{
									return (
										typeof __dd === 'function'
											? dl_tree_(
												<dl_tree_props_T>props_OR_dt_dd_pair_a1_,
												__dd)
											: typeof __dd === 'string'
												? md__raw_({ ctx }, __dd)
												: __dd
									)
								}))
							: null,
					]),
				]
			}))
		} else {
			dt_dd_pair_a1_ = <()=>dt_dd_pair_a1_T>props_OR_dt_dd_pair_a1_
			return dl_<env_T>(dt_dd_pair_a1_(dl_tree_level).map(([_dt, _dd])=>[
				dt_(_dt),
				_dd
					? dd_(_dd)
					: null,
			]))
		}
	} finally {
		--dl_tree_level
	}
}
type dt_dd_pair_a1_T = ([tag_dom_T, tag_dom_T|((level:number)=>tag_dom_T)]|[tag_dom_T])[]
export function dt_md_(
	$p:tag_props_T<HTMLElementTagNameMap['dt']>&{ ctx:wide_ctx_T },
	md:string
) {
	const { ctx, ...props } = $p
	return dt_(props, md__raw_({ ctx }, md))
}
export function dd_md_(
	$p:tag_props_T<HTMLElementTagNameMap['dd']>&{ ctx:wide_ctx_T },
	md:string
) {
	const { ctx, ...props } = $p
	return dd_(props, md__raw_({ ctx }, md))
}
