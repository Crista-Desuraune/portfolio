export type CarouselType = {
    imageSrc: string,
    imageAlt: string
}

export type SocialItemType = {
    label: string,
    url: string,
    icon: string
}

export type LinkPrimaryType = {
    url: string;
    label: string;
}

export type CardsType = {
    label: string;
    description: string;
    url: string;
    image: string;
}

export type DessinsType = {
    img: string;
    alt: string;
}

export type SkillsType = {
    label: string;
    img: string;
}
export type PostType = {
    layout: string;
    title: string;
    slug: string;
    description: string;
    date: string;
    status: [string, string];
}
