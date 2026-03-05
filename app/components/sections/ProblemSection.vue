<template>
  <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 py-20">
    <p class="text-xs font-bold tracking-[3px] uppercase text-violet-light mb-4">{{ $t('problem.label') }}</p>
    <h2 class="text-3xl sm:text-4xl font-black tracking-tight leading-tight mb-4">
      {{ $t('problem.title1') }}<br>{{ $t('problem.title2') }}
    </h2>
    <p class="text-base text-muted-light max-w-lg leading-relaxed mb-12">{{ $t('problem.subtitle') }}</p>

    <div class="grid md:grid-cols-3 gap-4">
      <div
        v-for="(card, idx) in cards"
        :key="idx"
        class="bg-card border border-border rounded-2xl p-7"
      >
        <div class="text-4xl font-black tracking-tight text-red-400 mb-2">{{ card.num }}</div>
        <h3 class="text-base font-bold mb-2">{{ card.title }}</h3>
        <p class="text-sm text-muted-light leading-relaxed">{{ card.desc }}</p>
      </div>
    </div>

    <!-- Savings callout -->
    <div class="mt-5 bg-emerald/5 border border-emerald/20 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <div class="text-3xl font-black text-emerald-light tracking-tight whitespace-nowrap">{{ $t('problem.savingsNum') }}</div>
      <p class="text-sm text-muted-light leading-relaxed">{{ $t('problem.savingsDesc') }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
const { tm } = useI18n()
const cards = computed(() => tm('problem.cards') as Array<{ num: string; title: string; desc: string }>)
</script>
