/// <reference lib="dom" />
import { class_ } from 'ctx-core/html'
import { type relement_env_T, type tag_dom_T, type wide_ctx_T } from 'relementjs'
import { type tag_props_T } from 'relementjs/any'
import { dd_, div_, dl_, dt_ } from 'relementjs/html'
import { md__raw_ } from '../md/index.js'
import { nl } from '../string/index.js'
export type dl_tree_basic_props_T = {
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
export type dl_tree_props_T = dl_tree_basic_props_T&{
	ctx:wide_ctx_T
	_?:(dl_tree_level:number)=>dl_tree_basic_props_T
}
export type props_OR_dt_dd_pair_a1_T = dt_dd_pair_T[]|[dl_tree_basic_props_T, ...dt_dd_pair_T[]]
let dl_tree_level = -1
export function dl_tree_<env_T extends relement_env_T>(
	basic_props_OR_dt_dd_pair__a1_:(level:number)=>props_OR_dt_dd_pair_a1_T
):tag_dom_T
export function dl_tree_<env_T extends relement_env_T>(
	props:dl_tree_props_T,
	basic_props_OR_dt_dd_pair__a1_:(level:number)=>props_OR_dt_dd_pair_a1_T
):tag_dom_T
export function dl_tree_<env_T extends relement_env_T>(
	props____OR_basic_props_OR_dt_dd_pair__a1_:dl_tree_props_T|((level:number)=>props_OR_dt_dd_pair_a1_T),
	basic_props_OR_dt_dd_pair__a1_?:(level:number)=>props_OR_dt_dd_pair_a1_T
) {
	++dl_tree_level
	try {
		if ((<dl_tree_props_T>props____OR_basic_props_OR_dt_dd_pair__a1_).ctx?.is_ctx) {
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
			} = <dl_tree_props_T>props____OR_basic_props_OR_dt_dd_pair__a1_
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
			const basic_props_OR_dt_dd_pair__a1 = basic_props_OR_dt_dd_pair__a1_!(dl_tree_level)
			const has_basic_props = (
				basic_props_OR_dt_dd_pair__a1[0]
				&& (<any>basic_props_OR_dt_dd_pair__a1[0]).length == null)
			const basic_props =
				has_basic_props
				&& <dl_tree_basic_props_T>basic_props_OR_dt_dd_pair__a1[0]
			if (basic_props) {
				dl_class = class_(dl_class, basic_props.dl_class)
				dl_props = { ...dl_props, ...basic_props.dl_props }
				div_class = class_(div_class, basic_props.div_class)
				div_props = { ...div_props, ...basic_props.div_props }
				dt_class = class_(dt_class, basic_props.dt_class)
				dt_props = { ...dt_props, ...basic_props.dt_props }
				dd_class = class_(dd_class, basic_props.dd_class)
				dd_props = { ...dd_props, ...basic_props.dd_props }
			}
			const dt_dd_pair_a1 =
				has_basic_props
					? <dt_dd_pair_T[]>basic_props_OR_dt_dd_pair__a1.slice(1)
					: <dt_dd_pair_T[]>basic_props_OR_dt_dd_pair__a1
			return dl_<env_T>({
					...dl_props,
					class: dl_class,
				},
				dt_dd_pair_a1.map(([dt_children, dd_children])=>{
					const dt_child_a1 = string__merge__a1_([dt_children])
					const dd_child_a1 =
						dd_children
							? string__merge__a1_([dd_children])
							: null
					return [
						div_({
							...div_props,
							class: div_class,
						}, [
							dt_({
								...dt_props,
								class: dt_class,
							}, dt_child_a1.map(dt_child=>
								typeof dt_child === 'string'
									? md__raw_({ ctx }, dt_child)
									: dt_child)),
							dd_children
								? dd_({
									...dd_props,
									class: dd_class,
								}, dd_child_a1!.map(dd_child=>{
									return (
										typeof dd_child === 'function'
											? dl_tree_(<dl_tree_props_T>props____OR_basic_props_OR_dt_dd_pair__a1_,
												dd_child)
											: typeof dd_child === 'string'
												? md__raw_({ ctx }, dd_child)
												: dd_child
									)
								}))
								: null,
						]),
					]
				}))
		} else {
			const basic_props_OR_dt_dd_pair__a1 = basic_props_OR_dt_dd_pair__a1_!(dl_tree_level)
			const has_basic_props = (<any>basic_props_OR_dt_dd_pair__a1[0]).length == null
			const basic_props =
				has_basic_props
					? <dl_tree_basic_props_T>basic_props_OR_dt_dd_pair__a1[0]
					: <dl_tree_basic_props_T>{}
			const {
				dl_class,
				dl_props,
				div_class,
				div_props,
				dt_class,
				dt_props,
				dd_class,
				dd_props,
			} = basic_props
			const dt_dd_pair_a1 =
				has_basic_props
					? <dt_dd_pair_T[]>basic_props_OR_dt_dd_pair__a1.slice(1)
					: <dt_dd_pair_T[]>basic_props_OR_dt_dd_pair__a1
			return dl_<env_T>({
				...dl_props,
				class: dl_class
			}, dt_dd_pair_a1.map(([dt_children, dd_children])=>[
				div_({
					...div_props,
					class: div_class,
				}, [
					dt_({
						...dt_props,
						class: dt_class,
					}, dt_children),
					dd_children
						? dd_({
							...dd_props,
							class: dd_class,
						}, dd_children)
						: null,
				])
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
