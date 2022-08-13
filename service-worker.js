/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "3b153baf9a4dc3fd3cc31dc9da9dce40"
  },
  {
    "url": "assets/css/0.styles.bff864ec.css",
    "revision": "c0c2f12ea1b5dd29ab19891cd2c05202"
  },
  {
    "url": "assets/img/activities.36116c16.png",
    "revision": "36116c16687c3473ca786d4c7d62e016"
  },
  {
    "url": "assets/img/add_circle_outline.c5b0d45d.svg",
    "revision": "c5b0d45d9ff3b78a9ac4ac72a70ea50c"
  },
  {
    "url": "assets/img/add.0e3e08bc.svg",
    "revision": "0e3e08bcb441c2cb39bdfff7f56f06a2"
  },
  {
    "url": "assets/img/address-bar.a15ff370.png",
    "revision": "a15ff370eed2f8f0b8219ea3d4976318"
  },
  {
    "url": "assets/img/address.8c163b8f.png",
    "revision": "8c163b8f3c49e340a7c9546af4ed690e"
  },
  {
    "url": "assets/img/content_copy.72dd793a.svg",
    "revision": "72dd793a97203adfad3c50ebad310ee4"
  },
  {
    "url": "assets/img/control_point_duplicate.0028d2cc.svg",
    "revision": "0028d2cca15e5c298bc49d9f8058a0d3"
  },
  {
    "url": "assets/img/delete_forever.01754524.svg",
    "revision": "017545249afd67806be943eae9f18bc2"
  },
  {
    "url": "assets/img/directions_car.c9b170b8.svg",
    "revision": "c9b170b848c5d4b8dd0e61f16bd75c75"
  },
  {
    "url": "assets/img/directions_walk.27f1ba22.svg",
    "revision": "27f1ba221570d364f986a1bc342c3e05"
  },
  {
    "url": "assets/img/done_all.28f39764.svg",
    "revision": "28f397644d2d6fe6c3fde0446891cf26"
  },
  {
    "url": "assets/img/done.89e6f120.svg",
    "revision": "89e6f1201212082536271f14401d3d41"
  },
  {
    "url": "assets/img/flight.1eb2837a.svg",
    "revision": "1eb2837abbb46c402e137802482339bc"
  },
  {
    "url": "assets/img/ledger_logo.8d1c9c23.svg",
    "revision": "8d1c9c23425c3b507e87663b24e54d0e"
  },
  {
    "url": "assets/img/link.98f4f684.svg",
    "revision": "98f4f6841f3d482b15c3a9d79c8db50f"
  },
  {
    "url": "assets/img/logoSync.7d4e71a5.svg",
    "revision": "7d4e71a555356bf3338258bfd8ba32b2"
  },
  {
    "url": "assets/img/menu.55f68494.svg",
    "revision": "55f6849429de279d473c459c7ead3249"
  },
  {
    "url": "assets/img/message.759cf5c9.svg",
    "revision": "759cf5c9195a7ba83dfe7b47cd809ffe"
  },
  {
    "url": "assets/img/more_horiz.d644ed95.svg",
    "revision": "d644ed957e2662b1d22adb890310e64f"
  },
  {
    "url": "assets/img/mpp.58a89201.png",
    "revision": "58a892017c66b562945baeee15505c80"
  },
  {
    "url": "assets/img/preview.2a0e91e4.svg",
    "revision": "2a0e91e455559dd783005560c3ffcbe0"
  },
  {
    "url": "assets/img/qr_code_2.b60a5eec.svg",
    "revision": "b60a5eec09a98201dd9a090a00e521bb"
  },
  {
    "url": "assets/img/query_builder.3c7597b2.svg",
    "revision": "3c7597b2a77f9fe763c44489b872ac31"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/search.db5d8122.svg",
    "revision": "db5d8122836517965b6e0247a3a9691c"
  },
  {
    "url": "assets/img/send.5b08a89d.svg",
    "revision": "5b08a89d2dd3351ce4ef110d2909cb23"
  },
  {
    "url": "assets/img/settings.d31d71f9.png",
    "revision": "d31d71f992404bd7970a450cfe4ec99c"
  },
  {
    "url": "assets/img/signing.d77cdae1.png",
    "revision": "d77cdae154a592744275a3b510bf722a"
  },
  {
    "url": "assets/img/unfold_more.52bd8411.svg",
    "revision": "52bd8411f8aea9dba1e636497a1c3d3e"
  },
  {
    "url": "assets/img/wallet-detail-activity.0f9d89a3.png",
    "revision": "0f9d89a34631323541d04818f4a00ac4"
  },
  {
    "url": "assets/img/wallet.08efbe38.png",
    "revision": "08efbe38b38fce44fa3542a9a0dd156d"
  },
  {
    "url": "assets/js/10.694ead51.js",
    "revision": "09d041d58b6c804f6d2fd250ea105fc1"
  },
  {
    "url": "assets/js/100.69de5222.js",
    "revision": "8413d037fda9e80114c3218a3bba2e56"
  },
  {
    "url": "assets/js/101.c112e028.js",
    "revision": "b1ff121aa338f91c7e80967b8fa04de2"
  },
  {
    "url": "assets/js/102.1b158bf6.js",
    "revision": "5540b81b99e3d8326e4987ad2321411c"
  },
  {
    "url": "assets/js/103.f6c70881.js",
    "revision": "a3cbe55278d81777602d4c3b8164d8c5"
  },
  {
    "url": "assets/js/104.9deaead9.js",
    "revision": "079bd7e431531aac94a408a27048fb8c"
  },
  {
    "url": "assets/js/105.f779af09.js",
    "revision": "0d91d38770719e7d2abf5e742c45ea75"
  },
  {
    "url": "assets/js/106.8b3fad22.js",
    "revision": "0f1ee0770958909f8d6e2096c50bc7c7"
  },
  {
    "url": "assets/js/107.1ff5dc39.js",
    "revision": "b164bcb8b6706cd6b33dbeccd98c0253"
  },
  {
    "url": "assets/js/11.2529a28e.js",
    "revision": "365518331d948df1d06327acded66bb8"
  },
  {
    "url": "assets/js/12.3fa1dc23.js",
    "revision": "fe6958cdb71fe5d18846dbc1d7f12e2f"
  },
  {
    "url": "assets/js/13.a59b6543.js",
    "revision": "0b5e3168ba301e1ee7539d876d761fa8"
  },
  {
    "url": "assets/js/14.e3667f8b.js",
    "revision": "804147f0327fd13226f28b1b408cc165"
  },
  {
    "url": "assets/js/15.66ef4414.js",
    "revision": "dd3073d17d9b4b4dca227c55158d06fd"
  },
  {
    "url": "assets/js/16.2470dd42.js",
    "revision": "da039a290837bbf736547411317dc015"
  },
  {
    "url": "assets/js/17.544f97dc.js",
    "revision": "2f6ecde9ca678b5401ec17684c50c786"
  },
  {
    "url": "assets/js/18.585cf9e3.js",
    "revision": "8f9e7ff3130ed7dee3406e2ad929d004"
  },
  {
    "url": "assets/js/19.56051040.js",
    "revision": "37cc76d573ab2836320c163af219f8ae"
  },
  {
    "url": "assets/js/20.e801da5b.js",
    "revision": "777261cc2a55e6d68d8a830fbaf8b673"
  },
  {
    "url": "assets/js/21.e55ea010.js",
    "revision": "83a3f3ca1b22299cff3c8fda2e02592f"
  },
  {
    "url": "assets/js/22.508702fa.js",
    "revision": "337b705d6034da52836a1f47744ecf68"
  },
  {
    "url": "assets/js/23.2ce8eb40.js",
    "revision": "a8fed7a8147b12097ded2fc1aa93ed85"
  },
  {
    "url": "assets/js/24.501d283d.js",
    "revision": "f9309852fb1b549d909a4a2780206996"
  },
  {
    "url": "assets/js/25.dbcd6f95.js",
    "revision": "517524ab9e62188778aaa6a833705145"
  },
  {
    "url": "assets/js/26.fb9e3edb.js",
    "revision": "a6bff89800bff397051cd92c80f750be"
  },
  {
    "url": "assets/js/27.99b1fecb.js",
    "revision": "179130ef7d736e0900e352df27c8359f"
  },
  {
    "url": "assets/js/28.69fad62f.js",
    "revision": "23b278233a9b8e24e14c0a9943729409"
  },
  {
    "url": "assets/js/29.347150de.js",
    "revision": "5660f07561db51d4282cae44997bf36d"
  },
  {
    "url": "assets/js/3.4d15505d.js",
    "revision": "7d72a9af271c050d3d8e6ab700ea9854"
  },
  {
    "url": "assets/js/30.b0ea5628.js",
    "revision": "f34f7439a6cda34c7e600987ff29c893"
  },
  {
    "url": "assets/js/31.9cfbaae0.js",
    "revision": "585008ab013bc1c629201f64823067e8"
  },
  {
    "url": "assets/js/32.112eabdd.js",
    "revision": "4581ee2b9d665f857ac49f0327f55aad"
  },
  {
    "url": "assets/js/33.172a48e0.js",
    "revision": "690631ca577e1be762cb08ab49c48903"
  },
  {
    "url": "assets/js/34.777c964e.js",
    "revision": "8ce7cb039e1a737b434282d93b21af98"
  },
  {
    "url": "assets/js/35.fe719197.js",
    "revision": "f02d94e1f8729b3e327c1b9e01329ca6"
  },
  {
    "url": "assets/js/36.ae6e0c34.js",
    "revision": "e0fe05736bcc6f24d1858bd2921ae426"
  },
  {
    "url": "assets/js/37.a6478f53.js",
    "revision": "462621eb549a1b54fe941fca868da8b2"
  },
  {
    "url": "assets/js/38.d9900820.js",
    "revision": "16ff5bb5fd6c9b466ffe66eddfaf949a"
  },
  {
    "url": "assets/js/39.f2a2ef74.js",
    "revision": "d7f0f54cee803a2f3e7014ba472b9118"
  },
  {
    "url": "assets/js/4.45804240.js",
    "revision": "d37909da2cc4ddfcfe2a6d162f965a58"
  },
  {
    "url": "assets/js/40.a2db98a8.js",
    "revision": "2f6240175a6f106adbf00b12081031ac"
  },
  {
    "url": "assets/js/41.bf13ef19.js",
    "revision": "6c82e2a6dabd018126aca8bda43e7eb4"
  },
  {
    "url": "assets/js/42.2137bbba.js",
    "revision": "4f8a5b671f3c70e5de1312f6dd537579"
  },
  {
    "url": "assets/js/43.d0cda2ca.js",
    "revision": "813baac19490bef9233f2dfce9302f1c"
  },
  {
    "url": "assets/js/44.5419475b.js",
    "revision": "3027ffa34f54e36fc6a6dfa0620884b1"
  },
  {
    "url": "assets/js/45.1d1169d8.js",
    "revision": "205240e0cb99048607da6708cbc79b8a"
  },
  {
    "url": "assets/js/46.8fc4c13d.js",
    "revision": "b8640562f2e0a24e597bfe0ea52b7e58"
  },
  {
    "url": "assets/js/47.18e13c2e.js",
    "revision": "0f271359cf689105feb28125f931d60f"
  },
  {
    "url": "assets/js/48.8e52e794.js",
    "revision": "8bfc7a08500dcb7ae0f09ed292322565"
  },
  {
    "url": "assets/js/49.f694ffb4.js",
    "revision": "b8723df091e7158d85b73dfe8668ae7c"
  },
  {
    "url": "assets/js/5.e43b6327.js",
    "revision": "75d615a6e3d743a593a676ac68ad514b"
  },
  {
    "url": "assets/js/50.682abf64.js",
    "revision": "c5d2b54eb99e2243c83741d57da9d0d7"
  },
  {
    "url": "assets/js/51.edf1e039.js",
    "revision": "35565af9d69c1eb83c6c14eafef30e17"
  },
  {
    "url": "assets/js/52.1d36ffc0.js",
    "revision": "83294a998ae72162d16de287802b8564"
  },
  {
    "url": "assets/js/53.29231573.js",
    "revision": "2abe529350dcb18cd15c409b416af651"
  },
  {
    "url": "assets/js/54.af3b3e82.js",
    "revision": "293dc0847d9c1673fdf95c593ba3e026"
  },
  {
    "url": "assets/js/55.379dbfae.js",
    "revision": "cde70196a7c47739d38c056267f3df7b"
  },
  {
    "url": "assets/js/56.f79c4db8.js",
    "revision": "73bb227ad99310f38d1b580273d9a443"
  },
  {
    "url": "assets/js/57.5937cc2e.js",
    "revision": "54803849f7df1f5b4810e847f9c9f23e"
  },
  {
    "url": "assets/js/58.39e4e0fc.js",
    "revision": "5ef693c6cfd3f2d7d9e169f4826b3186"
  },
  {
    "url": "assets/js/59.7b54f7f4.js",
    "revision": "f89af80789ab32210dc908f55769d9fa"
  },
  {
    "url": "assets/js/6.f5ca39ac.js",
    "revision": "b066328509c27ecff4a501ec4246bf13"
  },
  {
    "url": "assets/js/60.42d518c5.js",
    "revision": "6d8e797abcb04d98c96b54bad69e8f2c"
  },
  {
    "url": "assets/js/61.ce2cd750.js",
    "revision": "1eee08f4b7e05157f805e56a22e47175"
  },
  {
    "url": "assets/js/62.f56ccfc4.js",
    "revision": "c32f6344102b159303fb943dcb89e656"
  },
  {
    "url": "assets/js/63.7ff3688d.js",
    "revision": "5d05ca1a545f68896688b187395b94dc"
  },
  {
    "url": "assets/js/64.e0ffbed9.js",
    "revision": "85996f7d7e5d85798300b97aadec07c9"
  },
  {
    "url": "assets/js/65.b036c22f.js",
    "revision": "12c1dbd345d9a473afd978e62ca69193"
  },
  {
    "url": "assets/js/66.187673b2.js",
    "revision": "f5f3995ca8764ed72a3ec1f7c73a9f0c"
  },
  {
    "url": "assets/js/67.cef2ea87.js",
    "revision": "1ea3445c71f1fad9f630dbb7855c5b44"
  },
  {
    "url": "assets/js/68.67973f73.js",
    "revision": "15ce60f81c069b06985f7c030cd5676c"
  },
  {
    "url": "assets/js/69.3c92b0ed.js",
    "revision": "2de4d9bf3cb8c42b0e751d192bc2dded"
  },
  {
    "url": "assets/js/7.408a4531.js",
    "revision": "c20d263cdbee12b911a236af4416d87e"
  },
  {
    "url": "assets/js/70.cf8b45c9.js",
    "revision": "c5fd5d0f9d0e2215661a27231a5cb7dc"
  },
  {
    "url": "assets/js/71.cb63eb13.js",
    "revision": "5f53ebc01a4a8c3b269fbc891e91a32d"
  },
  {
    "url": "assets/js/72.219193ea.js",
    "revision": "0f312f0ba7272d8753408bb930b01c9d"
  },
  {
    "url": "assets/js/73.16dfd38c.js",
    "revision": "d1d26572831be1b47bb3bc2a5e2cd1f3"
  },
  {
    "url": "assets/js/74.3307e1eb.js",
    "revision": "9cdbd17412459e4f49a0e7b7208d49f8"
  },
  {
    "url": "assets/js/75.09511393.js",
    "revision": "174866a59c7eb71e5648648ba7da4918"
  },
  {
    "url": "assets/js/76.dadd4e57.js",
    "revision": "f07098a0c59a1d471ee876fb914d5c7f"
  },
  {
    "url": "assets/js/77.f0318240.js",
    "revision": "9afd241b38b601a7b1dce262f6a8920b"
  },
  {
    "url": "assets/js/78.14f0b327.js",
    "revision": "8fa593661234215fe232985ec2c867a1"
  },
  {
    "url": "assets/js/79.e2eb56dc.js",
    "revision": "990857a1bf578c3b0cbc88b605f1a4ed"
  },
  {
    "url": "assets/js/8.ab6ca9a0.js",
    "revision": "6b39c2528cbd90c0e02da20927592a4d"
  },
  {
    "url": "assets/js/80.3157595b.js",
    "revision": "8e0b7e03ba57876d5dd0452773d015d1"
  },
  {
    "url": "assets/js/81.271fd932.js",
    "revision": "1fb5331ff44afbe32e670bf4197e6c92"
  },
  {
    "url": "assets/js/82.bed86073.js",
    "revision": "6d95541942f82ba1e646f687709bbc7f"
  },
  {
    "url": "assets/js/83.aeb05711.js",
    "revision": "e69f3a2a4597a28c0fa4126f1762d09c"
  },
  {
    "url": "assets/js/84.94e04a72.js",
    "revision": "bda2f596751f67ab12c0be6aa579b57f"
  },
  {
    "url": "assets/js/85.1adb920f.js",
    "revision": "373aa9947dcc8efca3312a4735cbd293"
  },
  {
    "url": "assets/js/86.fcea88f2.js",
    "revision": "1287e7ef71d80b9b979b31a08f0b6f94"
  },
  {
    "url": "assets/js/87.6130bf31.js",
    "revision": "e44cc46aed9a8e9cfd2250a29ea0abda"
  },
  {
    "url": "assets/js/88.5adca661.js",
    "revision": "62fd1f56b0eb36c4d37d32ab999b5724"
  },
  {
    "url": "assets/js/89.4d7c5e9e.js",
    "revision": "e868f6863f736040cf6fb3d4b145b693"
  },
  {
    "url": "assets/js/9.5145463a.js",
    "revision": "8238e8f22a9ecca807c0a05db07f0b3c"
  },
  {
    "url": "assets/js/90.8ceed48c.js",
    "revision": "7244007fbe6b5b612fe46cc5b471eef2"
  },
  {
    "url": "assets/js/91.95568576.js",
    "revision": "73486377ba567d9a30fa6d6d792acb69"
  },
  {
    "url": "assets/js/92.f6a0befa.js",
    "revision": "0f068a07f3c2cc126afbbe5af4236d5e"
  },
  {
    "url": "assets/js/93.1738a0fe.js",
    "revision": "78156931d9a88947b4baa367ac27fc5a"
  },
  {
    "url": "assets/js/94.60238599.js",
    "revision": "cac77841f67ea1c847317fe07b7cbca9"
  },
  {
    "url": "assets/js/95.b840cd5e.js",
    "revision": "8d53e9ae8a956c168441e5c4e361f10f"
  },
  {
    "url": "assets/js/96.9dc1dbc0.js",
    "revision": "ea1a9268b68f766dfdceb758c916ebde"
  },
  {
    "url": "assets/js/97.e8b3e256.js",
    "revision": "b8cc0b511e9630d61e8071c51e3a828e"
  },
  {
    "url": "assets/js/98.928117ff.js",
    "revision": "fb83b75b4fd032b55c3119821a816849"
  },
  {
    "url": "assets/js/99.30d6a224.js",
    "revision": "e29d25d997136bb6f91ae5c1d24992ac"
  },
  {
    "url": "assets/js/app.62c555d9.js",
    "revision": "6b04243a4491645a95e2b06058e2a959"
  },
  {
    "url": "assets/js/vendors~docsearch.b15e65d3.js",
    "revision": "b74cf40fe83ff3b84902ef5b48bbc8f5"
  },
  {
    "url": "connex/api.html",
    "revision": "b0a435d9b6a006fd64ed23e32ff1e2d8"
  },
  {
    "url": "connex/index.html",
    "revision": "e3c36704a24b51c058c9b89d1a367cf0"
  },
  {
    "url": "icons/144.png",
    "revision": "ef022f52c54f8ee6ccc8f005d52b99de"
  },
  {
    "url": "icons/168.png",
    "revision": "cd596353879cab531903b1f9c0f8d6dc"
  },
  {
    "url": "icons/192.png",
    "revision": "6aaa85947b9a315ac47970a54c3a66f4"
  },
  {
    "url": "icons/48.png",
    "revision": "2d20f253068748053fc7082400c88f4b"
  },
  {
    "url": "icons/72.png",
    "revision": "02b333d138cc4764e770eb1d7274e7ea"
  },
  {
    "url": "icons/96.png",
    "revision": "b3240f2ffb00f383cbc3783370a782cc"
  },
  {
    "url": "index.html",
    "revision": "2f16268f5d1cabfe64b9cd8bc16e90b8"
  },
  {
    "url": "logo.png",
    "revision": "1f7569a7fb96e141f556669c77877f1f"
  },
  {
    "url": "others/development-resources.html",
    "revision": "32aeb1bca9658f817eca207e9a4249e1"
  },
  {
    "url": "others/miscellaneous.html",
    "revision": "163a7834439e667ea0e703bc17b385e5"
  },
  {
    "url": "pt/connex/api.html",
    "revision": "39206ebe20a28140f3418403103de5dc"
  },
  {
    "url": "pt/connex/index.html",
    "revision": "ded5704a0a7687be4d53f1173cff97b6"
  },
  {
    "url": "pt/index.html",
    "revision": "f4d207a22b806a524329245d0dcd774d"
  },
  {
    "url": "pt/others/development-resources.html",
    "revision": "343e0f1de9d50dab2421b7bc5853e559"
  },
  {
    "url": "pt/others/miscellaneous.html",
    "revision": "f7af2aa6ec363d97fd7e2ac86dbb773f"
  },
  {
    "url": "pt/sync/download-and-install.html",
    "revision": "b6f5d1beb01f3a6dc9cb1c311301f790"
  },
  {
    "url": "pt/sync/faq.html",
    "revision": "2736456c01ca244b7f6cc763daa0767b"
  },
  {
    "url": "pt/sync/user-guide/activities.html",
    "revision": "52bc2bada7f899ce732f8e81f7d7ef57"
  },
  {
    "url": "pt/sync/user-guide/browse-dapp-and-web.html",
    "revision": "28f12066055126aadcbdeea85acc17a5"
  },
  {
    "url": "pt/sync/user-guide/contribute.html",
    "revision": "aa7976fb028b6bdc37012ad6cb5ed9e5"
  },
  {
    "url": "pt/sync/user-guide/contributing.html",
    "revision": "e8362ca6315bbedba077df6e9f2a6f63"
  },
  {
    "url": "pt/sync/user-guide/import-ledger.html",
    "revision": "ce2b605debd1747b12d2cc990041ce52"
  },
  {
    "url": "pt/sync/user-guide/index.html",
    "revision": "4803ad3e769b0f87d4cb7b443cd6923e"
  },
  {
    "url": "pt/sync/user-guide/interact-with-dapps.html",
    "revision": "f0f372b763e215da48266d75c230677e"
  },
  {
    "url": "pt/sync/user-guide/report-issue.html",
    "revision": "8572ae45847b7462afc1a7c77025ba80"
  },
  {
    "url": "pt/sync/user-guide/settings.html",
    "revision": "eb7591c529bc7dece7d9af92b51e1847"
  },
  {
    "url": "pt/sync2/faq.html",
    "revision": "5bd01fb635f122035303728e34291bb4"
  },
  {
    "url": "pt/sync2/get-started.html",
    "revision": "f5552fec9db6ba6c1efb21a7c19d3e48"
  },
  {
    "url": "pt/sync2/user-guide/activities.html",
    "revision": "a09130233b9ae4cdfb95994baec7466c"
  },
  {
    "url": "pt/sync2/user-guide/index.html",
    "revision": "c556d5d892745907da2273a6b8768aaf"
  },
  {
    "url": "pt/sync2/user-guide/settings.html",
    "revision": "3c462f11ca72a4d0a23bed992e489802"
  },
  {
    "url": "pt/sync2/user-guide/signing.html",
    "revision": "c824d76cec291cf360144a38858dea54"
  },
  {
    "url": "pt/sync2/user-guide/wallet.html",
    "revision": "ad3c91fcdf87229ff89ca0c4eeaf1f32"
  },
  {
    "url": "pt/thor/get-started/api.html",
    "revision": "1e20c6980ac75910a630513d6d3e7036"
  },
  {
    "url": "pt/thor/get-started/custom-network.html",
    "revision": "4276bcae270eee5d87d1b9871c8f1c0b"
  },
  {
    "url": "pt/thor/get-started/installation.html",
    "revision": "3fba28f90781f9b1c7faa65347503413"
  },
  {
    "url": "pt/thor/learn/block.html",
    "revision": "171d8edfb154b55e22bf721949aa5ad1"
  },
  {
    "url": "pt/thor/learn/builtin-contracts.html",
    "revision": "3c56830baa470cd16e8ebcce97f5cb2b"
  },
  {
    "url": "pt/thor/learn/faq.html",
    "revision": "a34ea0062e829e28aeacdc336a96036d"
  },
  {
    "url": "pt/thor/learn/fee-delegation.html",
    "revision": "cbce9f3a914f2600b9bccb0a50d0b8b8"
  },
  {
    "url": "pt/thor/learn/index.html",
    "revision": "6be76df24a5940e9d8a93457dcdcff87"
  },
  {
    "url": "pt/thor/learn/proof-of-authority.html",
    "revision": "22da9a81de5f3598a68d7f8805ccc815"
  },
  {
    "url": "pt/thor/learn/transaction-calculation.html",
    "revision": "23f85120f164139bcb810dc1352f7ea8"
  },
  {
    "url": "pt/thor/learn/transaction-model.html",
    "revision": "dd0359f864ba68924e31638de4a35a50"
  },
  {
    "url": "pt/thor/learn/two-token-design.html",
    "revision": "ebc97f069cee86dacbd8957efef8851f"
  },
  {
    "url": "pt/tutorials/Connex-upgrade-Connex2_en.html",
    "revision": "e5937238a387d83f8f36304d8c6e1eb7"
  },
  {
    "url": "pt/tutorials/Connex-upgrade-Connex2.html",
    "revision": "9a978f339cf94b9b4b23e291dc048bbf"
  },
  {
    "url": "pt/tutorials/contribute.html",
    "revision": "d132fb1faf6cf02c88c913cbfff3569f"
  },
  {
    "url": "pt/tutorials/designated-fee-delegation.html",
    "revision": "061e03ff7f863df758d98588349d811a"
  },
  {
    "url": "pt/tutorials/forcible-transaction-dependency.html",
    "revision": "b9083bb6aa9c6b2e2f1e3410ca245d7d"
  },
  {
    "url": "pt/tutorials/how-to-develop-a-dapp-on-vechain-1.html",
    "revision": "cb9c35fd18629f1c261c5e2c92142369"
  },
  {
    "url": "pt/tutorials/how-to-develop-a-dapp-on-vechain-2.html",
    "revision": "eb284e06956c6ed1bd15b57938ff2261"
  },
  {
    "url": "pt/tutorials/how-to-develop-a-dapp-on-vechain-3.html",
    "revision": "40cbdbbea091f7ecfb03f7664e296b51"
  },
  {
    "url": "pt/tutorials/how-to-integrate-VIP-191-1.html",
    "revision": "db4ea5743696981409034e89482fc46a"
  },
  {
    "url": "pt/tutorials/how-to-integrate-VIP-191-2.html",
    "revision": "7ff0cafe7e0cb61598fc90ce0d828f59"
  },
  {
    "url": "pt/tutorials/how-to-integrate-VIP-191-3.html",
    "revision": "9b373dbbb2006e053412636c2092562c"
  },
  {
    "url": "pt/tutorials/index.html",
    "revision": "e51d7e09a2b29bd357da49a2f9ff451d"
  },
  {
    "url": "pt/tutorials/Useful-tips-for-building-a-dApp.html",
    "revision": "db5699e987580c3d677d26e0ee363a66"
  },
  {
    "url": "sync/download-and-install.html",
    "revision": "03fbe9a71e535b47023a9e31d7529d10"
  },
  {
    "url": "sync/faq.html",
    "revision": "104251bf296a66a274f34f784f1072fc"
  },
  {
    "url": "sync/user-guide/activities.html",
    "revision": "19c99d2bfbeee6bd87b84e4a37490cbe"
  },
  {
    "url": "sync/user-guide/browse-dapp-and-web.html",
    "revision": "2f0585f1fe8fea288527aaedd3df8844"
  },
  {
    "url": "sync/user-guide/contribute.html",
    "revision": "7e121972d0686408d49efbb7cc587045"
  },
  {
    "url": "sync/user-guide/contributing.html",
    "revision": "2d917f270faec276d906cf152b0ddaca"
  },
  {
    "url": "sync/user-guide/import-ledger.html",
    "revision": "28f0f934a459f56f71fafac143189aee"
  },
  {
    "url": "sync/user-guide/index.html",
    "revision": "7103ba3089fefe9e6bd45759469a11d1"
  },
  {
    "url": "sync/user-guide/interact-with-dapps.html",
    "revision": "48760bae39cbce26507a7645ad51b631"
  },
  {
    "url": "sync/user-guide/report-issue.html",
    "revision": "22025bd18471986d3ba53e3674a83947"
  },
  {
    "url": "sync/user-guide/settings.html",
    "revision": "762bb01e880adb5b5c8e1f4b7b3e9ff2"
  },
  {
    "url": "sync2/faq.html",
    "revision": "f92dc78c02c15f5da5de8a7dc768df6c"
  },
  {
    "url": "sync2/get-started.html",
    "revision": "f00a7cddfe393517b7cef2a2caf613af"
  },
  {
    "url": "sync2/user-guide/activities.html",
    "revision": "6467f45d960b854fa5954b1b223f399f"
  },
  {
    "url": "sync2/user-guide/index.html",
    "revision": "2579eb85bbec97139d26904b353bd19b"
  },
  {
    "url": "sync2/user-guide/settings.html",
    "revision": "285eb65c9b5f075e4a5cb9f07b5e32e9"
  },
  {
    "url": "sync2/user-guide/signing.html",
    "revision": "921cf68efdbc19aec28dbb65f594cd33"
  },
  {
    "url": "sync2/user-guide/wallet.html",
    "revision": "4990ae19813b7060b12328370da13dd6"
  },
  {
    "url": "thor/get-started/api.html",
    "revision": "0025021528f2ce83c8d42aa496f4a9c1"
  },
  {
    "url": "thor/get-started/custom-network.html",
    "revision": "16930cc18e35db8bb35c95c74f54be44"
  },
  {
    "url": "thor/get-started/installation.html",
    "revision": "e57858916ee3c18b0481a21d899ebebe"
  },
  {
    "url": "thor/learn/block.html",
    "revision": "bd36a51d144a7e75db9515461919a3e5"
  },
  {
    "url": "thor/learn/builtin-contracts.html",
    "revision": "74c78376a37cbe3c3917353b7035d640"
  },
  {
    "url": "thor/learn/faq.html",
    "revision": "f7b430a7515151a0b888a8c729d417e2"
  },
  {
    "url": "thor/learn/fee-delegation.html",
    "revision": "897967b5e4b47655412f3c85e9266690"
  },
  {
    "url": "thor/learn/index.html",
    "revision": "0e6421744df18b96c248e52fe9417ddc"
  },
  {
    "url": "thor/learn/proof-of-authority.html",
    "revision": "ceb22888e8639dab3ab8544f8a5c5c2e"
  },
  {
    "url": "thor/learn/transaction-calculation.html",
    "revision": "b8bff24754736bc642c2a5e8e1277602"
  },
  {
    "url": "thor/learn/transaction-model.html",
    "revision": "9f22c918a37a7c13bdfe6a3780a9eb3d"
  },
  {
    "url": "thor/learn/two-token-design.html",
    "revision": "5ed653af017e585f5da6af710796cf9b"
  },
  {
    "url": "tutorials/Connex-upgrade-Connex2_en.html",
    "revision": "78a5ce1178d4e75d432528dd15b0a8b1"
  },
  {
    "url": "tutorials/Connex-upgrade-Connex2.html",
    "revision": "ef1f6450e64fbd6f938c64f81b6342fe"
  },
  {
    "url": "tutorials/contribute.html",
    "revision": "768ecd08be2fb1b13cb03887631ed12e"
  },
  {
    "url": "tutorials/designated-fee-delegation.html",
    "revision": "af157d6d6a0bd0c93eb905b4cd5b8397"
  },
  {
    "url": "tutorials/forcible-transaction-dependency.html",
    "revision": "972dd5b5112579b766ddb09aabdac18e"
  },
  {
    "url": "tutorials/how-to-connect-sync2-to-solo-node.html",
    "revision": "c0dda619e1ee401b4f94e96ddd3e16e0"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-1.html",
    "revision": "415f020b277a24583b30318748c8bfb1"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-2.html",
    "revision": "ce36e8d2abd3993f78fb5cca14c43f72"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-3.html",
    "revision": "380d0a5fb71c17862ce348f6e2a173c7"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-1.html",
    "revision": "75e650f6bd271cd9b1e02f9d1dbf95e9"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-2.html",
    "revision": "6015592ad07b91bb6479d51c0a0f9748"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-3.html",
    "revision": "ba41d2caf795a5b656e700d00eb6c9d5"
  },
  {
    "url": "tutorials/index.html",
    "revision": "456a14cd640649928e2ae31484d49301"
  },
  {
    "url": "tutorials/Useful-tips-for-building-a-dApp.html",
    "revision": "cc601dd5da2711a93016d82db5001881"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
