const initialState = {
    products: [
        {"title":"Brown eggs","type":"dairy","description":"Raw organic brown eggs in a basket","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/0.jpg","height":600,"width":400,"price":28.1,"rating":4,"id":"p-0"},{"title":"Sweet fresh stawberry","type":"fruit","description":"Sweet fresh stawberry on the wooden table","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/1.jpg","height":450,"width":299,"price":29.45,"rating":4,"id":"p-1"},{"title":"Asparagus","type":"vegetable","description":"Asparagus with ham on the wooden table","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/2.jpg","height":450,"width":299,"price":18.95,"rating":3,"id":"p-2"},{"title":"Green smoothie","type":"dairy","description":"Glass of green smoothie with quail egg's yolk, served with cocktail tube, green apple and baby spinach leaves over tin surface.","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/3.jpg","height":600,"width":399,"price":17.68,"rating":4,"id":"p-3"},{"title":"Raw legums","type":"vegetable","description":"Raw legums on the wooden table","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/4.jpg","height":450,"width":299,"price":17.11,"rating":2,"id":"p-4"},{"title":"Baking cake","type":"dairy","description":"Baking cake in rural kitchen - dough  recipe ingredients (eggs, flour, sugar) on vintage wooden table from above.","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/5.jpg","height":450,"width":675,"price":11.14,"rating":4,"id":"p-5"},{"title":"Pesto with basil","type":"vegetable","description":"Italian traditional pesto with basil, chesse and oil","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/6.jpg","height":450,"width":299,"price":18.19,"rating":2,"id":"p-6"},{"title":"Hazelnut in black ceramic bowl","type":"vegetable","description":"Hazelnut in black ceramic bowl on old wooden background. forest wealth. rustic style. selective focus","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/7.jpg","height":450,"width":301,"price":27.35,"rating":0,"id":"p-7"},{"title":"Fresh stawberry","type":"fruit","description":"Sweet fresh stawberry on the wooden table","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/8.jpg","height":600,"width":399,"price":28.59,"rating":4,"id":"p-8"},{"title":"Lemon and salt","type":"fruit","description":"Rosemary, lemon and salt on the table","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/9.jpg","height":450,"width":299,"price":15.79,"rating":5,"id":"p-9"},{"title":"Homemade bread","type":"bakery","description":"Homemade bread","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/10.jpg","height":450,"width":301,"price":17.48,"rating":3,"id":"p-10"},{"title":"Legums","type":"vegetable","description":"Cooked legums on the wooden table","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/11.jpg","height":600,"width":399,"price":14.77,"rating":0,"id":"p-11"},{"title":"Fresh tomato","type":"vegetable","description":"Fresh tomato juice with basil","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/12.jpg","height":600,"width":903,"price":16.3,"rating":2,"id":"p-12"},{"title":"Healthy breakfast","type":"fruit","description":"Healthy breakfast set. rice cereal or porridge with berries and honey over rustic wood background","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/13.jpg","height":450,"width":350,"price":13.02,"rating":2,"id":"p-13"},{"title":"Green beans","type":"vegetable","description":"Raw organic green beans ready to eat","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/14.jpg","height":450,"width":300,"price":28.79,"rating":1,"id":"p-14"},{"title":"Baked stuffed portabello mushrooms","type":"bakery","description":"Homemade baked stuffed portabello mushrooms with spinach and cheese","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/15.jpg","height":600,"width":400,"price":20.31,"rating":1,"id":"p-15"},{"title":"Strawberry jelly","type":"fruit","description":"Homemade organic strawberry jelly in a jar","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/16.jpg","height":400,"width":600,"price":14.18,"rating":1,"id":"p-16"},{"title":"Pears juice","type":"fruit","description":"Fresh pears juice on the wooden table","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/17.jpg","height":600,"width":398,"price":19.49,"rating":4,"id":"p-17"},{"title":"Fresh pears","type":"fruit","description":"Sweet fresh pears on the wooden table","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/18.jpg","height":600,"width":398,"price":15.12,"rating":5,"id":"p-18"},{"title":"Caprese salad","type":"vegetable","description":"Homemade healthy caprese salad with tomato mozzarella and basil","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/19.jpg","height":400,"width":600,"price":16.76,"rating":5,"id":"p-19"},{"title":"Oranges","type":"fruit","description":"Orange popsicle ice cream bars made from fresh oranges.  a refreshing summer treat.","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/20.jpg","height":450,"width":274,"price":21.48,"rating":4,"id":"p-20"},{"title":"Vegan food","type":"vegetable","description":"Concept of vegan food","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/21.jpg","height":450,"width":299,"price":29.66,"rating":4,"id":"p-21"},{"title":"Breakfast with muesli","type":"dairy","description":"Concept of healthy breakfast with muesli","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/22.jpg","height":450,"width":299,"price":22.7,"rating":2,"id":"p-22"},{"title":"Honey","type":"bakery","description":"Honey and honeycell on the table","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/23.jpg","height":450,"width":299,"price":17.01,"rating":2,"id":"p-23"},{"title":"Breakfast with cottage","type":"fruit","description":"Healthy breakfast with cottage cheese and strawberry","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/24.jpg","height":600,"width":398,"price":14.05,"rating":1,"id":"p-24"},{"title":"Strawberry smoothie","type":"fruit","description":"Glass of red strawberry smoothie with chia seeds, served with retro cocktail tube, fresh mint and strawberries over dark background","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/25.jpg","height":600,"width":400,"price":28.86,"rating":2,"id":"p-25"},{"title":"Strawberry and mint","type":"fruit","description":"Homemade muesli with strawberry and mint","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/26.jpg","height":450,"width":299,"price":26.21,"rating":4,"id":"p-26"},{"title":"Ricotta","type":"dairy","description":"Ricotta with berry and mint","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/27.jpg","height":600,"width":398,"price":27.81,"rating":5,"id":"p-27"},{"title":"Cuban sandwiche","type":"bakery","description":"Homemade traditional cuban sandwiches with ham pork and cheese","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/28.jpg","height":450,"width":300,"price":18.5,"rating":4,"id":"p-28"},{"title":"Granola","type":"dairy","description":"Glass jar with homemade granola and yogurt with nuts, raspberries and blackberries on wooden cutting board over white textile in day light","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/29.jpg","height":450,"width":300,"price":29.97,"rating":3,"id":"p-29"},{"title":"Smoothie with chia seeds","type":"fruit","description":"Glass of red strawberry smoothie with chia seeds, served with retro cocktail tube, fresh mint and strawberries over wooden table","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/30.jpg","height":600,"width":900,"price":25.26,"rating":5,"id":"p-30"},{"title":"Yogurt","type":"dairy","description":"Homemade yogurt with raspberry and mint","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/31.jpg","height":450,"width":299,"price":27.61,"rating":4,"id":"p-31"},{"title":"Sandwich with salad","type":"vegetable","description":"Vegan sandwich with salad, tomato and radish","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/32.jpg","height":600,"width":398,"price":22.48,"rating":5,"id":"p-32"},{"title":"Cherry","type":"fruit","description":"Cherry with sugar on old table","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/33.jpg","height":600,"width":400,"price":14.35,"rating":5,"id":"p-33"},{"title":"Raw asparagus","type":"vegetable","description":"Raw fresh asparagus salad with cheese and dressing","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/34.jpg","height":600,"width":400,"price":22.97,"rating":4,"id":"p-34"},{"title":"Corn","type":"vegetable","description":"Grilled corn on the cob with salt and butter","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/35.jpg","height":450,"width":300,"price":13.55,"rating":2,"id":"p-35"},{"title":"Vegan","type":"vegan","description":"Concept of healthy vegan eating","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/36.jpg","height":600,"width":398,"price":28.96,"rating":5,"id":"p-36"},{"title":"Fresh blueberries","type":"fruit","description":"Healthy breakfast. berry crumble with fresh blueberries, raspberries, strawberries, almond, walnuts, pecans, yogurt, and mint in ceramic plates over white wooden surface, top view","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/37.jpg","height":450,"width":321,"price":21.01,"rating":4,"id":"p-37"},{"title":"Smashed avocado","type":"fruit","description":"Vegan sandwiches with smashed avocado, tomatoes and radish. top view","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/38.jpg","height":450,"width":450,"price":25.88,"rating":0,"id":"p-38"},{"title":"Italian ciabatta","type":"bakery","description":"Italian ciabatta bread cut in slices on wooden chopping board with herbs, garlic and olives over dark grunge backdrop, top view","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/39.jpg","height":450,"width":565,"price":15.18,"rating":1,"id":"p-39"},{"title":"Rustic breakfast","type":"dairy","description":"Rustic healthy breakfast set. cooked buckwheat groats with milk and honey on dark grunge backdrop. top view, copy space","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/40.jpg","height":450,"width":307,"price":21.32,"rating":0,"id":"p-40"},{"title":"Sliced lemons","type":"fruit","description":"Heap of whole and sliced lemons and limes with mint in vintage metal grid box over old wooden table with turquoise wooden background. dark rustic style.","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/41.jpg","height":600,"width":900,"price":27.14,"rating":2,"id":"p-41"},{"title":"Plums","type":"fruit","description":"Yellow and red sweet plums","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/42.jpg","height":450,"width":299,"price":19.18,"rating":1,"id":"p-42"},{"title":"French fries","type":"bakery","description":"Homemade oven baked french fries with ketchup","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/43.jpg","height":600,"width":400,"price":18.32,"rating":3,"id":"p-43"},{"title":"Strawberries","type":"fruit","description":"Healthy breakfast set. rice cereal or porridge with fresh strawberry, apricots, almond and honey over white rustic wood backdrop, top view, \u0000","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/44.jpg","height":450,"width":352,"price":15.13,"rating":3,"id":"p-44"},{"title":"Ground beef meat burger","type":"meat","description":"Raw ground beef meat burger steak cutlets with seasoning on vintage wooden boards, black background","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/45.jpg","height":450,"width":675,"price":11.73,"rating":5,"id":"p-45"},{"title":"Tomatoes","type":"fruit","description":"Organic tomatoes made with love","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/46.jpg","height":450,"width":675,"price":26.03,"rating":4,"id":"p-46"},{"title":"Basil","type":"vegetable","description":"Concept of vegan food with basil","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/47.jpg","height":450,"width":678,"price":15.19,"rating":4,"id":"p-47"},{"title":"Fruits bouquet","type":"fruit","description":"Abstract citrus fruits bouquet on blue background","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/48.jpg","height":600,"width":401,"price":18.18,"rating":1,"id":"p-48"},{"title":"Peaches on branch","type":"fruit","description":"Peaches on branch with leaves and glasses with peach juice and limonade with ice cubes in aluminum tray over old metal table. dark rustic style. top view.","filename":"https://api4286.s3.ap-south-1.amazonaws.com/images/49.jpg","height":600,"width":400,"price":25.62,"rating":3,"id":"p-49"}
    ]
  };
  
  const productReducer = (state = initialState, action) => {
  
      return state;
  };
  
  export default productReducer;