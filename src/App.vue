<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-hagrids-pink-100 px-4 py-4 flex justify-center">
    <div class="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">
      <div class="flex flex-col items-center mb-8 gap-4">
        <RouterLink to="/">
          <img
            src="https://scontent.cdninstagram.com/v/t51.75761-19/501056571_18020590523711270_2230616004043543967_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=104&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy43NDIuQzMifQ%3D%3D&_nc_ohc=kTcVYMu3iVkQ7kNvwHPTUF2&_nc_oc=AdpPGD6Z66f5aPp4G2X23F7siOTRG1m0F3oN6mzZLi21SMMg9p6xVt-VTztl4X3B5BI&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=lFOsY_ddo4tGP0oxQIzP1g&_nc_ss=7b689&oh=00_AQMujvCnUJWCrOp_wNFMszY7x-1mNiJ4Ux2RHXPJCH8RNg&oe=6AD67B09"
            alt="Logo"
            class="rounded-full"
          />
        </RouterLink>

        <div class="text-center">
          <RouterLink to="/">
            <h1 class="text-hagrids-green-500 font-[BurningSun] text-5xl">Hagrid&nbsp;s Cafe</h1>
          </RouterLink>

          <p class="text-center text-hagrids-pink-500">
            Menjar casolà americà, cafè especialitat<br />
            i jocs de taula
          </p>
        </div>
      </div>

      <RouterView />
    </div>
  </div>
</template>

<style>
h1 {
  position: relative;
  &::before {
    content: "'";
    display: block;
    position: absolute;
    left: 47%;
    rotate: 26deg;
    top: -10%;
    font-family: cursive;
  }
}
</style>
