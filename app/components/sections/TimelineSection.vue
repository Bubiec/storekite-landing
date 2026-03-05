<template>
  <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 py-20">
    <p class="text-xs font-bold tracking-[3px] uppercase text-violet-light mb-4">{{ $t('timeline.label') }}</p>
    <h2 class="text-3xl sm:text-4xl font-black tracking-tight leading-tight mb-4">{{ $t('timeline.title') }}</h2>
    <p class="text-base text-muted-light max-w-lg leading-relaxed mb-12">{{ $t('timeline.subtitle') }}</p>

    <div class="relative">
      <!-- Vertical line -->
      <div class="hidden md:block absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-violet via-emerald to-transparent" />

      <div class="space-y-8">
        <div
          v-for="idx in 4"
          :key="idx"
          class="relative md:pl-16"
        >
          <!-- Dot on line -->
          <div
            class="hidden md:block absolute left-4 top-7 w-4 h-4 rounded-full border-2"
            :class="idx < 3 ? 'border-violet bg-violet/20' : 'border-emerald bg-emerald/20'"
          />

          <div class="bg-card border border-border rounded-2xl p-6 sm:p-8">
            <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
              <span class="text-xs font-bold tracking-[2px] uppercase" :class="idx < 3 ? 'text-violet-light' : 'text-emerald-light'">
                {{ $t(`timeline.week${idx - 1}_week`) }}
              </span>
              <h3 class="text-lg font-extrabold tracking-tight">{{ $t(`timeline.week${idx - 1}_title`) }}</h3>
            </div>
            <p class="text-sm text-muted-light leading-relaxed">{{ $t(`timeline.week${idx - 1}_description`) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
