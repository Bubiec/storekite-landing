<template>
  <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-16 py-20">
    <div class="bg-card border border-border rounded-3xl p-6 sm:p-10">
      <p class="text-xs font-bold tracking-[3px] uppercase text-violet-light mb-4">{{ $t('roi.label') }}</p>
      <h2 class="text-2xl sm:text-3xl font-black tracking-tight mb-2">{{ $t('roi.title') }}</h2>
      <p class="text-sm text-muted-light mb-8">{{ $t('roi.subtitle') }}</p>

      <!-- Input -->
      <div class="mb-8">
        <label class="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">
          {{ $t('roi.inputLabel') }}
        </label>
        <input
          v-model.number="revenue"
          type="number"
          :placeholder="$t('roi.inputPlaceholder')"
          class="w-full max-w-sm bg-bg border border-border rounded-lg px-4 py-3 text-xl font-bold text-white focus:border-violet focus:outline-none transition-colors"
        >
      </div>

      <!-- Results -->
      <div v-if="revenue > 0" class="border-t border-border pt-8 space-y-6">
        <h3 class="text-lg font-bold text-white">{{ $t('roi.resultTitle') }}</h3>

        <div class="grid sm:grid-cols-3 gap-4">
          <!-- Tracking uplift -->
          <div class="bg-bg border border-border rounded-xl p-5">
            <div class="text-2xl sm:text-3xl font-black text-emerald-light tracking-tight">
              +{{ formatPLN(trackingUplift) }}
            </div>
            <div class="text-xs text-muted mt-1">{{ $t('roi.trackingUplift') }}</div>
            <p class="text-xs text-muted-light mt-3 leading-relaxed">{{ $t('roi.trackingDesc') }}</p>
          </div>

          <!-- Content uplift -->
          <div class="bg-bg border border-border rounded-xl p-5">
            <div class="text-2xl sm:text-3xl font-black text-violet-light tracking-tight">
              +{{ formatPLN(contentUplift) }}
            </div>
            <div class="text-xs text-muted mt-1">{{ $t('roi.contentUplift') }}</div>
            <p class="text-xs text-muted-light mt-3 leading-relaxed">{{ $t('roi.contentDesc') }}</p>
          </div>

          <!-- Total -->
          <div class="bg-emerald/5 border border-emerald/20 rounded-xl p-5">
            <div class="text-2xl sm:text-3xl font-black text-emerald-light tracking-tight">
              +{{ formatPLN(totalUplift) }}
            </div>
            <div class="text-xs text-emerald mt-1 font-semibold">{{ $t('roi.totalUplift') }}</div>
            <p class="text-xs text-muted-light mt-3 leading-relaxed">/{{ $t('roi.inputLabel').toLowerCase() }}</p>
          </div>
        </div>
      </div>

      <p class="text-[11px] text-muted italic mt-6 text-center leading-relaxed">{{ $t('roi.disclaimer') }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
const revenue = ref(100000)

const trackingUplift = computed(() => Math.round(revenue.value * 0.20))
const contentUplift = computed(() => Math.round(revenue.value * 0.04))
const totalUplift = computed(() => trackingUplift.value + contentUplift.value)

function formatPLN(val: number): string {
  return new Intl.NumberFormat('pl-PL').format(val) + ' zł'
}
</script>
