class EventEmitter{constructor(){this.events={}}on(t,e){this.events[t]||(this.events[t]=[]),this.events[t].push(e)}emit(t,...e){this.events[t]&&this.events[t].forEach(t=>t(...e))}off(t,e){this.events[t]&&(this.events[t]=this.events[t].filter(t=>t!==e))}}export default EventEmitter;