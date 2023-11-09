const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
   <style>
      /* #Mega Menu Styles
      –––––––––––––––––––––––––––––––––––––––––––––––––– */
      .mega-menu {
         display: none;
         left: 0;
         position: absolute;
         text-align: left;
         width: 100%;
      }

      .normal-menu {
         display: none;
         /* left: 0; */
         position: absolute;
         text-align: left;
         width: 386px;
      }

      /* #hoverable Class Styles
      –––––––––––––––––––––––––––––––––––––––––––––––––– */
      .hoverable {
         position: static;
      }

      .hoverable > a:after {
         content: "\\25BC";
         font-size: 10px;
         padding-left: 6px;
         position: relative;
         top: -1px;
      }

      .hoverable:hover .mega-menu {
         display: block;
      }

      .hoverable:hover .normal-menu {
         display: block;
      }

      .color-orange {
         color:#F17714;
      }

      .bd-orange{
         border-color: #F17714;
      }
      .bg-orange{
         background-color: #F17714;
      }
   </style>
   <header>
      <nav
         class="px-6 py-2 shadow-md md:flex"
         style="background-color: #fff"
      >
         <div class="container flex flex-wrap justify-between items-center">
            <div
               class="text-3xl text-gray-800 font-bold hover:text-gray-800"
            >
               <a href="index.html" class="flex items-center">
                  <div class="flex md:block text-center ml-2 py-1">
                     <div class="flex block items-center">
                        <img
                           src="/assets/img/logo.png"
                           alt="UNTAG Logo"
                           class="ml-3 md:ml-0 2xl:ml-6 h-10"
                        />
                        <div class="text-left flex items-center">
                           <span
                              class="px-4 text-sm md:block font-semibold text-white"
                           >
                              Universitas
                              <br />
                              17 Agustus 1945 Samarinda
                           </span>
                           <span
                              class="px-4 text-sm md:block font-semibold text-white"
                           ></span>
                        </div>
                     </div>
                  </div>
               </a>
            </div>
            <div class="md:hidden">
               <button
                  type="button"
                  class="block text-gray-900 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
               >
                  <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                     <path
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                     />
                  </svg>
               </button>
            </div>
         </div>
         <div
            class="w-full pb-2 md:flex md:items-center md:justify-end md:pb-0"
         >
            <div class="flex flex-col px-2 md:flex-row w-full">
               <ul class="flex flex-nowrap">
                  <li>
                     <a
                        href="index.html"
                        class="color-orange relative block p-4 text-sm text-white lg:text-base font-bold hover:text-white"
                        aria-current="page"
                     >
                        Beranda
                     </a>
                  </li>

                  <li>
                     <a
                        href="index.html"
                        class="color-orange relative block p-4 text-sm text-white lg:text-base font-bold hover:text-gray-300"
                        aria-current="page"
                     >
                        Produk
                     </a>
                  </li>

                  <li>
                     <a
                        href="index.html"
                        class="relative block p-4 text-sm text-white lg:text-base font-bold hover:text-gray-300"
                        aria-current="page"
                        style="color:#F17714"
                     >
                        Workshop
                     </a>
                  </li>

                  <li>
                     <a
                        href="index.html"
                        class="relative block p-4 text-sm text-white lg:text-base font-bold hover:text-gray-300"
                        aria-current="page"
                        style="color:#F17714"
                     >
                        About Us
                     </a>
                  </li>

               </ul>
            </div>
            <div class="flex flex-col px-2 md:flex-row">
               <div class="hidden relative mr-3 md:ml-3 md:mt-2 md:block">
                  <div
                     class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
                  >
                     <svg
                        class="w-5 h-5 color-orange"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           fill-rule="evenodd"
                           d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                           clip-rule="evenodd"
                        ></path>
                     </svg>
                  </div>
                  <input
                     type="text"
                     id="search-query"
                     class="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border bd-orange sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     
                  />
               </div>
            </div>
         </div>
      </nav>
   </header>
`;

class Header extends HTMLElement {
   constructor() {
   super(); 
   }

   connectedCallback() {
      const tailwind = document.querySelector('link[href*="tailwind"]');
      const shadowRoot = this.attachShadow({ mode: 'closed' });

      if (tailwind) {
      shadowRoot.appendChild(tailwind.cloneNode());
      }

      shadowRoot.appendChild(headerTemplate.content);
   }
}

customElements.define('header-component', Header);