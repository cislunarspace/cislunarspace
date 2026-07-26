import { onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';

export function useScrollReveal() {
  const router = useRouter();

  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    );

    const initReveal = () => {
      document
        .querySelectorAll(
          '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale',
        )
        .forEach((el) => {
          observer.observe(el);
        });
    };

    initReveal();

    const disconnect = watch(
      () => router.currentRoute.value.path,
      () => {
        setTimeout(initReveal, 300);
      },
    );

    return () => {
      disconnect();
      observer.disconnect();
    };
  });
}
