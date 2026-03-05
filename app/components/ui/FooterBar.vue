<template>
  <footer class="border-t border-border">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
      <NuxtLink :to="localePath('/')" class="flex items-center gap-2 text-white font-bold">
        <KiteLogo :size="20" />
        StoreKite
      </NuxtLink>
      <div class="flex gap-4">
        <NuxtLink :to="localePath('/privacy')" class="hover:text-white transition-colors">{{ $t('footer.privacy') }}</NuxtLink>
        <NuxtLink :to="localePath('/terms')" class="hover:text-white transition-colors">{{ $t('footer.terms') }}</NuxtLink>
      </div>
      <div class="text-center sm:text-right">
        <div>{{ $t('footer.builtIn') }} · {{ $t('footer.copyright') }}</div>
        <div class="text-xs text-muted/60 mt-1">Built with Nuxt & Tailwind</div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>
