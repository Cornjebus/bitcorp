"use client";

import { motion } from "framer-motion";

export function Coverage() {
  return (
    <section id="coverage" className="py-24 bg-[var(--color-navy)] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            National & International Coverage
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            BitCorp has an extensive network of experienced sales &amp;
            distribution executives across key markets
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16"
        >
          <div className="relative max-w-5xl mx-auto">
            <WorldMapSVG />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WorldMapSVG() {
  return (
    <svg viewBox="0 0 1000 500" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background continents — light blue */}
      <g fill="#334d7a" opacity="0.35">
        {/* North America (general shape) */}
        <path d="M130 80 L180 60 L230 55 L260 70 L280 85 L270 100 L250 120 L260 140 L255 160 L240 180 L220 195 L205 210 L195 230 L180 240 L170 255 L160 260 L155 250 L145 240 L130 230 L120 210 L110 190 L105 170 L100 150 L105 130 L110 110 L115 95 Z" />
        {/* Greenland */}
        <path d="M290 40 L330 30 L360 35 L370 50 L360 70 L340 80 L310 75 L295 60 Z" />
        {/* South America */}
        <path d="M220 280 L240 270 L260 275 L275 290 L285 310 L290 340 L285 370 L275 395 L260 410 L245 415 L230 405 L220 385 L215 360 L210 335 L212 310 L215 295 Z" />
        {/* Europe */}
        <path d="M430 75 L460 65 L490 70 L510 80 L520 95 L515 110 L505 125 L490 135 L475 140 L460 135 L445 125 L435 110 L430 95 Z" />
        {/* Africa */}
        <path d="M460 165 L490 155 L520 160 L540 180 L545 210 L540 245 L530 280 L515 310 L495 330 L475 335 L460 325 L450 300 L445 270 L448 240 L450 210 L455 185 Z" />
        {/* Asia */}
        <path d="M540 60 L590 50 L650 55 L710 65 L760 75 L800 90 L830 110 L840 135 L830 160 L810 175 L780 185 L740 190 L700 185 L660 175 L620 160 L590 145 L565 130 L545 110 L535 90 L535 75 Z" />
        {/* Middle East */}
        <path d="M540 135 L570 130 L590 140 L585 160 L570 175 L550 180 L535 170 L530 155 L535 145 Z" />
        {/* India */}
        <path d="M640 180 L660 170 L680 180 L685 200 L675 225 L660 240 L645 235 L635 215 L632 195 Z" />
        {/* Southeast Asia */}
        <path d="M720 195 L745 185 L770 195 L780 215 L770 235 L750 240 L730 235 L720 215 Z" />
        {/* Australia */}
        <path d="M760 310 L810 300 L850 310 L870 335 L860 365 L835 380 L800 385 L770 370 L755 345 L755 325 Z" />
        {/* Japan */}
        <path d="M820 100 L830 95 L840 100 L838 115 L830 120 L822 115 Z" />
      </g>

      {/* Highlighted countries — dark blue with glow */}

      {/* United States — highlighted */}
      <g>
        <path
          d="M130 95 L180 80 L220 78 L250 88 L265 100 L255 115 L248 130 L252 148 L245 165 L232 180 L218 192 L205 205 L195 218 L185 228 L175 238 L168 245 L160 240 L148 230 L135 218 L125 200 L118 185 L112 165 L108 148 L110 128 L115 110 Z"
          fill="#2563eb"
          stroke="#3b82f6"
          strokeWidth="1.5"
        />
        {/* Alaska */}
        <path
          d="M80 75 L105 65 L120 72 L118 85 L105 92 L88 88 Z"
          fill="#2563eb"
          stroke="#3b82f6"
          strokeWidth="1"
        />
      </g>

      {/* Canada — highlighted */}
      <path
        d="M120 35 L170 25 L220 22 L265 30 L290 45 L285 65 L275 80 L255 88 L220 78 L180 80 L130 95 L115 95 L105 80 L108 60 L112 45 Z"
        fill="#2563eb"
        stroke="#3b82f6"
        strokeWidth="1.5"
      />

      {/* Mexico — highlighted */}
      <path
        d="M135 218 L160 240 L168 245 L175 255 L165 268 L150 275 L135 270 L125 258 L120 242 L122 228 Z"
        fill="#2563eb"
        stroke="#3b82f6"
        strokeWidth="1.5"
      />

      {/* Latin America (Central + northern South America) — highlighted */}
      <path
        d="M165 268 L185 262 L205 268 L225 280 L240 270 L258 278 L270 295 L278 315 L275 340 L268 358 L255 370 L240 365 L228 350 L220 330 L215 310 L212 295 L200 280 L185 275 L172 272 Z"
        fill="#2563eb"
        stroke="#3b82f6"
        strokeWidth="1.5"
      />

      {/* United Kingdom — highlighted */}
      <path
        d="M420 72 L430 68 L438 72 L440 82 L436 92 L428 96 L420 92 L418 82 Z"
        fill="#2563eb"
        stroke="#3b82f6"
        strokeWidth="1.5"
      />

      {/* The Netherlands — highlighted */}
      <path
        d="M448 78 L458 74 L466 78 L466 88 L460 94 L452 92 L448 86 Z"
        fill="#2563eb"
        stroke="#3b82f6"
        strokeWidth="1.5"
      />

      {/* China — highlighted */}
      <path
        d="M660 85 L710 78 L755 88 L785 105 L790 125 L778 148 L755 160 L725 165 L695 158 L670 145 L652 128 L648 108 Z"
        fill="#2563eb"
        stroke="#3b82f6"
        strokeWidth="1.5"
      />

      {/* Country labels */}
      <g fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="13" fill="white">
        {/* USA */}
        <text x="165" y="170" textAnchor="middle">
          <tspan fill="#93c5fd" fontSize="11" fontWeight="500">United States</tspan>
        </text>
        <text x="165" y="185" textAnchor="middle">
          <tspan fill="white" fontSize="10" fontWeight="400" opacity="0.7">All 50 States</tspan>
        </text>

        {/* Canada */}
        <text x="195" y="55" textAnchor="middle">
          <tspan fill="#93c5fd" fontSize="11" fontWeight="500">Canada</tspan>
        </text>

        {/* Mexico */}
        <text x="110" y="260" textAnchor="middle">
          <tspan fill="#93c5fd" fontSize="11" fontWeight="500">Mexico</tspan>
        </text>

        {/* Latin America */}
        <text x="300" y="315" textAnchor="middle">
          <tspan fill="#93c5fd" fontSize="11" fontWeight="500">Latin America</tspan>
        </text>

        {/* UK */}
        <text x="400" y="108" textAnchor="middle">
          <tspan fill="#93c5fd" fontSize="11" fontWeight="500">United</tspan>
        </text>
        <text x="400" y="121" textAnchor="middle">
          <tspan fill="#93c5fd" fontSize="11" fontWeight="500">Kingdom</tspan>
        </text>

        {/* Netherlands */}
        <text x="475" y="108" textAnchor="middle">
          <tspan fill="#93c5fd" fontSize="11" fontWeight="500">The</tspan>
        </text>
        <text x="475" y="121" textAnchor="middle">
          <tspan fill="#93c5fd" fontSize="11" fontWeight="500">Netherlands</tspan>
        </text>

        {/* China */}
        <text x="720" y="130" textAnchor="middle">
          <tspan fill="#93c5fd" fontSize="11" fontWeight="500">China</tspan>
        </text>
      </g>

      {/* Dot markers on highlighted countries */}
      <g>
        {/* USA dot */}
        <circle cx="185" cy="155" r="4" fill="#60a5fa" />
        <circle cx="185" cy="155" r="8" fill="#60a5fa" opacity="0.25" />
        {/* Canada dot */}
        <circle cx="195" cy="60" r="4" fill="#60a5fa" />
        <circle cx="195" cy="60" r="8" fill="#60a5fa" opacity="0.25" />
        {/* Mexico dot */}
        <circle cx="140" cy="248" r="4" fill="#60a5fa" />
        <circle cx="140" cy="248" r="8" fill="#60a5fa" opacity="0.25" />
        {/* Latin America dot */}
        <circle cx="248" cy="305" r="4" fill="#60a5fa" />
        <circle cx="248" cy="305" r="8" fill="#60a5fa" opacity="0.25" />
        {/* UK dot */}
        <circle cx="430" cy="82" r="4" fill="#60a5fa" />
        <circle cx="430" cy="82" r="8" fill="#60a5fa" opacity="0.25" />
        {/* Netherlands dot */}
        <circle cx="458" cy="84" r="4" fill="#60a5fa" />
        <circle cx="458" cy="84" r="8" fill="#60a5fa" opacity="0.25" />
        {/* China dot */}
        <circle cx="720" cy="120" r="4" fill="#60a5fa" />
        <circle cx="720" cy="120" r="8" fill="#60a5fa" opacity="0.25" />
      </g>
    </svg>
  );
}
