export const supplies = [
    {
        id: 1,
        name: 'Notebook Asus 14 Ryzen 5 5500U',
        price: 20,
        stock: 10,
        url: '/assets/images/AsusZenbook-14.jpeg',
        alt: 'Notebook Asus 14 Ryzen 5 5500U',
        category: 'Notebook',
        subCategory: 'AMD',
        info: {
            Mark: 'Asus Zenbook',
            Model: 'Q408UG',
            Micro: 'Ryzen 5 - 5500U',
            Ram: '8GB',
            TypeRam: 'DDR4',
            Storage: '512GB',
            TypeStorage: 'SSD',
            Video: 'NVIDIA GeForce MX450',
            Display: '14"',
            Resolution: '1920px x 1080px',
        },
    },
    {
        id: 2,
        name: 'Dell Inspiron 15.6 I5 11va',
        price: 20,
        stock: 1,
        url: '/assets/images/AsusZenbook-14.jpeg',
        alt: 'Dell Inspiron 15.6 I5 11va',
        category: 'Notebook',
        subCategory: 'Intel',
        info: {
            Mark: 'Dell Inspirion',
            Model: '',
            Micro: '11ª generación Intel Core i5-1135G7 Quad-Core de 2,40 GHz (caché inteligente Intel de 8 MB, hasta 4,20 GHz)',
            Ram: '12GB',
            TypeRam: 'DDR4',
            Storage: '512GB',
            TypeStorage: 'SSD',
            Video: 'Intel Iris Xe Graphics',
            Display: '15.6"',
            Resolution: '1920px x 1080px',
        },
    },
];

export const categorys = [
    { id: 1, name: 'Notebook AMD', url: '/assets/images/AMD.png', path: '/item'},
    { id: 2, name: 'Notebook Intel', url: '/assets/images/Intel.png', path: '/item'},
    // { id: 3, name: 'Computadoras Escritorio', url: '/assets/images/Pc.jpeg', path: '/item/Notebook'},
    // { id: 3, name: 'Accesorios', url: '/assets/images/Accesorios.jpeg', path: '/item/Accesorios'}
];

export const getCategorys = new Promise(( res, rej ) => {
    res( categorys );
});

export const getSupplis = new Promise(( res, rej ) => {
    res( supplies );
});
