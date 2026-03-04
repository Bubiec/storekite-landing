<template>
  <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-16 py-20">
    <div class="bg-gradient-to-br from-violet/15 to-emerald/8 border border-violet/25 rounded-3xl p-10 sm:p-16 text-center">
      <h2 class="text-3xl sm:text-4xl font-black tracking-tight mb-4">{{ $t('cta.title') }}</h2>
      <p class="text-base text-muted-light max-w-lg mx-auto leading-relaxed mb-8">{{ $t('cta.subtitle') }}</p>
      <a
        href="https://cal.com/szymon-bubala/30min"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center justify-center bg-violet text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-violet-light transition-colors"
      >
        {{ $t('cta.button') }}
      </a>
      <p class="text-xs text-muted mt-4">{{ $t('cta.fine') }}</p>
    </div>
  </section>
</template>
