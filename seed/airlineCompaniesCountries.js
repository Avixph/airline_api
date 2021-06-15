const db = require("../db");
const AirlineCompany = require("../models/airlineCompany");
const HomeCountry = require("../models/homeCountry");

db.on("error", console.error.bind(console, "MongoDB Connection Error!"));

const main = async () => {
  const homeCountry1 = await new HomeCountry({
    name: "Ireland",
    country_flag:
      "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg",
  });
  homeCountry1.save();
  const homeCountry2 = await new HomeCountry({
    name: "Ireland",
    country_flag:
      "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg",
  });
  homeCountry2.save();
  const homeCountry3 = await new HomeCountry({
    name: "Ireland",
    country_flag:
      "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
  });
  homeCountry3.save();
  const homeCountry4 = await new HomeCountry({
    name: "India",
    country_flag:
      "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
  });
  homeCountry4.save();
  const homeCountry5 = await new HomeCountry({
    name: "South Korea",
    country_flag:
      "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg",
  });
  homeCountry5.save();
  const homeCountry6 = await new HomeCountry({
    name: "United States",
    country_flag:
      "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
  });
  homeCountry6.save();

  const airlineCompanies = [
    {
      name: "Aer Lingus",
      IATA_code: "EL",
      website_link: "https://www.aerlingus.com/",
      home_country: homeCountry1._id,
      overview:
        "Founded in 1936, Aer Lingus (EI) is Ireland oldest airline and the national flag carrier. It is also the country's second-largest carrier after Ryanair. The company has operating bases at George Best Belfast City Airport (BHD), Cork Airport (ORK) and Shannon Airport (SNN), as well as a hub at Dublin Airport (DUB). It flies to more than 80 destinations across Europe, as well as Turkey, Morocco and the United States. Aer Lingus also has codeshare agreements with seven airlines in the Oneworld, Star Alliance and SkyTeam alliances. Its fleet of 48 aircraft includes planes with both all-Economy Class configurations as well as Business Class and Economy class cabins.",
    },
    {
      name: "Aeroflot",
      IATA_code: "SU",
      website_link: "http://www.aeroflot.com/ru-en",
      home_country: homeCountry2._id,
      overview:
        "A member of the SkyTeam alliance, Aeroflot (SU) is Russia's flag carrier and the country's largest airline. Founded in 1923, it is also one of the world's oldest airlines. Operating from a hub at Sheremetyevo International Airport (SVO), Aeroflot flies to about 130 destinations. This includes dozens of domestic destinations, as well as airports elsewhere in Europe, and in Asia, Africa, the Middle East, North America and the Caribbean. It also has codeshare agreements with more than 25 other carriers. Aeroflot's fleet of 161 planes include a variety of one cabin (Economy Class), two cabin (Business Class and Economy Class, or Premium Economy Class and Economy Class) and three cabin (Business Class, Premium Economy Class and Economy Class) configurations.",
    },
    {
      name: "Air France",
      IATA_code: "AF",
      website_link: "https://www.airfrance.com/indexCom_en.html",
      home_country: homeCountry3._id,
      overview:
        "French airline Air France (AF) is the country's flag carrier. Operating from hubs at Paris-Charles de Gaulle Airport (CDG) and Paris Orly Airport (ORY), the airline flies to more than 200 destinations. This includes about 35 domestic airports and more than 90 countries in Europe, Africa, Asia, the Middle East, North America and South America. A member of the SkyTeam alliance, Air France also has codeshare agreements with about 30 other airlines. Its fleet of 234 passenger aircraft consists of both Airbus and Boeing planes with a variety of cabin configurations. Although cabin classes vary by route and plane, the airline offers First Class, Business Class, Premium Economy Class and Economy Class cabins.",
    },
    {
      name: "Air India",
      IATA_code: "AI",
      website_link: "http://www.airindia.in/",
      home_country: homeCountry4._id,
      overview:
        "The country's third-largest airline, Air India (AI) is the national flag carrier of India. Founded in 1930 as Tata Airlines, it flies to about 60 domestic destinations and 30 international destinations in about 20 countries in Asia, Oceania, Europe and North America. A member of the Star Alliance, Air India also has codeshare agreements with more than 15 other carriers. The airline's fleet of 107 aircraft include both one-cabin (Economy Class), two-cabin (Business Class and Economy Class) and three-cabin (First Class, Business Class and Economy Class) configurations. Business and First Class passengers also have access to the airline's Maharaja Lounge at six of its major destinations.",
    },
    {
      name: "Asiana",
      IATA_code: "OZ",
      website_link: "https://flyasiana.com/",
      home_country: homeCountry5._id,
      overview:
        "Formerly known as Seoul Airlines, Asiana Airlines (OZ) was founded in 1988 and is one of South Korea's two major carriers. It is a member of the Star Alliance, and a major owner of low-cost carrier Air Busan (BX). The airline operates from hubs at Seoul Gimpo International Airport (GMP) and Seoul Incheon International Airport (ICN). Asiana flies to about 110 destinations in Asia, Europe, Oceania and North America. In addition to Star Alliance members, the airline has codeshare agreements with about a dozen other carriers. Its fleet of 73 passenger aircraft includes planes configured with a single Economy Class cabin, as well as two- and three-cabin configurations with First Class and Business Class cabins.",
    },
    {
      name: "JetBlue",
      IATA_code: "B6",
      website_link: "https://www.jetblue.com/",
      home_country: homeCountry6._id,
      overview:
        "JetBlue (B6) is a New York-based low-cost carrier that was founded in 1998. John F. Kennedy International Airport (JFK) is its operating base, and Fort Lauderdale – Hollywood Int'l Airport (FLL), Logan International Airport (BOS), Long Beach Airport (LGB), Luis Muñoz Marín Int'l Airport (SJU) and Orlando International Airport (MCO) are focus cities. JetBlue serves about 95 destinations. Of those, about 65 are domestic destinations. International destinations include Antigua and Barbuda, Aruba, Bahamas, Barbados, Bermuda, Cayman Islands, Colombia, Costa Rica, Curacao, Dominican Republic, Grenada, Haiti, Jamaica, Mexico, Peru, Saint Lucia, Saint Maarten, Trinidad and Tobago, and Turks and Caicos Islands. The airline also has codeshare agreements with about 40 other carriers.",
    },
  ];
  await AirlineCompany.insertMany(airlineCompanies);
  console.log("Created many airline companies!");
};

const run = async () => {
  await main();
  db.close();
};
run();
