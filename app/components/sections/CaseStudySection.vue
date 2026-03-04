<template>
  <section id="case-study" class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 py-20">
    <p class="text-xs font-bold tracking-[3px] uppercase text-violet-light mb-4">{{ $t('caseStudy.label') }}</p>
    <h2 class="text-3xl sm:text-4xl font-black tracking-tight leading-tight mb-4">{{ $t('caseStudy.title') }}</h2>
    <p class="text-base text-muted-light max-w-lg leading-relaxed mb-12">{{ $t('caseStudy.subtitle') }}</p>

    <div class="bg-card border border-border rounded-3xl p-8 sm:p-12">
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div v-for="key in ['tracking', 'speed', 'content', 'timeline']" :key="key" class="bg-bg border border-border rounded-xl p-5 text-center">
          <div class="text-3xl font-black text-muted tracking-tight mb-1">—</div>
          <div class="text-xs text-muted">{{ $t(`caseStudy.metrics.${key}`) }}</div>
        </div>
      </div>
      <div class="text-center">
        <div class="inline-flex items-center gap-2 bg-violet/10 border border-violet/20 text-violet-light text-sm font-semibold px-6 py-3 rounded-full">
          📊 {{ $t('caseStudy.placeholder') }}
        </div>
      </div>
    </div>
  </section>
</template>
