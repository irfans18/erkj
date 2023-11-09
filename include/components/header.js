const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
   <header>
      <nav
         class="px-6 py-2 shadow-md md:flex"
         style="background-color: #c21c14"
      >
         <!-- <div class="flex justify-between items-center"> -->
         <div class="container flex flex-wrap justify-between items-center">
            <div
               class="text-3xl text-gray-800 font-bold hover:text-gray-800"
            >
               <a href="#" class="flex items-center">
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
            <div class="flex flex-col px-2 md:flex-row">
               <a
                  id="home-btn"
                  href="#"
                  class="py-2 px-2 text-white font-medium hover:text-gray-300 md:mx-2"
               >
                  Beranda
               </a>
               <a
                  href="#"
                  class="py-2 px-2 text-white font-medium hover:text-gray-300 md:mx-2"
               >
                  Visi Misi
               </a>
            </div>
            <div class="flex flex-col px-2 md:flex-row">
               <div class="hidden relative mr-3 md:ml-3 md:mt-2 md:block">
                  <div
                     class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
                  >
                     <svg
                        class="w-5 h-5 text-gray-500"
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
                     class="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="Pencarian..."
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