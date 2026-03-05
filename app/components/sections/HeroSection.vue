<template>
  <section class="relative overflow-hidden">
    <!-- Background glow -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-violet/5 rounded-full blur-[120px] pointer-events-none" />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 pt-16 sm:pt-24 pb-12 sm:pb-20">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 bg-violet/10 border border-violet/20 text-violet-light text-xs font-semibold px-4 py-1.5 rounded-full mb-8 tracking-wide">
            <span class="text-emerald">●</span>
            {{ $t('hero.badge') }}
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight mb-6">
            {{ $t('hero.title1') }}<br>
            <span class="bg-gradient-to-r from-violet-light to-emerald-light bg-clip-text text-transparent">{{ $t('hero.title2') }}</span><br>
            <span class="text-emerald-light">{{ $t('hero.title3') }}</span>
          </h1>

          <p class="text-base sm:text-lg text-muted-light leading-relaxed max-w-lg mb-8">
            {{ $t('hero.subtitle') }}
          </p>

          <div class="flex flex-col sm:flex-row gap-3 mb-8">
            <a
              href="https://cal.com/szymon-bubala/30min"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center justify-center gap-2 bg-violet text-white font-bold px-7 py-4 rounded-xl hover:bg-violet-light transition-colors text-base"
            >
              {{ $t('hero.cta') }}
            </a>
            <a
              href="#services"
              class="inline-flex items-center justify-center border border-border text-muted-light px-7 py-4 rounded-xl hover:text-white hover:border-muted transition-colors text-base"
            >
              {{ $t('hero.ctaSecondary') }}
            </a>
          </div>

          <div class="flex items-center gap-3 text-sm text-muted mb-4">
            <div class="w-1.5 h-1.5 rounded-full bg-emerald" />
            {{ $t('hero.proof') }}
          </div>
          <div class="flex flex-wrap gap-3">
            <span v-for="(trust, i) in $tm('hero.trustIndicators')" :key="i" class="text-xs text-muted bg-card border border-border rounded-full px-3 py-1.5">
              {{ trust }}
            </span>
          </div>
        </div>

        <!-- Hero visual - Kite SVG -->
        <div class="hidden lg:flex justify-center items-end">
          <svg viewBox="0 0 500 520" fill="none" class="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="kTL" x1="195" y1="48" x2="272" y2="118" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#9333EA"/><stop offset="100%" stop-color="#7C3AED"/>
              </linearGradient>
              <linearGradient id="kTR" x1="272" y1="118" x2="340" y2="80" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#8B5CF6"/><stop offset="100%" stop-color="#6D28D9"/>
              </linearGradient>
              <linearGradient id="kBL" x1="200" y1="170" x2="272" y2="118" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#4C1D95"/><stop offset="100%" stop-color="#5B21B6"/>
              </linearGradient>
              <linearGradient id="storeGrad" x1="160" y1="340" x2="320" y2="460" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#13131C"/><stop offset="100%" stop-color="#0E0E18"/>
              </linearGradient>
              <filter id="glow"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            </defs>
            <ellipse cx="285" cy="120" rx="130" ry="90" fill="#7C3AED" opacity="0.09" filter="url(#glow)"/>
            <path d="M285 45 L195 88 L257 133 Z" fill="url(#kTL)" opacity="0.95"/>
            <path d="M285 45 L370 108 L257 133 Z" fill="url(#kTR)" opacity="0.95"/>
            <path d="M195 88 L260 195 L257 133 Z" fill="url(#kBL)" opacity="0.9"/>
            <path d="M370 108 L260 195 L257 133 Z" fill="#5B21B6" opacity="0.9"/>
            <path d="M285 45 L370 108 L260 195 L195 88 Z" stroke="rgba(167,139,250,0.35)" stroke-width="1.5" fill="none"/>
            <circle cx="285" cy="45" r="5" fill="#A78BFA" filter="url(#glow)"/>
            <circle cx="260" cy="195" r="5.5" fill="#10B981" filter="url(#glow)"/>
            <path d="M260 195 C255 215 245 228 252 246 C259 264 248 278 255 296 C262 314 250 326 258 344" stroke="#10B981" stroke-width="2.5" fill="none" opacity="0.75" stroke-linecap="round"/>
            <path d="M260 195 C280 240 310 275 280 310 C265 328 250 332 242 340" stroke="#A78BFA" stroke-width="2" fill="none" opacity="0.55" stroke-dasharray="6 5"/>
            <g transform="rotate(-3, 240, 400)">
              <rect x="170" y="348" width="136" height="104" rx="8" fill="url(#storeGrad)" stroke="#2A2A3E" stroke-width="1.5"/>
              <rect x="162" y="337" width="152" height="18" rx="5" fill="#1A1A2E" stroke="#2A2A3E" stroke-width="1.5"/>
              <rect x="168" y="338" width="11" height="16" rx="2" fill="#7C3AED" opacity="0.75"/>
              <rect x="183" y="338" width="11" height="16" rx="2" fill="#7C3AED" opacity="0.75"/>
              <rect x="198" y="338" width="11" height="16" rx="2" fill="#7C3AED" opacity="0.75"/>
              <rect x="213" y="338" width="11" height="16" rx="2" fill="#7C3AED" opacity="0.75"/>
              <rect x="228" y="338" width="11" height="16" rx="2" fill="#7C3AED" opacity="0.75"/>
              <rect x="243" y="338" width="11" height="16" rx="2" fill="#7C3AED" opacity="0.75"/>
              <rect x="258" y="338" width="11" height="16" rx="2" fill="#7C3AED" opacity="0.75"/>
              <rect x="273" y="338" width="11" height="16" rx="2" fill="#7C3AED" opacity="0.75"/>
              <rect x="288" y="338" width="11" height="16" rx="2" fill="#7C3AED" opacity="0.75"/>
              <rect x="184" y="364" width="30" height="24" rx="4" fill="#1A1A2E" stroke="#7C3AED" stroke-width="1"/>
              <rect x="264" y="364" width="30" height="24" rx="4" fill="#1A1A2E" stroke="#7C3AED" stroke-width="1"/>
              <rect x="217" y="402" width="44" height="50" rx="5" fill="#0A0A0F" stroke="#2A2A3E" stroke-width="1"/>
              <text x="239" y="361" text-anchor="middle" fill="#A78BFA" font-size="7" font-weight="700" font-family="sans-serif" opacity="0.8">MY STORE</text>
            </g>
            <circle cx="420" cy="58" r="5" fill="#10B981" opacity="0.85" filter="url(#glow)"/>
            <circle cx="82" cy="62" r="4" fill="#A78BFA" opacity="0.7" filter="url(#glow)"/>
            <g opacity="0.55">
              <path d="M440 400 L440 360 M434 368 L440 360 L446 368" stroke="#10B981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <text x="440" y="416" text-anchor="middle" fill="#10B981" font-size="11" font-weight="700" font-family="sans-serif">ROAS ↑</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <!-- Stats strip -->
    <div class="border-y border-border bg-card/60">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-8 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
        <div v-for="i in 4" :key="i" class="text-center">
          <div class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight bg-gradient-to-r from-violet-light to-emerald-light bg-clip-text text-transparent">
            {{ $t(`strip.val${i}`) }}
          </div>
          <div class="text-xs text-muted mt-1 max-w-[160px] mx-auto">{{ $t(`strip.label${i}`) }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
