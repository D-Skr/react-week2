console.log("hi");

//Union type
type WEATHER_DESCRIPTION = "sunny" | "cloudy" | "rainy";

interface DailyForecast {
    date: string | Date,
    temperature: number, //F
    description: WEATHER_DESCRIPTION,
    chanceOfRain?: number, // Integer percentage *i.e.15%
}

const todaysForecast = {
    date: "2021-08-22",
    temperature: 75, 
    description: "cloudy",
    chanceOfRain: 80,
}

const forecast:Array<DailyForecast> = [
    {"2021-08-22",75 as number, "cloudy" as string, 80 as number}
];

const obj = {
    a:1,
    b:2,
}

const a: string = "hello";
const b = "world" as string;

const obj2 = {
    a,
    b,
}

function getSunnyCopy(language) {
    switch(language) {
        case "en":
            return "Eng text";
        case "fr":
            return "Fr text";
        case "de":
            return "German text";
    }
}

enum Language {
    english = 1,
    french = 2,
    spanish = 3,
}
