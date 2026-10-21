/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      colors: {
        surface: {
          DEFAULT: '#0b0d0e',
          card: '#1a1b1c',
          elevated: '#232326',
          subtle: '#151515',
          loading: '#0a0a0a',
          skeleton: '#18181b',
        },
        ink: {
          DEFAULT: '#ffffff',
          secondary: '#b3b3b3',
          tertiary: '#b4b4b4',
          muted: '#999999',
          faint: '#71767b',
          dim: '#666666',
          ghost: '#333333',
        },
        line: {
          DEFAULT: '#444444',
          hover: '#888888',
          subtle: 'rgba(255,255,255,0.1)',
          inset: '#ffffff14',
          insethi: '#ffffff33',
        },
        brand: {
          blue: '#3b82f6',
          bluehover: '#60a5fa',
          amber: '#f59e0b',
          green: '#22c55e',
          red: '#ef4444',
          yellow: '#fbbf24',
          discord: '#5865f2',
          discordhover: '#4752c4',
          discordgreen: '#23a559',
        },
        state: {
          active: '#02ff67',
          activebg: '#091d11',
          past: '#ff3333',
          pastbg: '#1d0909',
          future: '#ffaa00',
          futurebg: '#1d1509',
          role: '#4ade80',
        },
      },
      fontFamily: {
        body: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        ui: ['Figtree', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      borderRadius: {
        sm2: '2px',
        md2: '3px',
        lg2: '4px',
        xl2: '6px',
        '2xl2': '8px',
        '3xl2': '10px',
      },
      maxWidth: {
        shell: '700px',
      },
      boxShadow: {
        btn: '0px 32px 64px -16px #0006, 0px 16px 32px -8px #0006, 0px 8px 16px -4px #0004, 0px 4px 8px -2px #0004, 0px -8px 16px -1px #0003, 0px 2px 4px -1px #0004, 0px 0px 0px 1px #000, inset 0px 0px 0px 1px #ffffff14, inset 0px 1px 0px #ffffff33',
        'btn-hover': '0px 40px 80px -16px #0008, 0px 20px 40px -8px #0008, 0px 12px 20px -4px #0006, 0px 6px 12px -2px #0006, 0px -12px 20px -1px #0004, 0px 4px 8px -1px #0006, 0px 0px 0px 1px #000, inset 0px 0px 0px 1px #ffffff20, inset 0px 1px 0px #ffffff40',
        card: '0 2px 8px -4px #0006',
        sm2: '0px 4px 16px rgba(0,0,0,0.1)',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        material: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        'pulse-dot': { '0%, 100%': { opacity: 1 }, '50%': { opacity: 0.5 } },
        glow: {
          from: { textShadow: '0 0 20px rgba(255,255,255,0.1)' },
          to: { textShadow: '0 0 40px rgba(255,255,255,0.3)' },
        },
      },
      animation: {
        marquee: 'marquee 60s linear infinite',
        'marquee-reverse': 'marquee 60s linear infinite reverse',
        'pulse-dot': 'pulse-dot 1.2s infinite',
        glow: 'glow 3s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
};
