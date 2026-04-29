<script lang="ts">
  import type { Project } from '../data/projects'

  let { projects = [] }: { projects: Project[] } = $props()

  let dialog = $state<HTMLDialogElement | null>(null)
  let active = $state<Project | null>(null)

  function openModal(index: number) {
    active = projects[index] ?? null
    dialog?.showModal()
    document.body.style.overflow = 'hidden'
  }

  function closeModal() {
    dialog?.close()
    document.body.style.overflow = ''
  }

  $effect(() => {
    const onOpen = (e: Event) => openModal((e as CustomEvent).detail)
    window.addEventListener('open-project', onOpen)
    return () => window.removeEventListener('open-project', onOpen)
  })
</script>

<dialog
  bind:this={dialog}
  onclose={closeModal}
  onclick={(e) => { if (e.target === dialog) closeModal() }}
>
  {#if active}
    <div class="modal-inner">

      <button class="close-btn" onclick={closeModal} aria-label="Close">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>

      <!-- Hero -->
      <div class="hero-row">
        <div>
          <span class="category-badge">{active.category}</span>
          <h2 class="modal-title">{active.name}</h2>
          <p class="modal-tagline">{active.tagline}</p>
        </div>
        <div class="metric-block">
          <div class="modal-metric">{active.metric}</div>
          <div class="modal-metric-label">{active.metricLabel}</div>
        </div>
      </div>

      <div class="divider"></div>

      <p class="modal-desc">{active.description}</p>

      <!-- Highlights -->
      <div class="section">
        <h3 class="section-title">Key Achievements</h3>
        <ul class="highlights-grid">
          {#each active.highlights as highlight}
            <li class="highlight-item">
              <span class="check">&#10003;</span>
              <span>{highlight}</span>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Stack -->
      <div class="section">
        <h3 class="section-title">Tech Stack</h3>
        <div class="stack-wrap">
          {#each active.stack as tech}
            <span class="stack-pill">{tech}</span>
          {/each}
        </div>
      </div>

      <!-- CTAs -->
      <div class="cta-row">
        <a href={active.githubUrl} target="_blank" rel="noopener" class="cta-primary">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"/></svg>
          View on GitHub
        </a>
        <a href={active.downloadUrl ?? active.githubUrl} target="_blank" rel="noopener" class="cta-ghost">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Download ZIP
        </a>
      </div>

    </div>
  {/if}
</dialog>

<style>
  dialog {
    position: fixed;
    inset: 0;
    margin: auto;
    width: calc(100% - 2rem);
    max-width: 680px;
    max-height: 88vh;
    overflow-y: auto;
    border: none;
    padding: 0;
    background: rgba(12, 10, 9, 0.92);
    border-radius: 20px;
    border: 1px solid rgba(250, 247, 242, 0.1);
    box-shadow:
      0 32px 64px rgba(0, 0, 0, 0.7),
      inset 0 1px 0 rgba(250, 247, 242, 0.07);
    color: #faf7f2;
    scrollbar-width: none;
  }
  dialog::-webkit-scrollbar { display: none; }
  dialog::backdrop {
    background: rgba(8, 8, 8, 0.85);
    backdrop-filter: blur(12px);
  }

  .modal-inner {
    padding: 2rem;
    position: relative;
  }

  .close-btn {
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;
    background: rgba(250, 247, 242, 0.06);
    border: 1px solid rgba(250, 247, 242, 0.1);
    border-radius: 8px;
    padding: 6px;
    color: rgba(250, 247, 242, 0.45);
    cursor: pointer;
    transition: color 0.15s, background 0.15s;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .close-btn:hover {
    color: #faf7f2;
    background: rgba(250, 247, 242, 0.1);
  }

  .hero-row {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 1.5rem;
    align-items: start;
    margin-bottom: 1.5rem;
    padding-right: 2.5rem;
  }

  .category-badge {
    display: inline-block;
    font-family: ui-monospace, monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    padding: 3px 10px;
    border-radius: 99px;
    background: rgba(234, 88, 12, 0.15);
    color: #f97316;
    border: 1px solid rgba(234, 88, 12, 0.3);
    margin-bottom: 0.75rem;
  }

  .modal-title {
    font-size: 1.5rem;
    font-weight: 900;
    letter-spacing: -0.02em;
    color: #faf7f2;
    line-height: 1.2;
    margin-bottom: 0.4rem;
  }

  .modal-tagline {
    font-size: 13px;
    color: rgba(250, 247, 242, 0.45);
    line-height: 1.5;
  }

  .metric-block {
    text-align: right;
    flex-shrink: 0;
  }

  .modal-metric {
    font-size: clamp(2.2rem, 5vw, 3rem);
    font-weight: 900;
    letter-spacing: -0.03em;
    line-height: 1;
    color: #f97316;
  }

  .modal-metric-label {
    font-family: ui-monospace, monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: rgba(250, 247, 242, 0.3);
    margin-top: 6px;
  }

  .divider {
    height: 1px;
    background: rgba(250, 247, 242, 0.07);
    margin-bottom: 1.25rem;
  }

  .modal-desc {
    font-size: 13px;
    line-height: 1.7;
    color: rgba(250, 247, 242, 0.55);
    margin-bottom: 1.5rem;
  }

  .section {
    margin-bottom: 1.5rem;
  }

  .section-title {
    font-family: ui-monospace, monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: rgba(250, 247, 242, 0.25);
    margin-bottom: 0.75rem;
  }

  .highlights-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .highlight-item {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    font-size: 12px;
    color: rgba(250, 247, 242, 0.65);
    background: rgba(250, 247, 242, 0.03);
    border: 1px solid rgba(250, 247, 242, 0.07);
    border-radius: 10px;
    padding: 10px 12px;
    line-height: 1.5;
  }

  .check {
    color: #f97316;
    font-weight: 700;
    flex-shrink: 0;
    margin-top: 1px;
  }

  .stack-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .stack-pill {
    font-family: ui-monospace, monospace;
    font-size: 11px;
    padding: 4px 12px;
    border-radius: 99px;
    background: rgba(234, 88, 12, 0.08);
    color: #f97316;
    border: 1px solid rgba(234, 88, 12, 0.25);
  }

  .cta-row {
    display: flex;
    gap: 0.75rem;
    margin-top: 1.75rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(250, 247, 242, 0.07);
  }

  .cta-primary {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 20px;
    border-radius: 12px;
    background: #ea580c;
    color: #faf7f2;
    font-size: 13px;
    font-weight: 600;
    transition: background 0.15s;
  }
  .cta-primary:hover { background: #f97316; }

  .cta-ghost {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 20px;
    border-radius: 12px;
    border: 1px solid rgba(250, 247, 242, 0.1);
    color: rgba(250, 247, 242, 0.5);
    font-size: 13px;
    font-weight: 500;
    transition: border-color 0.15s, color 0.15s;
  }
  .cta-ghost:hover {
    border-color: rgba(250, 247, 242, 0.25);
    color: #faf7f2;
  }

  @media (max-width: 520px) {
    .hero-row { grid-template-columns: 1fr; }
    .metric-block { text-align: left; }
    .highlights-grid { grid-template-columns: 1fr; }
    .cta-row { flex-direction: column; }
  }
</style>
