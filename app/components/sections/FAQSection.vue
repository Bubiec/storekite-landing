<template>
  <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-16 py-20">
    <p class="text-xs font-bold tracking-[3px] uppercase text-violet-light mb-4">{{ $t('faq.label') }}</p>
    <h2 class="text-3xl sm:text-4xl font-black tracking-tight leading-tight mb-12">{{ $t('faq.title') }}</h2>

    <div class="border border-border rounded-2xl overflow-hidden divide-y divide-border">
      <div v-for="(item, idx) in faqItems" :key="idx">
        <button
          class="w-full flex items-center justify-between px-7 py-6 text-left hover:bg-white/[0.02] transition-colors"
          @click="toggle(idx)"
        >
          <span class="text-base font-bold pr-4">{{ item.q }}</span>
          <span
            class="text-lg text-violet-light shrink-0 transition-transform duration-200"
            :class="{ 'rotate-45': openIdx === idx }"
          >+</span>
        </button>
        <div
          class="grid transition-all duration-300 ease-in-out"
          :class="openIdx === idx ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
        >
          <div class="overflow-hidden">
            <p class="px-7 pb-6 text-sm text-muted-light leading-relaxed">{{ item.a }}</p>
          </div>
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
