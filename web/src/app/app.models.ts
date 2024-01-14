interface Cities {
    city?: string;
    state?: string;
    country?: string;
}


interface Weather {
  id?: number;
  city?: string;
  main?: string;
  description?: string;
  icon?: string;
}

export {
    Cities,
    Weather
};