<template>
  <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 py-20">
    <p class="text-xs font-bold tracking-[3px] uppercase text-violet-light mb-4">{{ $t('testimonial.label') }}</p>

    <div class="bg-card border border-border rounded-3xl p-8 sm:p-12">
      <div class="grid md:grid-cols-[1fr_auto] gap-10 items-start">
        <div>
          <blockquote class="text-xl sm:text-2xl font-bold leading-relaxed tracking-tight mb-6">
            "{{ $t('testimonial.quote') }}"
          </blockquote>
          <div class="flex items-center gap-4 mb-8">
            <div class="w-12 h-12 rounded-full bg-gradient-to-br from-violet to-emerald flex items-center justify-center text-white font-bold text-sm">SB</div>
            <div>
              <div class="font-bold">{{ $t('testimonial.name') }}</div>
              <div class="text-sm text-muted">{{ $t('testimonial.role') }}</div>
            </div>
          </div>
        </div>

        <div class="flex gap-6 md:gap-8 flex-wrap">
          <div v-for="(stat, idx) in stats" :key="idx" class="text-center">
            <div class="text-3xl font-black tracking-tight" :class="idx % 2 === 0 ? 'text-violet-light' : 'text-emerald-light'">{{ stat.val }}</div>
            <div class="text-xs text-muted mt-1">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { tm } = useI18n()
const stats = computed(() => tm('testimonial.stats') as Array<{ val: string; label: string }>)
</script>
