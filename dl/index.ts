/// <reference lib="dom" />
import { class_ } from 'ctx-core/html'
import { type relement_env_T, type tag_dom_T, type wide_ctx_T } from 'relementjs'
import { type tag_props_T } from 'relementjs/any'
import { dd_, div_, dl_, dt_ } from 'relementjs/html'
import { md__raw_ } from '../md/index.js'
import { nl } from '../string/index.js'
export type dl_tree_props_T = {
	ctx:wide_ctx_T
	hyop?:string
	dl_class?:string
	dl_props?:Exclude<tag_props_T<HTMLElement>, 'class'>
	div_class?:string
	div_props?:Exclude<tag_props_T<HTMLElement>, 'class'>
	dt_class?:string
	dt_props?:Exclude<tag_props_T<HTMLElement>, 'class'>
	dd_class?:string
	dd_props?:Exclude<tag_props_T<HTMLElement>, 'class'>
	_?:(dl_tree_level:number)=>{
		hyop?:string
		dl_class?:string
		dl_props?:Exclude<tag_props_T<HTMLElement>, 'class'>
		div_class?:string
		div_props?:Exclude<tag_props_T<HTMLElement>, 'class'>
		dt_class?:string
		dt_props?:Exclude<tag_props_T<HTMLElement>, 'class'>
		dd_class?:string
		dd_props?:Exclude<tag_props_T<HTMLElement>, 'class'>
	}
}
let dl_tree_level = -1
export function dl_tree_<env_T extends relement_env_T>(
	dt_dd_pair_a1_:(level:number)=>dt_dd_pair_T[]
):tag_dom_T
export function dl_tree_<env_T extends relement_env_T>(
	props:dl_tree_props_T,
	dt_dd_pair_a1_:(level:number)=>dt_dd_pair_T[]
):tag_dom_T
export function dl_tree_<env_T extends relement_env_T>(
	props_OR_dt_dd_pair_a1_:dl_tree_props_T|((level:number)=>dt_dd_pair_T[]),
	dt_dd_pair_a1_?:(level:number)=>dt_dd_pair_T[]
) {
	++dl_tree_level
	try {
		if ((<dl_tree_props_T>props_OR_dt_dd_pair_a1_).ctx?.is_ctx) {
			let {
				ctx,
				dl_class,
				dl_props,
				div_class,
				div_props,
				dt_class,
				dt_props,
				dd_class,
				dd_props,
				_,
			} = <dl_tree_props_T>props_OR_dt_dd_pair_a1_
			if (_) {
				const props2 = _(dl_tree_level)
				dl_class = class_(dl_class, props2.dl_class)
				dl_props = { ...dl_props, ...props2.dl_props }
				div_class = class_(div_class, props2.div_class)
				div_props = { ...div_props, ...props2.div_props }
				dt_class = class_(dt_class, props2.dt_class)
				dt_props = { ...dt_props, ...props2.dt_props }
				dd_class = class_(dd_class, props2.dd_class)
				dd_props = { ...dd_props, ...props2.dd_props }
			}
			return dl_<env_T>({ ...dl_props, class: dl_class }, dt_dd_pair_a1_!(dl_tree_level).map(([_dt, _dd])=>{
				const _dt_a1 = string__merge__a1_([_dt])
				const _dd_a1 =
					_dd
						? string__merge__a1_([_dd])
						: null
				return [
					div_({ ...div_props, class: div_class }, [
						dt_({ ...dt_props, class: dt_class },
							_dt_a1.map(__dt=>
								typeof __dt === 'string'
									? md__raw_({ ctx }, __dt)
									: __dt)),
						_dd
							? dd_({ ...dd_props, class: dd_class },
								_dd_a1!.map(__dd=>{
									return (
										typeof __dd === 'function'
											? dl_tree_(<dl_tree_props_T>props_OR_dt_dd_pair_a1_,
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
			dt_dd_pair_a1_ = <()=>dt_dd_pair_T[]>props_OR_dt_dd_pair_a1_
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
function string__merge__a1_(_a1:(tag_dom_T|((level:number)=>tag_dom_T))[]):(tag_dom_T|((level:number)=>tag_dom_T))[] {
	const a1 = <tag_dom_T[]>(<any>_a1).flat(Infinity)
	let cur_str = ''
	const string__merge__a1:tag_dom_T[] = []
	for (let dom of a1) {
		if (typeof dom === 'string') {
			if (cur_str) cur_str += nl
			cur_str += dom
		} else {
			if (cur_str) {
				string__merge__a1.push(cur_str)
				cur_str = ''
			}
			string__merge__a1.push(dom)
		}
	}
	if (cur_str) string__merge__a1.push(cur_str)
	return string__merge__a1
}
export type dt_dd_pair_T = [tag_dom_T, tag_dom_T|((level:number)=>tag_dom_T)]|[tag_dom_T]
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
