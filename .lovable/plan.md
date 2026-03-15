

## Plan: Change Color Scheme to Black and Green

The current page uses a white background with soft green and warm orange accents. The user wants a **black and green** color scheme — dark/black backgrounds with green as the primary accent color, removing the orange.

### Changes

**1. `src/index.css` — Update CSS variables**
- **Background**: Change from white (`0 0% 100%`) to near-black (`0 0% 5%`)
- **Foreground**: Change to white/light (`0 0% 95%`)
- **Card**: Dark cards (`0 0% 8%`)
- **Muted**: Dark muted tones (`0 0% 12%`)
- **Accent**: Change from orange to a brighter green (`145 70% 50%`) or keep green as accent
- **Border**: Dark borders (`0 0% 15%`)
- **Gradients**: Update `--gradient-hero` to dark gradient, `--gradient-accent` to green tones
- **Shadows**: Adjust for dark theme with green glows
- Remove/replace all orange (`hsl(25...)`) references with green variants

**2. `src/components/landing/TopBar.tsx`** — Adjust colors (currently uses `bg-foreground text-background`, which will auto-adapt)

**3. `src/components/landing/HeroSection.tsx`** — Update any hardcoded orange/accent references to green

**4. `src/components/landing/FinalOfferSection.tsx`** — Update accent tag colors

**5. `src/components/landing/CountdownTimer.tsx`** — Verify colors adapt

**6. `src/components/landing/SocialProofPopup.tsx`** — Ensure popup cards use dark theme

**7. All section components** — Review and update any hardcoded `text-accent` or orange-specific styling to use green accent

The result will be a sleek dark landing page with green neon-style accents — similar to modern dark-mode startup pages.

