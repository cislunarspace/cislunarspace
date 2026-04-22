<template>
  <footer class="site-footer">
    <!-- Main Footer Content -->
    <div class="footer-main">
      <div class="footer-container">
        <!-- Branding Column -->
        <div class="footer-branding">
          <div class="footer-logo">
            <svg class="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="12" r="10"/>
              <circle cx="12" cy="12" r="4"/>
              <path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>
            </svg>
            <div class="logo-text">
              <span class="logo-name">{{ isEn ? branding.nameEn : branding.nameZh }}</span>
              <span class="logo-tagline">{{ isEn ? branding.taglineEn : branding.tagline }}</span>
            </div>
          </div>
          <a :href="githubLink.href" target="_blank" rel="noopener noreferrer" class="join-btn">
            <span>{{ isEn ? 'View on GitHub' : '在 GitHub 查看' }}</span>
            <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </a>
        </div>

        <!-- Navigation Columns -->
        <div v-for="(section, idx) in sections" :key="idx" class="footer-nav-col">
          <h4 class="nav-col-title">{{ isEn ? section.titleEn : section.title }}</h4>
          <ul class="nav-links">
            <li v-for="(link, linkIdx) in section.links" :key="linkIdx">
              <a :href="link.href" class="nav-link">{{ link.labelEn && !isEn ? link.labelEn : link.label }}</a>
            </li>
          </ul>
        </div>

        <!-- Social Column -->
        <div class="footer-social-col">
          <h4 class="nav-col-title">{{ isEn ? 'Follow Us' : '关注我们' }}</h4>
          <div class="social-links">
            <a v-for="(social, idx) in socials" :key="idx" :href="social.href" target="_blank" rel="noopener noreferrer" class="social-link" :title="social.label">
              <svg v-if="social.icon === 'github'" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <svg v-else-if="social.icon === 'twitter'" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Utility Bar -->
    <div class="footer-utility">
      <div class="footer-container utility-content">
        <span class="copyright">
          © {{ currentYear }} {{ isEn ? branding.nameEn : branding.nameZh }} &nbsp;|&nbsp;
          <a :href="copyright.href" target="_blank" rel="noopener noreferrer">{{ copyright.name }}</a>
        </span>
        <div class="friend-links">
          <span class="friend-links-label">{{ isEn ? 'Related:' : '友情链接:' }}</span>
          <a v-for="(link, idx) in friendLinks" :key="idx" :href="link.href" target="_blank" rel="noopener noreferrer" class="friend-link">
            {{ link.label }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import footerConfig from '../../footer'
import { useIsEn } from '../composables/useIsEn'

const isEn = useIsEn()
const branding = footerConfig.branding
const sections = footerConfig.sections
const socials = footerConfig.social
const friendLinks = footerConfig.friendLinks
const copyright = footerConfig.copyright
const githubLink = socials.find(s => s.icon === 'github') || { href: '#', label: 'GitHub' }
const currentYear = String(new Date().getFullYear())
</script>

<style lang="scss">
.site-footer {
  --footer-bg: #0a0a0f;
  --footer-bg-gradient: linear-gradient(180deg, #0f0f14 0%, #0a0a0f 100%);
  --footer-border: rgba(255, 255, 255, 0.08);
  --footer-text: rgba(255, 255, 255, 0.7);
  --footer-text-muted: rgba(255, 255, 255, 0.4);
  --footer-accent: #e63946;
  --footer-accent-hover: #ff4757;

  background: var(--footer-bg);
  color: var(--footer-text);
  margin-top: auto;
}

.footer-main {
  background: var(--footer-bg-gradient);
  padding: 4rem 0 3rem;
  border-bottom: 1px solid var(--footer-border);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1.5fr repeat(3, 1fr) 1fr;
  gap: 3rem;
}

.footer-branding {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.footer-logo {
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
}

.logo-icon {
  width: 2.5rem;
  height: 2.5rem;
  color: var(--footer-accent);
  flex-shrink: 0;
}

.logo-text {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.logo-name {
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  line-height: 1.3;
}

.logo-tagline {
  font-size: 0.8rem;
  color: var(--footer-text-muted);
}

.join-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--footer-text);
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s;

  &:hover {
    color: var(--footer-accent);
  }

  .arrow-icon {
    width: 1rem;
    height: 1rem;
    transition: transform 0.2s;
  }

  &:hover .arrow-icon {
    transform: translate(2px, -2px);
  }
}

.footer-nav-col {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.nav-col-title {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #fff;
  margin: 0;
}

.nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.nav-link {
  color: var(--footer-text-muted);
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s;

  &:hover {
    color: var(--footer-accent);
  }
}

.footer-social-col {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.social-links {
  display: flex;
  gap: 0.75rem;
}

.social-link {
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--footer-text-muted);
  transition: all 0.2s;

  svg {
    width: 1.125rem;
    height: 1.125rem;
  }

  &:hover {
    background: var(--footer-accent);
    color: #fff;
  }
}

.footer-utility {
  background: rgba(0, 0, 0, 0.3);
  padding: 1.25rem 0;
}

.utility-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.copyright {
  font-size: 0.8rem;
  color: var(--footer-text-muted);

  a {
    color: var(--footer-text-muted);
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: var(--footer-accent);
    }
  }
}

.friend-links {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.friend-links-label {
  font-size: 0.75rem;
  color: var(--footer-text-muted);
}

.friend-link {
  font-size: 0.75rem;
  color: var(--footer-text-muted);
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: var(--footer-accent);
  }

  &:not(:last-child)::after {
    content: '·';
    margin-left: 1rem;
    color: var(--footer-border);
  }
}

@media (max-width: 1024px) {
  .footer-container {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .footer-branding {
    grid-column: 1 / -1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

@media (max-width: 640px) {
  .footer-main {
    padding: 3rem 0 2rem;
  }

  .footer-container {
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  .footer-branding {
    grid-column: 1 / -1;
    flex-direction: column;
    align-items: flex-start;
  }

  .footer-social-col {
    grid-column: 1 / -1;
  }

  .utility-content {
    flex-direction: column;
    text-align: center;
  }
}
</style>
