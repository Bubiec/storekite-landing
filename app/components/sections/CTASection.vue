<template>
  <section id="cta" class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-16 py-20">
    <div class="bg-gradient-to-br from-violet/15 to-emerald/8 border border-violet/25 rounded-3xl p-10 sm:p-16 text-center">
      <h2 class="text-3xl sm:text-4xl font-black tracking-tight mb-4">{{ $t('cta.title') }}</h2>
      <p class="text-base text-muted-light max-w-lg mx-auto leading-relaxed mb-8">{{ $t('cta.subtitle') }}</p>

      <!-- Cal.com embed -->
      <div id="cal-embed" class="w-full rounded-xl overflow-hidden mb-6" style="min-height: 700px;" />

      <p class="text-xs text-muted mt-4">{{ $t('cta.fine') }}</p>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://app.cal.com/embed/embed.js'
  script.onload = () => {
    Cal("init", { origin: "https://cal.com" })
    Cal("inline", {
      elementOrSelector: "#cal-embed",
      calLink: "szymon-bubala/30min",
      config: { theme: "dark" }
    })
  }
  document.head.appendChild(script)
})
</script>
