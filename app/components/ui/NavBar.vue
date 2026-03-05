<template>
  <nav class="sticky top-0 z-50 border-b border-border bg-bg/92 backdrop-blur-xl">
    <div class="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-16 py-4">
      <NuxtLink :to="localePath('/')" class="flex items-center gap-2.5 text-lg font-bold tracking-tight">
        <KiteLogo :size="26" />
        StoreKite
      </NuxtLink>

      <!-- Desktop nav -->
      <div class="hidden md:flex items-center gap-8">
        <a href="#services" class="text-sm text-muted-light hover:text-white transition-colors">{{ $t('nav.services') }}</a>
        <a href="#case-study" class="text-sm text-muted-light hover:text-white transition-colors">{{ $t('nav.caseStudy') }}</a>

        <!-- Language switcher -->
        <NuxtLink
          v-for="loc in availableLocales"
          :key="loc.code"
          :to="switchLocalePath(loc.code)"
          class="text-sm text-muted hover:text-white transition-colors uppercase"
        >
          {{ loc.code }}
        </NuxtLink>

        <a
          href="#cta"
          class="bg-emerald text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-emerald-light transition-colors"
        >
          {{ $t('nav.discoveryCta') }}
        </a>
      </div>

      <!-- Mobile hamburger -->
      <button class="md:hidden text-white" @click="mobileOpen = !mobileOpen" aria-label="Menu">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path v-if="!mobileOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <div v-if="mobileOpen" class="md:hidden border-t border-border bg-bg px-4 pb-4 space-y-3">
      <a href="#services" class="block text-sm text-muted-light py-2" @click="mobileOpen = false">{{ $t('nav.services') }}</a>
      <a href="#case-study" class="block text-sm text-muted-light py-2" @click="mobileOpen = false">{{ $t('nav.caseStudy') }}</a>
      <div class="flex gap-3">
        <NuxtLink
          v-for="loc in availableLocales"
          :key="loc.code"
          :to="switchLocalePath(loc.code)"
          class="text-sm text-muted uppercase"
        >
          {{ loc.code }}
        </NuxtLink>
      </div>
      <a
        href="https://cal.com/szymon-bubala/30min"
        target="_blank"
        rel="noopener"
        class="block text-center bg-emerald text-white text-sm font-semibold px-5 py-3 rounded-full"
      >
        {{ $t('nav.discoveryCta') }}
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { locale, locales } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const mobileOpen = ref(false)
const availableLocales = computed(() =>
  (locales.value as Array<{ code: string; name: string }>).filter(l => l.code !== locale.value)
)
</script>
