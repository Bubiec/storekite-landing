<template>
  <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-16 py-20">
    <p class="text-xs font-bold tracking-[3px] uppercase text-violet-light mb-4">{{ $t('faq.label') }}</p>
    <h2 class="text-3xl sm:text-4xl font-black tracking-tight leading-tight mb-12">{{ $t('faq.title') }}</h2>

    <div class="space-y-3">
      <div
        v-for="(item, idx) in faqItems"
        :key="idx"
        class="bg-card border border-border rounded-2xl overflow-hidden"
      >
        <button
          class="w-full flex items-center justify-between p-6 text-left hover:bg-card2 transition-colors"
          @click="toggle(idx)"
        >
          <span class="text-base font-bold pr-4">{{ item.q }}</span>
          <svg
            class="w-5 h-5 text-muted shrink-0 transition-transform duration-200"
            :class="{ 'rotate-180': openIdx === idx }"
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
        <div v-if="openIdx === idx" class="px-6 pb-6">
          <p class="text-sm text-muted-light leading-relaxed">{{ item.a }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { tm } = useI18n()
const faqItems = computed(() => tm('faq.items') as Array<{ q: string; a: string }>)
const openIdx = ref<number | null>(null)
function toggle(idx: number) {
  openIdx.value = openIdx.value === idx ? null : idx
}
</script>
