const headerTemplate = document.createElement("template");

headerTemplate.innerHTML = `
   <style>
      @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
      /* .navbar-1-5 .btn-fill {
            background-color: #32735f;
            transition: 0.3s;
         }
         .navbar-1-5 .btn-fill:hover {
            background-color: #2a7e65;
            transition: 0.3s;
         } */
      .navbar-1-5 nav a.nav-link:hover,
      .navbar-1-5 nav a.nav-link.active {
         font-weight: 500;
         transition: 0.3s;
      }
      .navbar-1-5 nav a.nav-link {
         /* color: #F17714; */
         transition: 0.3s;
      }
      .navbar-1-5 #menu-toggle:checked + #menu,
      .navbar-1-5 #menu-toggle:checked + #menu + #menu {
         display: block;
         background-color: white;
      }
   </style>
   <header
      class="navbar-1-5 max-h-10"
      style="font-family: 'Poppins', sans-serif"
   >
      <div
         class="container mx-auto flex flex-wrap flex-row items-center justify-between"
      >
         <nav
            class="lg:flex hidden lg:w-2/5 flex-wrap items-center text-base md:ml-auto lg:space-y-0 space-y-6 lg:space-x-2 space-x-0"
         >
            <a
               href="index.html"
               class="text-white bg-orange-rkj rounded-full p-0 lg:p-2 nav-link"
               >Beranda</a
            >
            <a
               href="index.html#catalog"
               class="text-orange-rkj hover:bg-gray-100 rounded-lg p-0 lg:p-2 nav-link"
               >Produk</a
            >
            <a
               href="https://api.whatsapp.com/send/?phone=6282221045069&text=Halo+Rumah+Keju+Jogja+%2C+Saya+ingin+bertanya+seputar+pelatihan/edukasi+KEJUGJA+Artisan+Cheese&type=phone_number&app_absent=0"
               class="text-orange-rkj hover:bg-gray-100 rounded-lg p-0 lg:p-2 nav-link"
               >Workshop</a
            >
            <a
               href="about.html"
               class="text-orange-rkj hover:bg-gray-100 rounded-lg p-0 lg:p-2 nav-link"
               >About Us</a
            >
         </nav>
         <a
            href="index.html"
            class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center lg:items-center lg:justify-center"
         >
            <img src="assets/logo.png" width="120" alt="" />
         </a>
         <label for="menu-toggle" class="cursor-pointer lg:hidden block">
            <svg
               class="w-6 h-6"
               fill="none"
               stroke="#092A33"
               viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
               ></path>
            </svg>
         </label>
         <input class="hidden" type="checkbox" id="menu-toggle" />
         <div
            class="hidden w-full flex-wrap items-center text-base justify-center"
            id="menu"
         >
            <nav
               class="text-center lg:space-x-12 space-x-0 lg:flex items-center justify-between text-base pt-8 lg:pt-0 lg:space-y-0 space-y-6"
            >
               <a href="index.html" class="nav-link block active"
                  >Beranda</a
               >
               <a href="index.html#catalog" class="nav-link block"
                  >Produk</a
               >
               <a
                  href="https://api.whatsapp.com/send?phone=6289670155097&text=Hallo kak. Saya [nama] tertarik dengan kejugja, Boleh minta info lebih lanjut terkait produk/workshop?"
                  class="nav-link block"
                  >Workshop</a
               >
               <a href="about.html" class="nav-link block">About Us</a>
            </nav>
         </div>
         <div
            class="lg:w-2/5 lg:inline-flex text-center py-4 lg:justify-end ml-0 hidden lg:items-center w-full"
            id="menu"
         >
            <a
               href="https://api.whatsapp.com/send?phone=6289670155097&text=Hallo kak. Saya [nama] tertarik dengan kejugja, Boleh minta info lebih lanjut terkait produk/workshop?"
               class="bg-orange-rkj hover:bg-orange-400 text-white items-center border-0 py-3 px-8 focus:outline-none rounded-2xl font-medium text-base mt-6 lg:mt-0"
            >
               Contact Us
            </a>
         </div>
      </div>
   </header>
`;

class Header extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const tailwind = document.querySelector('link[href*="output"]');
		const shadowRoot = this.attachShadow({ mode: "closed" });

		if (tailwind) {
			shadowRoot.appendChild(tailwind.cloneNode());
		}

		shadowRoot.appendChild(headerTemplate.content);
	}
}

customElements.define("header-component", Header);
