import { CategoryItemsPage } from '../components/CategoryItemsPage';
import { ItemsPage } from '../components/ItemsPage';
import { KatalogPage } from '../components/KatalogPage';
import { MoreCategory } from '../components/MoreCategory';


export const pages = [
    {
        title:'Главные категории',
        name:'katalog',
        component:KatalogPage
    },
    {
        title:null,
        name:'category',
        component:CategoryItemsPage
    },
    {
        title:null,
        name:'podCategory',
        component:MoreCategory
    },
    {
        title:null,
        name:'items',
        component:ItemsPage
    },
]