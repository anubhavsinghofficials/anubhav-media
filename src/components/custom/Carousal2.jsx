import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function CarouselSize() {
    const items = [
        { title: 'Mountain Adventure', subtitle: 'Explore the peaks', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop' },
        { title: 'Ocean Waves', subtitle: 'Peaceful coastline', image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=600&fit=crop' },
        { title: 'City Lights', subtitle: 'Urban nightlife', image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=400&h=600&fit=crop' },
        { title: 'Forest Path', subtitle: 'Nature walks', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop' },
        { title: 'Desert Sunset', subtitle: 'Golden hour magic', image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400&h=600&fit=crop' },
        { title: 'Snowy Mountains', subtitle: 'Winter wonderland', image: 'https://images.unsplash.com/photo-1551524164-6cf2ac60c57a?w=400&h=600&fit=crop' },
        { title: 'Tropical Beach', subtitle: 'Paradise found', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=600&fit=crop' },
        { title: 'Autumn Forest', subtitle: 'Fall colors', image: 'https://images.unsplash.com/photo-1441260038675-7329ab4cc264?w=400&h=600&fit=crop' }
    ];
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full max-w-sm bg-blue-200"
        >
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-3xl font-semibold">{index + 1}</span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
