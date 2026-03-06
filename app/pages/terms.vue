<template>
  <div>
    <NavBar />
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-16 py-20">
      <h1 class="text-3xl sm:text-4xl font-black tracking-tight mb-2">{{ $t('terms.title') }}</h1>
      <p class="text-sm text-muted mb-12">{{ $t('terms.lastUpdated') }}</p>

      <div class="prose prose-invert prose-sm max-w-none space-y-8 text-muted-light leading-relaxed">

        <p class="text-base">{{ $t('terms.intro') }}</p>

        <!-- Section 1: General Information -->
        <section>
          <h2 class="text-xl font-bold text-white mt-10 mb-3">{{ $t('terms.s1_title') }}</h2>
          <p>{{ $t('terms.s1_p1') }}</p>
          <p class="mt-2">{{ $t('terms.s1_p2') }}</p>
        </section>

        <!-- Section 2: Scope of Services -->
        <section>
          <h2 class="text-xl font-bold text-white mt-10 mb-3">{{ $t('terms.s2_title') }}</h2>
          <p>{{ $t('terms.s2_intro') }}</p>
          <ul class="list-disc pl-6 space-y-1 mt-2">
            <li>{{ $t('terms.s2_li0') }}</li>
            <li>{{ $t('terms.s2_li1') }}</li>
            <li>{{ $t('terms.s2_li2') }}</li>
            <li>{{ $t('terms.s2_li3') }}</li>
            <li>{{ $t('terms.s2_li4') }}</li>
            <li>{{ $t('terms.s2_li5') }}</li>
          </ul>
          <p class="mt-3">{{ $t('terms.s2_note') }}</p>
        </section>

        <!-- Section 3: How We Work Together -->
        <section>
          <h2 class="text-xl font-bold text-white mt-10 mb-3">{{ $t('terms.s3_title') }}</h2>

          <p class="font-semibold text-white mt-4">{{ $t('terms.s3_discovery_title') }}</p>
          <p>{{ $t('terms.s3_discovery_body') }}</p>

          <p class="font-semibold text-white mt-4">{{ $t('terms.s3_agreement_title') }}</p>
          <p>{{ $t('terms.s3_agreement_body') }}</p>

          <p class="font-semibold text-white mt-4">{{ $t('terms.s3_communication_title') }}</p>
          <p>{{ $t('terms.s3_communication_body') }}</p>

          <p class="font-semibold text-white mt-4">{{ $t('terms.s3_revisions_title') }}</p>
          <p>{{ $t('terms.s3_revisions_body') }}</p>
        </section>

        <!-- Section 4: Pricing & Payment -->
        <section>
          <h2 class="text-xl font-bold text-white mt-10 mb-3">{{ $t('terms.s4_title') }}</h2>

          <p class="font-semibold text-white mt-4">{{ $t('terms.s4_pricing_title') }}</p>
          <p>{{ $t('terms.s4_pricing_body') }}</p>

          <p class="font-semibold text-white mt-4">{{ $t('terms.s4_structure_title') }}</p>
          <ul class="list-disc pl-6 space-y-1 mt-2">
            <li>{{ $t('terms.s4_li0') }}</li>
            <li>{{ $t('terms.s4_li1') }}</li>
            <li>{{ $t('terms.s4_li2') }}</li>
          </ul>

          <p class="font-semibold text-white mt-4">{{ $t('terms.s4_terms_title') }}</p>
          <p>{{ $t('terms.s4_terms_body') }}</p>

          <p class="font-semibold text-white mt-4">{{ $t('terms.s4_cancel_title') }}</p>
          <p>{{ $t('terms.s4_cancel_intro') }}</p>
          <ul class="list-disc pl-6 space-y-1 mt-2">
            <li>{{ $t('terms.s4_cancel_li0') }}</li>
            <li>{{ $t('terms.s4_cancel_li1') }}</li>
            <li>{{ $t('terms.s4_cancel_li2') }}</li>
          </ul>
        </section>

        <!-- Section 5: Intellectual Property -->
        <section>
          <h2 class="text-xl font-bold text-white mt-10 mb-3">{{ $t('terms.s5_title') }}</h2>

          <p class="font-semibold text-white mt-4">{{ $t('terms.s5_yours_title') }}</p>
          <p>{{ $t('terms.s5_yours_body') }}</p>

          <p class="font-semibold text-white mt-4">{{ $t('terms.s5_ours_title') }}</p>
          <p>{{ $t('terms.s5_ours_body') }}</p>

          <p class="font-semibold text-white mt-4">{{ $t('terms.s5_portfolio_title') }}</p>
          <p>{{ $t('terms.s5_portfolio_body') }}</p>
        </section>

        <!-- Section 6: Limitation of Liability -->
        <section>
          <h2 class="text-xl font-bold text-white mt-10 mb-3">{{ $t('terms.s6_title') }}</h2>
          <p>{{ $t('terms.s6_p1') }}</p>
          <p class="mt-2">{{ $t('terms.s6_intro') }}</p>
          <ul class="list-disc pl-6 space-y-1 mt-2">
            <li>{{ $t('terms.s6_li0') }}</li>
            <li>{{ $t('terms.s6_li1') }}</li>
            <li>{{ $t('terms.s6_li2') }}</li>
          </ul>
        </section>

        <!-- Section 7: Warranty & Support -->
        <section>
          <h2 class="text-xl font-bold text-white mt-10 mb-3">{{ $t('terms.s7_title') }}</h2>
          <p>{{ $t('terms.s7_provides_title') }}</p>
          <ul class="list-disc pl-6 space-y-1 mt-2">
            <li>{{ $t('terms.s7_li0') }}</li>
            <li>{{ $t('terms.s7_li1') }}</li>
          </ul>
          <p class="mt-3">{{ $t('terms.s7_after') }}</p>
        </section>

        <!-- Section 8: Complaints -->
        <section>
          <h2 class="text-xl font-bold text-white mt-10 mb-3">{{ $t('terms.s8_title') }}</h2>
          <p>{{ $t('terms.s8_intro') }}</p>
          <ol class="list-decimal pl-6 space-y-1 mt-2">
            <li>{{ $t('terms.s8_li0') }}</li>
            <li>{{ $t('terms.s8_li1') }}</li>
            <li>{{ $t('terms.s8_li2') }}</li>
            <li>{{ $t('terms.s8_li3') }}</li>
          </ol>
        </section>

        <!-- Section 9: Governing Law -->
        <section>
          <h2 class="text-xl font-bold text-white mt-10 mb-3">{{ $t('terms.s9_title') }}</h2>
          <p>{{ $t('terms.s9_p1') }}</p>
          <p class="mt-2">{{ $t('terms.s9_b2c') }}</p>
          <p class="mt-2">{{ $t('terms.s9_b2b') }}</p>
        </section>

        <!-- Section 10: Changes -->
        <section>
          <h2 class="text-xl font-bold text-white mt-10 mb-3">{{ $t('terms.s10_title') }}</h2>
          <p>{{ $t('terms.s10_body') }}</p>
        </section>

        <!-- Section 11: Contact -->
        <section>
          <h2 class="text-xl font-bold text-white mt-10 mb-3">{{ $t('terms.s11_title') }}</h2>
          <p>{{ $t('terms.s11_body') }}</p>
          <p class="mt-1">{{ $t('terms.s11_email') }}</p>
          <p class="mt-1">{{ $t('terms.s11_website') }}</p>
        </section>

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
