const { urlencoded } = require("express");

// image, title, price and location
const DestinationModel={
   
   destinations:[
      {
         id:1,
         title:"Hotel One Toronto-Piccadilly",
         location: "Toronto",    
         rating: 5,       
         type: "Hotels" ,     
         small_img:"../img/1.jpg",
         large_img:"../img/1+.jpg",
         price: 500 ,
         details: "in-room spa services",
         details_l:`Located in the city centre, DoubleTree by Hilton Toronto Downtown boasts an indoor heated pool, an on-site restaurant, and a fitness centre. Toronto Eaton Centre and St. Patrick Subway Station are within 350 m.

         Each of the tastefully decorated rooms has a flat-screen cable HDTV with pay-per-view channels. Air conditioning, safe and a coffee maker are also included. A hairdryer can be found in the bathroom. The suites offer a kitchen with a fridge/freezer, a microwave, a stovetop and utensils.
         
         Upon arrival, guests of DoubleTree by Hilton Downtown Toronto are greeted with warm chocolate chip cookies.
         
         DoubleTree by Hilton Toronto Downtown provides underground parking upon request with surcharge. Guests who pay for on-site parking can enjoy in-and-out privileges during their stay.
         
         This hotel is 1.7 km from both the popular CN Tower and Air Canada Centre. Toronto Pearson International Airport is at a distance of 30 km.
         
         This is our guests' favourite part of Toronto, according to independent reviews.
         
         Couples particularly like the location — they rated it 9.0 for a two-person trip.
         
         We speak your language!`

    },
    {
      id:2,
      title:"Stylish Apartment with a Patio close to the beach",
      location: "Texas",    
      rating: 5,       
      type: "Apartments" ,     
      small_img:"../img/2.jpg",
      large_img:"../img/2+.jpg",
      price: 400 ,
      details: "Located in Myrtle Beach",
      details_l:`Located in the centre of Eilat, just a 12-minute walk from the shores of the Red Sea, Comfort hotel Eilat offers an outdoor pool with grill bar, free WiFi throughout, and air-conditioned rooms with a 40" LCD TV and private bathroom.

      All rooms at the Comfort Eilat include a kettle, tea/coffee ingredients, and a safe. Some rooms feature views of the Gulf of Aqaba.
      
      The property's outdoor pool is open throughout the summer. You can book sessions at the hotel's paid spa, which features a hot tub, steam room and dry sauna.
      
      The hotel is 1.2 km from the Gan Binyamin Central Park and Sculpture Garden. Eilat's bus terminal is a 5-minute walk away while Eilat Airport is 750 m away.`
 },
 {
   id:3,
   title:"Luxurious Resorts with 5 Indoor Pools and Beach Access!",
   location: "Banff",    
   rating: 5,       
   type: "Resorts" ,     
   small_img:"../img/3+.jpg",
   large_img:"../img/3++.jpg",
   price: 100 ,
   details: "Located on the marina",
   details_l:`Kamahana 3 Condo is located in Princeville, 2.8 km from Black Pot Beach and
    3.7 km from Hanalei Beach Park, in an area where cycling can be enjoyed. This property
     offers access to a balcony, free private parking and free WiFi.

   The apartment comes with 2 bedrooms, a TV with satellite channels and a fully equipped
    kitchen that provides guests with a microwave, a fridge, a washing machine and an oven.
   
   Kilauea National Wildlife Refuge is 13 km from the apartment, while Princeville Shopping Center is 1.7 km away. The nearest airport is Lihue Airport, 31 km from Kamahana 3 Condo.`
},
{
   id:4,
   title:"Trifecta Golf Villa Central to CCU and M Beach",
   location: "Vancouver",    
   rating: 5,       
   type: "Villas" ,     
   small_img:"../img/4.jpg",
   large_img:"../img/4+.jpg",
   price: 100 ,
   details: "outdoor pool and a gym",
   details_l:`Located in Princeville in the Hawaii region, Sandpiper 121B Condo features a
    patio. It is set 2.2 km from Black Pot Beach and offers an ATM.

   With free WiFi, this apartment provides a satellite TV and a kitchenette with a microwave
    and fridge.
   
   Guests at the apartment can enjoy cycling nearby, or make the most of the garden.
   
   Hanalei Beach Park is 3 km from Sandpiper 121B Condo, while Kilauea National Wildlife 
   Refuge is 12 km away. The nearest airport is Lihue Airport, 31 km from the accommodation.`
},
{
   id:5,
   title:"Jasper Inn Murrells Inlet/Myrtle Beach Area",
   location: "Jasper",    
   rating: 5,       
   type: "Cabins" ,     
   small_img:"../img/5.jpg",
   large_img:"../img/5+.jpg",
   price: 100 ,
   details: "3 bedrooms , 2 bathroom",
   details_l:`Built in 1914, this downtown Toronto hotel blends historic charm and elegance
    with modern conveniences. St. Lawrence Market and the Hockey Hall of Fame are less than 
    10 minutes' walk away.

   Accommodations at this all-suite hotel are furnished with a variety of thoughtful 
   amenities, including microwaves, refrigerators and coffeemakers. They also feature 
   separate sleeping, dining and working areas.
   
   One King West Hotel and Residence has an on-site fitness centre along with a restaurant
    and a bar.
   
   One King West Hotel and Residence is 750 m from the Roy Thomson Hall. Billy Bishop 
   Toronto City Airport is 3.8 km away.
   
   This is our guests' favourite part of Toronto, according to independent reviews.
   
   Couples particularly like the location — they rated it 9.5 for a two-person trip.`
},
{
   id:6,
   title:"Newly Remodeled Cliffs Cottage in Princeville condo",
   location: "Toronto",    
   rating: 5,       
   type: "Cottages" ,     
   small_img:"../img/6.jpg",
   large_img:"../img/6+.jpg",
   price: 100 ,
   details: " 2 pools with a hot tub",
   details_l:``
},
{
   id:7,
   title:"Manis, Luxury 3 Bedroom Heart of Downtown",
   location: "Toronto",    
   rating: 5,       
   type: "Glamping" ,     
   small_img:"../img/7.png",
   large_img:"../img/7+.jpg",
   price: 100 ,
   details: "3 bedrooms, gym",
   details_l:`This downtown Toronto hotel, located within a 5-minute walk of the Bloor-Yonge 
   Subway Station, features free WiFi, a restaurant, indoor pool and gym. These spacious
    suites offer a fully equipped kitchen.

   Accommodations at Town Inn Furnished Suites provide cable TV. There is a dining area
    and a separate seating area with a sofa. The contemporary suites also have a desk.
   
   Town Inn Furnished Suites has a 24-hour front desk.
   
   Town Inn Suites is 3 km from Eaton Centre, which features shopping and dining. The
    University of Toronto is within a 12-minute walk of the hotel.
   
   This is our guests' favourite part of Toronto, according to independent reviews.
   
   Couples particularly like the location — they rated it 8.6 for a two-person trip.`
},
{
   id:8,
   title:"Belmont Apartments Toronto, an Ascend Hotel Collection Member",
   location: "Toronto",    
   rating: 5,       
   type: "Serviced Apartments" ,     
   small_img:"../img/8.jpg",
   large_img:"../img/8+.jpg",
   price: 100 ,
   details: "2bedroom and 3bedroom units",
   details_l:`Centrally located in the city of Toronto, this hotel is 10 minutes' walk from
    the bustling Eaton Centre shopping mall and 2 minutes’ walk from College subway station.
     It features spacious rooms with free WiFi.

   A flat-screen cable TV and tea/coffee-making facilities are standard in every modern room 
   at the Courtyard by Marriott Toronto Downtown. All rooms include a seating area and a work 
   desk.
   
   The Bistro at the Downtown Toronto Courtyard features snacks, a la carte items, Starbucks
    coffee and a full cocktail bar.
   
   Free access to the 24-hour gym and the indoor lap pool is provided to all guests of the 
   Courtyard Toronto. The business centre and lobby library are also available.
   
   The CN Tower and Art Gallery of Ontario are both 3 km from the hotel. The University of
    Toronto is 10 minutes' walk from this hotel.
   
   This is our guests' favourite part of Toronto, according to independent reviews.
   
   Couples particularly like the location — they rated it 9.0 for a two-person trip.`
},
{
   id:9,
   title:"Views of the ocean, top floor, Pool, Hot Tub, Island Style Pali Ke Kua #242!",
   location: "Banff",    
   rating: 5,       
   type: "Holiday Homes" ,     
   small_img:"../img/9.jpg",
   large_img:"../img/9+.jpg",
   price: 100 ,
   details: "6 bedrooms, 7 bathrooms",
   details_l:`Boasting an on-site restaurant and lounge, the Anndore House is located in 
   downtown Toronto. It is just a minutes' walk from bustling Yonge Street, 5 minutes' walk
    from the chic Yorkville neighbourhood, and 350 m from the restaurants and bars of Church
     Street.

   Each stylish guest room features free WiFi, a flat-screen plasma TV and an i-pod compatible
    vinyl record player. The en suite bathroom offers luxurious bathrobes, a rainforest shower
     and complementary toiletries. Utilising cutting edge technology, The Anndore House app
      enables you to control room temperature, lighting and room service orders from your 
      mobile device.
   
   Guests can start the day at the Scarlet Door cafe, a unique coffee and pastry counter 
   inspired by the colourful history of the local area. The on-site restaurant, Constantine,
    serves exotic cuisine inspired by distinct regions of the Mediterranean.
   
   Hotel amenities include valet parking, room service, laundry, dry cleaning and even an 
   on-site barbershop. The front desk is open 24 hours to assist you at any time during your
    stay.
   
   The Anndore House is 1.5 km from Yonge-Dundas Square and the Eaton Centre. The Royal
    Ontario Museum is 10 minutes' walk away.
   
   This is our guests' favourite part of Toronto, according to independent reviews.
   
   Couples particularly like the location — they rated it 9.2 for a two-person trip.`
},
{
   id:10,
   title:"Hale Moi 112B, Queen Bed, Breakfast Bar, Lanai, AC, Sunsets condo",
   location: "Banff",    
   rating: 5,       
   type: "Guest Houses" ,     
   small_img:"../img/10.jpg",
   large_img:"../img/10+.jpg",
   price: 100 ,
   details: "add later",
   details_l:``
}, 
{
   id:11,
   title:"Cliffs at Princeville #1208B Garden Unit, North Shore Resort",
   location: "Banff",    
   rating: 5,       
   type: "Hostels" ,     
   small_img:"../img/11.jpg",
   large_img:"../img/11+.jpg",
   price: 100 ,
   details: "200 rooms",
   details_l:`This harbourfront hotel features on-site dining as well as a rooftop patio 
   with a seasonal pool. A mini-fridge and coffee maker are included in each guest room.

   A large work desk and flat-screen TV are common to all rooms at Radisson Blu Downtown
    Toronto. A pool, harbour or city view may be featured in these rooms.
   
   Showcasing regional ingredients, Watermark Restaurant specializes in Canadian cuisine.
    Light snacks are served at Radisson Admiral’s Watermark Lounge, along with local beers
     and wines.
   
   A fitness centre is among recreational facilities available at Radisson Blu Downtown
    Toronto.
   
   Union Station is about 15 minutes’ walk from this hotel. Several attractions, including 
   the CN Tower, Hockey Hall of Fame and lively Chinatown, are also within 15 minutes’ walk.
    Billy Bishop Toronto City Airport is 2 km away.
   
   This is our guests' favourite part of Toronto, according to independent reviews.
   
   Couples particularly like the location — they rated it 9.4 for a two-person trip.`
}, 
{
   id:12,
   title:"Georgian Court Motel, BW Premier Collection",
   location: "Banff",    
   rating: 5,       
   type: "Motels" ,     
   small_img:"../img/12.jpg",
   large_img:"../img/12+.jpg",
   price: 200 ,
   details: "4 beds (1 twin, 1 full, 1 king, 1 sofa bed)",
   details_l:`Located in the centre of Eilat, just a 12-minute walk from the shores of
    the Red Sea, Comfort hotel Eilat offers an outdoor pool with grill bar, free WiFi 
    throughout, and air-conditioned rooms with a 40 LCD TV and private bathroom.
   All rooms at the Comfort Eilat include a kettle, tea/coffee ingredients, and a safe. 
   Some rooms feature views of the Gulf of Aqaba.
   The propertys outdoor pool is open throughout the summer. You can book sessions at
    the hotels paid spa, which features a hot tub, steam room and dry sauna.
   The hotel is 1.2 km from the Gan Binyamin Central Park and Sculpture Garden. Eilats bus
    terminal is a 5-minute walk away while Eilat Airport is 750 m away. We speak your language!`
}, 
  ],


   getAllDestinations(){

        return this.destinations;
   }   ,

   getFeaturedProducts(){
    return this.destinations.filter(destination=> destination.featured===true);
   },

   firsttypeFirstObj(){//becuz of that active one in items
        return this.destinations.find(destination=>destination.type==="Hotels");
   },

   secondTypeFirstObj(){
      return this.destinations.find(destination=>destination.type==="Apartments");
 },
   thirdTypeFirstObj(){
      return this.destinations.find(destination=>destination.type==="Resorts");
   },
   fourthTypeFirstObj(){
      return this.destinations.find(destination=>destination.type==="Villas");
   },
   fifthTypeFirstObj(){
      return this.destinations.find(destination=>destination.type==="Cabins");
   },
   sixthTypeFirstObj(){
      return this.destinations.find(destination=>destination.type==="Cottages");
   },
   seventhTypeFirstObj(){
      return this.destinations.find(destination=>destination.type==="Glamping");
   },
   eighthTypeFirstObj(){
      return this.destinations.find(destination=>destination.type==="Serviced Apartments");
   },
   ninethTypeFirstObj(){
      return this.destinations.find(destination=>destination.type==="Holiday Homes");
   },
   tenthTypeFirstObj(){
      return this.destinations.find(destination=>destination.type==="Guest Houses");
   },
   eleventhTypeFirstObj(){
      return this.destinations.find(destination=>destination.type==="Hostels");
   },
   twelvethTypeFirstObj(){
      return this.destinations.find(destination=>destination.type==="Motels");
   },


   getAllOtherDestinationsObj(){
      return this.destinations.map(destination=>{
      
             return destination;

      });
   },

   getADestination(id){

     return this.destinations.find(destination=>destination.id===id);


   }

}

  module.exports=DestinationModel;