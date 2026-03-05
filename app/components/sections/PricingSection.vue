<template>
  <section id="pricing" class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 py-20">
    <p class="text-xs font-bold tracking-[3px] uppercase text-violet-light mb-4">{{ $t('pricing.label') }}</p>
    <h2 class="text-3xl sm:text-4xl font-black tracking-tight leading-tight mb-4">{{ $t('pricing.title') }}</h2>
    <p class="text-base text-muted-light max-w-lg leading-relaxed mb-12">{{ $t('pricing.subtitle') }}</p>

    <div class="grid md:grid-cols-2 gap-6">
      <!-- Growth Store -->
      <div class="relative bg-card border-2 border-violet rounded-2xl p-8 sm:p-10">
        <span class="absolute -top-3.5 left-8 bg-violet text-white text-[11px] font-extrabold px-4 py-1 rounded-full uppercase tracking-widest">
          {{ $t('pricing.growth.badge') }}
        </span>
        <h3 class="text-2xl font-black tracking-tight mb-2">{{ $t('pricing.growth.name') }}</h3>
        <p class="text-sm text-muted-light leading-relaxed mb-6">{{ $t('pricing.growth.desc') }}</p>
        <div class="text-4xl sm:text-5xl font-black tracking-tight mb-1">{{ $t('pricing.growth.price') }}</div>
        <div class="text-sm text-muted mb-1">{{ $t('pricing.growth.priceSub') }}</div>
        <div class="text-sm text-emerald-light font-semibold mb-6">{{ $t('pricing.growth.timeline') }}</div>

        <ul class="space-y-3 mb-8 pb-6 border-b border-border">
          <li
            v-for="(feat, fi) in $tm('pricing.growth.features')"
            :key="fi"
            class="text-sm text-muted-light flex items-start gap-2.5"
          >
            <span class="text-emerald-light font-bold">✓</span>
            {{ feat }}
          </li>
        </ul>

        <a
          href="#cta"
          class="block w-full text-center bg-emerald text-white font-bold px-6 py-3.5 rounded-full hover:bg-emerald-light transition-colors"
        >
          {{ $t('pricing.growth.cta') }}
        </a>
      </div>

      <!-- AI Store -->
      <div class="bg-card border border-border rounded-2xl p-8 sm:p-10">
        <h3 class="text-2xl font-black tracking-tight mb-2">{{ $t('pricing.ai.name') }}</h3>
        <p class="text-sm text-muted-light leading-relaxed mb-6">{{ $t('pricing.ai.desc') }}</p>
        <div class="text-4xl sm:text-5xl font-black tracking-tight mb-1">{{ $t('pricing.ai.price') }}</div>
        <div class="text-sm text-muted mb-1">{{ $t('pricing.ai.priceSub') }}</div>
        <div class="text-sm text-emerald-light font-semibold mb-6">{{ $t('pricing.ai.timeline') }}</div>

        <ul class="space-y-3 mb-8 pb-6 border-b border-border">
          <li
            v-for="(feat, fi) in $tm('pricing.ai.features')"
            :key="fi"
            class="text-sm text-muted-light flex items-start gap-2.5"
          >
            <span class="text-emerald-light font-bold">✓</span>
            {{ feat }}
          </li>
        </ul>

        <a
          href="#cta"
          class="block w-full text-center bg-emerald text-white font-bold px-6 py-3.5 rounded-full hover:bg-emerald-light transition-colors"
        >
          {{ $t('pricing.ai.cta') }}
        </a>
      </div>
    </div>
  </section>
</template>
