
<template>
<div class="bg-white">
    <Navbar />
    <main>
        <!-- Hero section -->
        <div class="relative">
<!--            <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />-->
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                    <div class="absolute inset-0">
                        <img class="h-full w-full object-cover" src="../../../assets/images/hero.jpg" alt="People working on laptops" />
                        <div class="absolute inset-0 bg-gradient-to-b from-gray-500 to-transparent mix-blend-multiply" />
                    </div>
                    <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                        <h1 class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                            <span class="block text-white">Take control of your</span>
                            <span class="block text-indigo-200">customer support</span>
                        </h1>
                        <p class="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                        <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                            <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                                <a href="#" class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"> Get started </a>
                                <a href="#" class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"> Live demo </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Blog section -->
        <div class="relative bg-gray-50 py-16">
            <div class="relative">
                <div class="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                    <h2 class="text-base font-semibold tracking-wider text-cyan-600 uppercase">Our Mission</h2>

                    <p class="mt-5 mx-auto max-w-prose text-xl text-gray-500"><span class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">The Asclepius Initiative: </span>Working towards better healthcare coverage for all, so you can get the care you need, when you need it, at an affordable price, hassle-free.</p>
                </div>
                <div class="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
                    <div v-for="post in blogPosts" :key="post.id" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div class="flex-shrink-0">
                            <img class="h-48 w-full object-cover" :src="post.imageUrl" alt="" />
                        </div>
                        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                            <div class="flex-1">
                                <p class="text-sm font-medium text-cyan-600">
                                    <a :href="post.category.href" class="hover:underline">
                                        {{ post.category.name }}
                                    </a>
                                </p>
                                <a :href="post.href" class="block mt-2">
                                    <p class="text-xl font-semibold text-gray-900">
                                        {{ post.title }}
                                    </p>
                                    <p class="mt-3 text-base text-gray-500">
                                        {{ post.preview }}
                                    </p>
                                </a>
                            </div>
<!--                            <div class="mt-6 flex items-center">-->
<!--                                <div class="flex-shrink-0">-->
<!--                                    <a :href="post.author.href">-->
<!--                                        <img class="h-10 w-10 rounded-full" :src="post.author.imageUrl" :alt="post.author.name" />-->
<!--                                    </a>-->
<!--                                </div>-->
<!--                                <div class="ml-3">-->
<!--                                    <p class="text-sm font-medium text-gray-900">-->
<!--                                        <a :href="post.author.href" class="hover:underline">-->
<!--                                            {{ post.author.name }}-->
<!--                                        </a>-->
<!--                                    </p>-->
<!--                                    <div class="flex space-x-1 text-sm text-gray-500">-->
<!--                                        <time :datetime="post.datetime">-->
<!--                                            {{ post.date }}-->
<!--                                        </time>-->
<!--                                        <span aria-hidden="true"> &middot; </span>-->
<!--                                        <span> {{ post.readingLength }} read </span>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- CTA Section -->
        <div class="relative bg-gray-900">
            <div class="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                <img class="w-full h-full object-cover" src="images/man-in-wheelchair.jpg" alt="" />
                <div aria-hidden="true" class="absolute inset-0" />
            </div>
            <div class="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
                <div class="md:ml-auto md:w-1/2 md:pl-10">
                    <p class="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">Better Health. Better Life</p>
                    <p class="mt-3 text-lg text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.</p>
                    <div class="mt-8">
                        <div class="inline-flex rounded-md shadow">
                            <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
                                Visit the help center
                                <ExternalLinkIcon class="-mr-1 ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <Footer />

</div>
</template>

<script>
import { defineComponent, h } from 'vue'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import {
    CloudUploadIcon,
    CogIcon,
    LockClosedIcon,
    MenuIcon,
    RefreshIcon,
    ServerIcon,
    ShieldCheckIcon,
    XIcon,
} from '@heroicons/vue/outline'
import { ChevronRightIcon, ExternalLinkIcon } from '@heroicons/vue/solid'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]
const features = [
    {
        name: 'Push to Deploy',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi vitae lobortis.',
        icon: CloudUploadIcon,
    },
    {
        name: 'SSL Certificates',
        description: 'Qui aut temporibus nesciunt vitae dicta repellat sit dolores pariatur. Temporibus qui illum aut.',
        icon: LockClosedIcon,
    },
    {
        name: 'Simple Queues',
        description: 'Rerum quas incidunt deleniti quaerat suscipit mollitia. Amet repellendus ut odit dolores qui.',
        icon: RefreshIcon,
    },
    {
        name: 'Advanced Security',
        description: 'Ullam laboriosam est voluptatem maxime ut mollitia commodi. Et dignissimos suscipit perspiciatis.',
        icon: ShieldCheckIcon,
    },
    {
        name: 'Powerful API',
        description:
            'Ab a facere voluptatem in quia corrupti veritatis aliquam. Veritatis labore quaerat ipsum quaerat id.',
        icon: CogIcon,
    },
    {
        name: 'Database Backups',
        description: 'Quia qui et est officia cupiditate qui consectetur. Ratione similique et impedit ea ipsum et.',
        icon: ServerIcon,
    },
]
const blogPosts = [
    {
        id: 1,
        title: "What's New?",
        href: '#',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { name: 'Article', href: '#' },
        imageUrl:
            'images/stethescope.jpg',
        preview:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
        // author: {
        //     name: 'Roel Aufderehar',
        //     imageUrl:
        //         'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        //     href: '#',
        // },
        readingLength: '6 min',
    },
    {
        id: 2,
        title: 'We Deserve Healthcare',
        href: '#',
        date: 'Mar 10, 2020',
        datetime: '2020-03-10',
        category: { name: 'Video', href: '#' },
        imageUrl:
            'images/people-wearing-masks.jpg',
        preview:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
        author: {
            name: 'Brenna Goyette',
            imageUrl:
                'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            href: '#',
        },
        readingLength: '4 min',
    },
    {
        id: 3,
        title: 'Facts and Myth',
        href: '#',
        date: 'Feb 12, 2020',
        datetime: '2020-02-12',
        category: { name: 'Case Study', href: '#' },
        imageUrl:
            'images/pills.jpg',
        preview:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
        author: {
            name: 'Daniela Metz',
            imageUrl:
                'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            href: '#',
        },
        readingLength: '11 min',
    },
]
const footerNavigation = {
    solutions: [
        { name: 'Marketing', href: '#' },
        { name: 'Analytics', href: '#' },
        { name: 'Commerce', href: '#' },
        { name: 'Insights', href: '#' },
    ],
    support: [
        { name: 'Pricing', href: '#' },
        { name: 'Documentation', href: '#' },
        { name: 'Guides', href: '#' },
        { name: 'API Status', href: '#' },
    ],
    company: [
        { name: 'About', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Jobs', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Partners', href: '#' },
    ],
    legal: [
        { name: 'Claim', href: '#' },
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
    ],
    social: [
        {
            name: 'Facebook',
            href: '#',
            icon: defineComponent({
                render: () =>
                    h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                        h('path', {
                            'fill-rule': 'evenodd',
                            d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
                            'clip-rule': 'evenodd',
                        }),
                    ]),
            }),
        },
        {
            name: 'Instagram',
            href: '#',
            icon: defineComponent({
                render: () =>
                    h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                        h('path', {
                            'fill-rule': 'evenodd',
                            d: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
                            'clip-rule': 'evenodd',
                        }),
                    ]),
            }),
        },
        {
            name: 'Twitter',
            href: '#',
            icon: defineComponent({
                render: () =>
                    h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                        h('path', {
                            d: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
                        }),
                    ]),
            }),
        },
    ],
}

export default {
    components: {
        Footer,
        Popover,
        PopoverButton,
        PopoverPanel,
        ChevronRightIcon,
        ExternalLinkIcon,
        MenuIcon,
        XIcon,
        Navbar,
    },
    setup() {
        return {
            navigation,
            features,
            blogPosts,
            footerNavigation,
        }
    },
}
</script>



