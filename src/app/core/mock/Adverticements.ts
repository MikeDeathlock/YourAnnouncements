import { Injectable } from "@angular/core";
import { Advert } from "../interfaces/advert";

@Injectable({
    providedIn: 'root'
})

export class Adverticements {
    private adverticements: Advert[] = [
        {
            id: 1,
            title: "I sell a Toyota Prius!",
            img: "https://a.d-cd.net/cfdc0cas-960.jpg",
            description: "I am going to sell Toyota Prius Four 2012 at a low price! 34000 miles. The car is in a good condition. My price is $20,998.",
            category: "Selling",
            date: new Date()
        },
        {
            id: 2,
            title: "I want to buy shovel for a low price.",
            img: "https://bravo-sp.com.ua/upload/iblock/f2a/f2a63d786dae359a6232bacbc51586b1.jpg",
            description: "I want to buy shovel for a low price. I need a good shovel for gardening and harvesting potatoes. I need a reliable shovel at a low price.",
            category: "Purchase",
            date: new Date()
        },
        {
            id: 3,
            title: "I provide the services of an electrician!",
            img: "https://nash-mayster.lviv.ua/images/electric-lviv.jpg",
            description: "I provide services of the electrician of all types of works at the low price. I am waiting for your appeals.",
            category: "Services",
            date: new Date()
        },
        {
            id: 4,
            title: "I am looking for an electrician!",
            img: "https://st.depositphotos.com/1000291/3041/i/600/depositphotos_30414567-stock-photo-adult-electrician-engineer-worker.jpg",
            description: "I am looking for a good electrician. I need high-quality and professional work with the power supply on the roof of my house. I am waiting for your suggestions.",
            category: "Professionals",
            date: new Date()
        },
        {
            id: 5,
            title: "I will sell scrap metal.",
            img: "https://justlex.com.ua/images/litsenziya-na-operatsii-s-lomom-chernykh-i-tsvetnykh-metallov.jpg",
            description: "I will sell scrap metal. At a great price. I have many kinds of black and colorful metals. So call me.",
            category: "Selling",
            date: new Date()
        },
        {
            id: 6,
            title: "I will sell an old Russian car!",
            img: "https://wroom.ru/i/cars2/moskvich_412_1.jpg",
            description: "I am going to sell an old Russian car. It is Moskvitch-412 and it is very vintage car even in Russia. It is in very good condition and in all Britain you can find only a few copies of this legendary car. So I look for your offers.",
            category: "Selling",
            date: new Date()
        },
        {
            id: 7,
            title: "I want to buy a grey Britain cat.",
            img: "https://www.zooplus.co.uk/magazine/wp-content/uploads/2019/08/british-shorthair-kitten-1024x682.jpg",
            description: "I am looking for a grey Britain kitten. He will live in a great and kind family.  We all like cats. So I wait for your offers.",
            category: "Purchase",
            date: new Date()
        },
        {
            id: 8,
            title: "I do a quality massage.",
            img: "https://fainomed.com.ua/wp-content/uploads/2019/04/dsc05555-1024x682.jpg",
            description: "A qualified masseur will make a quality massage of any part of your body for a small price. I am waiting for your calls (+14905585741).",
            category: "Services",
            date: new Date()
        },
        {
            id: 9,
            title: "I am looking for a dude.",
            img: "https://ychef.files.bbci.co.uk/976x549/p078mnwj.jpg",
            description: "I need some dude for a walk, bars, cinemas, sport competitions and comunication because I feel that I am alone. If you are alone just call me.",
            category: "Professionals",
            date: new Date()
        },
        {
            id: 10,
            title: "I am looking for a tent.",
            img: "https://www.outsideonline.com/wp-content/uploads/2019/12/12/carcinogens-tent-camping_h.jpg",
            description: "I am looking for a good tent for some hiking. I don't have enough money for it. So i am looking a tent here. I need a tent only for one person. I am waiting for your offers. Thank You.",
            category: "Purchase",
            date: new Date()
        }
    ];

    getAdverticements() {
        return this.adverticements.slice();
    }
}