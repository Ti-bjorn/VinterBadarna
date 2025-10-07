<script lang="ts">
  let open = false;
</script>

<style>
  @keyframes flicker {
    0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
      opacity: 0.5;
      transform: scale(1);
    }
    20%, 24%, 55% {
      opacity: 0.8;
      transform: scale(1.02);
    }
    22%, 26% {
      opacity: 0.6;
      transform: scale(0.98);
    }
  }

  .flicker {
    animation: flicker 1.5s infinite ease-in-out;
  }
</style>

<header>
  <!-- Site title -->
<h1
  class="flex items-center gap-3 font-bold font-['Quintessential'] py-4 bg-[#982a11] text-black px-4"
>
<div class="relative h-16 w-16">

  <img
    src="/logoS.png"
    alt="Båven Lovers logo"
    class="absolute inset-0 h-full w-full object-contain z-0"
  />
  <!-- The GIF is the visible part -->
  <img
    src="/giphy.gif"
    alt=""
    class="absolute inset-0 h-full w-full object-cover opacity-55 flicker"
    style="
      -webkit-mask-image: url('/logoS.png');
      -webkit-mask-repeat: no-repeat;
      -webkit-mask-position: center;
      -webkit-mask-size: contain;
      mask-image: url('/logoS.png');
      mask-repeat: no-repeat;
      mask-position: center;
      mask-size: contain;
    "
  />
</div>
  <span class="text-3xl md:text-5xl">BÅVEN LOVERS</span>
</h1>
  <!--
  <h1 class="font-bold font-['Quintessential'] py-4 bg-[#982a11] text-black">
    <span class="text-4xl md:text-5xl p-4">BÅVEN LOVERS</span>
  </h1>-->

  <!-- Navbar -->
  <nav class="bg-[#262b27] text-[#f0c09e]">
    <ul
      class="flex flex-wrap gap-1 font-['MedievalSharp'] list-none text-sm md:text-lg"
    >
      <li><a class="px-4 py-3 block hover:bg-[#423531]" href="/">Båven</a></li>
      <li>
        <a class="px-4 py-3 block hover:bg-[#423531]" href="/org">Föreningen</a>
      </li>
      <li>
        <a class="px-4 py-3 block hover:bg-[#423531]" href="/medlemmar"
          >Medlemmar</a
        >
      </li>
      <li>
        <a
          class="px-4 py-3 block hover:bg-[#423531] hidden md:block"
          href="/kalendarium">Kalendarium</a
        >
      </li>
      <li>
        <a
          class="px-4 py-3 block hover:bg-[#423531] hidden md:block"
          href="/protokoll">Mötesprotokoll</a
        >
      </li>
      <li>
        <a
          class="px-4 py-3 block hover:bg-[#423531] hidden md:block"
          href="/prästön">Prästön</a
        >
      </li>
      <li>
        <!-- Side menu for iphone button -->
        <button
          class="px-4 py-3 md:hidden px-4 py-3 bg-[#262b27] text-[#f0c09e]"
          on:click={() => (open = !open)}
        >
          ☰
        </button>
      </li>
    </ul>
  </nav>

  <!-- Overlay -->
  {#if open}
    <div
      class="fixed inset-0 bg-black/50 z-40"
      on:click={() => (open = false)}
    ></div>
  {/if}
<!--      class="fixed inset-0 bg-center bg-cover cursor pointer z-40"
      style="background-image: url('/fire-gif-3.gif'); opacity: 0.5;"-->
  <!-- Sidebar -->
  <!-- Sidebar -->
  <div
    class={`fixed top-0 right-0 h-full w-50 text-[#f0c09e] z-50 transform transition-transform duration-300
    ${open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
    style="
    background-image:
    linear-gradient(to bottom, #262b27, #262b27, transparent),
    url('/fire-gif-3.gif');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: opacity 0.5s ease, transform 0.3s ease;
    "
  >
    <button class="p-4 text-right w-full" on:click={() => (open = false)}
      >✕</button
    >
    <ul class="flex flex-col font-['MedievalSharp'] list-none text-lg">
      <li>
        <a class="px-4 py-3 block hover:bg-[#423531]" href="/kalendarium"
          >Kalendarium</a
        >
      </li>
      <li>
        <a class="px-4 py-3 block hover:bg-[#423531]" href="/protokoll"
          >Mötesprotokoll</a
        >
      </li>
      <li>
        <a class="px-4 py-3 block hover:bg-[#423531]" href="/prästön">Prästön</a
        >
      </li>
    </ul>
  </div>
</header>
