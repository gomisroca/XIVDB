export interface XIVAPIResponse<T> {
    Pagination: Pagination;
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

export interface Character {
    ID: number;
    Lang: string;
    Avatar: string;
    Name: string;
    Server: string;
}

export interface CharacterInfo {
    Achievements: Achievements;
    AchievementsPublic: boolean,
    Character: CharacterDetails;
    FreeCompany: FCDetails;
    Friends: Array<any>;
    FriendsPublic: boolean;
    Minions: Array<Minion>;
    Mounts: Array<Mount>;
}

interface Minion {
    Icon: string;
    Name: string;
}

interface Mount {
    Icon: string;
    Name: string;
}

interface Achievement{
    Date: number;
    ID: number;
}

interface Achievements {
    List: Array<Achievement>;
    Points: number;
}

interface Class {
    Abbreviation: string;
    Icon: string;
    Name: string;
}

interface Job {
    Abbreviation: string;
    Icon: string;
    Name: string;
}

interface UnlockedState {
    ID: number;
    Name: string;
}

interface ActiveClassJob{
    Class: Class;
    ExpLevel: number;
    ExpLevelMax: number;
    ExpLevelTogo: number;
    IsSpecialised: boolean;
    Job: Job;
    Level: number;
    Name: string;
    UnlockedState: UnlockedState;
}

interface ClassJob{
    Class: Class;
    ExpLevel: number;
    ExpLevelMax: number;
    ExpLevelTogo: number;
    IsSpecialised: boolean;
    Job: Job;
    Level: number;
    Name: string;
    UnlockedState: UnlockedState;
}

interface ClassJobsBozjan{
    Level: number;
    Name: string;
}

interface ClassJobsElemental{
    ExpLevel: number;
    ExpLevelMax: number;
    ExpLevelTogo: number;
    Level: number;
    Name: string;
}

interface GCCompany{
    Name: string;
}

interface GCRank{
    Icon: string;
    Name: string;
}

interface GrandCompany{
    Company: GCCompany;
    Rank: GCRank;
}

interface GuardianDeity{
    Icon: string;
    Name: string;
}

interface Race{
    Name: string;
}

interface Tribe{
    Name: string;
}

interface Title{
    Name: string;
}

interface Town{
    Icon: string;
    Name: string;
}

interface Dye{
    Icon: string;
    Name: string;
}

interface GearItemDetail{
    ID: string;
    Icon: string;
    Name: string;
    LevelEquip: number;
    LevelItem: number;
    Rarity: number;
}

interface Materia{
    Icon: string;
    Name: string;
}

interface Mirage{
    Icon: string;
    Name: string;
}

interface GearItem{
    creator?: string;
    Dye: Dye;
    Item: GearItemDetail;
    Materia: Array<Materia>;
    Mirage: Mirage;
}

interface Gear{
    Body: GearItem;
    Bracelets: GearItem;
    Earrings: GearItem;
    Feet: GearItem;
    Hands: GearItem;
    Head: GearItem;
    Legs: GearItem;
    MainHand: GearItem;
    OffHand?: GearItem;
    Necklace: GearItem;
    Ring1: GearItem;
    Ring2: GearItem;
    SoulCrystal: GearItem;
}

interface GearSet {
    Class: Class;
    Job: Job;
    Gear: Gear;
    Level: number;

}

interface CharacterDetails {
    DC: string;
    Server: string;
    GearSet: GearSet;
    ID: number;
    Name: string;
    Nameday: string;
    Avatar: string;
    Portrait: string;
    Gender: number;
    Race: Race;
    Tribe: Tribe;
    Title: Title;
    Town: Town;
    GuardianDeity: GuardianDeity;
    GrandCompany: GrandCompany;
    Bio: string;
    ActiveClassJob: ActiveClassJob;
    ClassJobs: Array<ClassJob>;
    ClassJobsBozjan: ClassJobsBozjan;
    ClassJobsElemental: ClassJobsElemental;
    FreeCompanyId: string;
    FreeCompanyName: string;
}

export interface FC {
    ID: number;
    Name: string;
    Server: string;
}

export interface FCInfo {
    FreeCompany: FCDetails;
    FreeCompanyMembers: Array<FCMember>;
}

interface FCDetails {
    Active: string;
    ActiveMemberCount: number;
    Estate: Estate;
    Focus: Array<Focus>;
    Server: string;
    Name: string;
    Tag: string;
    Slogan: string;
    ID: number;
}

interface FCMember{
    Avatar: string;
    ID: number;
    Name: string;
    Rank: string;
    RankIcon: string;
    Server: string;
}

interface Estate {
    Greeting: string;
    Name: string;
    Plot: string;
}

interface Focus {
    Icon: string;
    Name: string;
    Status: false;
}

interface AchievementKind {
    ID: number;
    Name: string;
}

interface ClassJobCategory {
    Name: string;
}

interface ClassJobRepair {
    Abbreviation: string;
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

interface GamePatch{
    Name: string;
    version: string;
}

interface Sources{
    type?: string;
    text?: string;
    related_type?: string;
}
export interface ItemDetails {
    Description?: string;
    Icon?: string;
    IconHD?: string;
    Name?: string;
    description?: string;
    enhanced_description?: string;
    name?: string;
    patch?: string;
    image?: string;
    seats?: number;
    owned?: string;
    bgm?: string;
    sources?: Array<Sources>;
    EquipSlotCategoryTargetID?: number;
    AchievementCategory?: AchievementKind;
    ClassJobCategory?: ClassJobCategory;
    ClassJobRepair?: ClassJobRepair;
    LevelEquip?: number;
    LevelItem?: number;
    MateriaSlotCount?: number;
    ItemUICategory?: ItemUICategory;
    Stats?: Stats;
    GamePatch?: GamePatch;
    IsAdvancedMeldingPermitted?: number;
    IsDyeable?: number;
    IsGlamourous?: number;
}