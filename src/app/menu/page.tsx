import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Menu | BelloVito",
    description: "Odkryj nasze autentyczne włoskie menu z domowym makaronem, pizzą z pieca opalanego drewnem i wykwintnymi deserami.",
};

const menuCategories = [
    {
        id: "antipasti",
        label: "Przystawki",
        items: [
            { name: "Bruschetta al Pomodoro", description: "Opiekany chleb ze świeżymi pomidorami, bazylią i czosnkiem", price: "24 zł" },
            { name: "Carpaccio di Manzo", description: "Cienko pokrojona surowa wołowina z rukolą i parmezanem", price: "38 zł" },
            { name: "Calamari Fritti", description: "Chrupiące smażone kalmary z sosem marinara", price: "34 zł" },
            { name: "Prosciutto e Melone", description: "Dojrzały melon z szynką parmeńską i balsamico", price: "32 zł" },
            { name: "Caprese", description: "Świeża mozzarella, pomidory i bazylia z oliwą extra virgin", price: "28 zł" },
            { name: "Antipasto Misto", description: "Talerz włoskich wędlin, serów i marynowanych warzyw", price: "42 zł" },
            { name: "Arancini Siciliani", description: "Smażone kulki ryżowe z mozzarellą i ragù", price: "26 zł" },
            { name: "Vitello Tonnato", description: "Cienkie plastry cielęciny z sosem tuńczykowym", price: "36 zł" },
        ]
    },
    {
        id: "primi",
        label: "Pierwsze Dania",
        items: [
            { name: "Spaghetti Carbonara", description: "Tradycyjny rzymski makaron z guanciale, jajkiem i pecorino", price: "45 zł" },
            { name: "Risotto ai Funghi", description: "Kremowe risotto arborio z grzybami porcini i olejem truflowym", price: "48 zł" },
            { name: "Lasagna alla Bolognese", description: "Warstwy makaronu, sosu mięsnego i beszamelu", price: "42 zł" },
            { name: "Penne all'Arrabbiata", description: "Makaron penne w pikantnym sosie pomidorowym z czosnkiem", price: "38 zł" },
            { name: "Tagliatelle al Ragù", description: "Domowy makaron z tradycyjnym bolońskim sosem mięsnym", price: "44 zł" },
            { name: "Gnocchi al Gorgonzola", description: "Ziemniaczane kluski w kremowym sosie z sera gorgonzola", price: "42 zł" },
            { name: "Risotto ai Frutti di Mare", description: "Risotto z owocami morza, białym winem i pietruszką", price: "52 zł" },
            { name: "Ravioli di Ricotta e Spinaci", description: "Ravioli nadziewane ricottą i szpinakiem w sosie szałwiowym", price: "46 zł" },
            { name: "Spaghetti alle Vongole", description: "Spaghetti z małżami, czosnkiem, białym winem i natką pietruszki", price: "48 zł" },
        ]
    },
    {
        id: "secondi",
        label: "Drugie Dania",
        items: [
            { name: "Osso Buco", description: "Duszona goleń cielęca z warzywami i białym winem", price: "68 zł" },
            { name: "Branzino al Forno", description: "Pieczony śródziemnomorski okoń z cytryną i ziołami", price: "64 zł" },
            { name: "Pollo alla Cacciatora", description: "Gulasz z kurczaka w stylu myśliwskim z pomidorami i papryką", price: "56 zł" },
            { name: "Bistecca alla Fiorentina", description: "Grillowany stek wołowy z rozmarynem i oliwą (400g)", price: "85 zł" },
            { name: "Saltimbocca alla Romana", description: "Cielęcina z szynką parmeńską i szałwią w sosie winnym", price: "62 zł" },
            { name: "Salmone alla Griglia", description: "Grillowany łosoś z warzywami śródziemnomorskimi", price: "58 zł" },
            { name: "Scaloppine al Limone", description: "Cienkie plastry cielęciny w sosie cytrynowym", price: "54 zł" },
            { name: "Melanzane alla Parmigiana", description: "Zapiekany bakłażan z sosem pomidorowym i parmezanem", price: "46 zł" },
        ]
    },
    {
        id: "dolci",
        label: "Desery",
        items: [
            { name: "Tiramisu", description: "Klasyczny włoski deser o smaku kawy", price: "24 zł" },
            { name: "Panna Cotta", description: "Kremowy budyń waniliowy z coulis z jagód", price: "20 zł" },
            { name: "Cannoli Siciliani", description: "Chrupiące rurki z ciasta nadziewane słodką ricottą", price: "22 zł" },
            { name: "Affogato", description: "Lody waniliowe zalane gorącym espresso", price: "18 zł" },
            { name: "Torta della Nonna", description: "Tradycyjne ciasto z kremem i piniolami", price: "22 zł" },
            { name: "Gelato Artigianale", description: "Domowe lody włoskie - 3 gałki do wyboru", price: "20 zł" },
            { name: "Zabaione", description: "Klasyczny deser z żółtek, marsali i bitej śmietany", price: "24 zł" },
            { name: "Profiteroles al Cioccolato", description: "Ptysie z lodami waniliowymi i sosem czekoladowym", price: "26 zł" },
        ]
    }
];

export default function MenuPage() {
    return (
        <div className="pt-20">
            <SectionWrapper>
                <SectionHeader title="Nasze Menu" subtitle="Autentyczne Włoskie Smaki" />

                <Tabs defaultValue="antipasti" className="w-full max-w-6xl mx-auto">
                    {/* Improved TabsList with better mobile styling */}
                    <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12 h-auto gap-2 bg-transparent p-0">
                        {menuCategories.map(cat => (
                            <TabsTrigger
                                key={cat.id}
                                value={cat.id}
                                className="data-[state=active]:bg-primary data-[state=active]:text-white bg-white border border-primary/20 text-foreground hover:bg-primary/10 rounded-lg py-3 px-4 text-sm md:text-base font-semibold transition-all shadow-sm data-[state=active]:shadow-md"
                            >
                                {cat.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {menuCategories.map(cat => (
                        <TabsContent
                            key={cat.id}
                            value={cat.id}
                            className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500 mt-0"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                                {cat.items.map((item, index) => (
                                    <Card
                                        key={index}
                                        className="border border-border/40 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 bg-white overflow-hidden group"
                                    >
                                        <CardHeader className="pb-3">
                                            <div className="flex justify-between items-start gap-3">
                                                <CardTitle className="text-lg md:text-xl font-dancing text-primary group-hover:text-secondary transition-colors leading-tight">
                                                    {item.name}
                                                </CardTitle>
                                                <span className="font-bold text-secondary whitespace-nowrap text-base md:text-lg flex-shrink-0">
                                                    {item.price}
                                                </span>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="pt-0">
                                            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                                                {item.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </SectionWrapper>
        </div>
    );
}
