window.__ModuleLoader__.load({
	id: "reasoning-slider",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		const React = require("react");
		// Package-owned stylesheet, mirroring the shipped client-bundle pattern.
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=\"reasoning-slider\"]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "reasoning-slider";
			tag.dataset.pluginCss = "reasoning-slider";
			tag.textContent = `
      .rsm-root { min-width: 0; position: relative; }
      .rsm-trigger { min-width: 0; max-width: 220px; height: 28px; color: var(--dsw-alias-label-secondary); cursor: pointer; background: 0 0; border: none; border-radius: 24px; outline: none; align-items: center; gap: 4px; padding: 0 4px 0 8px; font-size: 13px; font-weight: 500; line-height: 20px; display: flex; }
      .rsm-trigger:hover:not(:disabled) { background: var(--dsw-alias-interactive-bg-hover); }
      .rsm-trigger:focus-visible { box-shadow: 0 0 0 2px var(--dsw-alias-border-l3); }
      .rsm-trigger:disabled { color: var(--dsw-alias-label-dimmed); cursor: default; }
      .rsm-triggerLabel { text-overflow: ellipsis; white-space: nowrap; min-width: 0; overflow: hidden; }
      .rsm-triggerEffort { color: var(--dsw-alias-label-caption); flex: none; }
      .rsm-chevron { color: var(--dsw-alias-label-caption); flex: none; transition: transform .12s; }
      .rsm-chevronOpen { transform: rotate(180deg); }
      .rsm-menu { z-index: 20; border: 1px solid var(--dsw-alias-border-inverted); background: var(--dsw-specific-menu); width: min(320px, 100vw - 32px); height: min(260px, 100vh - 96px); box-shadow: var(--dsw-shadow-lv3); color: var(--dsw-alias-label-primary); border-radius: 12px; flex-direction: column; padding: 4px; display: flex; position: absolute; bottom: calc(100% + 8px); right: -30px; overflow: hidden; }
      .rsm-status, .rsm-empty { color: var(--dsw-alias-label-tertiary); padding: 10px 8px; font-size: 11px; line-height: 16px; }
      .rsm-error { background: var(--dsw-alias-interactive-bg-hover-danger); color: var(--dsw-alias-state-error-primary); border-radius: 8px; justify-content: space-between; align-items: flex-start; gap: 8px; margin: 0 2px 4px; padding: 6px 8px; font-size: 11px; line-height: 16px; display: flex; }
      .rsm-retry { color: inherit; font: inherit; cursor: pointer; background: 0 0; border: none; flex: none; padding: 0; font-weight: 600; }
      .rsm-body { flex: 1; min-height: 0; gap: 4px; display: flex; flex-direction: row; }
      .rsm-providers { flex: 0 0 122px; min-height: 0; overflow-y: auto; flex-direction: column; gap: 1px; padding: 2px; display: flex; }
      .rsm-provider { width: 100%; min-height: 26px; color: var(--dsw-alias-label-secondary); cursor: pointer; text-align: left; background: 0 0; border: none; border-radius: 8px; outline: none; align-items: center; gap: 6px; padding: 0 5px 0 7px; font-size: 11px; line-height: 16px; display: flex; }
      .rsm-provider:hover:not(:disabled) { background: var(--dsw-alias-interactive-bg-hover); }
      .rsm-provider:focus-visible { background: var(--dsw-alias-interactive-bg-hover); }
      .rsm-providerActive { background: color-mix(in srgb, var(--dsw-alias-brand-primary) 14%, transparent); color: var(--dsw-alias-brand-primary); font-weight: 600; }
      .rsm-providerName { flex: 1; min-width: 0; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; }
      .rsm-providerCount { flex: none; padding: 0 5px; border-radius: 8px; background: var(--dsw-alias-interactive-bg-hover); color: var(--dsw-alias-label-tertiary); font-size: 10px; line-height: 15px; }
      .rsm-list { flex: 1; min-width: 0; min-height: 0; overflow-y: auto; border-left: 1px solid var(--dsw-alias-border-l1); padding: 2px 0 2px 2px; }
      .rsm-option { width: 100%; min-height: 30px; color: inherit; text-align: left; cursor: pointer; background: 0 0; border: none; border-radius: 10px; outline: none; align-items: center; gap: 8px; padding: 4px 8px; display: flex; }
      .rsm-option:hover:not(:disabled), .rsm-option:focus-visible { background: var(--dsw-alias-interactive-bg-hover); }
      .rsm-option:disabled { color: var(--dsw-alias-label-dimmed); cursor: default; }
      .rsm-modelName { color: inherit; flex: 1; min-width: 0; text-overflow: ellipsis; white-space: nowrap; font-size: 12px; font-weight: 500; line-height: 16px; overflow: hidden; }
      .rsm-check { color: var(--dsw-alias-brand-primary); flex: 0 0 16px; place-items: center; display: grid; }
      .rsm-divider { height: 1px; margin: 4px 6px; background: var(--dsw-alias-border-l1); flex: none; }
      .rsm-effortPad { height: 60px; box-sizing: border-box; padding: 6px 8px 8px; flex: none; overflow: hidden; }
      .rsm-effortHead { display: flex; align-items: baseline; justify-content: space-between; margin: 0 4px 4px; }
      .rsm-effortTitle { font-size: 11px; line-height: 16px; color: var(--dsw-alias-label-tertiary); }
      .rsm-effortValue { font-size: 12px; line-height: 16px; font-weight: 600; color: var(--dsw-alias-label-primary); }
      .rsm-effortBody { height: 26px; align-items: center; display: flex; }
      .rsm-effortEmpty { color: var(--dsw-alias-label-tertiary); font-size: 11px; line-height: 16px; }
      .rsm-track { position: relative; flex: 1; min-width: 0; height: 26px; touch-action: none; cursor: grab; outline: none; }
      .rsm-track:active { cursor: grabbing; }
      .rsm-range { position: absolute; left: 14px; right: 14px; top: 0; bottom: 0; }
      .rsm-rail { position: absolute; left: -12px; right: -12px; top: 2px; height: 22px; border-radius: 11px; background: #E8E7E8; }
      /* ── effort tiers ──────────────────────────────────────────────────────
         One palette and one motion budget per reasoning level, so the fill reads
         as a position on a range instead of "plain blue until it happens to be
         max". The tier is chosen by the effort id (see effortTier), never by the
         index, so an unknown vocabulary still lands somewhere sensible. */
      .rsm-fill { position: absolute; z-index: 0; left: -12px; top: 2px; height: 22px; border-radius: 11px; background: #339CFF; box-shadow: inset 0 1px 1px rgba(255,255,255,.12); overflow: hidden; transition: width .22s cubic-bezier(.2,.8,.3,1), background .22s ease-out, box-shadow .22s ease-out; }
      .rsm-fill-drag { transition: none; }
      .rsm-fill[data-tier="off"] { background: transparent; box-shadow: none; }
      .rsm-fill[data-tier="minimal"] { background: #A8D4FF; }
      .rsm-fill[data-tier="low"] { background: #339CFF; }
      .rsm-fill[data-tier="medium"] { background: linear-gradient(90deg, #2E9BFF, #3FC3EE); }
      .rsm-fill[data-tier="high"] { background: linear-gradient(90deg, #2E9BFF, #6B77F0); box-shadow: 0 0 8px rgba(90,110,240,.30), inset 0 1px 1px rgba(255,255,255,.14); }
      .rsm-fill[data-tier="xhigh"] { background: linear-gradient(90deg, #5C7BF0, #9A6BE0); box-shadow: 0 0 10px rgba(140,100,225,.38), inset 0 1px 1px rgba(255,255,255,.16); }
      .rsm-fill[data-tier="max"] { background: #714DC7; box-shadow: 0 0 12px rgba(120,80,210,.45), inset 0 1px 1px rgba(255,255,255,.18); }
      .rsm-ultraGradient { position: absolute; inset: 0; border-radius: inherit; background: linear-gradient(90deg, #88A3FE 0%, #93A2FF 11%, #A2A6FF 22%, #ABA8FF 33%, #B2A3FE 44%, #AF99FE 55%, #9766E4 66%, #9766E4 72%, #714DC7 86%, #6752C9 100%); opacity: 0; transition: opacity .22s cubic-bezier(.2,.8,.3,1); pointer-events: none; }
      .rsm-fill[data-tier="max"] .rsm-ultraGradient { opacity: 1; }
      /* A light band that sweeps left→right; the width of the band and its speed
         carry the tier — slower and softer low down, tighter and brighter up top. */
      .rsm-sheen { position: absolute; z-index: 2; top: -4px; bottom: -4px; left: 0; width: 42%; opacity: 0; pointer-events: none; background: linear-gradient(105deg, rgba(255,255,255,0), rgba(255,255,255,.34) 50%, rgba(255,255,255,0)); }
      .rsm-fill[data-tier="medium"] .rsm-sheen { animation: rsm-sheen 4.2s cubic-bezier(.45,0,.55,1) infinite; }
      .rsm-fill[data-tier="high"] .rsm-sheen { animation: rsm-sheen 3s cubic-bezier(.45,0,.55,1) infinite; }
      .rsm-fill[data-tier="xhigh"] .rsm-sheen { animation: rsm-sheen 2.2s cubic-bezier(.45,0,.55,1) infinite; }
      .rsm-fill[data-tier="max"] .rsm-sheen { animation: rsm-sheen 1.8s cubic-bezier(.45,0,.55,1) infinite; }
      @keyframes rsm-sheen { 0% { transform: translateX(-130%); opacity: 0; } 18% { opacity: .75; } 62% { opacity: .75; } 100% { transform: translateX(300%); opacity: 0; } }
      .rsm-energy { position: absolute; z-index: 1; inset: 0; overflow: hidden; background-repeat: repeat-x; background-size: 62px 22px, 78px 22px, 94px 22px, 70px 22px, 86px 22px, 108px 22px; background-image: radial-gradient(circle at 8% 26%, rgba(255,255,255,.86) 0 1px, transparent 2px), radial-gradient(circle at 24% 72%, rgba(226,215,255,.7) 0 1px, transparent 2px), radial-gradient(circle at 41% 35%, rgba(255,255,255,.86) 0 1px, transparent 2px), radial-gradient(circle at 59% 79%, rgba(231,211,255,.68) 0 1px, transparent 2px), radial-gradient(circle at 76% 21%, rgba(255,255,255,.8) 0 1px, transparent 2px), radial-gradient(circle at 92% 64%, rgba(242,222,255,.9) 0 1px, transparent 2px); opacity: 0; pointer-events: none; filter: brightness(1); transition: opacity .22s ease-out, filter .18s ease-out; }
      .rsm-fill[data-tier="xhigh"] .rsm-energy { opacity: .5; animation: rsm-energy-drift 1.7s linear infinite; }
      .rsm-fill[data-tier="max"] .rsm-energy { opacity: 1; animation: rsm-energy-drift .98s linear infinite; }
      .rsm-energy::after { content: ""; position: absolute; top: -5px; bottom: -5px; width: 13%; filter: blur(.6px); pointer-events: none; }
      .rsm-fill[data-tier="max"] .rsm-energy::after { background: linear-gradient(105deg, rgba(255,255,255,0), rgba(255,255,255,.13) 30%, rgba(255,250,255,.76) 50%, rgba(231,206,255,.2) 70%, rgba(255,255,255,0)); animation: rsm-energy-glint 1.15s linear infinite; }
      .rsm-fill[data-tier="max"].rsm-ultra-burst .rsm-energy { filter: brightness(1.32); }
      @keyframes rsm-energy-drift { from { background-position: 0 0, 0 0, 0 0, 0 0, 0 0, 0 0; } to { background-position: -62px 0, -78px 0, -94px 0, -70px 0, -86px 0, -108px 0; } }
      @keyframes rsm-energy-glint { 0%, 20% { opacity: 0; transform: translateX(-150%); } 30% { opacity: .7; } 70% { opacity: .7; } 82%, 100% { opacity: 0; transform: translateX(760%); } }
      .rsm-tick { position: absolute; z-index: 1; top: 11px; width: 4px; height: 4px; margin-left: -2px; border-radius: 50%; background: #B5B5B7; }
      .rsm-tick-on { background: #71BAFF; }
      .rsm-tick-major { top: 9px; width: 8px; height: 8px; margin-left: -4px; }
      .rsm-thumb { position: absolute; z-index: 2; top: 1px; width: 24px; height: 24px; margin-left: -12px; border-radius: 50%; background: #fff; border: 1px solid #DCDBDC; box-shadow: 0 1px 2px rgba(20,30,50,.12), 0 3px 8px rgba(20,30,50,.08); box-sizing: border-box; transition: left .18s cubic-bezier(.2,.9,.25,1), opacity .18s ease-out, box-shadow .18s ease-out; }
      .rsm-thumb-drag { transition: none; }
      .rsm-track:hover .rsm-thumb { box-shadow: 0 1px 2px rgba(20,30,50,.14), 0 4px 10px rgba(20,30,50,.1); }
      .rsm-track:focus-visible .rsm-thumb { box-shadow: 0 0 0 3px color-mix(in srgb, #4d6bfe 35%, transparent); }
      /* off is the one tier with no fill width at all, so the rail and thumb carry it. */
      .rsm-track[data-tier="off"] .rsm-rail { background: #DCDCDE; }
      .rsm-track[data-tier="off"] .rsm-thumb { opacity: .68; }
      .rsm-track[data-tier="xhigh"] .rsm-tick-on { background: #8F9BF5; }
      .rsm-track[data-tier="max"] .rsm-tick-on { background: #A98BF0; }
      .rsm-track[data-tier="max"] .rsm-thumb { box-shadow: 0 1px 2px rgba(20,30,50,.14), 0 0 0 3px rgba(140,100,225,.18), 0 4px 10px rgba(20,30,50,.1); }
      .rsm-singleEffort { display: flex; align-items: center; justify-content: space-between; width: 100%; font-size: 12px; color: var(--dsw-alias-label-primary); }
      @media (prefers-reduced-motion: reduce) {
        .rsm-fill, .rsm-ultraGradient, .rsm-energy, .rsm-thumb { transition: none; }
        .rsm-sheen, .rsm-energy, .rsm-energy::after { animation: none; }
        .rsm-fill[data-tier="medium"] .rsm-sheen, .rsm-fill[data-tier="high"] .rsm-sheen,
        .rsm-fill[data-tier="xhigh"] .rsm-sheen, .rsm-fill[data-tier="max"] .rsm-sheen { opacity: .5; }
      }
    `;
			document.head.appendChild(tag);
		}
		const NO_EFFORTS = [];
		// Reasoning vocabularies differ per adapter (off/minimal/low/medium/high/xhigh/max
		// are the ones DSH ships), so tiers key off the effort id rather than the index:
		// a model whose top level is `high` should look like high, not like max.
		const EFFORT_TIERS = {
			off: "off", none: "off", disabled: "off",
			minimal: "minimal", min: "minimal",
			low: "low",
			medium: "medium", mid: "medium", normal: "medium", default: "medium",
			high: "high",
			xhigh: "xhigh", veryhigh: "xhigh", highest: "xhigh", extreme: "xhigh",
			max: "max", maximum: "max", ultra: "max"
		};
		/** Maps one effort to a visual tier, falling back to its rank for unknown ids. */
		function effortTier(effort, index, count) {
			for (const candidate of [effort && effort.id, effort && effort.name]) {
				if (candidate === undefined || candidate === null) continue;
				const key = String(candidate).trim().toLowerCase().replace(/[\s_-]+/g, "");
				if (EFFORT_TIERS[key] !== undefined) return EFFORT_TIERS[key];
			}
			// Opaque vocabulary: grade by position instead, so a custom level still lands somewhere.
			if (count <= 1) return index <= 0 ? "off" : "max";
			if (index <= 0) return "off";
			const rank = index / (count - 1);
			if (rank >= 0.99) return "max";
			if (rank >= 0.74) return "xhigh";
			if (rank >= 0.49) return "high";
			if (rank >= 0.24) return "medium";
			return "low";
		}
		/** The level a model falls back to when nothing else decides: its middle advertised effort. */
		function middleIndex(count) {
			return count > 0 ? Math.floor(count / 2) : 0;
		}
		/** Where the thumb sits, as a percentage. A one-level slider has nowhere to travel. */
		function thumbPercent(index, count) {
			if (count > 1) return (index / (count - 1)) * 100;
			return index >= 0 ? 100 : 0;
		}
		/** The provider whose models the second pane lists: the user's pick while it still
		 * exists, else the current model's provider, else the first advertised one. */
		function activeProviderOf(groups, preferred, current) {
			if (preferred !== null && groups.some((group) => group.id === preferred)) return preferred;
			if (current !== null && groups.some((group) => group.id === current.provider)) return current.provider;
			if (groups.length > 0) return groups[0].id;
			return null;
		}
		const EFFORT_STEP_KEYS = { ArrowRight: 1, ArrowUp: 1, ArrowLeft: -1, ArrowDown: -1 };
		function EffortSlider({ efforts, index, majorIndex, onChange, onSubmit, disabled }) {
			const trackRef = React.useRef(null);
			const dragRef = React.useRef(false);
			const [dragging, setDragging] = React.useState(false);
			const [ultraBurst, setUltraBurst] = React.useState(false);
			const n = efforts.length;
			const clientToPos = (clientX) => {
				const el = trackRef.current;
				if (!el || n <= 1) return 0;
				const rect = el.getBoundingClientRect();
				const ratio = (clientX - rect.left - 14) / (rect.width - 28);
				return Math.max(0, Math.min(n - 1, ratio * (n - 1)));
			};
			const clamp = (position) => Math.max(0, Math.min(n - 1, position));
			const snap = (position) => clamp(Math.round(position));
			const magnetize = (position) => {
				const nearest = snap(position);
				return Math.abs(position - nearest) <= 0.10 ? nearest : clamp(position);
			};
			const down = (e) => {
				if (disabled) return;
				e.preventDefault();
				dragRef.current = true;
				setDragging(true);
				e.currentTarget.setPointerCapture(e.pointerId);
				onChange(magnetize(clientToPos(e.clientX)));
			};
			const move = (e) => { if (dragRef.current) onChange(magnetize(clientToPos(e.clientX))); };
			const up = (e) => {
				if (!dragRef.current) return;
				dragRef.current = false;
				setDragging(false);
				const snapped = snap(clientToPos(e.clientX));
				onChange(snapped);
				onSubmit(snapped);
			};
			// Keyboard steps and the wheel both settle a level immediately.
			const stepBy = (delta) => {
				const next = clamp(Math.round(index) + delta);
				onChange(next);
				onSubmit(next);
			};
			const key = (e) => {
				if (disabled) return;
				const delta = EFFORT_STEP_KEYS[e.key] || 0;
				if (!delta) return;
				e.preventDefault();
				stepBy(delta);
			};
			const wheel = (e) => {
				if (disabled || e.deltaY === 0) return;
				e.preventDefault();
				stepBy(e.deltaY < 0 ? 1 : -1);
			};
			const leftPct = thumbPercent(index, n);
			const shown = Math.round(index);
			const atMax = n > 1 && index >= n - 1;
			// The tier follows the live (possibly mid-drag) position, so the palette and
			// motion change under the finger as the level crosses a boundary.
			const tier = effortTier(efforts[shown], shown, n);
			const wasMaxRef = React.useRef(atMax);
			React.useEffect(() => {
				if (atMax && !wasMaxRef.current) {
					setUltraBurst(true);
					const timer = setTimeout(() => setUltraBurst(false), 420);
					wasMaxRef.current = atMax;
					return () => clearTimeout(timer);
				}
				setUltraBurst(false);
				wasMaxRef.current = atMax;
			}, [atMax]);
			return React.createElement("div", {
				ref: trackRef,
				className: "rsm-track",
				"data-tier": tier,
				role: "slider",
				"aria-label": "推理等级",
				"aria-valuemin": 0,
				"aria-valuemax": n - 1,
				"aria-valuenow": shown,
				"aria-valuetext": efforts[shown] ? efforts[shown].name : "",
				tabIndex: disabled ? -1 : 0,
				onPointerDown: down,
				onPointerMove: move,
				onPointerUp: up,
				onPointerCancel: up,
				onKeyDown: key,
				onWheel: wheel
			},
				React.createElement("div", { className: "rsm-range" },
					React.createElement("div", { className: "rsm-rail" }),
					React.createElement("div", { className: "rsm-fill" + (dragging ? " rsm-fill-drag" : "") + (ultraBurst ? " rsm-ultra-burst" : ""), "data-tier": tier, style: { width: index <= 0 ? "0" : "calc(" + leftPct + "% + 12px)" } },
						React.createElement("div", { className: "rsm-ultraGradient" }),
						React.createElement("div", { className: "rsm-energy" }),
						React.createElement("div", { className: "rsm-sheen" })),
					efforts.map((effort, i) => React.createElement("div", {
						key: effort.id,
						className: "rsm-tick" + (i === majorIndex ? " rsm-tick-major" : "") + (i <= shown ? " rsm-tick-on" : ""),
						style: { left: (n <= 1 ? 0 : (i / (n - 1)) * 100) + "%" }
					})),
					React.createElement("div", { className: "rsm-thumb" + (dragging ? " rsm-thumb-drag" : ""), style: { left: leftPct + "%" } })));
		}
		const chevronDown = React.createElement("svg", { className: "rsm-chevron", viewBox: "0 0 24 24", width: 14, height: 14, fill: "none", stroke: "currentColor", strokeWidth: 2.5, strokeLinecap: "round", strokeLinejoin: "round" }, React.createElement("path", { d: "M6 9l6 6 6-6" }));
		const checkIcon = React.createElement("svg", { viewBox: "0 0 24 24", width: 16, height: 16, fill: "none", stroke: "currentColor", strokeWidth: 2.5, strokeLinecap: "round", strokeLinejoin: "round" }, React.createElement("path", { d: "M20 6L9 17l-5-5" }));
		class SliderErrorBoundary extends React.Component {
			constructor(props) {
				super(props);
				this.state = { failed: false };
				this.retryTimer = null;
			}
			static getDerivedStateFromError() {
				return { failed: true };
			}
			componentDidCatch() {
				clearTimeout(this.retryTimer);
				this.retryTimer = setTimeout(() => this.setState({ failed: false }), 1500);
			}
			componentDidUpdate(previousProps) {
				if (previousProps.sessionId !== this.props.sessionId && this.state.failed) this.setState({ failed: false });
			}
			componentWillUnmount() {
				clearTimeout(this.retryTimer);
			}
			render() {
				return this.state.failed ? null : this.props.children;
			}
		}
		const MODEL_SEAT = "conversation.input.model";
		function apply(ctx) {
			const slots = ctx.get("slots");
			if (slots === undefined) return;
			const modelDirectories = ctx.get("modelDirectories") ?? ctx.get("models");
			if (modelDirectories === undefined) return;
			const sessions = ctx.get("sessions");
			function SliderSeat(props) {
				const sessionId = props.sessionId;
				const available = sessions === undefined || sessions.subagentAddress === undefined ? true : sessions.subagentAddress(sessionId) === undefined;
				const directory = modelDirectories.directoryFor(sessionId);
				const [state, setState] = React.useState(() => directory.store.getSnapshot());
				React.useEffect(() => {
					return directory.store.subscribe(() => setState(directory.store.getSnapshot()));
				}, []);
				const [open, setOpen] = React.useState(false);
				const [activeProvider, setActiveProvider] = React.useState(null);
				const rootRef = React.useRef(null);
				const triggerRef = React.useRef(null);
				const reload = () => directory.load();
				React.useEffect(() => { if (available) { reload(); } }, [available]);
				React.useEffect(() => {
					const stop = ctx.on("connection/reset", () => {
						if (typeof directory.resetConnected === "function") directory.resetConnected();
						reload();
					});
					return stop;
				}, []);
				React.useEffect(() => {
					if (!open) return;
					const closeOutside = (event) => { if (!rootRef.current || !rootRef.current.contains(event.target)) setOpen(false); };
					document.addEventListener("mousedown", closeOutside);
					return () => document.removeEventListener("mousedown", closeOutside);
				}, [open]);
				const busy = state.status === "selecting";
				const show = () => {
					setActiveProvider(null);
					setOpen(true);
					reload();
				};
				const close = (restoreFocus) => {
					setOpen(false);
					setActiveProvider(null);
					if (restoreFocus) queueMicrotask(() => { if (triggerRef.current) triggerRef.current.focus(); });
				};
				const onRootKeyDown = (e) => {
					if (e.key !== "Escape" || !open) return;
					e.preventDefault();
					close(true);
				};
				const onRootBlur = (event) => {
					if (event.relatedTarget instanceof Node && rootRef.current && rootRef.current.contains(event.relatedTarget)) return;
					close();
				};
				const current = state.current;
				const groups = state.groups || [];
				/** The catalog entry a provider/model pair points at, or null when it is gone. */
				const findModel = (provider, model) => {
					for (const group of groups) {
						if (group.id !== provider) continue;
						for (const candidate of group.models) {
							if (candidate.id === model) return candidate;
						}
					}
					return null;
				};
				const currentModel = current ? findModel(current.provider, current.model) : null;
				const reasoning = currentModel === null ? undefined : currentModel.reasoning;
				const efforts = (reasoning && reasoning.efforts) || NO_EFFORTS;
				const effectiveEffort = (current && current.reasoningEffort) || (reasoning && reasoning.defaultEffort) || undefined;
				// Only a model whose adapter advertises efforts gets a caption at all.
				let effortLabel;
				if (reasoning !== undefined) {
					if (effectiveEffort !== undefined) {
						const found = efforts.find((level) => level.id === effectiveEffort);
						effortLabel = found ? found.name : String(effectiveEffort);
					} else if (efforts.length > 0) {
						effortLabel = efforts[middleIndex(efforts.length)].name;
					}
				}
				const modelLabel = currentModel === null ? "选择模型" : currentModel.name;
				const triggerLabel = effortLabel === undefined ? modelLabel : modelLabel + " · " + effortLabel;
				/** Submits a selection; the effort is omitted when undefined so the host default applies. */
				const submit = (provider, model, effort) => {
					const selection = { provider: provider, model: model };
					if (effort !== undefined) selection.reasoningEffort = effort;
					directory.select(selection).catch(() => {});
				};
				/** Picking a model carries the current effort over when the target advertises it. */
				const choose = (provider, model) => {
					if (current && current.provider === provider && current.model === model) return;
					const target = findModel(provider, model);
					const targetReasoning = target === null ? undefined : target.reasoning;
					const targetEfforts = (targetReasoning && targetReasoning.efforts) || NO_EFFORTS;
					let effort;
					if (current && current.reasoningEffort && targetEfforts.some((e) => e.id === current.reasoningEffort)) {
						effort = current.reasoningEffort;
					} else if (targetReasoning && targetReasoning.defaultEffort) {
						effort = targetReasoning.defaultEffort;
					} else if (targetEfforts.length > 0) {
						effort = targetEfforts[middleIndex(targetEfforts.length)].id;
					}
					submit(provider, model, effort);
				};
				const chooseEffort = (effort) => {
					if (current === null) return;
					if (effectiveEffort === effort) return;
					submit(current.provider, current.model, effort);
				};
				const sliderIndex = efforts.findIndex((level) => level.id === effectiveEffort);
				const resolvedIndex = sliderIndex < 0 ? middleIndex(efforts.length) : sliderIndex;
				const [localPos, setLocalPos] = React.useState(resolvedIndex);
				React.useEffect(() => { setLocalPos(resolvedIndex); }, [resolvedIndex, efforts]);
				if (!available) return null;
				const activeTab = activeProviderOf(groups, activeProvider, current);
				const activeGroup = groups.find((group) => group.id === activeTab) || null;
				// Second pane: the active provider's models, one line each.
				const models = activeGroup === null ? [] : activeGroup.models;
				const options = models.map((model) => {
					const selected = current !== null && current.provider === activeGroup.id && current.model === model.id;
					// The catalog description stays reachable on hover, but no longer takes a second line.
					const detail = model.description !== undefined && model.description !== "" ? model.description : "";
					return React.createElement("button", {
						key: activeGroup.id + "/" + model.id,
						type: "button",
						role: "radio",
						"aria-checked": selected,
						className: "rsm-option",
						title: detail === "" ? model.name : model.name + " · " + detail,
						disabled: busy,
						onClick: () => choose(activeGroup.id, model.id)
					},
						React.createElement("span", { className: "rsm-modelName" }, model.name),
						React.createElement("span", { className: "rsm-check" }, selected ? checkIcon : null));
				});
				const providerButtons = groups.map((group) => {
					const active = group.id === activeTab;
					return React.createElement("button", {
						key: group.id,
						type: "button",
						role: "tab",
						"aria-selected": active,
						className: "rsm-provider" + (active ? " rsm-providerActive" : ""),
						title: group.name,
						disabled: busy,
						onClick: () => setActiveProvider(group.id)
					},
						React.createElement("span", { className: "rsm-providerName" }, group.name),
						React.createElement("span", { className: "rsm-providerCount" }, String(group.models.length)));
				});
				// A background refresh must never announce itself: opening the popover
				// re-reads the directory on purpose, and showing a notice above the list
				// both shifts the rows and reads as a flash. Only a cold start (no rows
				// to show yet) may surface it.
				const loadingEl = state.status === "loading" && groups.length === 0 ? React.createElement("div", { className: "rsm-status" }, "正在刷新模型列表…") : null;
				const errorEl = state.error !== null ? React.createElement("div", { className: "rsm-error" },
					React.createElement("span", null, "模型操作失败：" + state.error),
					React.createElement("button", { type: "button", className: "rsm-retry", onClick: reload }, "重试")) : null;
				const emptyEl = state.status === "ready" && groups.length === 0 ? React.createElement("div", { className: "rsm-empty" }, "没有可用的模型。") : null;
				const paneEmptyEl = state.status === "ready" && activeGroup !== null && activeGroup.models.length === 0
					? React.createElement("div", { className: "rsm-empty" }, "该提供商暂无模型。") : null;
				const shownIndex = Math.round(localPos);
				const shownEffort = efforts[shownIndex];
				// Prefer the live level's name; fall back to the persisted caption, then a dash.
				let effortValueLabel = "—";
				if (shownEffort !== undefined) effortValueLabel = shownEffort.name;
				else if (effortLabel !== undefined) effortValueLabel = effortLabel;
				const renderEffort = () => {
					if (efforts.length === 0) return React.createElement("div", { className: "rsm-effortEmpty" }, "当前模型未提供推理等级。");
					if (efforts.length === 1) return React.createElement("div", { className: "rsm-singleEffort" },
						React.createElement("span", null, "支持档位"),
						React.createElement("span", { className: "rsm-effortValue" }, efforts[0].name));
					const majorIndex = reasoning && reasoning.defaultEffort
						? efforts.findIndex((level) => level.id === reasoning.defaultEffort)
						: -1;
					return React.createElement(EffortSlider, {
						efforts: efforts,
						index: localPos,
						majorIndex: majorIndex,
						disabled: busy,
						onChange: (i) => setLocalPos(i),
						onSubmit: (i) => { const effort = efforts[Math.round(i)]; if (effort) chooseEffort(effort.id); }
					});
				};
				// Rendered unconditionally, at a fixed height, so selecting a model whose
				// adapter advertises no effort never resizes the popover.
				const effortBlock = React.createElement(React.Fragment, null,
					React.createElement("div", { className: "rsm-divider" }),
					React.createElement("div", { className: "rsm-effortPad" },
						React.createElement("div", { className: "rsm-effortHead" },
							React.createElement("span", { className: "rsm-effortTitle" }, "推理等级"),
							React.createElement("span", { className: "rsm-effortValue" }, effortValueLabel)),
						React.createElement("div", { className: "rsm-effortBody" }, renderEffort())));
				return React.createElement("div", {
					ref: rootRef,
					className: "rsm-root",
					onKeyDown: onRootKeyDown,
					onBlur: onRootBlur
				},
					React.createElement("button", {
						ref: triggerRef,
						type: "button",
						className: "rsm-trigger",
						"aria-haspopup": "dialog",
						"aria-expanded": open,
						title: triggerLabel,
						disabled: props.locked === true,
						onClick: () => { if (open) close(); else show(); }
					},
						React.createElement("span", { className: "rsm-triggerLabel" }, modelLabel),
						effortLabel !== undefined ? React.createElement("span", { className: "rsm-triggerEffort" }, effortLabel) : null,
						chevronDown),
					open ? React.createElement("div", { className: "rsm-menu", role: "dialog", "aria-label": "模型与推理等级" },
						React.createElement("div", { className: "rsm-body" },
							React.createElement("div", { className: "rsm-providers", role: "tablist", "aria-label": "提供商" }, providerButtons),
							React.createElement("div", { className: "rsm-list" },
								loadingEl,
								errorEl,
								paneEmptyEl,
								React.createElement("div", { role: "radiogroup", "aria-label": "模型" }, options))),
						emptyEl,
						effortBlock) : null);
			}
			// One seat per session, wrapped so a render failure cannot take the composer down.
			const seat = (props) => React.createElement(SliderErrorBoundary, { sessionId: props.sessionId }, React.createElement(SliderSeat, props));
			slots.inject(MODEL_SEAT, () => slots.register({ name: MODEL_SEAT, priority: -1 }, seat));
		}
		exports.inject = ["slots", "modelDirectories", "remote.session"];
		exports.apply = apply;
		return module.exports;
	}
});
