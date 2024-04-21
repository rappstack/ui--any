import { type tag_dom_T } from 'relementjs'
import { dd_, dl_, dt_ } from 'relementjs/html'
export function dl_dt_dd_tree_(pair_a1:([tag_dom_T, tag_dom_T]|[tag_dom_T])[]) {
	return dl_(pair_a1.map(([_dt, _dd])=>[
		dt_(_dt),
		_dd ? dd_(_dd) : null,
	]))
}
