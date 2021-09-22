---
title: 'Redesign Ryfazrin github Versi 2'
excerpt: 'Desain awal yang saya inginkan pada awalnya saya ingin membuat tampilan yang...'
coverImage: '/assets/blog/redesign-ryfazrin-github-versi-2/cover.jpg'
date: '2021-09-22T21:41:00'
author:
  name: Ryan Pazrin
  picture: '/assets/blog/authors/ryan.jpg'
ogImage:
  url: '/assets/blog/redesign-ryfazrin-github-versi-2/cover.png'
---

## Pedahuluan

Selamat datang dipost saya yang ke berapa? Kali ini saya ingin berbagi pengalaman mengenai redesign web pribadi saya di github. yang mana pada saat itu masih menggunakan template portfolio orang lain didalamnya, orang tersebut menggunakan materialize sebagai frameworknya.

## Konsep Awal

Desain awal yang saya inginkan pada awalnya saya ingin membuat tampilan yang sederhana. Dimana web ini akan menampilkan gambar, nama, shortlink ke beberapa akun media sosial, dan tulisan kecil yang saya ambil dari [README.md](https://github.com/ryfazrin/ryfazrin) repo github pribadi saya.

Lalu setelah konsep konten yang dimuat selesai, selanjutnya saya mencoba desain sendiri pure CSS dan sedikit behavior dari vanilla JS. Namun hasilnya agak mengerikan(menurut saya), yang mana saya lama tidak berutak-atik dengan pure CSS dan vanilla JS(baru beberapa hari ini saya mengulik dasar-dasar JavaSript). Akhirnya Saya berkesimpulan untuk mencari CSS Framework dengan konsep yang unik.

Kesana-kemari (dan tertawa) mencari CSS Framework yang menarik menurut saya. Saya menemukan berbagai macam CSS Framework kecil-kecil yang open source dan unik-unik. Ada yang meniru user Interface Windows, tampilan seperti Game '8-bit', User Interface mirip dengan Command/Terminal, atau Tampilan yang ala-ala kertas. Saya terkesan dengan CSS Framework dengan tampilan ala-ala kertas. Akhirnya saya mencoba untuk memakai salah satu dari refrensi Framework tersebut, yaitu [WiredJs](https://wiredjs.com/).

## Implementasi WiredJs

Implementasi WiredJs ke dalam web ryfazrin.

Saya menggunakan template vanilla Js yang sudah disediakan oleh WiredJs. Kalian bisa akses disini [Template vanilla](https://codesandbox.io/s/wired-elements-vanilla-4bpny).

Font yang digunakan yaitu [Gloria Hallelujah](https://fonts.google.com/specimen/Gloria+Hallelujah) berasal dari google font.

<!-- ```html
<script type="module" src="https://unpkg.com/wired-elements?module"></script>
``` -->

Setelah itu masukkan Tag sesuai kebutuhan. Selengkapnya [index.html](https://github.com/ryfazrin/ryfazrin.github.io/blob/master/index.html).

## Hasil


Jadi, Hasil akan terlihat seperti berikut.

![Ryfazrin](/assets/blog/redesign-ryfazrin-github-versi-2/preview1.jpeg)

Wew, keren ya CSS Frameworknya😍.

## Permasalahan

Namun, ada permasalahan yang lain😖.

Yaitu Ketika web tersebut dideploy ke github pages. Proses tampilan ala-ala kertasnya di bagian client sangat lambat terbuka😭.

Kemungkinan besar karna module eksternal wired-elements yang dipakai web saya memiliki resource yang terbilang cukup besar. Hal ini yang menyebabkan diperlukannya waktu untuk men-download semua resource.

## Ganti Baru atau diperbaiki?

Ada kepikiran untuk ganti template lagi (ganti lagi ganti lagi). Tapi, masa programmer enggak coba cari solusinya gitu😅😂.

Nah untuk selanjutnya, saya coba untuk memperbaiki atau mencari solusi terbaik agar web tersebut tidak telalu memakan banyak resource dan jadi mudah dibuka client😉.

Sekian, see you next time.