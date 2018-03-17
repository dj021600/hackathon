/*global $*/
var planetSelected;

$(".start").click(function() {
    $(".ship").addClass("ship-animation");
    $("#mission").fadeIn(2000);
    $("#gl").fadeIn(4700, function() {
        $(".ship").addClass("ship-end");
    });
    $(".start").fadeOut(1000, function() {
        $(".start").fadeIn(6000).off("click").click(function() {
            $("#mission, #gl").fadeOut(2000, function() {
                $(".Planet").fadeIn();
                $(".start").text("Go To Planet").click(function() {
                    window.location.href="game.html?planet=" + planetSelected;
                    // window.location.href="end-page.html?planet=" + planetSelected;
                });
            });
        });
    });
    $(".title").animate({
        opacity: 0
    }, 1000);
});

// asteroids
$(document).ready(function() {
    $(".planetDiv").click(function(e) {
        var translator = {
            mercury: 'Merc',
            venus:'Venus',
            earth: 'Earth',
            mars: 'Mars',
            jupiter: 'Juptr',
            saturn: 'Satrn',
            uranus: 'Urnus',
            neptune: 'Neptn'
        };
        var planet = $(this).attr('id');
        var planetName = planet.substr(0, 1).toUpperCase() + planet.substr(1);
        $(".pick-planet").text(planetName);
        planetSelected = planetName;

        $.ajax({

            url: "https://ssd-api.jpl.nasa.gov/cad.api?body=" + translator[planet],
            type: 'GET',
            success: function(response) {
                console.log(response.data[0][0]);
            }
        });
    });


    //planetay
    var data = {
        "data": {
            "dates": {
                "from": "2018-03-17T00:00:00",
                "to": "2018-03-17T23:59:59"
            },
            "observer": {
                "geo": {
                    "lat": "40.730610",
                    "lon": "-73.935242"
                }
            },
            "table": {
                "header": [
                    "2018-03-17T00:00:00"
                ],
                "rows": [{
                        "cells": [{
                            "date": "2018-03-17T00:00:00",
                            "distance": {
                                "from_earth": {
                                    "au": 0.99495079450354762,
                                    "km": 148842520.30900398
                                },
                                "from_sun": {
                                    "au": 0,
                                    "km": 0
                                }
                            },
                            "extra_info": {
                                "elong": 0,
                                "mag": -26.8,
                                "radi": 0.004675331685629812,
                                "sz": 1928.7127685546875
                            },
                            "id": "sun",
                            "name": "Sun",
                            "position": {
                                "alt_az": {
                                    "alt": {
                                        "deg": -11.485938042122337,
                                        "str": "-11deg 29' 09.4\""
                                    },
                                    "az": {
                                        "deg": 278.09125082323089,
                                        "str": "278deg 05' 28.5\""
                                    }
                                },
                                "constellation": {
                                    "abbr": "Psc",
                                    "id": "psc",
                                    "name": "Pisces"
                                },
                                "ra_dec": {
                                    "dec": {
                                        "deg": -1.5558562249705359,
                                        "str": "-01deg 33' 21.1\""
                                    },
                                    "ra": {
                                        "hr": 23.760693150792292,
                                        "str": "23h 45m 38.50s"
                                    }
                                }
                            }
                        }],
                        "entry": {
                            "id": "sun",
                            "name": "Sun"
                        }
                    },
                    {
                        "cells": [{
                            "date": "2018-03-17T00:00:00",
                            "distance": {
                                "from_earth": {
                                    "au": 0.87219633026998122,
                                    "km": 130478713.84074314
                                },
                                "from_sun": {
                                    "au": 0.32332196831703186,
                                    "km": 48368278.01076082
                                }
                            },
                            "extra_info": {
                                "elong": 0.31654585716985384,
                                "mag": 0.27,
                                "radi": 0.00001915476880210657,
                                "sz": 7.901909351348877
                            },
                            "id": "mercury",
                            "name": "Mercury",
                            "position": {
                                "alt_az": {
                                    "alt": {
                                        "deg": 6.5162072826945518,
                                        "str": "06deg 30' 58.3\""
                                    },
                                    "az": {
                                        "deg": 274.85867675577833,
                                        "str": "274deg 51' 31.2\""
                                    }
                                },
                                "constellation": {
                                    "abbr": "Psc",
                                    "id": "psc",
                                    "name": "Pisces"
                                },
                                "ra_dec": {
                                    "dec": {
                                        "deg": 7.8242165754153419,
                                        "str": "+07deg 49' 27.2\""
                                    },
                                    "ra": {
                                        "hr": 0.81000565062845054,
                                        "str": "00h 48m 36.02s"
                                    }
                                }
                            }
                        }],
                        "entry": {
                            "id": "mercury",
                            "name": "Mercury"
                        }
                    },
                    {
                        "cells": [{
                            "date": "2018-03-17T00:00:00",
                            "distance": {
                                "from_earth": {
                                    "au": 1.6248425304989069,
                                    "km": 243072982.78543627
                                },
                                "from_sun": {
                                    "au": 0.7237830758094788,
                                    "km": 108276406.98979469
                                }
                            },
                            "extra_info": {
                                "elong": 0.2844843604120125,
                                "mag": -3.8,
                                "radi": 0.000025275030855728354,
                                "sz": 10.426698684692383
                            },
                            "id": "venus",
                            "name": "Venus",
                            "position": {
                                "alt_az": {
                                    "alt": {
                                        "deg": 3.541734932163251,
                                        "str": "03deg 32' 30.2\""
                                    },
                                    "az": {
                                        "deg": 272.20570213894467,
                                        "str": "272deg 12' 20.5\""
                                    }
                                },
                                "constellation": {
                                    "abbr": "Psc",
                                    "id": "psc",
                                    "name": "Pisces"
                                },
                                "ra_dec": {
                                    "dec": {
                                        "deg": 3.8830038408772887,
                                        "str": "+03deg 52' 58.8\""
                                    },
                                    "ra": {
                                        "hr": 0.77348187258789558,
                                        "str": "00h 46m 24.53s"
                                    }
                                }
                            }
                        }],
                        "entry": {
                            "id": "venus",
                            "name": "Venus"
                        }
                    },
                    {
                        "cells": [{
                            "date": "2018-03-17T00:00:00",
                            "distance": {
                                "from_earth": {
                                    "au": 0.0026249370266432054,
                                    "km": 392684.98990741267
                                },
                                "from_sun": {
                                    "au": 0.9925525784492493,
                                    "km": 148483752.29380238
                                }
                            },
                            "extra_info": {
                                "elong": 0.07212489377450283,
                                "mag": -5.41,
                                "radi": 0.004552503737087482,
                                "sz": 1878.0426025390625
                            },
                            "id": "moon",
                            "name": "Moon",
                            "position": {
                                "alt_az": {
                                    "alt": {
                                        "deg": -19.491508330510921,
                                        "str": "-19deg 29' 29.4\""
                                    },
                                    "az": {
                                        "deg": 277.20604155917732,
                                        "str": "277deg 12' 21.7\""
                                    }
                                },
                                "constellation": {
                                    "abbr": "Psc",
                                    "id": "psc",
                                    "name": "Pisces"
                                },
                                "ra_dec": {
                                    "dec": {
                                        "deg": -7.4594596666413118,
                                        "str": "-07deg 27' 34.1\""
                                    },
                                    "ra": {
                                        "hr": 23.394472522134159,
                                        "str": "23h 23m 40.10s"
                                    }
                                }
                            }
                        }],
                        "entry": {
                            "id": "moon",
                            "name": "Moon"
                        }
                    },
                    {
                        "cells": [{
                            "date": "2018-03-17T00:00:00",
                            "distance": {
                                "from_earth": {
                                    "au": 1.2487275833937634,
                                    "km": 186806987.56006369
                                },
                                "from_sun": {
                                    "au": 1.550886869430542,
                                    "km": 232009373.363398
                                }
                            },
                            "extra_info": {
                                "elong": -1.5192560370605386,
                                "mag": 0.54,
                                "radi": 0.000018269207633588956,
                                "sz": 7.5365891456604
                            },
                            "id": "mars",
                            "name": "Mars",
                            "position": {
                                "alt_az": {
                                    "alt": {
                                        "deg": -70.38831945130552,
                                        "str": "-70deg 23' 18.0\""
                                    },
                                    "az": {
                                        "deg": 31.497818361485802,
                                        "str": "31deg 29' 52.1\""
                                    }
                                },
                                "constellation": {
                                    "abbr": "Sgr",
                                    "id": "sgr",
                                    "name": "Sagittarius"
                                },
                                "ra_dec": {
                                    "dec": {
                                        "deg": -23.440055517529711,
                                        "str": "-23deg 26' 24.2\""
                                    },
                                    "ra": {
                                        "hr": 17.952814310521187,
                                        "str": "17h 57m 10.13s"
                                    }
                                }
                            }
                        }],
                        "entry": {
                            "id": "mars",
                            "name": "Mars"
                        }
                    },
                    {
                        "cells": [{
                            "date": "2018-03-17T00:00:00",
                            "distance": {
                                "from_earth": {
                                    "au": 4.8104192088554392,
                                    "km": 719628470.81915224
                                },
                                "from_sun": {
                                    "au": 5.419566631317139,
                                    "km": 810755628.1618158
                                }
                            },
                            "extra_info": {
                                "elong": -2.1632499339547038,
                                "mag": -2.13,
                                "radi": 0.00009934240936219978,
                                "sz": 40.981685638427734
                            },
                            "id": "jupiter",
                            "name": "Jupiter",
                            "position": {
                                "alt_az": {
                                    "alt": {
                                        "deg": -41.621427701538231,
                                        "str": "-41deg 37' 17.1\""
                                    },
                                    "az": {
                                        "deg": 76.225252066392258,
                                        "str": "76deg 13' 30.9\""
                                    }
                                },
                                "constellation": {
                                    "abbr": "Lib",
                                    "id": "lib",
                                    "name": "Libra"
                                },
                                "ra_dec": {
                                    "dec": {
                                        "deg": -17.306573549087105,
                                        "str": "-17deg 18' 23.7\""
                                    },
                                    "ra": {
                                        "hr": 15.386732140671445,
                                        "str": "15h 23m 12.24s"
                                    }
                                }
                            }
                        }],
                        "entry": {
                            "id": "jupiter",
                            "name": "Jupiter"
                        }
                    },
                    {
                        "cells": [{
                            "date": "2018-03-17T00:00:00",
                            "distance": {
                                "from_earth": {
                                    "au": 10.224726985945948,
                                    "km": 1529597385.5863426
                                },
                                "from_sun": {
                                    "au": 10.065570831298828,
                                    "km": 1505787963.7423334
                                }
                            },
                            "extra_info": {
                                "elong": -1.3737386514116825,
                                "mag": 0.54,
                                "radi": 0.000039305386469019314,
                                "sz": 16.214635848999023
                            },
                            "id": "saturn",
                            "name": "Saturn",
                            "position": {
                                "alt_az": {
                                    "alt": {
                                        "deg": -71.518185443051934,
                                        "str": "-71deg 31' 05.5\""
                                    },
                                    "az": {
                                        "deg": 4.659464769305619,
                                        "str": "04deg 39' 34.1\""
                                    }
                                },
                                "constellation": {
                                    "abbr": "Sgr",
                                    "id": "sgr",
                                    "name": "Sagittarius"
                                },
                                "ra_dec": {
                                    "dec": {
                                        "deg": -22.314881175516526,
                                        "str": "-22deg 18' 53.6\""
                                    },
                                    "ra": {
                                        "hr": 18.581283827132037,
                                        "str": "18h 34m 52.62s"
                                    }
                                }
                            }
                        }],
                        "entry": {
                            "id": "saturn",
                            "name": "Saturn"
                        }
                    },
                    {
                        "cells": [{
                            "date": "2018-03-17T00:00:00",
                            "distance": {
                                "from_earth": {
                                    "au": 20.746834577918271,
                                    "km": 3103682276.6217065
                                },
                                "from_sun": {
                                    "au": 19.894514083862305,
                                    "km": 2976176945.556962
                                }
                            },
                            "extra_info": {
                                "elong": 0.5178282381483151,
                                "mag": 5.89,
                                "radi": 0.000008232563183146108,
                                "sz": 3.3961760997772217
                            },
                            "id": "uranus",
                            "name": "Uranus",
                            "position": {
                                "alt_az": {
                                    "alt": {
                                        "deg": 17.231809659975543,
                                        "str": "17deg 13' 54.5\""
                                    },
                                    "az": {
                                        "deg": 268.16046966707052,
                                        "str": "268deg 09' 37.7\""
                                    }
                                },
                                "constellation": {
                                    "abbr": "Psc",
                                    "id": "psc",
                                    "name": "Pisces"
                                },
                                "ra_dec": {
                                    "dec": {
                                        "deg": 9.7014250514465097,
                                        "str": "+09deg 42' 05.1\""
                                    },
                                    "ra": {
                                        "hr": 1.6475005773427429,
                                        "str": "01h 38m 51.00s"
                                    }
                                }
                            }
                        }],
                        "entry": {
                            "id": "uranus",
                            "name": "Uranus"
                        }
                    },
                    {
                        "cells": [{
                            "date": "2018-03-17T00:00:00",
                            "distance": {
                                "from_earth": {
                                    "au": 30.916065443108618,
                                    "km": 4624977560.7109013
                                },
                                "from_sun": {
                                    "au": 29.943389892578125,
                                    "km": 4479467369.469589
                                }
                            },
                            "extra_info": {
                                "elong": -0.22090162241296607,
                                "mag": 7.96,
                                "radi": 0.000005355241289235165,
                                "sz": 2.209195613861084
                            },
                            "id": "neptune",
                            "name": "Neptune",
                            "position": {
                                "alt_az": {
                                    "alt": {
                                        "deg": -23.101861826171586,
                                        "str": "-23deg 06' 06.7\""
                                    },
                                    "az": {
                                        "deg": 281.1292914644128,
                                        "str": "281deg 07' 45.4\""
                                    }
                                },
                                "constellation": {
                                    "abbr": "Aqr",
                                    "id": "aqr",
                                    "name": "Aquarius"
                                },
                                "ra_dec": {
                                    "dec": {
                                        "deg": -7.0748386796011458,
                                        "str": "-07deg 04' 29.4\""
                                    },
                                    "ra": {
                                        "hr": 23.050197349650883,
                                        "str": "23h 03m 00.71s"
                                    }
                                }
                            }
                        }],
                        "entry": {
                            "id": "neptune",
                            "name": "Neptune"
                        }
                    },
                    {
                        "cells": [{
                            "date": "2018-03-17T00:00:00",
                            "distance": {
                                "from_earth": {
                                    "au": 33.926086717170612,
                                    "km": 5075270334.0722761
                                },
                                "from_sun": {
                                    "au": 33.52510452270508,
                                    "km": 5015284251.5916195
                                }
                            },
                            "extra_info": {
                                "elong": -1.153480315560025,
                                "mag": 14.33,
                                "radi": 5.860747466160864e-7,
                                "sz": 0.24177318811416626
                            },
                            "id": "pluto",
                            "name": "Pluto",
                            "position": {
                                "alt_az": {
                                    "alt": {
                                        "deg": -68.20772467704677,
                                        "str": "-68deg 12' 27.8\""
                                    },
                                    "az": {
                                        "deg": 328.53957302884015,
                                        "str": "328deg 32' 22.5\""
                                    }
                                },
                                "constellation": {
                                    "abbr": "Sgr",
                                    "id": "sgr",
                                    "name": "Sagittarius"
                                },
                                "ra_dec": {
                                    "dec": {
                                        "deg": -21.502904962883768,
                                        "str": "-21deg 30' 10.5\""
                                    },
                                    "ra": {
                                        "hr": 19.488994311014707,
                                        "str": "19h 29m 20.38s"
                                    }
                                }
                            }
                        }],
                        "entry": {
                            "id": "pluto",
                            "name": "Pluto"
                        }
                    }
                ]
            }
        }
    };



})
