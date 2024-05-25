import { attr_val_, class_ } from 'ctx-core/html'
import { raw_, type relement_env_T, switch_, type tag_dom_T } from 'relementjs'
import { type tag_props_T } from 'relementjs/any'
import { a_ } from 'relementjs/html'
import { path_, svg_ } from 'relementjs/svg'
export type target_blank__a__props_T = {
	href:string
	wrap?:boolean
	innerText?:string|number
	innerHTML?:string
	class?:string
	style?:string
	nofollow?:boolean
	rel?:string
}&tag_props_T<HTMLAnchorElement>
export function target_blank__a_<env_T extends relement_env_T>(
	$p:target_blank__a__props_T,
	...children:tag_dom_T[]
) {
	return (
		a_<env_T>({
			...$p,
			class: class_(
				'a_target_blank',
				($p.wrap ?? true) ? null : 'whitespace-nowrap',
				'group',
				$p.class),
			rel:
				$p.rel
				?? attr_val_(
					'noopener noreferrer',
					$p.nofollow ? 'nofollow' : undefined),
			target: '_blank',
		}, [
			switch_({
				...$p,
				case_aa: [
					[$p.innerHTML, ()=>raw_($p.innerHTML)],
					[$p.innerText, ()=>$p.innerText],
					[!children.length, ()=>$p.href],
				]
			}, ...children),
			svg_({
				xmlns: 'http://www.w3.org/2000/svg',
				fill: 'currentColor',
				class: class_(
					'bi',
					'bi-box-arrow-up-right',
					'relative',
					'top-0',
					'h-3',
					'w-3',
					'-mt-3',
					'ml-1',
					'inline-block',
					'group-hover:fill-current'),
				viewBox: '0 0 16 16'
			}, [
				path_({
					'fill-rule': 'evenodd',
					d: 'M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z'
				}),
				path_({
					'fill-rule': 'evenodd',
					d: 'M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z'
				})
			])
		])
	)
}
export { target_blank__a_ as tb_a_ }
export function nofollow_target_blank__a_<env_T extends relement_env_T>(
	$p:target_blank__a__props_T,
	...children:tag_dom_T[]
) {
	return target_blank__a_({ ...$p, nofollow: true }, ...children)
}
export { target_blank__a_ as nofollow_tb_a_ }
export function target_blank__a___new<env_T extends relement_env_T>(
	$p:target_blank__a__props_T,
	...children:tag_dom_T[]
) {
	return (
		...arg_a1:[...[]|[tag_props_T<HTMLAnchorElement>|tag_dom_T, ...tag_dom_T[]]]
	)=>{
		const arg_a__has_props = Object.getPrototypeOf(arg_a1[0] ?? 0) === Object.prototype
		return <env_T>target_blank__a_(
			arg_a__has_props
				? { ...$p, ...<target_blank__a__props_T>arg_a1[0] }
				: $p,
			...(
				arg_a__has_props
					? arg_a1.length > 1 ? <tag_dom_T[]>arg_a1.slice(1) : children
					: arg_a1.length ? <tag_dom_T[]>arg_a1 : children)
		)
	}
}
export { target_blank__a___new as tb_a___new }
