export interface XIVAPIResponse<T> {
    Pagination: Array<Pagination>;
    Results: Array<T>;
}

export interface Pagination {
    Page: number;
    PageNext: number;
    PagePrev: number;
    PageTotal: number;
    ResultsTotal: number;
}

export interface SearchCategory{
    name: string;
    searchString: string;
}
export interface Item {
    ID: number;
    Icon: string;
    Name: string;
    Url: string;
    UrlType: string;
}

interface AchievementKind {
    ID: number;
    Name: string;
}

interface ClassJobCategory {
    Name: string;
}

interface ItemUICategory {
    Name: string;
}

interface Stats {
    Determination?: { 
        NQ: number; 
        HQ: number;
    }
    Strength?: { 
        NQ: number; 
        HQ: number;
    }
    Dexterity?: { 
        NQ: number; 
        HQ: number;
    }
    Tenacity?: { 
        NQ: number; 
        HQ: number;
    }
    Vitality?: { 
        NQ: number;
        HQ: number;
    }
    Mind?: { 
        NQ: number;
        HQ: number;
    }
    Intelligence?: { 
        NQ: number;
        HQ: number;
    }
    CriticalHit?: { 
        NQ: number;
        HQ: number;
    }
    DirectHitRate?: { 
        NQ: number;
        HQ: number;
    }
}

export interface ItemDetails {
    Description: string;
    Icon: string;
    IconHD: string;
    Name: string;
    EquipSlotCategoryTargetID: number;
    AchievementCategory?: AchievementKind;
    ClassJobCategory?: ClassJobCategory;
    LevelEquip?: number;
    LevelItem?: number;
    MateriaSlotCount?: number;
    ItemUICategory?: ItemUICategory;
    Stats?: Stats;
}