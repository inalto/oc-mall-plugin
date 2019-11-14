(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{234:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"products"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#products"}},[t._v("#")]),t._v(" Products")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("Products")]),t._v(" component displays a list of products. The list can be sorted, filtered and paginated.")]),t._v(" "),s("h2",{attrs:{id:"properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),s("h3",{attrs:{id:"category-mixed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#category-mixed"}},[t._v("#")]),t._v(" "),s("code",[t._v("category")]),t._v(" (mixed)")]),t._v(" "),s("p",[t._v("Select only items from this "),s("router-link",{attrs:{to:"/digging-deeper/categories.html"}},[t._v("Category")]),t._v(". Possible values are:")],1),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Value")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("null")])]),t._v(" "),s("td",[t._v("Don't filter by category (display everything)")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("8")])]),t._v(" "),s("td",[t._v("Only show products from the category with the ID "),s("code",[t._v("8")]),t._v(" (use any integer)")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v(":slug")])]),t._v(" "),s("td",[t._v("Use the page's "),s("code",[t._v(":slug")]),t._v(" URL parameter to find the category to filter by")])])])]),t._v(" "),s("h3",{attrs:{id:"filtercomponent-string"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#filtercomponent-string"}},[t._v("#")]),t._v(" "),s("code",[t._v("filterComponent")]),t._v(" (string)")]),t._v(" "),s("p",[t._v("Alias of the "),s("router-link",{attrs:{to:"/components/products-filter.html"}},[t._v("ProductsFilter")]),t._v(" component that is used to filter\nthis "),s("code",[t._v("Products")]),t._v(" component. Defaults to "),s("code",[t._v("productsFilter")])],1),t._v(" "),s("h3",{attrs:{id:"filter-string"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#filter-string"}},[t._v("#")]),t._v(" "),s("code",[t._v("filter")]),t._v(" (string)")]),t._v(" "),s("p",[t._v("Use this property to force a filter for this component instance.")]),t._v(" "),s("p",[t._v("The expected value is a encoded query string. You can tweak your filter\nusing the "),s("router-link",{attrs:{to:"/components/products-filter.html"}},[t._v("ProductsFilter")]),t._v(" component and simply copy and paste\nthe query string:")],1),t._v(" "),s("p",[t._v("https://mall.offline.swiss/en/category/bikes"),s("a",{attrs:{href:"https://mall.offline.swiss/en/category/bikes?on_sale=true&material=aluminium.carbon&color=dark-grey",target:"_blank",rel:"noopener noreferrer"}},[t._v("?on_sale=true&material=aluminium.carbon&color=dark-grey"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('filter = "on_sale=true&material=aluminium.carbon&color=dark-grey"\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"includechildren-bool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#includechildren-bool"}},[t._v("#")]),t._v(" "),s("code",[t._v("includeChildren")]),t._v(" (bool)")]),t._v(" "),s("p",[t._v("Include all products or variants from child categories as well.")]),t._v(" "),s("h3",{attrs:{id:"setpagetitle-bool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setpagetitle-bool"}},[t._v("#")]),t._v(" "),s("code",[t._v("setPageTitle")]),t._v(" (bool)")]),t._v(" "),s("p",[t._v("If a category is defined, overwrite the page's title with the category's name. Also set any SEO information stored\nwith the category.")]),t._v(" "),s("h3",{attrs:{id:"includevariants-bool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#includevariants-bool"}},[t._v("#")]),t._v(" "),s("code",[t._v("includeVariants")]),t._v(" (bool)")]),t._v(" "),s("p",[t._v("Set this to "),s("code",[t._v("true")]),t._v(" to list all "),s("router-link",{attrs:{to:"/digging-deeper/products.html"}},[t._v("Variants")]),t._v(" as single items.\nSet this to "),s("code",[t._v("false")]),t._v(" to list only "),s("router-link",{attrs:{to:"/digging-deeper/products.html"}},[t._v("Products")]),t._v(".")],1),t._v(" "),s("h3",{attrs:{id:"perpage-int"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#perpage-int"}},[t._v("#")]),t._v(" "),s("code",[t._v("perPage")]),t._v(" (int)")]),t._v(" "),s("p",[t._v("How many items to show per page.")]),t._v(" "),s("h3",{attrs:{id:"paginate-bool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#paginate-bool"}},[t._v("#")]),t._v(" "),s("code",[t._v("paginate")]),t._v(" (bool)")]),t._v(" "),s("p",[t._v("Display more than one page.")]),t._v(" "),s("h3",{attrs:{id:"sort-string"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sort-string"}},[t._v("#")]),t._v(" "),s("code",[t._v("sort")]),t._v(" (string)")]),t._v(" "),s("p",[t._v("The sort mode applied to the result set. Possible values are:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Value")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("manual")])]),t._v(" "),s("td",[t._v("Order defined via Backend")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("bestseller")])]),t._v(" "),s("td",[t._v("Best selling first")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("latest")])]),t._v(" "),s("td",[t._v("Latest products first")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("oldest")])]),t._v(" "),s("td",[t._v("Oldest products first")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("price_low")])]),t._v(" "),s("td",[t._v("Lowest price first")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("price_high")])]),t._v(" "),s("td",[t._v("Highest price first")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("random")])]),t._v(" "),s("td",[t._v("Sort randomly")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("name")])]),t._v(" "),s("td",[t._v("Sort by name")])])])]),t._v(" "),s("h2",{attrs:{id:"example-implementations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-implementations"}},[t._v("#")]),t._v(" Example implementations")]),t._v(" "),s("h3",{attrs:{id:"display-all-items-of-a-category"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#display-all-items-of-a-category"}},[t._v("#")]),t._v(" Display all items of a category")]),t._v(" "),s("div",{staticClass:"language-ini line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-ini"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[products]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("category")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(' ":slug"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("setPageTitle")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" 1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("includeVariants")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" 1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("includeChildren")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" 1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("perPage")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" 9")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("h3",{attrs:{id:"display-the-four-best-selling-products"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#display-the-four-best-selling-products"}},[t._v("#")]),t._v(" Display the four best selling products")]),t._v(" "),s("div",{staticClass:"language-ini line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-ini"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[products]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("perPage")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" 4")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("paginate")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" 0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("includeVariants")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" 0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("sort")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(' "bestseller"')]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h3",{attrs:{id:"display-the-four-latest-items"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#display-the-four-latest-items"}},[t._v("#")]),t._v(" Display the four latest items")]),t._v(" "),s("div",{staticClass:"language-ini line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-ini"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[products]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("perPage")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" 4")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("paginate")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" 0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("includeVariants")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" 1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("sort")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(' "latest"')]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h3",{attrs:{id:"display-eight-random-products-that-are-currently-on-sale"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#display-eight-random-products-that-are-currently-on-sale"}},[t._v("#")]),t._v(" Display eight random products that are currently on sale")]),t._v(" "),s("div",{staticClass:"language-ini line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-ini"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[products]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("perPage")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" 8")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("paginate")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" 0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("includeVariants")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" 1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("sort")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(' "random"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("filter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(' "on_sale=true"')]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("h3",{attrs:{id:"display-four-random-items-from-the-same-category-of-the-currently-viewed-product"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#display-four-random-items-from-the-same-category-of-the-currently-viewed-product"}},[t._v("#")]),t._v(" Display four random items from the same category of the currently viewed product")]),t._v(" "),s("div",{staticClass:"language-ini line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-ini"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("title")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(' "Product"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("url")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(' "/product/:slug/:variant?"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("layout")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(' "default"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("is_hidden")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" 0")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[product]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("product")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(' ":slug"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("variant")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(' ":slug"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[products relatedProducts]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("setPageTitle")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" 0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("includeVariants")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" 1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("includeChildren")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" 0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("perPage")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" 4")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("paginate")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" 0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("sort")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(' "random"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")])]),t._v("\nuse OFFLINE\\Mall\\Models\\Category;\nfunction onStart() {\n    // Fetch the category from the product component.\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("    $category")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" Category::find(optional($this->page->components['product']->item)->category_id);")]),t._v("\n    if ($category) {\n        // If a category is available, use it for the products component.\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("        $this->page->components['products']->category")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" $category;")]),t._v("\n    }\n}\n"),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")])]),t._v("\n{% component 'product' %}\n\n<h2>Other products from this category</h2>\n{% component 'relatedProducts' %}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br")])]),s("h3",{attrs:{id:"add-a-add-to-cart-button-on-the-category-page"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-a-add-to-cart-button-on-the-category-page"}},[t._v("#")]),t._v(" Add a add to cart button on the category page")]),t._v(" "),s("p",[t._v("Add the following "),s("code",[t._v("a")]),t._v(" tag to your item partial "),s("code",[t._v("/plugins/offline/components/products/item.htm")])]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mall-products-item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Add this --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mall-products-item__cart-button"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("javascript:;"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("data-request")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{ __SELF__ }}::onAddToCart"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("data-request-success")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("data.added && $.publish('mall.cart.productAdded', data)"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" \n       "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("data-request-data")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("product: '{{ item.productHashId }}', variant: '{{ item.variantHashId }}'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("data-request-flash")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        Add to cart\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- /Add this --\x3e")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{ productPage|page({slug: item.slug, variant: item.variantId}) }}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Thumb, Title, etc. --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);