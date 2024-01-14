interface Cities {
    id?: number;
    wikiDataId?: string;
    name?: string;
    country?: string;
    countryCode?: string;
    region?: string;
    regionregionCode?: string;
    latitude?: number;
    longitude?: number;
    population?: number;
}


interface Trails {
    id?: string;
}

export {
    Cities,
    Trails
};