export class Service {
    selectedCategoryId: number;

    constructor() {
        this.loadSelectedCategoryId();
    }

    loadSelectedCategoryId(): void {
        const cartData = localStorage.getItem('selectedCategory');
        if (!!cartData) {
            this.selectedCategoryId = +cartData;
        } else {
            this.selectedCategoryId = this.getCategories()[0].id;
        }
    }

    saveSelectedCategoryId(selectedCategoryId: number): void {
        this.selectedCategoryId = selectedCategoryId;
        localStorage.setItem('selectedCategory', selectedCategoryId.toString());
    }

    getCategories(): { id: number, title: string, menu: any }[] {
        return this.categories.map(c => ({
            id: c.id,
            title: c.name,
            menu: c.items,
        }));
    }

    categories = [
        {
            id: 1,
            name: "Cakes",
            items: [
                {
                    id: 1,
                    image: "https://www.wiltshirecountryfayre.co.uk/wp-content/uploads/2024/09/Chocolate-fudge-cake-1.png",
                    name: "Classic Chocolate Fudge Cake",
                    description: "This rich and decadent chocolate fudge cake is a timeless classic that never fails to impress. Made with premium cocoa powder and high-quality dark chocolate, each layer is incredibly moist and packed with intense chocolate flavor. The cake is filled with smooth chocolate ganache and covered in a velvety chocolate buttercream that melts in your mouth. Perfect for birthdays, anniversaries or any special occasion, this cake is sure to satisfy even the most discerning chocolate lovers. The decoration is elegant yet simple, with chocolate shavings and edible gold leaf for a touch of luxury. Serves 12-15 people comfortably. Requires 24 hours notice for preparation to ensure perfect texture and flavor development.",
                    price: 45.99,
                    ingredients: [
                        "Premium dark chocolate (70% cocoa)",
                        "Cocoa powder",
                        "All-purpose flour",
                        "Granulated sugar",
                        "Free-range eggs",
                        "Unsalted butter",
                        "Whole milk",
                        "Heavy cream",
                        "Vanilla extract",
                        "Baking powder",
                        "Salt"
                    ]
                },
                {
                    id: 2,
                    image: "https://masterpiecer-images.s3.yandex.net/b561f7205d0011eebb3cceda526c50ab:upscaled",
                    name: "Red Velvet Supreme",
                    description: "Our signature Red Velvet cake is a stunning visual masterpiece with its vibrant red color contrasting beautifully with the snowy white cream cheese frosting. The cake layers are incredibly soft with a subtle cocoa flavor and slight tang from buttermilk. Each bite delivers the perfect balance of sweetness and richness. The cream cheese frosting is whipped to perfection - not too sweet with just the right amount of tanginess. Decorated with red velvet crumbs and delicate white chocolate curls, this cake is perfect for Valentine's Day, Christmas or any occasion that calls for something special. We use only natural food coloring for the vibrant hue. Serves 12-14 people. 48 hours notice recommended for optimal color and flavor.",
                    price: 49.99,
                    ingredients: [
                        "Cake flour",
                        "Buttermilk",
                        "Unsalted butter",
                        "Granulated sugar",
                        "Eggs",
                        "Natural red food coloring",
                        "Cocoa powder",
                        "Vanilla extract",
                        "White vinegar",
                        "Baking soda",
                        "Cream cheese",
                        "Powdered sugar",
                        "Heavy cream"
                    ]
                },
                {
                    id: 3,
                    image: "https://images.radio-canada.ca/q_auto,w_900/v1/alimentation/recette/1x1/ithq-gateau-foret-noire.jpg",
                    name: "Black Forest Gateau",
                    description: "Our authentic Black Forest Gateau stays true to the traditional German recipe while adding our own subtle improvements. Layers of rich chocolate sponge cake are soaked in kirsch syrup and layered with fresh whipped cream and tart morello cherries. The exterior is decorated with more whipped cream, chocolate shavings and whole cherries for a dramatic presentation. The combination of bitter chocolate, boozy syrup, sweet cream and tart cherries creates a symphony of flavors in every bite. We use imported German kirschwasser for authentic flavor. Perfect for dinner parties and special occasions. Serves 12-14 people. Requires 48 hours notice due to the soaking process needed for optimal flavor.",
                    price: 54.99,
                    ingredients: [
                        "Dark chocolate (55% cocoa)",
                        "All-purpose flour",
                        "Eggs",
                        "Sugar",
                        "Kirsch (cherry brandy)",
                        "Morello cherries",
                        "Heavy cream",
                        "Vanilla sugar",
                        "Cocoa powder",
                        "Butter",
                        "Cherry jam",
                        "Dark chocolate shavings"
                    ]
                },
                {
                    id: 4,
                    image: "https://i.pinimg.com/736x/76/26/a6/7626a6728d0cbc6e534e27ee61189f60.jpg",
                    name: "Lemon Blueberry Delight",
                    description: "Bright, fresh and bursting with flavor, our Lemon Blueberry cake is perfect for spring and summer celebrations. Layers of tender lemon buttermilk cake are filled with homemade blueberry compote and lemon curd, then frosted with cream cheese buttercream. The tartness of lemon perfectly balances the sweetness of blueberries in this refreshing dessert. Decorated with fresh blueberries, lemon zest and delicate sugar flowers, this cake is as beautiful as it is delicious. We use only fresh lemon juice and zest for maximum citrus flavor. The blueberries are hand-selected for sweetness and texture. Serves 12-14 people. 24 hours notice recommended.",
                    price: 47.99,
                    ingredients: [
                        "All-purpose flour",
                        "Buttermilk",
                        "Fresh lemons",
                        "Blueberries",
                        "Unsalted butter",
                        "Granulated sugar",
                        "Eggs",
                        "Cream cheese",
                        "Powdered sugar",
                        "Cornstarch",
                        "Vanilla extract",
                        "Baking powder",
                        "Salt"
                    ]
                },
                {
                    id: 5,
                    image: "https://i.pinimg.com/736x/89/21/1d/89211d6f7c165a9904022ba88d5565c9.jpg",
                    name: "Salted Caramel Toffee Crunch",
                    description: "Indulge in our decadent Salted Caramel Toffee Crunch cake, where sweet meets salty in perfect harmony. Layers of brown sugar cake are soaked in homemade salted caramel sauce, filled with crunchy toffee bits and smooth caramel buttercream. The exterior is covered in more caramel buttercream and decorated with a drizzle of dark chocolate, toffee pieces and a sprinkle of sea salt. Each bite delivers multiple textures - soft cake, creamy frosting, crunchy toffee - and an explosion of caramel flavor. The salt enhances the caramel flavor without overpowering it. Perfect for those who love rich, buttery desserts. Serves 14-16 people. Requires 36 hours notice for proper caramel preparation.",
                    price: 55.99,
                    ingredients: [
                        "All-purpose flour",
                        "Brown sugar",
                        "Butter",
                        "Eggs",
                        "Heavy cream",
                        "Vanilla extract",
                        "Sea salt",
                        "Toffee bits",
                        "Dark chocolate",
                        "Corn syrup",
                        "Baking powder",
                        "Baking soda",
                        "Sour cream"
                    ]
                },
                {
                    id: 6,
                    image: "https://i.pinimg.com/736x/5f/f4/fa/5ff4faadea47b8f0b468ef7a88419683.jpg",
                    name: "Raspberry Vanilla Bean Elegance",
                    description: "Simple yet sophisticated, our Raspberry Vanilla Bean cake celebrates the perfect pairing of vanilla and raspberries. Layers of tender vanilla bean cake are filled with fresh raspberry preserves and vanilla bean pastry cream, then frosted with delicate vanilla Swiss meringue buttercream. The natural sweetness of vanilla and slight tartness of raspberries create a beautifully balanced flavor profile. Decorated with fresh raspberries, edible gold leaf and vanilla bean specks, this cake is elegance personified. We use real Madagascar vanilla beans for unparalleled aroma and flavor. Perfect for weddings, baby showers or afternoon tea. Serves 12-14 people. 24 hours notice recommended.",
                    price: 51.99,
                    ingredients: [
                        "Cake flour",
                        "Vanilla beans",
                        "Fresh raspberries",
                        "Unsalted butter",
                        "Granulated sugar",
                        "Eggs",
                        "Egg whites",
                        "Cornstarch",
                        "Whole milk",
                        "Raspberry preserves",
                        "Lemon juice",
                        "Salt"
                    ]
                },
                {
                    id: 7,
                    image: "https://i.pinimg.com/736x/a5/2f/b9/a52fb9bc58cb3eab1baf3c1d6d738701.jpg",
                    name: "Espresso Chocolate Chip Cake",
                    description: "Coffee lovers rejoice! Our Espresso Chocolate Chip cake packs a serious caffeine punch alongside rich chocolate flavor. Moist espresso-infused cake layers are studded with semi-sweet chocolate chips and filled with espresso buttercream. The exterior is covered in dark chocolate ganache and decorated with chocolate-covered espresso beans. The combination of bitter espresso and sweet chocolate creates a sophisticated flavor profile that's perfect for grown-up palates. The texture contrast between soft cake, creamy frosting and crunchy espresso beans is divine. Perfect for birthdays, dinner parties or as a special treat for coffee enthusiasts. Serves 12-14 people. Contains real espresso powder for authentic coffee flavor. 24 hours notice required.",
                    price: 48.99,
                    ingredients: [
                        "All-purpose flour",
                        "Espresso powder",
                        "Dark chocolate chips",
                        "Unsalted butter",
                        "Brown sugar",
                        "Eggs",
                        "Sour cream",
                        "Baking soda",
                        "Baking powder",
                        "Salt",
                        "Heavy cream",
                        "Dark chocolate",
                        "Chocolate-covered espresso beans"
                    ]
                },
                {
                    id: 8,
                    image: "https://i.pinimg.com/736x/97/70/40/9770406c1c13d5ad4dc8fab09bd7745c.jpg",
                    name: "Peanut Butter Cup Explosion",
                    description: "A dream come true for peanut butter and chocolate lovers, our Peanut Butter Cup Explosion cake is pure indulgence. Layers of chocolate cake are filled with creamy peanut butter frosting, chopped peanut butter cups and a ripple of chocolate ganache. The exterior is covered in more peanut butter frosting and decorated with mini peanut butter cups, chocolate drizzle and chopped peanuts. Each bite delivers the perfect balance of salty peanut butter and sweet chocolate. The multiple textures - soft cake, creamy frosting, crunchy peanuts and candy pieces - make this cake an unforgettable experience. Perfect for birthdays, celebrations or anytime you need a serious dessert fix. Serves 14-16 people. 24 hours notice recommended.",
                    price: 53.99,
                    ingredients: [
                        "All-purpose flour",
                        "Cocoa powder",
                        "Peanut butter",
                        "Peanut butter cups",
                        "Unsalted butter",
                        "Brown sugar",
                        "Eggs",
                        "Buttermilk",
                        "Baking soda",
                        "Baking powder",
                        "Salt",
                        "Heavy cream",
                        "Powdered sugar",
                        "Chopped peanuts",
                        "Dark chocolate"
                    ]
                },
                {
                    id: 9,
                    image: "https://i.pinimg.com/videos/thumbnails/originals/8a/2e/30/8a2e30cbfd3a4f2f86f29491941aa9d8-00001.jpg",
                    name: "Mango Passionfruit Mousse Cake",
                    description: "Light, refreshing and bursting with tropical flavors, our Mango Passionfruit Mousse Cake is a showstopper. A thin layer of almond sponge cake forms the base, topped with alternating layers of mango mousse and passionfruit curd. The entire cake is encased in a mirror glaze that shines like glass, revealing the beautiful layers beneath. Decorated with fresh mango roses and edible gold leaf, this cake is as stunning as it is delicious. The sweet mango and tart passionfruit create a perfect balance of flavors, while the light mousse texture makes it ideal for warm weather celebrations. Serves 12-14 people. Requires 48 hours notice due to the setting time needed for the mousse and glaze.",
                    price: 56.99,
                    ingredients: [
                        "Almond flour",
                        "Eggs",
                        "Sugar",
                        "Fresh mango puree",
                        "Passionfruit pulp",
                        "Gelatin",
                        "White chocolate",
                        "Heavy cream",
                        "Butter",
                        "Corn syrup",
                        "Vanilla extract",
                        "Food coloring"
                    ]
                }
            ]
        },
        {
            id: 2,
            name: "Cookies & Gingerbread",
            items: [
                {
                    id: 10,
                    image: "https://avatars.mds.yandex.net/i?id=6d0b0bd9d1181e22df994cd73bf3d1368a933521-8255800-images-thumbs&n=13",
                    name: "Classic Chocolate Chip Cookies",
                    description: "Our Classic Chocolate Chip Cookies are baked to perfection with crispy edges and chewy centers. Made with premium chocolate chunks instead of chips for superior melting quality, these cookies feature a perfect balance of sweet and salty flavors. We use a special blend of brown sugars to create depth of flavor and the ideal texture. Each cookie is generously sized and loaded with chocolate, ensuring satisfaction in every bite. The dough is rested for 36 hours before baking to develop complex flavors. Perfect with a glass of milk or as an afternoon pick-me-up. Sold by the dozen. Contains nuts unless specified otherwise. Freshly baked daily using the finest ingredients.",
                    price: 12.99,
                    ingredients: [
                        "All-purpose flour",
                        "Bread flour",
                        "Unsalted butter",
                        "Dark brown sugar",
                        "Granulated sugar",
                        "Eggs",
                        "Vanilla extract",
                        "Sea salt",
                        "Baking soda",
                        "Baking powder",
                        "Semi-sweet chocolate chunks",
                        "Walnuts (optional)"
                    ]
                },
                {
                    id: 11,
                    image: "https://avatars.mds.yandex.net/i?id=3c003c7d7c8231b4f278839bb85735ac_l-5648503-images-thumbs&n=13",
                    name: "Gingerbread People",
                    description: "Our festive Gingerbread People are soft in the center with just the right amount of spice. Each cookie is hand-decorated with royal icing for unique personalities and outfits. The dough is made with a special blend of molasses and spices including cinnamon, ginger, cloves and nutmeg for that classic holiday flavor. These cookies make perfect edible gifts, tree decorations or treats for Santa. The recipe has been perfected over generations to create the ideal balance of sweetness and spice. Decorations may vary seasonally. Sold by the dozen. Can be customized with special messages or designs for an additional fee. Perfect for holiday parties and cookie exchanges.",
                    price: 14.99,
                    ingredients: [
                        "All-purpose flour",
                        "Molasses",
                        "Brown sugar",
                        "Unsalted butter",
                        "Egg",
                        "Vanilla extract",
                        "Ground ginger",
                        "Cinnamon",
                        "Cloves",
                        "Nutmeg",
                        "Baking soda",
                        "Salt",
                        "Royal icing",
                        "Food coloring"
                    ]
                },
                {
                    id: 12,
                    image: "https://avatars.mds.yandex.net/i?id=37274b57f48103e839ca3d9249f88d62_l-12421090-images-thumbs&n=13",
                    name: "Double Chocolate Crinkle Cookies",
                    description: "Our Double Chocolate Crinkle Cookies are rich, fudgy and coated in powdered sugar for a beautiful snow-capped effect. The interior is almost brownie-like in texture - dense, moist and intensely chocolatey. We use a combination of cocoa powder and melted dark chocolate in the dough for maximum chocolate flavor. As the cookies bake, they crack to reveal the dark cookie beneath the white sugar coating, creating a beautiful contrast. These are perfect for holiday cookie trays, chocolate lovers or anyone who appreciates a sophisticated cookie. The recipe is based on a traditional German chocolate cookie. Sold by the dozen. Best enjoyed slightly warm when the centers are still soft.",
                    price: 13.99,
                    ingredients: [
                        "All-purpose flour",
                        "Cocoa powder",
                        "Dark chocolate",
                        "Granulated sugar",
                        "Brown sugar",
                        "Vegetable oil",
                        "Eggs",
                        "Vanilla extract",
                        "Baking powder",
                        "Salt",
                        "Powdered sugar"
                    ]
                },
                {
                    id: 13,
                    image: "https://avatars.mds.yandex.net/i?id=b6a6c3d7c055ff0a3758b8c6e8373481_l-9154878-images-thumbs&n=13",
                    name: "Oatmeal Raisin Cookies",
                    description: "Our Oatmeal Raisin Cookies are packed with hearty oats, plump raisins and warm cinnamon spice. These cookies strike the perfect balance between chewy and crispy, with a texture that's substantial without being heavy. We use a special blend of rolled oats and quick oats for optimal texture, and soak the raisins beforehand to ensure they're juicy and soft. The addition of brown butter adds a nutty depth of flavor that elevates this classic cookie. Perfect for breakfast (we won't tell!), with afternoon tea or as a lunchbox treat. Sold by the dozen. Can be made with dried cranberries instead of raisins upon request. Dairy-free version available.",
                    price: 11.99,
                    ingredients: [
                        "Rolled oats",
                        "Quick oats",
                        "All-purpose flour",
                        "Unsalted butter",
                        "Brown sugar",
                        "Granulated sugar",
                        "Eggs",
                        "Vanilla extract",
                        "Cinnamon",
                        "Baking soda",
                        "Salt",
                        "Raisins",
                        "Walnuts (optional)"
                    ]
                },
                {
                    id: 14,
                    image: "https://avatars.mds.yandex.net/i?id=aeeb3544d453ecd5d25283457a4986abd6d6500e-10639406-images-thumbs&n=13",
                    name: "Lemon Glazed Shortbread Cookies",
                    description: "These delicate Lemon Glazed Shortbread Cookies melt in your mouth with buttery richness and bright citrus flavor. The shortbread base is made with premium European butter for maximum flavor and the perfect sandy texture. After baking, each cookie is dipped in a tart lemon glaze made with fresh lemon juice and zest. The combination of rich butter and tangy lemon creates a sophisticated flavor profile that's refreshing and indulgent at the same time. These elegant cookies are perfect for tea parties, bridal showers or as a light dessert after a rich meal. Sold by the dozen. The glaze can be customized with other citrus fruits upon request. Beautiful packaged as gifts.",
                    price: 15.99,
                    ingredients: [
                        "All-purpose flour",
                        "Cornstarch",
                        "European-style butter",
                        "Powdered sugar",
                        "Vanilla extract",
                        "Salt",
                        "Fresh lemons",
                        "Granulated sugar"
                    ]
                },
                {
                    id: 15,
                    image: "https://i.pinimg.com/originals/a7/a2/9c/a7a29c7a9a3cead5442fde05262cd577.jpg",
                    name: "Peanut Butter Blossoms",
                    description: "Our Peanut Butter Blossoms feature a soft, chewy peanut butter cookie base topped with a Hershey's Kiss for the classic look everyone loves. The cookies are rolled in sugar before baking for a slight crunch that contrasts beautifully with the soft interior. We use natural peanut butter for authentic flavor and add a touch of honey for extra depth. The chocolate kiss melts slightly when placed on the warm cookies, creating the perfect peanut butter-chocolate combination. These nostalgic cookies are perfect for holiday baking, bake sales or anytime you crave peanut butter and chocolate. Sold by the dozen. Can be made with dark chocolate or white chocolate kisses upon request.",
                    price: 12.99,
                    ingredients: [
                        "All-purpose flour",
                        "Natural peanut butter",
                        "Unsalted butter",
                        "Brown sugar",
                        "Granulated sugar",
                        "Egg",
                        "Vanilla extract",
                        "Baking soda",
                        "Baking powder",
                        "Salt",
                        "Honey",
                        "Hershey's Kisses"
                    ]
                },
                {
                    id: 16,
                    image: "https://i.etsystatic.com/23051867/r/il/7ef64b/2704220713/il_fullxfull.2704220713_6rbs.jpg",
                    name: "Snickerdoodles",
                    description: "Our classic Snickerdoodles are soft-centered with slightly crisp edges and coated in cinnamon sugar. These simple but irresistible cookies have a slight tang from cream of tartar, which is essential to authentic snickerdoodle flavor. The texture is perfectly balanced between cakey and chewy, with a melt-in-your-mouth quality that keeps people coming back for more. The cinnamon sugar coating creates a delicate crust that cracks when you bite into the soft interior. These comforting cookies are perfect with coffee or milk, and are always a hit with kids and adults alike. Sold by the dozen. Can be made with extra cinnamon for spice lovers upon request.",
                    price: 11.99,
                    ingredients: [
                        "All-purpose flour",
                        "Unsalted butter",
                        "Granulated sugar",
                        "Brown sugar",
                        "Eggs",
                        "Vanilla extract",
                        "Cream of tartar",
                        "Baking soda",
                        "Salt",
                        "Cinnamon",
                        "Nutmeg"
                    ]
                },
                {
                    id: 17,
                    image: "https://brokenovenbaking.com/wp-content/uploads/2023/06/white-chocolate-macadamia-nut-cookies-16-1.jpg",
                    name: "White Chocolate Macadamia Nut Cookies",
                    description: "Our White Chocolate Macadamia Nut Cookies are a tropical twist on the classic chocolate chip cookie. Buttery, sweet and loaded with creamy white chocolate chunks and crunchy macadamia nuts, these cookies are pure indulgence. We use premium white chocolate with real cocoa butter for superior melting quality and flavor, and roast the macadamia nuts lightly to enhance their buttery texture. The cookie base is slightly crisp on the outside with a soft, chewy center that showcases the generous mix-ins. These luxurious cookies are perfect for special occasions, gift boxes or when you want to treat yourself. Sold by the dozen. Can be made with dark chocolate for contrast upon request.",
                    price: 16.99,
                    ingredients: [
                        "All-purpose flour",
                        "Unsalted butter",
                        "Brown sugar",
                        "Granulated sugar",
                        "Eggs",
                        "Vanilla extract",
                        "Baking soda",
                        "Salt",
                        "White chocolate chunks",
                        "Macadamia nuts"
                    ]
                },
                {
                    id: 18,
                    image: "https://i.pinimg.com/736x/93/79/6c/93796c66e6e9b6f2699c031851675697.jpg",
                    name: "Molasses Spice Cookies",
                    description: "These old-fashioned Molasses Spice Cookies are packed with warm spices and deep molasses flavor. The cookies are soft and chewy with a slight crunch from the sugar coating, featuring a perfect balance of sweetness and spice. We use robust blackstrap molasses for its intense flavor and health benefits, combined with a special blend of ginger, cinnamon, cloves and allspice. These cookies are especially popular during the holiday season but delicious year-round. The aroma while baking is absolutely intoxicating. Perfect with a cup of tea or coffee on a chilly day. Sold by the dozen. Can be made with a gingerbread spice blend for extra kick upon request.",
                    price: 13.99,
                    ingredients: [
                        "All-purpose flour",
                        "Blackstrap molasses",
                        "Brown sugar",
                        "Unsalted butter",
                        "Egg",
                        "Vanilla extract",
                        "Ground ginger",
                        "Cinnamon",
                        "Cloves",
                        "Allspice",
                        "Baking soda",
                        "Salt",
                        "Granulated sugar (for rolling)"
                    ]
                },
            ]
        },
        {
            id: 3,
            name: "Chocolate & Candies",
            items: [
                {
                    id: 19,
                    image: "https://www.ourhappymess.com/wp-content/uploads/2017/12/Dark-Chocolate-Truffles-with-Caramel-featured-square.jpg",
                    name: "Artisan Dark Chocolate Truffles",
                    description: "Our Artisan Dark Chocolate Truffles are handcrafted using single-origin 70% cocoa chocolate for sophisticated flavor. Each truffle features a velvety smooth ganache center made with heavy cream and premium chocolate, coated in a thin layer of tempered dark chocolate and dusted with cocoa powder. The ganache is infused with real vanilla bean and a pinch of sea salt to enhance the chocolate flavor. These luxurious truffles melt delicately on the tongue, releasing complex chocolate notes with hints of red fruit and spice from the carefully selected cacao. Perfect as an after-dinner treat, gift or personal indulgence. Packaged elegantly in gold foil-lined boxes. Available in assorted flavors or single-origin selections. Shelf life of 2 weeks when stored properly.",
                    price: 24.99,
                    ingredients: [
                        "70% single-origin dark chocolate",
                        "Heavy cream",
                        "Vanilla bean",
                        "Unsalted butter",
                        "Sea salt",
                        "Cocoa powder"
                    ]
                },
                {
                    id: 20,
                    image: "https://www.movito.fit/images/product_images/original_images/Karamell%20(1).jpg",
                    name: "Sea Salt Caramels",
                    description: "Our handmade Sea Salt Caramels are buttery, creamy and perfectly balanced with a sprinkle of flaky sea salt. Each piece is cooked slowly to achieve the ideal soft-chewy texture that doesn't stick to your teeth. We use pure vanilla bean and European-style butter for rich flavor, then top each square with a delicate flake of French sea salt to cut the sweetness. The caramels are wrapped individually in wax paper to maintain freshness and make them easy to share (if you're willing!). Perfect for gift boxes, party favors or keeping in your purse for when cravings strike. Available in classic or chocolate-dipped versions. Shelf life of 3 weeks when stored in a cool place.",
                    price: 18.99,
                    ingredients: [
                        "Heavy cream",
                        "European-style butter",
                        "Vanilla bean",
                        "Light corn syrup",
                        "Granulated sugar",
                        "Brown sugar",
                        "Sea salt flakes"
                    ]
                },
                {
                    id: 21,
                    image: "https://i.pinimg.com/736x/ae/6e/fb/ae6efb8846bade9d491d7106a82c1e1c.jpg",
                    name: "Chocolate Covered Strawberries",
                    description: "Our Chocolate Covered Strawberries are made to order using only the freshest, juiciest strawberries and premium couverture chocolate. Each large berry is hand-dipped in either dark, milk or white chocolate, then decorated with drizzles, sprinkles or edible gold as requested. We use strawberries at peak ripeness for maximum sweetness and flavor contrast with the rich chocolate. The chocolate coating is tempered to perfection for a satisfying snap when you bite into the juicy berry beneath. Available in assorted boxes or single-flavor selections. Perfect for romantic gifts, bridal showers or luxurious treats. Must be consumed within 24 hours for optimal freshness and texture.",
                    price: 29.99,
                    ingredients: [
                        "Fresh strawberries",
                        "Dark chocolate (55% cocoa)",
                        "Milk chocolate (38% cocoa)",
                        "White chocolate",
                        "Various toppings (optional)"
                    ]
                },
                {
                    id: 22,
                    image: "https://i.pinimg.com/736x/24/23/df/2423df5cf34bb73210ac9f2b1679f5b1.jpg",
                    name: "Peppermint Bark",
                    description: "Our festive Peppermint Bark features layers of rich dark chocolate and creamy white chocolate studded with crushed peppermint candies. We use a high percentage dark chocolate for depth of flavor that balances the sweetness of the white chocolate layer. The peppermint pieces provide refreshing crunch and holiday cheer. Each batch is carefully tempered so the chocolate has perfect snap and melt-in-your-mouth quality. Packaged in decorative tins or boxes, this bark makes wonderful holiday gifts or party favors. The combination of cool peppermint and rich chocolate is irresistible. Available seasonally from November through January. Shelf life of 4 weeks when stored in a cool, dry place.",
                    price: 16.99,
                    ingredients: [
                        "Dark chocolate (60% cocoa)",
                        "White chocolate",
                        "Peppermint extract",
                        "Crushed peppermint candies",
                        "Canola oil (for tempering)"
                    ]
                },
                {
                    id: 23,
                    image: "https://assets.afcdn.com/recipe/20210112/117149_w761h761c1.jpg",
                    name: "Hazelnut Pralines",
                    description: "These luxurious Hazelnut Pralines combine toasted hazelnuts enveloped in creamy milk chocolate with a hint of caramel. Each praline features whole hazelnuts that have been carefully roasted to enhance their natural flavor, then coated in a silky milk chocolate blend with caramel notes. The contrast between the crunchy nut and smooth chocolate is divine. Inspired by traditional European confections, these pralines are perfect for chocolate lovers who appreciate texture contrast. Packaged in elegant gift boxes or sold by weight for custom assortments. Excellent with coffee or dessert wines. Shelf life of 3 weeks when stored properly. Can be made with dark chocolate upon request for a more intense flavor profile.",
                    price: 22.99,
                    ingredients: [
                        "Whole hazelnuts",
                        "Milk chocolate (38% cocoa)",
                        "Heavy cream",
                        "Butter",
                        "Sugar",
                        "Vanilla extract",
                        "Sea salt"
                    ]
                },
                {
                    id: 24,
                    image: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2Farchive%2F8ef486201aa237ddbea0c1acf70f8459fd340d6c",
                    name: "Marshmallow Treats",
                    description: "Our gourmet Marshmallow Treats elevate the childhood classic with premium ingredients and creative flavors. Instead of standard marshmallows, we use homemade vanilla bean marshmallows for superior flavor and texture. The recipe includes brown butter for nutty depth and a blend of cereals for optimal crunch. Available in several varieties: Classic (with rainbow sprinkles), Chocolate Sea Salt (with dark chocolate drizzle), and Cookies & Cream (with crushed Oreo pieces). Each treat is individually wrapped for freshness and convenience. Perfect for lunchboxes, party favors or nostalgic snacking. Much less sweet than commercial versions, allowing the quality ingredients to shine. Shelf life of 1 week for optimal texture.",
                    price: 14.99,
                    ingredients: [
                        "Homemade marshmallows",
                        "Brown butter",
                        "Cereal blend",
                        "Vanilla bean",
                        "Dark chocolate (for drizzle)",
                        "Sea salt",
                        "Oreo cookies (for Cookies & Cream version)",
                        "Rainbow sprinkles (for Classic version)"
                    ]
                },
                {
                    id: 25,
                    image: "https://avatars.mds.yandex.net/i?id=bbc15ab0cd0b209a8533e30812ac6e2c_l-4909082-images-thumbs&n=13",
                    name: "Toffee Almond Clusters",
                    description: "Our Toffee Almond Clusters combine crunchy almonds and buttery toffee coated in rich milk chocolate. We make the toffee from scratch using European-style butter and a touch of salt to balance the sweetness. The almonds are roasted to perfection before being combined with crushed toffee and enrobed in creamy milk chocolate. Each bite delivers multiple textures - crisp nuts, crunchy toffee and smooth chocolate - with layers of flavor that develop as you eat. These clusters are addictive yet sophisticated, perfect for gifting or keeping on hand for chocolate cravings. Packaged in decorative bags or boxes. Shelf life of 4 weeks when stored properly. Also available in dark chocolate for a more intense flavor profile.",
                    price: 18.99,
                    ingredients: [
                        "Whole almonds",
                        "European-style butter",
                        "Sugar",
                        "Corn syrup",
                        "Milk chocolate (38% cocoa)",
                        "Vanilla extract",
                        "Sea salt",
                        "Baking soda"
                    ]
                },
                {
                    id: 26,
                    image: "https://i.pinimg.com/736x/3c/79/83/3c7983155af456657ed9cdaf474527b8.jpg",
                    name: "Raspberry Chocolate Hearts",
                    description: "These beautiful Raspberry Chocolate Hearts feature a crisp chocolate shell filled with tart raspberry pâte de fruit and smooth chocolate ganache. Inspired by French confectionery techniques, each heart is a work of art with layers of flavor and texture. The outer shell is made from premium dark chocolate, while the interior combines bright, fruity raspberry jelly with rich chocolate cream. The balance of sweet and tart is exquisite, making these perfect for romantic gifts, Valentine's Day or any occasion that calls for something special. Packaged in elegant gift boxes with tissue paper. Shelf life of 2 weeks when stored in a cool place. Also available in other fruit flavors like passionfruit or blackberry upon request.",
                    price: 26.99,
                    ingredients: [
                        "Dark chocolate (55% cocoa)",
                        "Fresh raspberries",
                        "Sugar",
                        "Pectin",
                        "Lemon juice",
                        "Heavy cream",
                        "Butter",
                        "Corn syrup"
                    ]
                },
                {
                    id: 27,
                    image: "https://avatars.mds.yandex.net/i?id=0afdad5cbc83114af82b6a04ad718374b75d46e5-5246779-images-thumbs&n=13",
                    name: "S'mores Bites",
                    description: "Our S'mores Bites are a gourmet take on the campfire classic, perfect for year-round enjoyment. Each bite features a homemade graham cracker base, topped with rich chocolate ganache and a toasted marshmallow crown. We use high-quality chocolate for the ganache and make the marshmallows from scratch with vanilla bean for superior flavor. The graham crackers contain real honey and cinnamon for authentic taste. These indulgent bites capture all the flavors of traditional s'mores without the mess. Perfect for parties, gift boxes or when you're craving something sweet with nostalgic appeal. Available in regular or mini sizes. Shelf life of 1 week for optimal texture. Can be made with dark or milk chocolate upon request.",
                    price: 17.99,
                    ingredients: [
                        "All-purpose flour",
                        "Whole wheat flour",
                        "Honey",
                        "Brown sugar",
                        "Butter",
                        "Cinnamon",
                        "Vanilla bean",
                        "Dark chocolate",
                        "Heavy cream",
                        "Egg whites",
                        "Corn syrup",
                        "Gelatin"
                    ]
                }
            ]
        },
        {
            id: 4,
            name: "Vegan & Dietary-Friendly",
            items: [
                {
                    id: 28,
                    image: "https://i3.wp.com/www.rainbownourishments.com/wp-content/uploads/2023/05/vegan-avocado-muffins-1.jpg?resize=728%2C728&ssl=1",
                    name: "Vegan Chocolate Avocado Cake",
                    description: "Our Vegan Chocolate Avocado Cake is incredibly moist and rich without any animal products. The secret ingredient - ripe avocado - replaces butter to create a luxurious texture while keeping it plant-based. This decadent chocolate cake is sweetened with maple syrup and coconut sugar for natural sweetness, and uses flax eggs as a binder. The chocolate frosting is made with avocado and cocoa powder for creaminess without dairy. Despite being vegan, this cake satisfies even the most discerning chocolate lovers with its deep chocolate flavor and fudgy texture. Topped with edible flowers and fresh berries for a beautiful presentation. Perfect for those with dairy allergies or anyone following a plant-based diet. Serves 12-14 people. 24 hours notice recommended.",
                    price: 44.99,
                    ingredients: [
                        "All-purpose flour",
                        "Cocoa powder",
                        "Ripe avocados",
                        "Maple syrup",
                        "Coconut sugar",
                        "Flax seeds",
                        "Almond milk",
                        "Apple cider vinegar",
                        "Baking soda",
                        "Vanilla extract",
                        "Dark chocolate (dairy-free)",
                        "Coconut oil"
                    ]
                },
                {
                    id: 29,
                    image: "https://i.pinimg.com/736x/7e/9c/7d/7e9c7d4c38d8bb477d3df1b76f83aa75.jpg",
                    name: "Gluten-Free Lemon Blueberry Bundt",
                    description: "This stunning Gluten-Free Lemon Blueberry Bundt cake proves that dietary restrictions don't mean sacrificing flavor or texture. Made with a custom blend of almond flour, coconut flour and tapioca starch, this cake is light and tender with no gluten in sight. Bursting with fresh blueberries and bright lemon flavor, each bite is moist and flavorful. The cake is finished with a lemon glaze made with fresh juice and zest for extra citrus punch. Perfect for those with celiac disease or gluten sensitivity, though everyone will love its delicate crumb and balanced sweetness. Decorated with additional blueberries and lemon slices for a beautiful presentation. Serves 10-12 people. 24 hours notice required.",
                    price: 39.99,
                    ingredients: [
                        "Almond flour",
                        "Coconut flour",
                        "Tapioca starch",
                        "Fresh blueberries",
                        "Lemons",
                        "Coconut sugar",
                        "Eggs",
                        "Coconut oil",
                        "Almond milk",
                        "Vanilla extract",
                        "Baking powder",
                        "Xanthan gum"
                    ]
                },
                {
                    id: 30,
                    image: "https://i.pinimg.com/originals/e2/b5/3b/e2b53b5cd39bdb25e31e3320f7cdddaf.jpg",
                    name: "Raw Vegan Cheesecake",
                    description: "Our Raw Vegan Cheesecake is a revelation in healthy indulgence. With a nut and date crust and creamy cashew filling, this dessert contains no dairy, gluten or refined sugar but tastes incredibly decadent. The filling is made from soaked cashews blended with coconut cream, lemon juice and natural sweeteners for a texture remarkably similar to traditional cheesecake. Available in several flavors: Classic (with vanilla bean), Chocolate (with raw cacao), or Berry (with mixed berry swirl). Topped with fresh fruit compote or raw chocolate drizzle. Each slice is packed with nutrients from whole food ingredients while satisfying your sweet tooth. Must be kept refrigerated. Serves 10-12 people. Requires 48 hours notice due to soaking and setting time.",
                    price: 42.99,
                    ingredients: [
                        "Raw cashews",
                        "Medjool dates",
                        "Almonds",
                        "Coconut oil",
                        "Coconut cream",
                        "Lemon juice",
                        "Maple syrup",
                        "Vanilla bean",
                        "Sea salt",
                        "Raw cacao powder (for chocolate version)",
                        "Mixed berries (for berry version)"
                    ]
                },
                {
                    id: 31,
                    image: "https://i.pinimg.com/736x/5f/98/f3/5f98f38c993f7ff314b99024ecf06c35.jpg",
                    name: "Paleo Chocolate Chip Cookies",
                    description: "These Paleo Chocolate Chip Cookies are grain-free, dairy-free and refined sugar-free but full of classic cookie flavor. Made with almond flour and coconut flour for the perfect chewy texture, sweetened with coconut sugar and maple syrup. We use dairy-free chocolate chips and add a sprinkle of sea salt on top to balance the sweetness. These cookies are perfect for those following a paleo diet or anyone looking for a healthier treat option. Despite the clean ingredients, they satisfy cookie cravings with their crispy edges and soft centers. Sold by the dozen. Can be made with walnuts or pecans for added crunch upon request. Shelf life of 1 week in an airtight container.",
                    price: 15.99,
                    ingredients: [
                        "Almond flour",
                        "Coconut flour",
                        "Coconut sugar",
                        "Maple syrup",
                        "Coconut oil",
                        "Eggs",
                        "Dairy-free chocolate chips",
                        "Vanilla extract",
                        "Baking soda",
                        "Sea salt"
                    ]
                },
                {
                    id: 32,
                    image: "https://i.pinimg.com/736x/b0/a0/1f/b0a01f8973e0f09367b03e4c5ef7c23b.jpg",
                    name: "Keto Fat Bombs",
                    description: "Our Keto Fat Bombs are the perfect high-fat, low-carb treat for those following a ketogenic diet. These rich, bite-sized delights come in several flavors: Chocolate Peanut Butter (with coconut oil and natural peanut butter), Lemon Coconut (with fresh lemon zest and shredded coconut), and Mint Chocolate (with peppermint extract and cocoa powder). Each fat bomb provides sustained energy while satisfying sweet cravings without spiking blood sugar. Made with quality ingredients like MCT oil, grass-fed butter and sugar-free sweeteners. Perfect for a quick energy boost, dessert or snack. Must be kept refrigerated. Sold in packs of 12. Shelf life of 2 weeks refrigerated or 1 month frozen.",
                    price: 16.99,
                    ingredients: [
                        "Coconut oil",
                        "Grass-fed butter",
                        "MCT oil",
                        "Natural peanut butter",
                        "Cocoa powder",
                        "Shredded coconut",
                        "Lemon zest",
                        "Peppermint extract",
                        "Sugar-free sweetener",
                        "Vanilla extract",
                        "Sea salt"
                    ]
                },
                {
                    id: 33,
                    image: "https://i.pinimg.com/736x/32/1d/bf/321dbfa2ed5be245bfa68ff0d23b0eae.jpg",
                    name: "Allergy-Friendly Birthday Cake",
                    description: "This Allergy-Friendly Birthday Cake is free from the top 8 allergens (dairy, eggs, wheat, soy, peanuts, tree nuts, fish and shellfish) but still delicious and celebratory. Made with a special flour blend and aquafaba (chickpea brine) as an egg substitute, this vanilla cake is light and fluffy. The frosting is made from vegan butter and powdered sugar for a classic birthday cake experience. Can be decorated with allergen-free sprinkles and colors as requested. Perfect for kids or adults with multiple food allergies who still want to enjoy birthday celebrations. Available in various sizes to serve 8-24 people. 48 hours notice required for special orders.",
                    price: 45.99,
                    ingredients: [
                        "Allergy-free flour blend",
                        "Aquafaba",
                        "Canola oil",
                        "Cane sugar",
                        "Vanilla extract",
                        "Baking powder",
                        "Apple cider vinegar",
                        "Vegan butter",
                        "Powdered sugar",
                        "Almond milk (or other non-dairy milk)",
                        "Allergy-free food coloring"
                    ]
                },
                {
                    id: 34,
                    image: "https://i.pinimg.com/originals/f6/59/dc/f659dcf8c8ffeb9288f325699d14b95a.jpg",
                    name: "Vegan Salted Caramel Brownies",
                    description: "These fudgy Vegan Salted Caramel Brownies are rich, decadent and completely plant-based. The brownie base is made with black beans for protein and fiber, creating an incredibly moist texture without eggs or dairy. Swirled with homemade date caramel and sprinkled with sea salt, these brownies offer the perfect balance of sweet and salty. The caramel is made from medjool dates and coconut milk for creamy richness. Topped with a drizzle of dairy-free chocolate for extra indulgence. These satisfy chocolate cravings while being much healthier than traditional brownies. Cut into generous squares. Perfect for vegans or anyone looking for a healthier dessert option. Shelf life of 5 days refrigerated or can be frozen for longer storage.",
                    price: 18.99,
                    ingredients: [
                        "Black beans",
                        "Almond flour",
                        "Cocoa powder",
                        "Medjool dates",
                        "Coconut milk",
                        "Coconut oil",
                        "Maple syrup",
                        "Vanilla extract",
                        "Baking powder",
                        "Sea salt",
                        "Dairy-free chocolate chips"
                    ]
                },
                {
                    id: 35,
                    image: "https://avatars.mds.yandex.net/i?id=4ef47082904e9002bed60f86c311685a_l-5231543-images-thumbs&n=13",
                    name: "Diabetic-Friendly Apple Crisp",
                    description: "Our Diabetic-Friendly Apple Crisp is sweetened naturally with monk fruit and stevia, making it suitable for those managing blood sugar levels. The filling features tart apples with cinnamon and nutmeg, while the crisp topping is made with almond flour, oats and coconut oil for crunch without refined carbs. The natural sweetness of the apples shines through, enhanced by warm spices. This comforting dessert tastes indulgent while being much lower in sugar than traditional versions. Served warm with a dollop of sugar-free whipped topping if desired. Perfect for holidays or everyday treats when you need to watch sugar intake. Serves 8-10 people. 24 hours notice recommended.",
                    price: 22.99,
                    ingredients: [
                        "Granny Smith apples",
                        "Lemon juice",
                        "Monk fruit sweetener",
                        "Stevia",
                        "Cinnamon",
                        "Nutmeg",
                        "Almond flour",
                        "Rolled oats",
                        "Coconut oil",
                        "Walnuts",
                        "Vanilla extract",
                        "Salt"
                    ]
                },
                {
                    id: 36,
                    image: "https://static.foodrhythms.com/images/recipes/thumb/IMG_7806a.jpg",
                    name: "Vegan Matcha Coconut Macaroons",
                    description: "These Vegan Matcha Coconut Macaroons are a delightful fusion of Japanese and French pastry traditions. Made with shredded coconut, coconut milk and matcha green tea powder, these cookies are naturally sweetened with maple syrup. The matcha provides a subtle earthy flavor and vibrant green color, while the coconut gives rich texture. Each macaroon is crispy on the outside and chewy in the center, with a drizzle of dairy-free white chocolate for contrast. These gluten-free, dairy-free treats are perfect for tea time, gifts or as a light dessert. Packed with antioxidants from the high-quality matcha. Sold by the dozen. Shelf life of 1 week in an airtight container.",
                    price: 17.99,
                    ingredients: [
                        "Shredded coconut",
                        "Coconut milk",
                        "Matcha powder",
                        "Maple syrup",
                        "Vanilla extract",
                        "Arrowroot powder",
                        "Dairy-free white chocolate",
                        "Coconut oil"
                    ]
                }
            ]
        },
        {
            id: 5,
            name: "Seasonal & Holiday Treats",
            items: [
                {
                    id: 37,
                    image: "https://i.pinimg.com/originals/b3/12/32/b31232a62a58dd7ecce53f1c57a711e0.jpg",
                    name: "Pumpkin Spice Layer Cake",
                    description: "Our signature Pumpkin Spice Layer Cake is the ultimate fall dessert, available seasonally from September through November. This moist cake features layers of spiced pumpkin cake filled with creamy cinnamon mascarpone frosting and a swirl of caramel. The warm spices - cinnamon, nutmeg, ginger and cloves - perfectly complement the pumpkin flavor without overpowering it. Decorated with caramel drizzle, pecans and a dusting of cinnamon for a festive presentation. Each bite delivers the cozy flavors of autumn in perfect balance. Perfect for Thanksgiving, Halloween parties or any fall celebration. Serves 14-16 people. 48 hours notice recommended during peak season.",
                    price: 49.99,
                    ingredients: [
                        "Pumpkin puree",
                        "All-purpose flour",
                        "Brown sugar",
                        "Eggs",
                        "Vegetable oil",
                        "Cinnamon",
                        "Nutmeg",
                        "Ginger",
                        "Cloves",
                        "Baking soda",
                        "Salt",
                        "Mascarpone cheese",
                        "Heavy cream",
                        "Powdered sugar",
                        "Caramel sauce",
                        "Pecans"
                    ]
                },
                {
                    id: 38,
                    image: "https://i.pinimg.com/474x/47/31/6e/47316e061a02da4b1e4d706e7f33185b.jpg?nii=t",
                    name: "Peppermint Mocha Yule Log",
                    description: "Our Peppermint Mocha Yule Log is a stunning holiday centerpiece available December through January. This traditional bûche de Noël features a light chocolate sponge cake rolled with peppermint-infused whipped cream and frosted with rich mocha buttercream. The exterior is textured to resemble tree bark and decorated with meringue mushrooms, sugared cranberries and a dusting of powdered sugar 'snow'. The combination of chocolate, coffee and peppermint is festive and refreshing. Serves 12-14 people. Requires 72 hours notice due to the intricate decoration process. Can be made without alcohol upon request.",
                    price: 59.99,
                    ingredients: [
                        "Eggs",
                        "Granulated sugar",
                        "Cocoa powder",
                        "All-purpose flour",
                        "Brewed espresso",
                        "Heavy cream",
                        "Peppermint extract",
                        "Butter",
                        "Powdered sugar",
                        "Dark chocolate",
                        "Meringue",
                        "Cranberries",
                        "Sugar"
                    ]
                },
                {
                    id: 39,
                    image: "https://i3.wp.com/thebakingexplorer.com/wp-content/uploads/2017/04/MiniEasterCakesFeatured.jpg?ssl=1",
                    name: "Easter Egg Nest Cupcakes",
                    description: "These adorable Easter Egg Nest Cupcakes are available each spring in the weeks leading up to Easter. Each moist vanilla cupcake is topped with rich chocolate buttercream, then decorated with toasted coconut 'nest' and candy-coated chocolate eggs. The cupcakes can be made with pastel-colored frosting for extra festive appeal. The vanilla cake is light and fluffy, while the chocolate frosting is rich and creamy - a perfect combination. Decorations may vary slightly based on available candy eggs. Sold by the dozen. Perfect for Easter gatherings, school parties or spring celebrations. 48 hours notice recommended during peak season.",
                    price: 24.99,
                    ingredients: [
                        "All-purpose flour",
                        "Granulated sugar",
                        "Eggs",
                        "Butter",
                        "Milk",
                        "Vanilla extract",
                        "Baking powder",
                        "Salt",
                        "Cocoa powder",
                        "Powdered sugar",
                        "Shredded coconut",
                        "Candy-coated chocolate eggs",
                        "Food coloring (optional)"
                    ]
                },
                {
                    id: 40,
                    image: "https://www.pressprintparty.com/wp-content/uploads/2023/05/Red-White-and-Blue-Jello-with-Cream.jpg",
                    name: "Fourth of July Berry Flag Cake",
                    description: "Our patriotic Fourth of July Berry Flag Cake is available for a limited time around Independence Day. This stunning dessert features layers of vanilla buttermilk cake with fresh berry filling, frosted with whipped cream and decorated as an American flag with strawberries, blueberries and raspberries. The cake is light and refreshing - perfect for summer celebrations. The berries are arranged meticulously to resemble the stars and stripes of the flag. Serves 20-24 people, making it ideal for large gatherings. Must be ordered at least 72 hours in advance and consumed within 24 hours due to the fresh fruit and whipped cream frosting.",
                    price: 64.99,
                    ingredients: [
                        "All-purpose flour",
                        "Sugar",
                        "Buttermilk",
                        "Eggs",
                        "Butter",
                        "Vanilla extract",
                        "Baking powder",
                        "Salt",
                        "Heavy cream",
                        "Cream cheese",
                        "Powdered sugar",
                        "Strawberries",
                        "Blueberries",
                        "Raspberries"
                    ]
                },
                {
                    id: 41,
                    image: "https://avatars.mds.yandex.net/i?id=b933e1a6b54b715145936fbb907783d4_l-16349001-images-thumbs&n=13",
                    name: "Heart-Shaped Valentine's Cake",
                    description: "Our romantic Heart-Shaped Valentine's Cake is available throughout February. This beautiful cake features layers of red velvet cake and chocolate cake arranged in a heart shape, filled with raspberry preserves and chocolate ganache. The exterior is covered in smooth pink vanilla buttercream and decorated with chocolate drizzle, fresh berries and edible flowers. The combination of flavors is perfect for sharing with someone special. Serves 12-14 people. Can be personalized with a message or names upon request. Requires 72 hours notice during peak Valentine's season. Also available in all chocolate or all red velvet versions.",
                    price: 54.99,
                    ingredients: [
                        "All-purpose flour",
                        "Cocoa powder",
                        "Buttermilk",
                        "Red food coloring",
                        "Eggs",
                        "Butter",
                        "Sugar",
                        "Vanilla extract",
                        "Vinegar",
                        "Baking soda",
                        "Salt",
                        "Heavy cream",
                        "Dark chocolate",
                        "Raspberry preserves",
                        "Fresh berries",
                        "Edible flowers"
                    ]
                },
                {
                    id: 42,
                    image: "https://i.pinimg.com/736x/35/cd/49/35cd4921dd48d38ef4739cc6c2d767de.jpg",
                    name: "Halloween Monster Cookies",
                    description: "These fun Halloween Monster Cookies are available throughout October. Our oversized cookies are decorated with colorful icing to resemble silly monsters, with candy eyes and other spooky details. The cookie base is soft and chewy with a hint of vanilla, while the royal icing decorations add sweetness and visual appeal. Each cookie is individually wrapped, making them perfect for classroom treats, party favors or trick-or-treat bags. Sold by the dozen. Decorations vary so each cookie has its own unique monster personality. Can be made nut-free upon request for school-safe treats. 48 hours notice recommended for large orders.",
                    price: 18.99,
                    ingredients: [
                        "All-purpose flour",
                        "Butter",
                        "Brown sugar",
                        "Granulated sugar",
                        "Eggs",
                        "Vanilla extract",
                        "Baking soda",
                        "Salt",
                        "Royal icing",
                        "Food coloring",
                        "Candy eyes",
                        "Assorted sprinkles"
                    ]
                },
                {
                    id: 43,
                    image: "https://i.pinimg.com/736x/98/87/12/988712cbf4cfa213c4a3a09c61c81e56.jpg",
                    name: "Christmas Gingerbread House Kit",
                    description: "Our Christmas Gingerbread House Kit includes everything you need to create a festive holiday centerpiece. Each kit contains pre-baked gingerbread pieces (walls, roof, etc.), royal icing for 'glue', and an assortment of candies for decoration. The gingerbread is sturdy for construction but delicious to eat, with perfect spice balance. Also includes simple instructions and decorating ideas. Makes a wonderful family activity or gift for baking enthusiasts. Available from late November through December. Each kit makes one medium-sized house (approximately 8\" tall). Additional candy decorations can be added upon request. Shelf life of 2 weeks if kept in a cool, dry place before assembly.",
                    price: 34.99,
                    ingredients: [
                        "All-purpose flour",
                        "Molasses",
                        "Brown sugar",
                        "Butter",
                        "Egg",
                        "Cinnamon",
                        "Ginger",
                        "Cloves",
                        "Nutmeg",
                        "Baking soda",
                        "Salt",
                        "Powdered sugar",
                        "Meringue powder",
                        "Assorted candies"
                    ]
                },
                {
                    id: 44,
                    image: "https://i.pinimg.com/736x/cd/f8/5b/cdf85b19e697960a0683764c302dac42.jpg",
                    name: "Mother's Day Flower Cupcakes",
                    description: "These beautiful Mother's Day Flower Cupcakes are available each May in the weeks leading up to Mother's Day. Each vanilla or chocolate cupcake is decorated with buttercream flowers in spring colors, creating a miniature bouquet. The piping is done by hand using various pastry tips to create roses, hydrangeas, daisies and other floral designs. The cupcakes can be arranged in a box to resemble a full bouquet - a stunning edible gift. Sold by the half dozen or dozen. Can be customized with the recipient's favorite colors or flowers upon request. 72 hours notice recommended during peak season.",
                    price: 29.99,
                    ingredients: [
                        "All-purpose flour",
                        "Sugar",
                        "Eggs",
                        "Butter",
                        "Milk",
                        "Vanilla extract",
                        "Baking powder",
                        "Salt",
                        "Cocoa powder (for chocolate version)",
                        "Powdered sugar",
                        "Food coloring"
                    ]
                },
                {
                    id: 45,
                    image: "https://masterpiecer-images.s3.yandex.net/c3aa32c5729b11ee85716a0259d7362a:upscaled",
                    name: "New Year's Eve Champagne Cake",
                    description: "Ring in the new year with our luxurious New Year's Eve Champagne Cake, available late December through early January. This elegant cake features layers of champagne-infused vanilla cake with champagne buttercream and a raspberry filling. The exterior is decorated with gold leaf, edible glitter and sugar pearls for a celebratory look. The champagne flavor is subtle but present, adding sophistication to the sweet cake. Perfect for New Year's Eve parties or any celebration marking a special occasion. Serves 14-16 people. Can be made with non-alcoholic sparkling cider instead of champagne upon request. Requires 72 hours notice.",
                    price: 59.99,
                    ingredients: [
                        "All-purpose flour",
                        "Sugar",
                        "Eggs",
                        "Butter",
                        "Champagne",
                        "Vanilla extract",
                        "Baking powder",
                        "Salt",
                        "Heavy cream",
                        "Powdered sugar",
                        "Raspberry preserves",
                        "Gold leaf",
                        "Edible glitter",
                        "Sugar pearls"
                    ]
                }
            ]
        },
    ]
};
