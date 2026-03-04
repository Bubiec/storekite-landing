<template>
  <div>
    <NavBar />
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-16 py-20">
      <h1 class="text-3xl sm:text-4xl font-black tracking-tight mb-2">{{ $t('terms.title') }}</h1>
      <p class="text-sm text-muted mb-12">{{ $t('terms.lastUpdated') }}</p>
      <div class="prose prose-invert prose-sm max-w-none space-y-6 text-muted-light leading-relaxed">
        <h2 class="text-xl font-bold text-white">1. Service Description</h2>
        <p>StoreKite provides AI-powered e-commerce store building services, including headless WooCommerce development, server-side tracking setup, and AI content pipeline configuration.</p>

        <h2 class="text-xl font-bold text-white">2. Service Agreement</h2>
        <p>Services are provided based on individual project agreements. Each project scope, timeline, and pricing is agreed upon during the discovery call and documented in a separate service agreement.</p>

        <h2 class="text-xl font-bold text-white">3. Payment Terms</h2>
        <p>Payment terms are specified in individual service agreements. Typical structure: 50% upfront, 50% on delivery. Monthly retainer fees are billed in advance.</p>

        <h2 class="text-xl font-bold text-white">4. Intellectual Property</h2>
        <p>Upon full payment, all custom code and configurations built for your project become your property. StoreKite retains the right to use anonymized case study data for marketing purposes.</p>

        <h2 class="text-xl font-bold text-white">5. Limitation of Liability</h2>
        <p>StoreKite provides services "as described" in individual agreements. We are not liable for indirect, incidental, or consequential damages. Total liability is limited to the amount paid for services.</p>

        <h2 class="text-xl font-bold text-white">6. Governing Law</h2>
        <p>These terms are governed by the laws of Poland. Any disputes shall be resolved by the competent courts in Poland.</p>

        <h2 class="text-xl font-bold text-white">7. Contact</h2>
        <p>For questions about these terms, contact us at hello@storekite.ai</p>
      </div>
    </div>
    <FooterBar />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
useHead({ title: `${t('terms.title')} — StoreKite` })

definePageMeta({ alias: ['/pl/regulamin'] })
</script>
