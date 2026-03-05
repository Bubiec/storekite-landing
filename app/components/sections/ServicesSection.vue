<template>
  <section id="services" class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 py-20">
    <p class="text-xs font-bold tracking-[3px] uppercase text-violet-light mb-4">{{ $t('services.label') }}</p>
    <h2 class="text-3xl sm:text-4xl font-black tracking-tight leading-tight mb-4">{{ $t('services.title') }}</h2>
    <p class="text-base text-muted-light max-w-lg leading-relaxed mb-12">{{ $t('services.subtitle') }}</p>

    <div class="grid md:grid-cols-3 gap-5">
      <div
        v-for="(key, idx) in ['tracking', 'performance', 'ai']"
        :key="key"
        class="relative bg-card border border-violet/20 rounded-2xl p-7 overflow-hidden transition-all duration-300 hover:border-violet/50 hover:shadow-[0_0_30px_-5px_rgba(124,58,237,0.15)]"
      >
        <!-- Top accent bar -->
        <div
          class="absolute top-0 left-0 right-0 h-0.5"
          :class="idx === 0 ? 'bg-violet' : idx === 1 ? 'bg-emerald' : 'bg-gradient-to-r from-violet to-emerald'"
        />

        <p class="text-[11px] font-bold tracking-[2px] uppercase text-muted mb-5">
          {{ $t(`services.${key}.number`) }} — {{ $t(`services.${key}.name`) }}
        </p>
        <h3 class="text-xl font-extrabold tracking-tight mb-3">{{ $t(`services.${key}.title`) }}</h3>
        <p class="text-sm text-muted-light leading-relaxed mb-5">{{ $t(`services.${key}.description`) }}</p>

        <ul class="space-y-2">
          <li
            v-for="fi in 4"
            :key="fi"
            class="text-sm text-muted-light flex items-start gap-2"
          >
            <span :class="idx === 1 ? 'text-emerald-light' : 'text-violet-light'" class="font-bold">→</span>
            {{ $t(`services.${key}.feat${fi - 1}`) }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
