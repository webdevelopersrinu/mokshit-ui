const cardSnippets = [
    {
        id: 'basic-card',
        title: 'Basic Card',
        description: 'A simple card with a header, content, and footer.',
        htmlCode: `<div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img class="w-full" src="https://ik.imagekit.io/kvtk1dcme/81875832657516a9c0a028ee5a5d9256.png" alt="Sunset in the mountains">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">Basic Card Title</div>
      <p class="text-gray-700 text-base">
        This is a simple card component with an image, title, and a short description.
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag1</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag2</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag3</span>
    </div>
  </div>`
    },
    {
        id: 'image-card',
        title: 'Image Card',
        description: 'A card with a prominent image and overlay text.',
        htmlCode: `<div class="relative rounded-lg overflow-hidden shadow-lg">
    <img class="w-full" src="https://ik.imagekit.io/kvtk1dcme/5.jfif" alt="Card Image">
    <div class="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 p-4">
      <h2 class="text-white text-xl font-bold">Image Card Title</h2>
      <p class="text-gray-300">This card displays text over an image background.</p>
    </div>
  </div>`
    },
    {
        id: 'hover-card',
        title: 'Hover Effect Card',
        description: 'A card component that scales up slightly on hover.',
        htmlCode: `<div class="max-w-sm rounded overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
    <img class="w-full" src="https://ik.imagekit.io/kvtk1dcme/52b7c66b00980da11076337ca5d96489.jfif" alt="Hover Card Image">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">Hover Effect Card</div>
      <p class="text-gray-700 text-base">
        This card slightly enlarges when hovered over to create a dynamic effect.
      </p>
    </div>
  </div>`
    },


    {
        id: 'light-product-card-sneakers',
        title: 'Product Card - Stylish Sneakers',
        description: 'A product card displaying stylish sneakers with an image, description, and a Buy Now button.',
        htmlCode: `    <div class="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white">
            <img class="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="Product Image" />
            <div class="p-5">
                <h2 class="text-xl font-semibold text-gray-900">Stylish Sneakers</h2>
                <p class="text-gray-600 text-sm mt-2">Perfect comfort and modern design for everyday use.</p>
                <div class="mt-4 flex justify-between items-center">
                    <span class="text-lg font-bold text-blue-600">$49.99</span>
                    <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Buy Now</button>
                </div>
            </div>
        </div>`
    },
    {
        id: 'light-product-card-smart-watch',
        title: 'Product Card - Smart Watch',
        description: 'A product card with backdrop-blur, displaying a smart watch, title, description, price, and an Add to Cart button.',
        htmlCode: `<div class="relative bg-white/30 backdrop-blur-lg shadow-lg rounded-xl p-6 w-80">
            <img class="w-full h-52 rounded-xl object-cover" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="Product Image" />
            <h3 class="text-xl font-semibold text-white mt-4">Smart Watch</h3>
            <p class="text-white/80 text-sm mt-2">Track your health and stay connected on the go.</p>
            <div class="mt-4 flex justify-between items-center">
                <span class="text-lg font-bold text-yellow-400">$99.99</span>
                <button class="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition">Add to Cart</button>
            </div>
        </div>`
    },
    {
        id: 'light-product-card-headphones',
        title: 'Product Card - Wireless Headphones',
        description: 'A product card for wireless headphones displaying product image, title, description, and price with a Buy Now button.',
        htmlCode: `    <div class="bg-gray-100 p-6 rounded-xl shadow-inner flex flex-col items-center w-80">
            <img class="w-40 h-40 rounded-lg shadow-lg" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D" alt="Product" />
            <h2 class="text-lg font-semibold text-gray-800 mt-4">Wireless Headphones</h2>
            <p class="text-gray-500 text-sm mt-2 text-center">Experience high-quality sound with noise cancellation.</p>
            <span class="text-2xl font-bold text-gray-900 mt-3">$129.99</span>
            <button class="mt-4 bg-gray-300 shadow-md px-6 py-2 rounded-full text-gray-700 hover:shadow-lg transition">Buy Now</button>
        </div>`
    },
    {
        id: 'light-review-card-ux',
        title: 'Review Card - UI/UX Review Check',
        description: 'A review card with a large image header, title, review text, and user information.',
        htmlCode: `<div class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
        <div
            class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
            <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                alt="ui/ux review check" />
        </div>
        <div class="p-6">
            <h4 class="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                UI/UX Review Check
            </h4>
            <p class="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-inherit">
                Because it&apos;s about motivating the doers. Because I&apos;m here to follow my dreams and inspire others.
            </p>
        </div>
        <div class="flex items-center justify-between p-6">
            <div class="flex items-center -space-x-3">
                <img alt="natali craig"
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    class="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10" />
                <img alt="Tania Andrew"
                    src="https://randomuser.me/api/portraits/women/31.jpg"
                    class="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10" />
                <img alt="Samuel Abera"
                    src="https://randomuser.me/api/portraits/men/33.jpg"
                    class="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10" />
                <img alt="Samuel Abera"
                    src="https://randomuser.me/api/portraits/women/32.jpg"
                    class="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10" />
                <img alt="Samuel Abera"
                    src="https://randomuser.me/api/portraits/men/44.jpg"
                    class="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10" />
                <img alt="Samuel Abera"
                    src="https://randomuser.me/api/portraits/women/42.jpg"
                    class="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10" />
                <span
                    class="flex items-center justify-center bg-white dark:bg-gray-800 text-sm text-gray-800 dark:text-white font-semibold border-2 border-gray-200 dark:border-gray-700 rounded-full h-9 w-9">
                    +999
                </span>
            </div>
            <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                January 10
            </p>
        </div>
    </div>`
    },
    {
        id: 'light-product-card-oraimo',
        title: 'Product Card - Oraimo Headphones',
        description: 'A product card with discount badge, product image, title, brand, ratings, and an Add to Cart button.',
        htmlCode: `<div class="w-[80%] border border-blue-200 rounded-lg shadow-md p-4">
        <div class="absolute top-2 left-2 bg-orange-400 text-white text-xs font-semibold px-2 py-1 rounded-full">
            -20%
        </div>
        <button class="absolute top-2 right-2 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
            </svg>
        </button>
        <div>
            <img class="object-contain w-full h-[270px] fill" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="Product Image" />
        </div>
        <div class="mt-4">
            <h3 class="text-gray-800 font-medium text-base">
                Oraimo OHP-610 BoomPop 2 Dual Device Wireless Headphone
            </h3>
            <p class="uppercase text-green-600 text-xs font-medium">
                Oraimo
            </p>
            <div class="flex space-x-1 text-orange-500 text-sm mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927C9.349 2.2 10.651 2.2 10.951 2.927l1.558 3.779 4.004.37c.85.079 1.194 1.139.572 1.724l-2.922 2.658.87 3.917c.181.816-.68 1.448-1.419 1.034L10 13.01l-3.614 1.96c-.74.414-1.6-.218-1.419-1.034l.87-3.917-2.922-2.658c-.622-.585-.278-1.645.572-1.724l4.004-.37L9.049 2.927z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927C9.349 2.2 10.651 2.2 10.951 2.927l1.558 3.779 4.004.37c.85.079 1.194 1.139.572 1.724l-2.922 2.658.87 3.917c.181.816-.68 1.448-1.419 1.034L10 13.01l-3.614 1.96c-.74.414-1.6-.218-1.419-1.034l.87-3.917-2.922-2.658c-.622-.585-.278-1.645.572-1.724l4.004-.37L9.049 2.927z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927C9.349 2.2 10.651 2.2 10.951 2.927l1.558 3.779 4.004.37c.85.079 1.194 1.139.572 1.724l-2.922 2.658.87 3.917c.181.816-.68 1.448-1.419 1.034L10 13.01l-3.614 1.96c-.74.414-1.6-.218-1.419-1.034l.87-3.917-2.922-2.658c-.622-.585-.278-1.645.572-1.724l4.004-.37L9.049 2.927z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-200 dark:text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927C9.349 2.2 10.651 2.2 10.951 2.927l1.558 3.779 4.004.37c.85.079 1.194 1.139.572 1.724l-2.922 2.658.87 3.917c.181.816-.68 1.448-1.419 1.034L10 13.01l-3.614 1.96c-.74.414-1.6-.218-1.419-1.034l.87-3.917-2.922-2.658c-.622-.585-.278-1.645.572-1.724l4.004-.37L9.049 2.927z"/>
                </svg>
            </div>
            <div class="flex items-end justify-between">
                <div class="flex items-baseline space-x-2 mt-2">
                    <span class="text-blue-600 text-xl font-semibold">$806.33</span>
                    <span class="text-gray-400 text-sm line-through">$1500.00</span>
                </div>
                <button class="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                        <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                        <path d="M17 17h-11v-14h-2" />
                        <path d="M6 5l14 1l-1 7h-13" />
                    </svg>
                </button>
            </div>
        </div>`
    },
    {
        id: 'light-simple-card',
        title: 'Simple Product Card',
        description:
            'A simple product card with an image, title, price and a Buy Now button.',
        htmlCode: `<div class="bg-white rounded-lg overflow-hidden shadow-lg border border-blue-200">
        <a href="#">
            <img class="p-8 rounded-t-lg" src="https://flowbite.com/docs/images/products/apple-watch.png" alt="product image" />
        </a>
        <div class="px-5 pb-5">
            <a href="#">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
            </a>
            <div class="flex items-center mt-2.5 mb-5">
                <div class="flex items-center space-x-1 rtl:space-x-reverse">
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                </div>
                <div class="flex items-end justify-between">
                    <div class="flex items-baseline space-x-2 mt-2">
                        <span class="text-blue-600 text-xl font-semibold">$806.33</span>
                        <span class="text-gray-400 text-sm line-through">$1500.00</span>
                    </div>
                    <button class="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                            <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                            <path d="M17 17h-11v-14h-2" />
                            <path d="M6 5l14 1l-1 7h-13" />
                        </svg>
                    </button>
                </div>
            </div>`
    },
    {
        id: 'light-simple-card-horizontal',
        title: 'Simple Horizontal Product Card',
        description: 'A horizontal product card with an image, product details, and a Buy Now button.',
        htmlCode: `<div class="flex flex-col gap-4 rounded-lg shadow-lg bg-white dark:bg-[#262525] group">
                <img class="w-[16rem] h-[12rem] sm:w-[18rem] sm:h-[14rem] object-center aspect-square rounded-t-lg" src="https://techakim.com/sam/tg/7268/li/imgs/pizza.jpg" alt="Card Image" />
                <div class="flex flex-col">
                    <div class="flex items-center justify-between my-4">
                        <div class="relative w-1/2 h-[4rem] flex items-center justify-end border-l-4 border-rose-600 rounded-tr-full rounded-br-full bg-rose-100 dark:bg-[#414141]">
                            <img class="absolute right-2 z-30 w-11 h-11 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/a/ACg8ocIexhmmTS8LcwWo1fPGY5Fl3KXpd-JuBE_Gj56P3rUR2g=s96-c" alt="Samuel Abera avatar" />
                            <img class="absolute right-8 z-20 w-11 h-11 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXN8ZW58MHwwfHx8MTczNjUxNDE0NHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Samuel Abera avatar" />
                            <img class="absolute right-14 z-10 w-11 h-11 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHwwfHx8MTczNjUxNDE0NHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Samuel Abera avatar" />
                        </div>
                        <div class="flex gap-1 items-center justify-end text-2xl">
                            <ion-icon class="text-yellow-500" name="star"></ion-icon>
                            <p class="dark:text-white font-bold pr-4">5.0</p>
                        </div>
                    </div>
                    <h2 class="pl-4 text-2xl font-semibold group-hover:text-rose-600 cursor-pointer dark:text-white">Pizza Slice</h2>
                    <p class="pl-4 text-gray-800 dark:text-gray-300 mb-4">Cheese, Ham & Pineapple</p>
                    <button class="w-fit ml-4 mb-6 text-xl text-rose-700 dark:text-white font-bold py-2 px-4 dark:border dark:border-gray-500 rounded-full uppercase">Order now</button>
                </div>
            </div>`
    },


    {
        id: 'light-horizontal-post-card',
        title: 'Horizontal Form Card',
        description: 'A horizontal product card with an image, product details, and a form section.',
        htmlCode: `<div class="flex flex-col gap-4 justify-between flex gap-4 items-start mx-4 py-12">
                <div class="flex bg-white rounded-lg shadow dark:bg-gray-800 flex-col md:flex-row">
                    <div class="relative w-full md:w-48 flex justify-center items-center">
                        <img src="https://cdn.pixabay.com/photo/2013/07/13/14/07/apparel-162180_960_720.png" alt="shopping image" class="object-cover w-full h-48 md:h-full rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
                    </div>
                    <form class="flex-auto p-6">
                        <div class="flex flex-wrap">
                            <h1 class="flex-auto text-xl font-semibold dark:text-gray-50">Product name</h1>
                            <div class="text-xl font-semibold text-gray-500 dark:text-gray-300">$110.00</div>
                            <div class="flex-none w-full mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">In stock</div>
                        </div>
                        <div class="flex items-baseline mt-4 mb-6 text-gray-700 dark:text-gray-300">
                            <div class="flex space-x-2">
                                <label class="text-center">
                                    <input type="radio" class="flex items-center justify-center w-6 h-6 accent-violet-600 bg-gray-100 rounded-lg dark:bg-gray-600" name="size" value="xs" />XS
                                </label>
                                <label class="text-center">
                                    <input type="radio" class="flex items-center justify-center w-6 h-6 accent-violet-600" name="size" value="s" />S
                                </label>
                                <label class="text-center">
                                    <input type="radio" class="flex items-center justify-center w-6 h-6 accent-violet-600" name="size" value="m" />M
                                </label>
                                <label class="text-center">
                                    <input type="radio" class="flex items-center justify-center w-6 h-6 accent-violet-600" name="size" value="l" />L
                                </label>
                                <label class="text-center">
                                    <input type="radio" class="flex items-center justify-center w-6 h-6 accent-violet-600" name="size" value="xl" />XL
                                </label>
                            </div>
                            <a href="#" class="hidden ml-auto text-sm text-gray-500 underline md:block dark:text-gray-300">Size Guide</a>
                        </div>
                        <div class="flex mb-4 text-sm font-medium">
                            <button type="button" class="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
                                Buy now
                            </button>
                        </div>
                        <p class="text-sm text-gray-500 dark:text-gray-300">Free shipping on all continental US orders.</p>
                    </form>
                </div>
            </div>`
    },
];

export default cardSnippets;
