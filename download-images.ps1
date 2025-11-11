# Download images from URLs to local folders
$images = @(
    @{url="https://planmproject.com/images/Picture1-min.jpg"; file="public/images/plan-m-hero-main.jpg"},
    @{url="https://revaahomes.com/wp-content/uploads/2024/11/Tescon-Plan-I-Business-Park-Nerul-Banner-1-1.jpg"; file="public/images/plan-i-hero-main.jpg"},
    @{url="https://plani-tescon.com/media/images/amenities/podium-level-new.webp"; file="public/images/plan-i-podium.webp"},
    @{url="https://plani-tescon.com/media/images/amenities/room.webp"; file="public/images/amenity-room.webp"},
    @{url="https://plani-tescon.com/media/images/amenities/pool.webp"; file="public/images/amenity-pool.webp"},
    @{url="https://plani-tescon.com/media/images/amenities/mini-golf.jpg"; file="public/images/amenity-mini-golf.jpg"},
    @{url="https://plani-tescon.com/media/images/amenities/gazebo.jpg"; file="public/images/amenity-gazebo.jpg"},
    @{url="https://plani-tescon.com/media/images/highlights/park.svg"; file="public/images/icons/park.svg"},
    @{url="https://plani-tescon.com/media/images/highlights/office-space.svg"; file="public/images/icons/office-space.svg"},
    @{url="https://plani-tescon.com/media/images/highlights/parking.svg"; file="public/images/icons/parking.svg"},
    @{url="https://plani-tescon.com/media/images/highlights/lifts.svg"; file="public/images/icons/lifts.svg"},
    @{url="https://plani-tescon.com/media/images/highlights/desk.svg"; file="public/images/icons/desk.svg"},
    @{url="https://plani-tescon.com/media/images/highlights/charging-stations.svg"; file="public/images/icons/charging-stations.svg"},
    @{url="https://plani-tescon.com/media/images/location/station.svg"; file="public/images/icons/station.svg"},
    @{url="https://plani-tescon.com/media/images/location/highway.svg"; file="public/images/icons/highway.svg"},
    @{url="https://plani-tescon.com/media/images/location/stadium.svg"; file="public/images/icons/stadium.svg"},
    @{url="https://plani-tescon.com/media/images/location/map.webp"; file="public/images/location-map.webp"},
    @{url="https://planmbusinesspark.com/assets/images/resources/about-1-1.jpg"; file="public/images/plan-m-about.jpg"},
    @{url="https://planmproject.com/images/floor-plan/Picture2.jpeg"; file="public/images/floor-plan-1.jpeg"},
    @{url="https://planmproject.com/images/floor-plan/Picture4.jpeg"; file="public/images/floor-plan-2.jpeg"},
    @{url="https://planmbusinesspark.com/assets/images/resources/apartment-1-1.jpg"; file="public/images/apartment-1.jpg"},
    @{url="https://planmbusinesspark.com/assets/images/resources/apartment-1-2.jpg"; file="public/images/apartment-2.jpg"},
    @{url="https://planmbusinesspark.com/assets/images/resources/apartment-1-3.jpg"; file="public/images/apartment-3.jpg"},
    @{url="https://planmbusinesspark.com/assets/images/resources/apartment-1-4.jpg"; file="public/images/apartment-4.jpg"},
    @{url="https://planmproject.com/images/location-map-min.jpg"; file="public/images/plan-m-location-map.jpg"},
    @{url="https://lovable.dev/opengraph-image-p98pqg.png"; file="public/images/opengraph-image.png"}
)

foreach ($img in $images) {
    try {
        Write-Host "Downloading $($img.url)..."
        Invoke-WebRequest -Uri $img.url -OutFile $img.file -ErrorAction Stop
        Write-Host "Saved to $($img.file)" -ForegroundColor Green
    }
    catch {
        Write-Host "Failed to download: $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host "Download complete!" -ForegroundColor Cyan
